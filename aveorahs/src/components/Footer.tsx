import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#C98242]/20 bg-[#1E1411] text-[#D6C7B2] py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand Summary */}
        <div className="space-y-4">
          <span className="font-serif text-2xl text-white block">Aveorahs</span>
          <p className="text-xs leading-relaxed text-[#D6C7B2]/80">
            A boutique luxury interior and architectural design practice crafting quiet luxury environments.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C98242]">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#founders" className="hover:text-white transition-colors">Studio Leadership</a></li>
            <li><a href="#transformations" className="hover:text-white transition-colors">Transformations</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Projects</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">The Process</a></li>
          </ul>
        </div>

        {/* Studio Location */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C98242]">Studio Location</h4>
          <div className="flex items-start gap-2 text-xs leading-relaxed">
            <MapPin className="w-4 h-4 text-[#C98242] shrink-0 mt-0.5" />
            <span>
              6th Floor, Shresta Square Building,<br />
              Opposite TCC, Kondapur,<br />
              Hyderabad - 500084
            </span>
          </div>
        </div>

        {/* Direct Connect */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C98242]">Direct Connect</h4>
          <div className="space-y-2.5 text-xs">
            <a href="tel:+918790490909" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C98242]" />
              <span>+91 87904 90909</span>
            </a>
            <a
              href="mailto:aveorahs@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C98242]" />
              <span>aveorahs@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/aveorahs_interiors?dlrf=Nmtwa3J4bHdhOW9t&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 stroke-[#C98242]"
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
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D6C7B2]/60 gap-4">
        <p>© 2026 Aveorahs Interior Studio. All rights reserved.</p>
        <p className="tracking-widest uppercase text-[10px]">Architectural Precision & Tactile Elegance</p>
      </div>
    </footer>
  );
}