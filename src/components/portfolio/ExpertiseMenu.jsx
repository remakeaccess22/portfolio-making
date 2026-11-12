import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./ExpertiseMenu.css";

export function ExpertiseMenu({ area, onNavigate }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const id = useId();
  useEffect(() => {
    if (!open) return undefined;
    const dismiss = event => { if (!root.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);
  function onKeyDown(event) {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      setOpen(false);
      trigger.current?.focus();
    }
    if (event.key === "ArrowDown" && event.target === trigger.current) {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => root.current?.querySelector("a")?.focus());
    }
  }
  return <div className="expertise-menu" ref={root} onKeyDown={onKeyDown} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button className={`expertise-menu-trigger${area ? " is-current" : ""}`} ref={trigger} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>Expertise <ChevronDown size={13} aria-hidden="true" /></button>
    {open && <div className="expertise-menu-links" id={id}>{["design", "business"].map(item => <a key={item} href={`/expertise/${item}/`} aria-current={area === item ? "page" : undefined} onClick={() => { setOpen(false); onNavigate?.(); }}>{item === "design" ? "Design" : "Business"}</a>)}</div>}
  </div>;
}
