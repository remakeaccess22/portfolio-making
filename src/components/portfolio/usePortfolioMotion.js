import { useCallback, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

const motion = {
  entrance: "power3.out",
  navigation: gsap.parseEase("power2.inOut"),
  headline: 0.55,
  supporting: 0.35,
  reveal: 0.55,
  stagger: 0.055,
};

const navigationKeys = new Set([
  "Tab", "Enter", " ", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
  "Home", "End", "PageUp", "PageDown",
]);

/**
 * Visible resting styles belong to CSS. Motion is reserved for the hero,
 * deliberately marked project imagery, and pointer-initiated section navigation.
 * Header: [data-site-header], with optional [data-header-bar] for its closed height.
 * Navigation: navigateTo("work", { updateHash: true, focus: true, onComplete }).
 * No pins, scroll locks, touch inertia, or global anchor interception.
 */
export function usePortfolioMotion(scopeRef) {
  const navigateRef = useRef(null);
  const navigateTo = useCallback((id, options) => navigateRef.current?.(id, options) ?? false, []);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const previousKeyboardMode = root.getAttribute("data-keyboard-navigation");
    const previousScrollBehavior = root.style.getPropertyValue("scroll-behavior");
    const previousScrollPriority = root.style.getPropertyPriority("scroll-behavior");
    const select = gsap.utils.selector(scope);
    const revealed = new WeakSet();
    const focusCleanups = new Set();
    let animationContext = null;
    let lenis = null;
    let keyboardMode = root.hasAttribute("data-keyboard-navigation");
    let entrancePlayed = false;
    let disposed = false;
    let navigationVersion = 0;
    let navigationActive = false;
    let hashFrame = null;

    // Native fallbacks must be immediate, even when the stylesheet uses smooth.
    root.style.setProperty("scroll-behavior", "auto");

    const cancelNavigation = () => {
      navigationVersion += 1;
      if (navigationActive && lenis) lenis.scrollTo(lenis.actualScroll, { immediate: true });
      navigationActive = false;
    };

    const tick = time => lenis?.raf(time * 1000);
    const destroyScroller = () => {
      cancelNavigation();
      gsap.ticker.remove(tick);
      lenis?.off("scroll", ScrollTrigger.update);
      lenis?.destroy();
      lenis = null;
    };
    const createScroller = () => {
      if (disposed || lenis || reducedMotion.matches || keyboardMode) return;
      lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        lerp: 0.12,
        syncTouch: false,
        anchors: false,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
    };

    const stopPresentation = () => {
      animationContext?.revert();
      animationContext = null;
    };
    const startPresentation = () => {
      stopPresentation();
      if (disposed || keyboardMode || reducedMotion.matches) return;

      animationContext = gsap.context(() => {
        if (!entrancePlayed) {
          entrancePlayed = true;
          const lines = select("[data-hero-line]").map(element =>
            element.querySelector(":scope > span") || element,
          );
          const hero = lines[0];
          const position = hero?.getBoundingClientRect();
          if (position && position.bottom > 0 && position.top < window.innerHeight) {
            const entrance = gsap.timeline({ defaults: { ease: motion.entrance } });
            entrance.from(lines, {
              y: 12,
              opacity: 0.7,
              duration: motion.headline,
              stagger: motion.stagger,
            }, 0);
            const supporting = select("[data-hero-meta]");
            if (supporting.length) entrance.from(supporting, {
              y: 9,
              opacity: 0,
              duration: motion.supporting,
              stagger: motion.stagger,
            }, 0.15);
          }
        }

        // Only imagery earns an entrance; body text and ordinary rows stay still.
        select("[data-reveal]").forEach(element => {
          if (revealed.has(element)) return;
          if (element.getBoundingClientRect().top <= window.innerHeight * 0.92) {
            revealed.add(element);
            return;
          }
          gsap.from(element, {
            y: 18,
            scale: 1.015,
            opacity: 0.65,
            duration: motion.reveal,
            ease: motion.entrance,
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              once: true,
              onEnter: () => revealed.add(element),
            },
          });
        });
      }, scope);
    };

    const focusDestination = target => {
      const heading = target.matches("h1, h2, h3") ? target : target.querySelector("h1, h2, h3") || target;
      const previousTabIndex = heading.getAttribute("tabindex");
      if (previousTabIndex === null) {
        heading.setAttribute("tabindex", "-1");
        const restore = () => {
          heading.removeEventListener("blur", restore);
          heading.removeAttribute("tabindex");
          focusCleanups.delete(restore);
        };
        focusCleanups.add(restore);
        heading.addEventListener("blur", restore, { once: true });
      }
      heading.focus({ preventScroll: true });
    };

    navigateRef.current = (id, { updateHash = true, focus = true, onComplete, immediate = false } = {}) => {
      const targetId = typeof id === "string" ? id.replace(/^#/, "") : "";
      const target = document.getElementById(targetId);
      if (!target || !scope.contains(target)) return false;
      cancelNavigation();
      const version = navigationVersion;
      const header = scope.querySelector("[data-site-header]");
      const headerBar = header?.querySelector("[data-header-bar], .header-inner") || header;
      const offset = (headerBar?.getBoundingClientRect().height || 0) + 20;
      const top = target.getBoundingClientRect().top + window.scrollY;
      const destination = Math.max(0, Math.min(top - offset, root.scrollHeight - window.innerHeight));
      const hash = `#${encodeURIComponent(targetId)}`;
      if (updateHash && window.location.hash !== hash) window.history.pushState(null, "", hash);
      const complete = () => {
        if (disposed || version !== navigationVersion) return;
        navigationActive = false;
        if (focus) focusDestination(target);
        onComplete?.();
      };
      if (lenis && !keyboardMode && !reducedMotion.matches && !immediate) {
        lenis.resize();
        navigationActive = true;
        lenis.scrollTo(destination, {
          duration: Math.min(0.9, Math.max(0.55, Math.abs(destination - window.scrollY) / 3500)),
          lerp: 0,
          easing: motion.navigation,
          lock: false,
          onComplete: complete,
        });
      } else if (lenis) {
        // History/hash restoration must also cancel any active wheel inertia.
        lenis.scrollTo(destination, { immediate: true, onComplete: complete });
      } else {
        window.scrollTo({ top: destination, behavior: "instant" });
        complete();
      }
      return true;
    };

    const onKeyDown = event => {
      if (!navigationKeys.has(event.key) || event.metaKey || event.ctrlKey || event.altKey) return;
      keyboardMode = true;
      root.dataset.keyboardNavigation = "true";
      destroyScroller();
      stopPresentation();
    };
    const onPointerDown = () => {
      cancelNavigation();
      if (!keyboardMode) return;
      keyboardMode = false;
      delete root.dataset.keyboardNavigation;
      createScroller();
      startPresentation();
    };
    const onPreferenceChange = () => {
      destroyScroller();
      stopPresentation();
      createScroller();
      startPresentation();
      ScrollTrigger.refresh();
    };
    const restoreHash = () => {
      if (hashFrame !== null) window.cancelAnimationFrame(hashFrame);
      hashFrame = window.requestAnimationFrame(() => {
        hashFrame = null;
        let id;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        if (id) navigateRef.current?.(id, { updateHash: false, focus: false, immediate: true });
      });
    };
    const refreshLayout = () => {
      if (disposed) return;
      lenis?.resize();
      ScrollTrigger.refresh();
    };

    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("wheel", cancelNavigation, { capture: true, passive: true });
    document.addEventListener("touchstart", cancelNavigation, { capture: true, passive: true });
    // Native history restoration stays immediate and never creates another entry.
    window.addEventListener("hashchange", restoreHash);
    window.addEventListener("popstate", restoreHash);
    scope.addEventListener("load", refreshLayout, true);
    reducedMotion.addEventListener("change", onPreferenceChange);
    createScroller();
    startPresentation();
    restoreHash();
    document.fonts?.ready.then(refreshLayout);

    return () => {
      disposed = true;
      navigateRef.current = null;
      if (hashFrame !== null) window.cancelAnimationFrame(hashFrame);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("wheel", cancelNavigation, true);
      document.removeEventListener("touchstart", cancelNavigation, true);
      window.removeEventListener("hashchange", restoreHash);
      window.removeEventListener("popstate", restoreHash);
      scope.removeEventListener("load", refreshLayout, true);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      destroyScroller();
      stopPresentation();
      focusCleanups.forEach(restore => restore());
      if (previousKeyboardMode === null) delete root.dataset.keyboardNavigation;
      else root.setAttribute("data-keyboard-navigation", previousKeyboardMode);
      if (previousScrollBehavior) root.style.setProperty("scroll-behavior", previousScrollBehavior, previousScrollPriority);
      else root.style.removeProperty("scroll-behavior");
    };
  }, [scopeRef]);

  return { navigateTo };
}
