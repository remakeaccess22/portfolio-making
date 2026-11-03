import { useEffect, useRef } from "react";
import "./Loading.css";

function ImageFrame({ width, height, src, alt, ...props }) {
  const frame = useRef(null);
  const image = useRef(null);
  useEffect(() => {
    const element = image.current;
    const container = frame.current;
    let disposed = false;
    const fail = () => { if (!disposed) container.dataset.loadState = "error"; };
    const ready = async () => {
      if (!element.naturalWidth) return fail();
      // Keep the placeholder until the browser can paint the decoded image.
      try { await element.decode(); } catch { /* A loaded image can still be displayed if decode is unavailable. */ }
      if (!disposed) container.dataset.loadState = element.naturalWidth ? "ready" : "error";
    };
    element.addEventListener("load", ready);
    element.addEventListener("error", fail);
    if (element.complete) ready();
    else container.dataset.loadState = "loading";
    return () => {
      disposed = true;
      element.removeEventListener("load", ready);
      element.removeEventListener("error", fail);
    };
  }, [src]);
  return <span ref={frame} className="loading-image" data-load-state="pending" style={{ aspectRatio: `${width} / ${height}` }}>
    <img ref={image} src={src} alt={alt} width={width} height={height} {...props} />
    <span className="loading-image-error" aria-hidden="true">Image unavailable</span>
  </span>;
}

export function LoadingImage(props) {
  // A changed source starts a fresh lifecycle; an old decode cannot reveal the next image early.
  return <ImageFrame key={props.src} {...props} />;
}
