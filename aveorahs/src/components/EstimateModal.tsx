"use client";

import React, { useState } from "react";
import { X, Sparkles, Send, CheckCircle2, ChevronRight } from "lucide-react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [propertyType, setPropertyType] = useState("Luxury Villa");
  const [spaceScope, setSpaceScope] = useState("Complete Interior & Architecture");
  const [aesthetic, setAesthetic] = useState("Quiet Luxury & Warm Minimalism");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#241815] border border-[#E5C158]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#E5C158] mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif text-white">Estimate Request Received</h3>
            <p className="text-xs text-[#D6C7B2] max-w-xs mx-auto leading-relaxed">
              Thank you, {name}. Veenasree Reddy and the Aveorahs architectural team will review your specifications and contact you at {phone}.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-[#E5C158] text-[10px] tracking-widest uppercase font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step {step} of 2 • Spatial Feasibility</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-1">
              {step === 1 ? "Design Style & Scope Quiz" : "Your Contact Details"}
            </h3>
            <p className="text-xs text-[#D6C7B2] mb-6">
              {step === 1
                ? "Select your property parameters to calibrate your estimate."
                : "Where should we deliver your spatial curation breakdown?"}
            </p>

            {step === 1 ? (
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D6C7B2] mb-2 font-medium">
                    Property Configuration
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      "Luxury Villa",
                      "High-Rise Penthouse",
                      "Bespoke 3/4 BHK",
                      "Studio / Commercial",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPropertyType(item)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          propertyType === item
                            ? "bg-[#E5C158]/15 border-[#E5C158] text-white shadow-sm"
                            : "bg-[#2B1E1A] border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D6C7B2] mb-2 font-medium">
                    Preferred Aesthetic Direction
                  </label>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {[
                      "Quiet Luxury & Warm Minimalism",
                      "Italian Travertine & Fluted Architectural Oak",
                      "Rich Espresso & Metallic Accents",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setAesthetic(item)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          aesthetic === item
                            ? "bg-[#E5C158]/15 border-[#E5C158] text-white"
                            : "bg-[#2B1E1A] border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C98242] text-[#241815] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-[#E5C158]/20"
                >
                  <span>Continue to Verification</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D6C7B2] mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. S. Reddy"
                    className="w-full px-4 py-3 rounded-xl bg-[#2B1E1A] border border-[#C98242]/40 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5C158]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D6C7B2] mb-1 font-medium">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#2B1E1A] border border-[#C98242]/40 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5C158]"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl bg-[#2B1E1A] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C98242] text-[#241815] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-[#E5C158]/20 transition-all"
                  >
                    <span>Send Estimate</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}