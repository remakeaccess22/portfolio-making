import { useEffect, useState } from "react";

export function Cursor() {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches,
  );

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // ✅ Mouse events (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDesktop]);

  // ❗ Hide completely on mobile
  if (!isDesktop) return null;

  return (
    <div
      className="fixed top-0 left-0 z-9999 pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative -translate-x-0.5 -translate-y-0.5">
        <div className="flex items-center gap-2">
          {/* Cursor icon */}
          <img
            src="/cursor.svg"
            alt="Cursor"
            className={`w-5 h-5 transition-transform duration-75 ${
              isClicking ? "scale-75" : "scale-100"
            }`}
          />

          {/* Label */}
          <div className="rounded-md bg-white px-2 py-1 text-xs font-medium text-black">
            You
          </div>
        </div>
      </div>
    </div>
  );
}
