"use client";

import { useState, useEffect } from "react";
import Container from "@/components/container";

export default function CountdownHeader() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set target date - customize this to your wedding date
    const targetDate = new Date("2026-01-26T09:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-10 bg-cover bg-center"
      style={{
        backgroundImage: `url('/img/header-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <Container className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Landing in Lima in...
        </h1>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/30">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {timeLeft.days}
              </div>
              <div className="text-white text-sm md:text-base mt-2">Days</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/30">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {timeLeft.hours}
              </div>
              <div className="text-white text-sm md:text-base mt-2">Hours</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/30">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {timeLeft.minutes}
              </div>
              <div className="text-white text-sm md:text-base mt-2">Minutes</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/30">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {timeLeft.seconds}
              </div>
              <div className="text-white text-sm md:text-base mt-2">Seconds</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
