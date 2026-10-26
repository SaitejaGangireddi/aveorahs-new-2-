"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import BeforeAfter from "@/components/BeforeAfter";
import PortfolioWalkthrough from "@/components/PortfolioWalkthrough";
import ProcessWalkthrough from "@/components/ProcessWalkthrough";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#241815] text-[#FDFBF7] relative overflow-x-hidden selection:bg-[#C98242] selection:text-white">
      <Navbar />
      <Hero />
      <Founders />
      <BeforeAfter />
      <PortfolioWalkthrough />
      <ProcessWalkthrough />
      <Footer />
      <FloatingWidgets onOpenQuiz={() => setModalOpen(true)} />
      <EstimateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}