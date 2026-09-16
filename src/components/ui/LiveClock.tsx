import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface LiveClockProps {
  minimal?: boolean;
}

export function LiveClock({ minimal = false }: LiveClockProps) {
  const [timeString, setTimeString] = useState<string>("");
  const [timeZoneString] = useState<string>("MAKASSAR");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const formattedFull = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Bali",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(now);
        setTimeString(formattedFull);
      } catch {
        // Fallback calculation for UTC+8 (WITA / Makassar)
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const makassarTime = new Date(utc + 3600000 * 8);
        const hh = String(makassarTime.getHours()).padStart(2, "0");
        const mm = String(makassarTime.getMinutes()).padStart(2, "0");
        const ss = String(makassarTime.getSeconds()).padStart(2, "0");
        setTimeString(`${hh}:${mm}:${ss}`);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 250);
    return () => clearInterval(timer);
  }, []);

  if (minimal) {
    return (
      <div
        id="live-clock-minimal"
        className="flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-white tracking-wider select-none"
        title="Live Makassar Time (WITA - UTC+8)"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="tabular-nums">{timeString || "--:--:--"}</span>
        <span className="text-[10px] text-neutral-400 font-normal hidden sm:inline">
          WITA
        </span>
      </div>
    );
  }

  return (
    <div
      id="live-clock-widget"
      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300 font-mono select-none backdrop-blur-md transition-colors hover:bg-white/[0.07] hover:border-cyan-500/30"
      title="Live Makassar Time (WITA - UTC+8)"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Clock className="w-3.5 h-3.5 text-cyan-400" />
      <span className="tabular-nums tracking-wider text-neutral-100 font-medium">
        {timeString || "--:--:--"}
      </span>
      <span className="hidden sm:inline-block text-[10px] text-neutral-400 border-l border-white/10 pl-2">
        {timeZoneString}
      </span>
    </div>
  );
}
