"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* Inline logo so there's no missing import */
function ProsperaLogo(props) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" {...props}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0" stopOpacity="1" stopColor="#9fc5e8" />
          <stop offset="1" stopOpacity="1" stopColor="#bf9b42" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#g)" />
      <path d="M20 40c10 0 12-16 24-16" stroke="#0A192F" strokeWidth="4" strokeLinecap="round" />
      <circle cx="44" cy="24" r="3" fill="#0A192F" />
    </svg>
  );
}

function ProsperaFinance() {
  const sections = ["home", "about", "services", "team", "results", "contact"];
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
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

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#0A192F] to-black text-white min-h-screen font-sans scroll-smooth">
      {/* Nav */}
      <nav className="fixed w-full bg-[#0A192F]/80 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <ProsperaLogo />
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide">Prospera Finance</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => handleNav(`#${s}`)}
                className={`uppercase tracking-wide hover:text-gray-200 ${
                  active === s ? "text-white" : "text-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-[#0A192F] font-semibold hover:bg-gray-200"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">☰</button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => handleNav(`#${s}`)}
                className="block w-full text-left py-2 text-gray-200"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-28">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-5xl md:text-7xl font-extrabold max-w-5xl leading-tight bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent"
        >
          Driving Business Growth with Data-Powered Financial Forecasting
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-xl md:text-2xl mt-6 max-w-2xl text-gray-300"
        >
          We combine ML models with hands-on advisory to improve cash flow, forecast revenue, and guide strategy.
        </motion.p>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Button
            className="mt-10 px-8 py-4 text-lg rounded-full font-semibold bg-white text-[#0A192F] hover:bg-gray-200"
            onClick={() => handleNav("#contact")}
          >
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="grid md:grid-cols-3 gap-8 text-center py-20 px-8 max-w-6xl mx-auto">
        {[{ value: "5+", label: "Businesses Served" }, { value: "15%", label: "Avg. Revenue Growth" }, { value: "Ongoing", label: "Financial Strategies" }].map((item, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-[#0A192F] text-white rounded-3xl shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-5xl font-extrabold mb-3">{item.value}</h3>
                <p className="text-gray-300 text-lg">{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-8 text-center" id="how">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-12">
          How It Works
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[{ step: "Discovery", desc: "Deep-dive on your business, data sources, and goals." }, { step: "Forecasting", desc: "Time-series ML for revenue, cash flow, demand, and more." }, { step: "Strategy", desc: "Translate forecasts into concrete growth and risk plans." }, { step: "Growth", desc: "Deploy tactics and iterate with live dashboards and alerts." }].map((item) => (
            <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="bg-black text-white rounded-3xl shadow-xl w-80">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{item.step}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-8">
          About Us
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto text-gray-300 text-lg">
          Our mission is to bring enterprise-grade forecasting and advisory to SMBs. We pair transparent models with practical guidance to turn predictions into measurable outcomes.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-12">
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[{ name: "Financial Forecasting", detail: "ML time-series for revenue, expense, and demand planning." }, { name: "Cash Flow Planning", detail: "Monitor burn, improve liquidity, and avoid shortfalls." }, { name: "Growth Strategy", detail: "Market entry, pricing, funnels, and ops efficiency." }, { name: "Advisory", detail: "Fundraising prep, dashboards, KPI design, ops cadence." }].map((service) => (
            <motion.div key={service.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="bg-[#0A192F] text-white rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-300 text-sm">{service.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-12">
          Our Team
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[{ name: "Siddanth Baddevolu", bio: "Fintech builder focused on accessible finance tools." }, { name: "Akshar Kothapalli", bio: "Fintech + entrepreneurship; ML applied to real problems." }, { name: "Smaran Jairam", bio: "Logic-driven—economics, finance, and math." }, { name: "Samanyu Jairam", bio: "Business strategy and qualitative analysis." }].map((m) => (
            <motion.div key={m.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="bg-black text-white rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-2">{m.name}</h3>
                  <p className="text-gray-400 text-sm">{m.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-12">
          Our Results
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{ name: "Altum TS", details: "MAPE 8%, RMSE 0.12 — better resource allocation & efficiency." }, { name: "Cybersphere", details: "MAPE 10%, RMSE 0.15 — clearer revenue cycles & planning." }].map((c) => (
            <motion.div key={c.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="bg-[#0A192F] text-white rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{c.name}</h3>
                  <p className="text-gray-300 text-sm">{c.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-10">
          Contact Us
        </motion.h2>
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-2xl mx-auto space-y-6"
        >
          <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="text" placeholder="Company" className="w-full p-4 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="tel" placeholder="Phone" className="w-full p-4 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <textarea placeholder="Message" rows="6" className="w-full p-4 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600"></textarea>
          <Button className="w-full px-8 py-4 text-lg rounded-full font-semibold bg-white text-[#0A192F] hover:bg-gray-200">
            Schedule a Consultation
          </Button>
        </motion.form>

        <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-12 text-gray-400 text-sm">
          <p>© 2025 Prospera Finance | Privacy &amp; Legal</p>
        </motion.footer>
      </section>
    </div>
  );
}

/* optional quick test helper */
export function runSmokeTests() {
  return {
    hasShadcnComponents: Boolean(Card && Button && CardContent),
    navSections: ["home", "about", "services", "team", "results", "contact"],
    palette: "navy/white/black gradient",
  };
}

/* ✅ Only ONE default export */
export default function Page() {
  return <ProsperaFinance />;
}