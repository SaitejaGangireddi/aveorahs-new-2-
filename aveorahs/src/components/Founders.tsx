"use client";

import React from "react";
import { Sparkles, Phone, ArrowUpRight } from "lucide-react";

export default function Founders() {
  return (
    <section id="founders" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#C98242]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.35em] uppercase text-[#E5C158] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            The Visionary Behind Aveorahs
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#D6C7B2] max-w-md font-light leading-relaxed">
          Driven by architectural restraint, artisanal materiality, and absolute turnkey accountability.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-[#241815] border border-[#C98242]/30 hover:border-[#E5C158]/50 transition-all duration-500 flex flex-col md:flex-row shadow-2xl relative">
        <div className="md:w-5/12 relative h-80 md:h-auto overflow-hidden shrink-0">
          <img
            src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1793004593/IMG_2418_1_f1ak2i.jpg"
            alt="Veenasree Reddy - Founder of Aveorahs"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#241815] via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-8 md:p-10 md:w-7/12 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-semibold tracking-widest text-[#E5C158] uppercase block">
              Founder & Principal Designer
            </span>
            <h3 className="text-3xl font-serif text-white">
              Veenasree Reddy
            </h3>
            <span className="inline-block text-[11px] text-[#D6C7B2]/70 font-mono tracking-wider">
              Bespoke Interior Craftsmanship & Spatial Architecture
            </span>

            <p className="text-xs sm:text-sm text-[#D6C7B2] leading-relaxed font-light pt-2">
              Leading Aveorahs with a philosophy anchored in quiet luxury and architectural discipline. Specializes in curating seamless turnkey residences where refined textures, balanced proportions, and handcrafted materials harmonize effortlessly.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <p className="text-xs italic text-[#FDFBF7]/90 font-serif leading-relaxed">
              “True luxury never shouts. It is felt through millimeter precision, balanced proportion, and the calm of pure materials.”
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://instagram.com/aveorahs_interiors?dlrf=Nmtwa3J4bHdhOW9t&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B1E1A] hover:bg-[#E5C158] text-[#D6C7B2] hover:text-[#241815] border border-[#C98242]/30 transition-all text-xs font-semibold tracking-wider"
              >
                <svg
                  className="w-3.5 h-3.5 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@aveorahs_interiors</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href="tel:+918790490909"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B1E1A] hover:bg-[#E5C158] text-[#D6C7B2] hover:text-[#241815] border border-[#C98242]/30 transition-all text-xs font-semibold tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C158] hover:text-[#241815]" />
                <span>+91 87904 90909</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}