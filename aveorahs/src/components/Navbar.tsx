"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Walkthrough", href: "#walkthrough" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 transition-all duration-500">
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-6 md:px-8 flex items-center justify-between border ${
        scrolled
          ? "bg-[#241815]/85 backdrop-blur-xl border-[#C98242]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2.5"
          : "bg-[#241815]/50 backdrop-blur-lg border-white/10 py-3"
      }`}>
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1786282450/ChatGPT_Image_Aug_9_2026_07_04_02_PM_fixs2k.png"
            alt="Aveorahs Interior Design Studio"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? "h-9 md:h-11" : "h-11 md:h-13"
            }`}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.25em] text-[#D6C7B2] uppercase hover:text-white transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C98242] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-[#C98242]/15 hover:bg-[#C98242] text-[#FDFBF7] hover:text-white border border-[#C98242]/40 hover:border-[#C98242] transition-all duration-300 shadow-sm"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#FDFBF7] p-2 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mt-2 max-w-7xl mx-auto rounded-2xl bg-[#241815]/95 backdrop-blur-2xl border border-[#C98242]/20 px-6 py-6 space-y-4 text-center shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold tracking-[0.2em] text-[#FDFBF7] uppercase hover:text-[#C98242] py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block w-full mt-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#C98242] text-white"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}