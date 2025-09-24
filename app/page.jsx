"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Inline SVG logo
function ProsperaLogo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12v32l14 10 20-14V12L24 26 10 12z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <path d="M16 37V30" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M24 41V26" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M32 36V22" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M40 30V18" stroke="#FFFFFF" strokeWidth="3" />
    </svg>
  );
}

export default function ProsperaFinance() {
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
            <ProsperaLogo />
            <span className="text-3xl font-extrabold tracking-wide">Prospera Finance</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-56 px-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-6xl md:text-7xl font-extrabold max-w-5xl leading-tight bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent"
        >
          Driving Business Growth with Data-Powered Financial Forecasting
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-xl md:text-2xl mt-8 max-w-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Helping businesses scale through ML-driven financial assistance.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <Button className="mt-12 px-10 py-5 text-xl rounded-full font-semibold bg-white text-[#0A192F] hover:bg-gray-200">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Quick Impact Metrics */}
      <section className="grid md:grid-cols-3 gap-10 text-center py-28 px-12">
        {[{ value: "5+", label: "Businesses Served" }, { value: "15%", label: "Avg. Revenue Growth" }, { value: "Ongoing", label: "Financial Strategies" }].map((item, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
            <Card className="bg-[#0A192F] text-white rounded-3xl shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-5xl font-extrabold mb-4 text-white">{item.value}</h3>
                <p className="text-gray-300 text-xl">{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* How It Works */}
      <section className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-16 text-white">
          How It Works
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[{ step: "Discovery", desc: "We begin by understanding the unique characteristics of your business, your industry trends, and your long-term goals. This step includes in-depth discussions, data collection, and a full evaluation of your company’s current financial position." }, { step: "Forecasting", desc: "We apply advanced ML-driven models to generate forecasts for revenue, cash flow, and other key financial metrics. These models are backtested and tuned to provide actionable accuracy you can rely on for decision making." }, { step: "Strategy", desc: "With forecasts in hand, we design detailed and actionable strategies. These plans focus on optimizing resources, mitigating risks, and uncovering new opportunities for revenue growth and financial resilience." }, { step: "Growth", desc: "Finally, we help implement the strategies and adjust dynamically based on real-time data. This ensures your business not only grows but sustains growth through continuous adaptation and learning." }].map((item) => (
            <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
              <Card className="bg-black text-white rounded-3xl shadow-xl w-96">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-semibold mb-4 text-white">{item.step}</h3>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-12 text-white">
          About Us
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="max-w-4xl mx-auto text-gray-300 mb-10 text-xl"
        >
          Mission: At Prospera Finance, our mission goes beyond offering tools—we aim to become a long-term partner for small and mid-sized businesses on their growth journey. We believe every company deserves access to sophisticated financial forecasting and advisory, regardless of size. By combining machine learning, human expertise, and transparent processes, we empower organizations to make smarter financial decisions, scale sustainably, and remain resilient in the face of change. Our goal is not only to deliver accurate predictions, but also to provide the strategic guidance that turns those predictions into real-world outcomes.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-gray-300 text-xl mb-12">
          Values: Trust • Transparency • Measurable Results
        </motion.p>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-16 text-white">
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[{ name: "Financial Forecasting", detail: "Using ML time-series modeling, we provide accurate forecasts of revenue, expenses, and market trends, giving your business the clarity it needs to plan ahead." }, { name: "Cash Flow Analysis & Planning", detail: "We analyze cash inflows and outflows, identify potential shortfalls, and create strategies to improve liquidity and working capital." }, { name: "Growth Strategy & Implementation", detail: "We collaborate with you to design data-driven strategies for scaling, entering new markets, and improving profitability, while also supporting hands-on implementation." }, { name: "Business Advisory", detail: "From fundraising support to long-term planning, we act as advisors, helping align financial performance with your business’s broader vision." }].map((service) => (
            <motion.div key={service.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
              <Card className="bg-[#0A192F] text-white rounded-3xl shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-semibold mb-6 text-white">{service.name}</h3>
                  <p className="text-gray-300 text-lg">{service.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-12 text-white">
          Our Team
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {[{ name: "Siddanth Baddevolu", bio: "Student passionate about fintech innovation, developing platforms and solutions that merge finance and technology to improve accessibility." }, { name: "Akshar Kothapalli", bio: "Student at Denmark High School with a focus on fintech and entrepreneurship, working on projects that apply technology to solve global financial challenges." }, { name: "Smaran Jairam", bio: "Student at Lambert High School, logic-oriented and pursuing economics, finance, and math. Interested in combining data-driven analysis with financial strategy to lead impactful initiatives." }, { name: "Samanyu Jairam", bio: "Student at Lambert High School, business-oriented and qualitative thinker. Aspires to work in business strategy and development, applying innovative thinking to financial growth." }].map((member) => (
            <motion.div key={member.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
              <Card className="bg-black text-white rounded-3xl shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-12 text-white">
          Our Results
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[{ name: "Altum TS", details: "We partnered with Altum TS to apply our forecasting models to their operations. The results showed a forecast accuracy of MAPE 8% and RMSE 0.12. This enabled Altum TS to better allocate resources and increase efficiency." }, { name: "Cybersphere", details: "With Cybersphere, our ML-driven forecasting achieved a forecast accuracy of MAPE 10% and RMSE 0.15. This provided them with clearer visibility into revenue cycles, leading to improved strategic planning and sustainable growth." }].map((company) => (
            <motion.div key={company.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
              <Card className="bg-[#0A192F] text-white rounded-3xl shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{company.name}</h3>
                  <p className="text-gray-300 text-lg">{company.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-32 px-12 text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="text-5xl font-extrabold mb-12 text-white">
          Contact Us
        </motion.h2>
        <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="max-w-2xl mx-auto space-y-8">
          <input type="text" placeholder="Name" className="w-full p-5 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="text" placeholder="Company" className="w-full p-5 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="email" placeholder="Email" className="w-full p-5 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <input type="tel" placeholder="Phone" className="w-full p-5 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600" />
          <textarea placeholder="Message" rows="6" className="w-full p-5 rounded-xl bg-black text-white placeholder-gray-400 border border-gray-600"></textarea>
          <Button className="px-10 py-5 text-xl rounded-full font-semibold bg-white text-[#0A192F] hover:bg-gray-200 w-full">Schedule a Consultation</Button>
        </motion.form>
        <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="mt-16 text-gray-400 text-sm">
          <p>© 2025 Prospera Finance | Privacy & Legal</p>
        </motion.footer>
      </section>
    </div>
  );
}

// --- Simple sanity tests ---
export function runSmokeTests() {
  return {
    hasShadcnComponents: Boolean(Card && Button && CardContent),
    navSections: ["home", "about", "services", "team", "results", "contact"],
    palette: "navy/white/black gradient",
  };
}


// Render the component as the page
export default function Page(){ return <ProsperaFinance/> }
