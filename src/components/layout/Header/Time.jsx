import { useEffect, useState } from "react";

export function Time() {
  const getTime = () =>
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Manila",
    });

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="justify-self-center">
      <p className="text-[12px] font-medium text-[#818181] font-[Plus Jakarta Sans]">
        Mintal, Davao City - <span className="tabular-nums">{time}</span> PHT
      </p>
    </div>
  );
}
