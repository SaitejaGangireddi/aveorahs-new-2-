"use client";
import React from "react";
import { Compass, PenTool, Hammer, Key } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Spatial Vision & Layout",
    desc: "Understanding site orientation, lighting geometry, and functional living flows through tailored 3D studies.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Materiality & Curation",
    desc: "Selecting tactile finishes: fluted millwork, hand-picked Italian marble slabs, and custom warm metal trims.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Artisanal Execution",
    desc: "Dedicated onsite architectural management ensuring millimeter-accurate carpentry and bespoke installations.",
    icon: Hammer,
  },
  {
    num: "04",
    title: "Turnkey Handover",
    desc: "Fully staged, deep-cleaned, and styled turnkey completion ready for immediate refined living.",
    icon: Key,
  },
];

export default function ProcessWalkthrough() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#C98242]/20">
      <div className="max-w-xl mb-16">
        <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#E5C158]">
          The Aveorahs Method
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mt-2">
          Precision from Blueprint to Handover
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="p-8 rounded-3xl bg-[#2B1E1A]/40 border border-[#C98242]/30 hover:border-[#E5C158]/50 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-serif text-[#E5C158] opacity-80">{s.num}</span>
                <div className="p-3 rounded-2xl bg-[#241815] border border-[#C98242]/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#E5C158]" />
                </div>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{s.title}</h3>
              <p className="text-xs text-[#D6C7B2] leading-relaxed font-light">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
