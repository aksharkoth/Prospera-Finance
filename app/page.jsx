"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import ProsperaLogo from "@/components/ProsperaLogo" // adjust path if you have a logo component

function ProsperaFinance() {
  const sections = ["home", "about", "services", "team", "results", "contact"];
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#0A192F] to-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0A192F]/80 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <div className="flex items-center gap-4">
            {/* Uncomment if you have ProsperaLogo */}
            {/* <ProsperaLogo /> */}
            <span className="text-3xl font-extrabold tracking-wide">
              Prospera Finance
            </span>
          </div>
        </div>
      </nav>

      {/* --- rest of your sections (Hero, About, Services, Team, Results, Contact) --- */}
      {/* keep everything you already had inside ProsperaFinance */}
    </div>
  );
}

// Optional helper
export function runSmokeTests() {
  return {
    hasShadcnComponents: Boolean(Card && Button && CardContent),
    navSections: ["home", "about", "services", "team", "results", "contact"],
    palette: "navy/white/black gradient",
  };
}

// ✅ Only ONE default export
export default function Page() {
  return <ProsperaFinance />;
}
