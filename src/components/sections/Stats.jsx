import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ end, suffix = "", label }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h3 className="text-[40px] font-bold leading-none text-black font-[Satoshi]">
        <CountUp end={end} suffix={suffix} />
      </h3>
      <p className="mt-4 text-[16px] font-regular uppercase text-black [font-family:'Plus Jakarta Sans']">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="mt-16 mb-16 w-full bg-[#8B5CF6] py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <StatCard end={2} suffix="+" label="Years of Experience" />
          <StatCard end={6} label="Projects Created" />
          <StatCard end={3} label="Industries Explored" />
        </div>
      </div>
    </section>
  );
}
