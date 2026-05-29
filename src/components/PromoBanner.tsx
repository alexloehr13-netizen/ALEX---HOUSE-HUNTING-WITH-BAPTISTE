import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function PromoBanner() {
  // Let the user have 3 hours, 58 minutes, 23 seconds (14303 seconds) in their session.
  // We'll store the expiration timestamp in localStorage so it persists on page refreshes.
  const [timeLeft, setTimeLeft] = useState<number>(14303);
  // Real-time fluctuating viewer count around 177
  const [viewerCount, setViewerCount] = useState<number>(177);

  useEffect(() => {
    const STORAGE_KEY = "house_hunting_promo_expiry";
    const SESSION_DURATION_MS = 14303 * 1000; // 3h 58m 23s
    
    let expiryTime = localStorage.getItem(STORAGE_KEY);
    
    if (!expiryTime) {
      const newExpiry = Date.now() + SESSION_DURATION_MS;
      localStorage.setItem(STORAGE_KEY, newExpiry.toString());
      expiryTime = newExpiry.toString();
    }
    
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(expiryTime!, 10) - now;
      
      if (difference <= 0) {
        const freshExpiry = Date.now() + 20 * 60 * 1000; // 20 minutes
        localStorage.setItem(STORAGE_KEY, freshExpiry.toString());
        return Math.floor((freshExpiry - now) / 1000);
      }
      
      return Math.floor(difference / 1000);
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
    }, 1000);

    // Fluctuate viewer count subtly every 7 seconds
    const viewerTimer = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
        const nextVal = prev + change;
        // Keep it in a realistic high-conversion range
        if (nextVal < 165) return 171;
        if (nextVal > 189) return 181;
        return nextVal;
      });
    }, 7000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerTimer);
    };
  }, []);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  return (
    <div 
      id="promo-banner" 
      className="fixed top-0 left-0 right-0 z-[100] flex h-[66px] w-full items-center justify-center border-b border-red-700/30 bg-[#A60B0D] px-2 sm:px-4 text-center shadow-lg select-none transition-all duration-300"
    >
      <div className="flex items-center justify-center gap-x-3 sm:gap-x-5 text-xs sm:text-sm font-semibold tracking-wide text-white">
        
        {/* Left Status: Live readers count (always visible) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Glowing live red dot with more vibrance */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="text-[#FFDF6D] font-extrabold text-sm sm:text-base">{viewerCount}</span>
          <span className="text-white font-medium">reading right now</span>
        </div>

        {/* Separator Bullet */}
        <span className="text-white/40 font-bold">·</span>

        {/* Right Status: Campaign & Timer */}
        <div className="flex items-center gap-2 shrink-0">
          <AlertTriangle className="h-4 w-4 text-[#FFDF6D] shrink-0" />
          <span className="text-[#FFDF6D] font-black uppercase tracking-wider text-xs sm:text-sm">
            Launch Promo
          </span>
          <span className="text-white font-medium">ends in</span>
          
          {/* Display Timer Block with dynamic glow & significantly larger numbers */}
          <div className="rounded-md border border-[#FFDF6D]/55 bg-[#3D0304] px-2.5 py-1 text-base sm:text-xl font-black font-mono tracking-widest text-[#FFDF6D] shadow-[0_0_12px_rgba(255,223,109,0.25)] min-w-[85px] sm:min-w-[110px] text-center">
            {formatTime(timeLeft)}
          </div>
        </div>

      </div>
    </div>
  );
}
