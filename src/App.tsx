/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Stethoscope, Sun, Building2, Cpu, Scale, Truck, Zap, Briefcase, ShoppingCart, ArrowUpRight } from "lucide-react";
import { useState, FormEvent, MouseEvent } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check for bots
    const target = e.target as HTMLFormElement;
    const botField = target.querySelector('[name="_gotcha"]') as HTMLInputElement;
    if (botField?.value) return;

    setFormStatus("submitting");
    
    try {
      const formspreeId = (import.meta as any).env.VITE_FORMSPREE_ID || "xzdjdyyq";
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  const navItems = [
    "SOCIAL PROOF",
    "SERVICES",
    "WHY PARTNER WITH US",
    "LET'S TALK",
  ];

  const stats = [
    {
      label: "AD SPEND",
      metric: "100k+",
      context: "Managed in 2025 across high-stakes performance campaigns."
    },
    {
      label: "PERFORMANCE METRIC",
      metric: "4.8x ROAS",
      context: "Average return across Healthcare and Solar verticals."
    },
    {
      label: "PIPELINE VELOCITY",
      metric: "+300%",
      context: "Increase in qualified B2B leads, reducing sales cycle friction."
    }
  ];

  const industries = [
    { icon: Stethoscope, label: "Healthcare", proof: "12% lower CPA" },
    { icon: Sun, label: "Solar", proof: "4.2x ROAS average" },
    { icon: Building2, label: "Real Estate", proof: "$40M pipeline generated" },
    { icon: Cpu, label: "SaaS", proof: "3.1x LTV/CAC ratio" },
    { icon: Scale, label: "Legal", proof: "85% lead qualification" },
    { icon: Truck, label: "Logistics", proof: "22% volume increase" },
    { icon: Zap, label: "Energy", proof: "5.8x conversion lift" },
    { icon: Briefcase, label: "Fintech", proof: "Institutional grade security" },
    { icon: ShoppingCart, label: "E-commerce", proof: "$12M revenue attributed" },
  ];

  const services = [
    {
      id: "organic-content",
      title: "Organic Content",
      description: "High-fidelity visual storytelling that builds brand authority and community trust through cinematic production.",
      visual: (
        <div className="relative flex h-full w-full items-center justify-center p-8">
          <div className="relative h-48 w-48 rounded-full border-8 border-white/5 bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
            <div className="absolute inset-4 rounded-full border-4 border-white/10 bg-charcoal" />
            <div className="absolute inset-12 rounded-full bg-radial-[at_30%_30%] from-cyan/30 to-transparent" />
            <div className="absolute top-6 right-6 h-6 w-6 rounded-full bg-white/20 blur-md" />
            <div className="absolute inset-0 rounded-full border border-white/20 opacity-20" />
          </div>
        </div>
      ),
      className: "md:col-span-7"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Strategic distribution and community management to dominate the digital conversation and drive engagement.",
      visual: (
        <div className="relative flex h-full w-full items-center justify-center p-8">
          <div className="absolute top-1/4 left-1/4 h-16 w-16 rotate-12 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl" />
          <div className="absolute bottom-1/4 right-1/4 h-20 w-20 -rotate-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl" />
          <div className="h-24 w-24 rounded-full border border-white/20 bg-gradient-to-tr from-white/10 to-transparent shadow-inner" />
        </div>
      ),
      className: "md:col-span-5"
    },
    {
      id: "performance",
      title: "Performance Marketing",
      description: "Precision-targeted acquisition focused on ROI and scalable revenue growth through data-driven optimization.",
      visual: (
        <div className="relative flex h-full w-full items-center justify-center p-8">
          <div className="h-40 w-64 overflow-hidden rounded-2xl border border-lime/20 bg-lime/5 shadow-2xl">
            <svg viewBox="0 0 100 40" className="h-full w-full text-lime opacity-40">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0 35 Q 20 10, 40 30 T 80 5 T 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute h-16 w-16 rounded-full border-2 border-lime shadow-[0_0_30px_rgba(204,255,0,0.3)]">
            <div className="absolute top-1/2 left-0 h-[1px] w-full bg-lime" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-lime" />
          </div>
        </div>
      ),
      className: "md:col-span-5"
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Architecting frictionless digital experiences that convert visitors into customers with cutting-edge tech.",
      visual: (
        <div className="relative flex h-full w-full items-center justify-center p-8">
          <div className="relative h-64 w-44 rounded-[3rem] border-4 border-white/10 bg-charcoal shadow-2xl">
            <div className="absolute top-6 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
            <div className="mt-20 space-y-4 px-6">
              <div className="h-3 w-full rounded bg-white/5" />
              <div className="h-3 w-4/5 rounded bg-white/5" />
              <div className="h-3 w-3/5 rounded bg-white/5" />
              <div className="mt-8 h-24 w-full rounded-xl border border-white/10 bg-white/5" />
            </div>
            <div className="absolute inset-0 rounded-[3rem] border border-white/20 opacity-10" />
          </div>
        </div>
      ),
      className: "md:col-span-7"
    }
  ];

  const testimonials = [
    {
      quote: "The level of precision in their execution is unmatched. Our conversion rates doubled in three months.",
      author: "Sarah Jenkins",
      role: "CMO at Lumina",
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "Craftale understands the intersection of luxury and technology. They are true digital architects.",
      author: "David Chen",
      role: "Founder of Aether",
      img: "https://picsum.photos/seed/david/100/100"
    },
    {
      quote: "A transformative partnership. Their data-driven approach removed all the guesswork from our scaling.",
      author: "Elena Rodriguez",
      role: "Director at Solis",
      img: "https://picsum.photos/seed/elena/100/100"
    },
    {
      quote: "They don't just deliver services; they deliver institutional-grade growth systems.",
      author: "James Wilson",
      role: "VP Growth at Nexa",
      img: "https://picsum.photos/seed/james/100/100"
    },
    {
      quote: "The most professional agency we've worked with. Their technical depth is astounding.",
      author: "Michael Park",
      role: "CTO at Zenith",
      img: "https://picsum.photos/seed/michael/100/100"
    },
    {
      quote: "Craftale's strategy session alone was worth the entire project cost. Highly recommended.",
      author: "Olivia Moore",
      role: "Founder of Bloom",
      img: "https://picsum.photos/seed/olivia/100/100"
    },
    {
      quote: "Exceptional attention to detail. They truly care about the brand's long-term health.",
      author: "Robert Taylor",
      role: "Head of Brand at Aura",
      img: "https://picsum.photos/seed/robert/100/100"
    }
  ];

  const problems = [
    {
      title: "Ads Burning Budget",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
          <path d="M3 12a9 9 0 0 1 18 0" />
          <path d="M12 12l-7-4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <text x="4" y="15" fontSize="4" className="font-bold">E</text>
          <text x="18" y="15" fontSize="4" className="font-bold">F</text>
        </svg>
      ),
    },
    {
      title: "Website Not Converting",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
          <path d="M6 4l2 14h8l2-14H6z" />
          <path d="M10 18v3" />
          <path d="M14 18v2" />
          <path d="M12 18v4" />
          <circle cx="10" cy="22" r="0.5" fill="currentColor" />
          <circle cx="14" cy="21" r="0.5" fill="currentColor" />
          <circle cx="12" cy="23" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "No Consistent Leads",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
          <path d="M2 18h20" />
          <path d="M12 18V10l-2-2m2 2l2-2m-2 2V14l-3 3m3-3l3 3" />
          <path d="M4 18l1-1m13 1l1-1m-10 0l1-1" />
        </svg>
      ),
    },
  ];

  const solutions = [
    {
      number: "01",
      title: "Strategy",
      description: "A data-driven blueprint that aligns your business goals with market demand. We don't guess; we calculate.",
      color: "text-cyan",
      glow: "shadow-[0_0_50px_-12px_rgba(0,245,255,0.3)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-16 w-16 text-cyan">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V3m0 18v-6m-3-3H3m18 0h-6m-1.5-1.5l4-4m-9 9l-4 4m0-13l4 4m9 9l-4-4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Conversion Infrastructure",
      description: "Building high-performance digital assets that turn attention into action. Speed, clarity, and psychological triggers.",
      color: "text-offwhite",
      glow: "shadow-[0_0_50px_-12px_rgba(224,224,224,0.2)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-16 w-16 text-offwhite">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Paid Ads",
      description: "Aggressive scaling through precision-targeted campaigns. We dominate the auction to capture high-intent buyers.",
      color: "text-lime",
      glow: "shadow-[0_0_50px_-12px_rgba(204,255,0,0.3)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-16 w-16 text-lime">
          <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
          <polyline points="16 7 22 7 22 13" />
          <path d="M2 12h20" strokeDasharray="4 4" opacity="0.2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] font-sans selection:bg-[#E0E0E0] selection:text-[#0A0A0A]">
      {/* Background 3D Abstract Elements (Simulated with high-quality image and gradients) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-[#0A0A0A] opacity-60" />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract 3D Shape"
          className="h-full w-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        {/* Additional geometric overlays for depth */}
        <div className="absolute top-1/4 right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-baseline"
        >
          <span className="font-display text-3xl font-bold tracking-tighter text-offwhite">CRAFTALE</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-12 md:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => {
              const id = item === "LET'S TALK" ? "book-a-call" : item.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.a
                  key={item}
                  onClick={(e) => scrollToSection(e, id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="cursor-pointer text-[10px] font-bold tracking-[0.2em] text-offwhite/40 transition-colors hover:text-offwhite"
                >
                  {item}
                </motion.a>
              );
            })}
          </div>

          <motion.a
            onClick={(e) => scrollToSection(e, "book-a-call")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-offwhite/20 transition-all hover:border-offwhite hover:bg-offwhite hover:text-charcoal"
          >
            <span className="absolute -top-12 whitespace-nowrap text-[10px] font-bold tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
              LET'S TALK
            </span>
            <ArrowUpRight size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Content */}
      <main id="our-story" className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col justify-center px-6 md:px-12">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <h1 className="font-display text-[10vw] leading-[0.85] font-medium tracking-[-0.04em] text-offwhite md:text-[7vw] lg:text-[6.5vw]">
              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  STRATEGY THAT
                </motion.span>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative inline-block"
                  >
                    ELEVATES
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="absolute -right-[0.1em] top-[0.1em] h-[0.8em] w-[2px] bg-offwhite/40"
                    />
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="md:ml-auto"
                  >
                    YOUR
                  </motion.span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex justify-end"
                >
                  <span className="text-right">DIGITAL PRESENCE</span>
                </motion.div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 max-w-2xl text-base font-normal leading-[1.6] text-zinc-400 md:text-lg lg:text-xl"
            >
              We engineer high-performance digital ecosystems by merging custom full-stack development with specialized performance marketing to scale your revenue on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              <a 
                href="#book-a-call"
                onClick={(e) => scrollToSection(e, "book-a-call")}
                className="group relative flex items-center gap-4 rounded-full bg-offwhite px-8 py-4 text-sm font-bold tracking-widest text-charcoal transition-all hover:bg-lime"
              >
                BOOK A STRATEGY CALL
                <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Micro-labels */}
        <div className="absolute bottom-12 left-6 md:left-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col gap-1 text-[10px] font-bold tracking-[0.2em] text-offwhite/40 uppercase"
          >
            <span>User-Centered,</span>
            <span>Thoughtful, Creative</span>
          </motion.div>
        </div>
      </main>

      {/* Social Proof Section */}
      <section id="social-proof" className="relative z-10 border-t border-white/5 bg-charcoal px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 font-display text-5xl font-medium tracking-tight text-offwhite md:text-7xl"
          >
            CAPITAL DEPLOYED.<br />RETURNS VERIFIED.
          </motion.h2>

          {/* Stat Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="mb-8 text-[10px] font-bold tracking-[0.2em] text-offwhite/40 uppercase">
                  {stat.label}
                </div>
                <div className="mb-4 font-display text-5xl font-semibold tracking-tighter text-offwhite">
                  {stat.metric}
                </div>
                <p className="text-sm leading-relaxed text-offwhite/60">
                  {stat.context}
                </p>
                {/* Glass reflection effect */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all group-hover:bg-white/10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Ribbon */}
        <div className="mt-32 overflow-hidden border-y border-white/5 py-12">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex w-max items-center gap-24 whitespace-nowrap px-12"
          >
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={`${industry.label}-${index}`}
                className="group relative flex items-center gap-3 text-offwhite/30 transition-colors hover:text-offwhite"
              >
                <industry.icon size={18} strokeWidth={1.5} />
                <span className="text-xs font-bold tracking-[0.1em] uppercase">
                  {industry.label}
                </span>
                
                {/* Hover Proof Fragment Tooltip */}
                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-offwhite px-2 py-1 text-[9px] font-bold tracking-wider text-charcoal opacity-0 transition-all group-hover:-top-14 group-hover:opacity-100">
                  {industry.proof}
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-offwhite" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="relative z-10 bg-[#0A0A0A] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32 text-center"
          >
            <h2 className="font-serif text-[6vw] leading-[1.1] font-bold text-offwhite md:text-[5vw] lg:text-[4.5vw]">
              Generating Traffic is Easy.<br />
              <span className="italic opacity-60">Generating Revenue is Hard.</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-graphite p-12 text-center transition-all hover:border-white/20"
              >
                {/* Metallic Rim Lighting Effect */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="mb-8 text-offwhite/40 transition-colors group-hover:text-offwhite">
                  {problem.icon}
                </div>
                
                <h3 className="font-display text-xl font-semibold tracking-tight text-offwhite">
                  {problem.title}
                </h3>

                {/* Subtle 3D Texture Element (Overlay) */}
                <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="relative z-10 bg-[#0A0A0A] px-6 py-16 md:px-12">
        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-offwhite/40 uppercase">
                The Solution
              </span>
              <h2 className="mt-4 font-display text-5xl font-medium tracking-tight text-offwhite md:text-7xl">
                A SYSTEM BUILT FOR<br />
                <span className="text-lime">PREDICTABLE GROWTH.</span>
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`group relative flex flex-col items-start justify-between gap-12 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-16 transition-all hover:border-white/10 ${solution.glow}`}
              >
                <div className="flex flex-col gap-6 md:max-w-xl">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-offwhite/20">
                    {solution.number}
                  </span>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-offwhite md:text-5xl">
                    {solution.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-offwhite/60">
                    {solution.description}
                  </p>
                </div>

                <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-white/[0.03] transition-transform duration-500 group-hover:scale-110">
                  {solution.icon}
                  {/* Inner Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-20 blur-2xl ${solution.color.replace('text-', 'bg-')}`} />
                </div>

                {/* Background Number Accent */}
                <div className="absolute -right-8 -bottom-12 pointer-events-none font-display text-[20vw] font-black text-white/[0.02] select-none">
                  {solution.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-charcoal px-6 py-16 md:px-12">
        <div id="product-design" className="absolute top-0" />
        <div id="websites" className="absolute top-1/2" />
        <div id="brand-identity" className="absolute top-1/4" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-offwhite/40 uppercase">
              Our Expertise
            </span>
            <h2 className="mt-4 font-display text-6xl font-medium tracking-tight text-offwhite md:text-8xl">
              SERVICES.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all hover:border-white/10 ${service.className}`}
              >
                <div className="flex flex-col p-10 md:p-14">
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-offwhite md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-offwhite/50">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {service.visual}
                  </motion.div>
                </div>

                {/* Cinematic Shadow/Glow Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-charcoal px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-7xl flex justify-center">
          <motion.a
            href="#book-a-call"
            onClick={(e) => scrollToSection(e, "book-a-call")}
            whileHover={{ 
              backgroundColor: "#4ade80",
              color: "#0A0A0A",
              scale: 1.02
            }}
            whileTap={{ 
              scale: 0.98,
              boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)"
            }}
            className="rounded-full bg-[#1a2e1a] px-12 py-5 text-lg font-medium text-offwhite transition-all duration-300 border border-white/5 shadow-2xl inline-block"
          >
            Book an Intro Call
          </motion.a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 bg-[#0A0A0A] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl text-center"
            >
              <blockquote className="font-serif text-3xl font-medium leading-tight text-offwhite md:text-4xl">
                "Craftale architected a revenue engine that delivered visible ROI within 30 days."
              </blockquote>
              
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full border border-white/10 shadow-xl">
                  <img
                    src="https://picsum.photos/seed/marcus/120/120"
                    alt="Marcus Thorne"
                    className="h-full w-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-offwhite uppercase">Marcus Thorne</div>
                  <div className="text-[10px] font-medium tracking-[0.1em] text-offwhite/40 uppercase">CEO at Vertex</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Marquee Testimonials */}
          <div className="mt-16 overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex w-max gap-8"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[350px] rounded-xl bg-white/[0.02] p-8 shadow-2xl backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
                >
                  <p className="font-serif text-lg text-offwhite/60 italic leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.author}
                      className="h-8 w-8 rounded-full grayscale border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-offwhite uppercase">{t.author}</div>
                      <div className="text-[8px] font-medium tracking-wider text-offwhite/30 uppercase">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-partner-with-us" className="relative z-10 bg-[#0A0A0A] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-32 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold tracking-[0.3em] text-offwhite/40 uppercase"
            >
              The Craftale Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 font-display text-5xl font-medium tracking-tight text-offwhite md:text-7xl"
            >
              WHY PARTNER WITH US.
            </motion.h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Institutional Grade",
                desc: "We apply the same rigor to your marketing that hedge funds apply to their portfolios."
              },
              {
                title: "Data Driven",
                desc: "Every pixel and every penny is tracked. We don't believe in vanity metrics."
              },
              {
                title: "Revenue Focused",
                desc: "Our only KPI is your bottom line. We build engines that generate cash, not just clicks."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-12 transition-all hover:border-white/10"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-offwhite">
                  {item.title}
                </h3>
                <p className="mt-4 text-offwhite/50 leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-a-call" className="relative z-10 bg-[#0A0A0A] px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative grid grid-cols-1 gap-24 lg:grid-cols-2">
            {/* Left Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-offwhite/40 uppercase">
                Direct Access
              </span>
              <h2 className="mt-6 font-display text-5xl font-medium tracking-tight text-offwhite md:text-7xl">
                START THE<br />CONVERSATION.
              </h2>
              
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-16 rounded-2xl border border-lime/20 bg-lime/5 p-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lime text-charcoal">
                    <Zap size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-offwhite">MESSAGE RECEIVED.</h3>
                  <p className="mt-4 text-offwhite/50">Our team will reach out within 24 hours to discuss your project.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-[10px] font-bold tracking-widest text-lime uppercase hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="mt-16 space-y-8" onSubmit={handleFormSubmit}>
                  {/* Honeypot field - hidden from users */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="FULL NAME" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-white/10 bg-transparent py-6 text-sm font-bold tracking-widest text-offwhite outline-none transition-colors focus:border-lime"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      required
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-white/10 bg-transparent py-6 text-sm font-bold tracking-widest text-offwhite outline-none transition-colors focus:border-lime"
                    />
                  </div>
                  <div className="relative">
                    <textarea 
                      required
                      placeholder="TELL US ABOUT YOUR PROJECT" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-b border-white/10 bg-transparent py-6 text-sm font-bold tracking-widest text-offwhite outline-none transition-colors focus:border-lime resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-8 w-full rounded-full border border-white/10 bg-white/5 py-6 text-[10px] font-bold tracking-[0.3em] text-offwhite uppercase transition-all hover:bg-white/10 disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "SENDING..." : "SUBMIT INQUIRY"}
                  </button>
                  {formStatus === "error" && (
                    <p className="mt-4 text-xs font-bold text-red-500">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Right Side: Calendar Interface */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
            >
              {/* Real Cal.com Embed */}
              <div className="h-[600px] w-full">
                <iframe
                  src="https://cal.com/tirth-thakkar-jonom8/15min"
                  title="Schedule a meeting"
                  className="h-full w-full border-none"
                  allow="camera; microphone; autoplay; payment; clipboard-write"
                />
              </div>
              
              {/* Overlay to guide user if they haven't replaced the link */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-charcoal/80 p-4 text-[8px] font-bold tracking-widest text-offwhite/40 uppercase backdrop-blur-md">
                Note: Replace the iframe src with your actual Cal.com link in App.tsx
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic Footer */}
      <footer className="relative z-10 bg-[#0A0A0A] pt-32 pb-12 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center">
            {/* Top: Logo with Rim Lighting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-20"
            >
              {/* Rim Lighting Glow */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-64 -translate-x-1/2 -translate-y-1/2 bg-lime/10 blur-[100px]" />
              
              <div className="flex items-baseline">
                <span className="font-display text-5xl font-bold tracking-tighter text-offwhite md:text-6xl">CRAFTALE</span>
              </div>
            </motion.div>

            {/* Middle: Navigation Links */}
            <nav className="mb-32 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {navItems.map((item) => {
                const id = item === "LET'S TALK" ? "book-a-call" : item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="text-[10px] font-bold tracking-[0.3em] text-offwhite/40 transition-colors hover:text-offwhite uppercase"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* Bottom Section: Separated by Whitespace */}
            <div className="relative w-full border-t border-white/5 pt-12">
              {/* Bottom Edge Glow */}
              <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-lime/20 to-transparent" />
              
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <span className="text-[9px] font-medium tracking-widest text-offwhite/60 uppercase">
                  © 2026 Craftale. All rights reserved.
                </span>
                <span className="text-[9px] font-medium tracking-widest text-offwhite/40 uppercase">
                  Designed by <span className="text-lime">Tirth Thakkar.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal p-6"
        >
          <button
            className="absolute top-8 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => {
              const id = item === "LET'S TALK" ? "book-a-call" : item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className="text-2xl font-bold tracking-widest text-offwhite"
                  onClick={(e) => {
                    scrollToSection(e, id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
