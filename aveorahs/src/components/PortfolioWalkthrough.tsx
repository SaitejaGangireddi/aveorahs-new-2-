"use client";
import React, { useState } from "react";
import { ArrowUpRight, Play, Eye } from "lucide-react";

interface Project {
  id: string;
  category: "villas" | "penthouse" | "commercial";
  title: string;
  location: string;
  area: string;
  img: string;
}

const projects: Project[] = [
  {
    id: "1",
    category: "villas",
    title: "The Monolith Pavilion Villa",
    location: "Jubilee Hills, Hyderabad",
    area: "8,500 sq.ft",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    category: "penthouse",
    title: "Cognac & Fluted Oak Penthouse",
    location: "Financial District, Hyderabad",
    area: "5,200 sq.ft",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    category: "villas",
    title: "Travertine Courtyard Residence",
    location: "Gachibowli, Hyderabad",
    area: "7,100 sq.ft",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    category: "commercial",
    title: "Tactile Heritage Executive Suite",
    location: "Banjara Hills, Hyderabad",
    area: "3,800 sq.ft",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function PortfolioWalkthrough() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#C98242]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#E5C158]">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mt-2">
            Curated Architectural Living
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "villas", "penthouse", "commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all ${
                filter === tab
                  ? "bg-[#E5C158] text-[#241815] shadow-lg shadow-[#E5C158]/20"
                  : "bg-[#2B1E1A] text-[#D6C7B2] hover:text-white border border-[#C98242]/30"
              }`}
            >
              {tab === "all" ? "All Works" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl overflow-hidden bg-[#241815] border border-[#C98242]/30 hover:border-[#E5C158]/60 transition-all duration-500 flex flex-col shadow-xl"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241815] via-transparent to-transparent" />
              <div className="absolute top-4 right-4 p-3 rounded-full bg-[#1A1210]/80 backdrop-blur-md text-white border border-white/10 group-hover:bg-[#E5C158] group-hover:text-[#241815] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-[#E5C158] uppercase">
                  {item.area} • {item.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white mt-1 group-hover:text-[#F3E2B4] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#D6C7B2]">
                <span>Full Architectural Scope</span>
                <span className="text-[#E5C158] font-medium flex items-center gap-1">
                  View Detail <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
