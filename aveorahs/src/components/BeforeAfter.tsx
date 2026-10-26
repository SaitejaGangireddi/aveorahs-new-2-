"use client";
import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformations" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#C98242]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#E5C158]">
            Architectural Precision
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mt-2">
            Raw Space to Quiet Luxury
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#D6C7B2] max-w-md font-light leading-relaxed">
          Slide horizontally to witness the transformation from cold structural concrete to bespoke warm architectural living.
        </p>
      </div>

      <div className="relative w-full h-[380px] sm:h-[540px] rounded-3xl overflow-hidden border border-[#E5C158]/30 shadow-2xl select-none group">
        {/* After Image (Background) */}
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
          alt="Completed Living Lounge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#1A1210]/80 backdrop-blur-md text-[10px] font-semibold tracking-widest text-[#E5C158] border border-[#C98242]/30 uppercase">
          Finished Living Space
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
            alt="Raw Concrete Construction"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: "100%" }}
          />
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-semibold tracking-widest text-slate-300 border border-white/20 uppercase">
            Raw Shell Construction
          </div>
        </div>

        {/* Vertical Divider Line & Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#241815] border-2 border-[#E5C158] shadow-[0_0_20px_rgba(229,193,88,0.5)] flex items-center justify-center">
            <span className="text-white text-xs font-bold font-mono">◂▸</span>
          </div>
        </div>

        {/* Invisible Range Input for Smooth Dragging */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before and After Slider"
        />
      </div>
    </section>
  );
}
