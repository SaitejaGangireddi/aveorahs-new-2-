"use client";

import React from "react";
import { ArrowUpRight, MapPin, Compass, ShieldCheck, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 border border-[#C98242]/10 rounded-full pointer-events-none blur-sm" />
      <div className="absolute -bottom-10 right-1/3 w-96 h-96 border border-[#C98242]/10 rounded-full pointer-events-none blur-md" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-gradient-to-r from-[#C98242] to-transparent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C98242]">
              Architectural Design Studio
            </span>
          </div>

          {/* Headline: Aveorahs big & prominent, subtitle elegant & compact below */}
          <div className="relative pl-4 border-l-2 border-[#C98242]/40 space-y-2">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-none">
              <span className="italic font-light bg-gradient-to-r from-[#F3E2B4] via-[#E5C158] to-[#D4A346] bg-clip-text text-transparent block drop-shadow-sm">
                Aveorahs
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-serif tracking-[0.18em] uppercase text-[#F7E7BE]/80 pt-1">
              Interior Design Studio
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#241815]/90 border border-[#C98242]/30 text-[10px] font-medium tracking-widest uppercase text-[#FDFBF7]/90 shadow-sm backdrop-blur-md">
              <Compass className="w-3 h-3 text-[#E5C158]" />
              Spatial Planning
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#241815]/90 border border-[#C98242]/30 text-[10px] font-medium tracking-widest uppercase text-[#FDFBF7]/90 shadow-sm backdrop-blur-md">
              <Award className="w-3 h-3 text-[#E5C158]" />
              Luxury Villas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#241815]/90 border border-[#C98242]/30 text-[10px] font-medium tracking-widest uppercase text-[#FDFBF7]/90 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3 h-3 text-[#E5C158]" />
              Turnkey Delivery
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#E5C158] to-[#C98242] hover:opacity-95 text-[#241815] font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(229,193,88,0.25)] hover:translate-x-1"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#241815]/80 hover:bg-[#241815] text-white border border-[#C98242]/40 hover:border-[#C98242] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#C98242]/20 to-[#E5C158]/10 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden border border-[#E5C158]/30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group bg-[#241815]">
            <img
              src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1793005414/Warm_Luxury_AVEORAHS_Reception_pvkabn.png"
              alt="Kondapur Clinic"
              className="w-full h-[440px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241815]/95 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-4 rounded-2xl bg-[#241815]/85 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="space-y-0.5">
                <span className="text-[9px] font-semibold tracking-[0.25em] text-[#E5C158] uppercase">
                  Featured Work
                </span>
                <h4 className="text-base font-serif text-white tracking-wide">
                  Private Villa Residence
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#D6C7B2] pt-0.5">
                  <MapPin className="w-3 h-3 text-[#E5C158] shrink-0" />
                  <span>Jubilee Hills, Hyderabad</span>
                </div>
              </div>

              <a
                href="#portfolio"
                className="p-3 rounded-full bg-[#E5C158]/20 hover:bg-[#E5C158] text-white hover:text-[#241815] border border-[#E5C158]/40 transition-all shrink-0"
                aria-label="View Project"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}