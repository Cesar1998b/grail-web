"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, Zap, Share2, CheckCircle2, 
  TrendingDown, ArrowUpRight, Smartphone, Layers,
  AlertCircle,
  LucideIcon
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface BentoCardProps {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon; // Flexibilidad para iconos
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="pt-8 pb-6">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Izquierda */}
        <div className="flex items-center gap-2.5">
          <Image src="/assets/logo.png" alt="Grail Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-lg font-bold text-slate-900 tracking-tight">Grail</span>
        </div>

        {/* Botón Join Beta - Derecha (Scroll al formulario) */}
        <a 
          href="#waitlist"
          className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500"
        >
          <Smartphone size={16} />
          {t.navbar.joinBeta}
        </a>
      </div>
    </nav>
  );
};

const PhoneFrame = () => (
  <div className="relative h-full w-full flex items-center justify-center p-8">
    <motion.div 
        initial={{ y: 20, opacity: 0, rotate: -2 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="relative border-slate-950 bg-slate-950 border-[10px] rounded-[3rem] h-[650px] w-[300px] shadow-2xl shadow-slate-200 flex flex-col overflow-hidden ring-1 ring-slate-900/10"
    >
        {/* Reflejos Realistas Premium */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-white/5 z-20 pointer-events-none rounded-[2.8rem]" />
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none mix-blend-overlay" />
        
        {/* VIDEO CONTAINER */}
        <div className="w-full h-full bg-black relative overflow-hidden">
             <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/assets/poster.jpg" 
            >
               <source src="/assets/demo.webm" type="video/webm" />
               <source src="/assets/demo.mp4" type="video/mp4" />
            </video>
            
            {/* Capa sutil para integrar el video con el marco negro */}
            <div className="absolute inset-0 bg-slate-900/5 pointer-events-none mix-blend-multiply" />
        </div>
    </motion.div>
  </div>
);

// --- Bento Card Component ---
const BentoCard = ({ children, className, title, subtitle, icon: Icon }: BentoCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -4 }}
    className={cn(
      "group relative overflow-hidden rounded-2xl p-8 flex flex-col transition-all duration-300",
      "bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative flex flex-col h-full">
      {Icon && (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-slate-600 bg-slate-50 group-hover:bg-slate-100 group-hover:text-slate-900 transition-all duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      
      {title && <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-black transition-colors">{title}</h3>}
      {subtitle && <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors">{subtitle}</p>}
      
      {children}
    </div>
  </motion.div>
);

// --- Sections ---

const Hero = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  // Estados ampliados para manejar feedback visual
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      // LLAMADA REAL A LA API
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setState("success");
        setEmail(""); // Limpiamos el campo
      } else {
        setState("error");
        // Volvemos a 'idle' después de 3 segundos para que puedan reintentar
        setTimeout(() => setState("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
        >
          {t.hero.title}{" "}
          <span className="text-slate-400">{t.hero.titleHighlight}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          {t.hero.description}
        </motion.p>

        {/* Formulario conectado a la API */}
        <motion.form 
          id="waitlist"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit} 
          className="w-full flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4 sm:px-0 relative"
        >
          <input 
            type="email" 
            required 
            placeholder={t.hero.placeholder} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "loading" || state === "success"}
            className="sm:flex-1 h-12 px-4 rounded-lg bg-white border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm disabled:opacity-60 disabled:bg-slate-50"
          />
          <button 
            type="submit" 
            disabled={state !== "idle" && state !== "error"}
            className={cn(
              "h-12 px-6 font-medium rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer text-sm flex-shrink-0 min-w-[120px]",
              state === "error" ? "bg-red-500 hover:bg-red-600 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
            )}
          >
            {state === "loading" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : state === "success" ? (
              <>Done <CheckCircle2 size={18} /></>
            ) : state === "error" ? (
              <>Retry <AlertCircle size={18} /></>
            ) : (
              <>
                Join Beta <ArrowUpRight size={16} />
              </>
            )}
          </button>

          {/* Mensaje de feedback flotante */}
          {state === "success" && (
            <div className="absolute -bottom-10 left-0 right-0 text-center animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-green-600 font-medium">{t.hero.successMessage}</p>
            </div>
          )}
        </motion.form>
      </div>

      <div className="max-w-sm mx-auto">
        <PhoneFrame />
      </div>
    </section>
  );
};

// --- Features Grid ---
const FeaturesGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-20">
    <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">{t.features.title}</h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">{t.features.subtitle}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <BentoCard title={t.features.universalScraper.title} subtitle={t.features.universalScraper.subtitle} icon={Globe} />
        <BentoCard title={t.features.priceAlerts.title} subtitle={t.features.priceAlerts.subtitle} icon={TrendingDown} />
        <BentoCard title={t.features.currency.title} subtitle={t.features.currency.subtitle} icon={Zap} />
        <BentoCard title={t.features.extension.title} subtitle={t.features.extension.subtitle} icon={Share2} />
        <BentoCard title={t.features.wishlist.title} subtitle={t.features.wishlist.subtitle} icon={Layers} />
        <BentoCard title={t.features.ios.title} subtitle={t.features.ios.subtitle} icon={Smartphone} />
    </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 md:py-20 mt-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                <div className="flex items-center gap-3">
                    <Image src="/assets/logo.png" alt="Grail" width={32} height={32} className="w-8 h-8 opacity-90" />
                    <span className="text-lg font-bold text-slate-900">Grail</span>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {[
                      { key: "twitter", label: t.footer.links.twitter, href: "https://x.com/cdavidb98" },
                      { key: "privacy", label: t.footer.links.privacy, href: "/legal/privacy" },
                      { key: "terms", label: t.footer.links.terms, href: "/legal/terms" },
                    ].map((link) => (
                        <a key={link.key} href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-medium">{t.footer.copyright}</p>
            </div>
        </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-400 selection:text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <Footer />
    </main>
  );
}