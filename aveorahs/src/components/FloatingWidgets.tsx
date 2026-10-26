"use client";

import React from "react";
import { MessageCircle, Phone, Mail, Sparkles } from "lucide-react";

interface FloatingWidgetsProps {
  onOpenQuiz?: () => void;
}

export default function FloatingWidgets({ onOpenQuiz }: FloatingWidgetsProps) {
  return (
    <>
      {/* Bottom-Left Style Quiz Badge */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={onOpenQuiz}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1210]/90 hover:bg-[#1A1210] border border-[#C98242]/40 hover:border-[#E5C158] text-[10px] font-semibold tracking-widest uppercase text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer group"
        >
          <div className="w-5 h-5 rounded-full bg-black border border-white/20 flex items-center justify-center text-[10px] font-bold text-white group-hover:border-[#E5C158]">
            N
          </div>
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158] transition-transform group-hover:rotate-12" />
          <span>Style Quiz / Estimate</span>
        </button>
      </div>

      {/* Bottom-Right Floating Contact Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918790490909"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        {/* Direct Call */}
        <a
          href="tel:+918790490909"
          aria-label="Call Veenasree Reddy"
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-xl hover:scale-110 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Instagram Profile */}
        <a
          href="https://instagram.com/aveorahs_interiors?dlrf=Nmtwa3J4bHdhOW9t&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-xl hover:scale-110 transition-transform"
        >
          <svg
            className="w-5 h-5 stroke-current"
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
        </a>

        {/* Email */}
        <a
          href="mailto:aveorahs@gmail.com"
          aria-label="Email"
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-rose-600 shadow-xl hover:scale-110 transition-transform"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}