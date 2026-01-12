import { useMemo } from "react";

// =============================
// Utilities
// =============================

export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export function format2(n) {
  return String(n).padStart(2, "0");
}

// =============================
// Countdown Hook
// =============================

import { useEffect, useState } from "react";

export function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isDone: diff === 0 };
}
