import { useEffect, useState } from "react";

export function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 2200;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(percent));

      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onFinish?.();
        }, 300);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
      <div className="select-none text-[72px] font-bold leading-none text-[#F1F1F5] font-[Satoshi] sm:text-[96px] md:text-[140px]">
        {progress}%
      </div>
    </div>
  );
}
