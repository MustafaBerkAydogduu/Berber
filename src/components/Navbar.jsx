import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import BrandIcon from './BrandIcon';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

const NAV_LINKS = [
  { label: 'Hikaye', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Stil Portfolyosu', href: '#gallery' },
  { label: 'Yorumlar', href: '#testimonials' },
  { label: 'SSS', href: '#faq' },
  { label: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-noir-950/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-luxury'
            : 'bg-gradient-to-b from-noir-950/90 via-noir-950/40 to-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group text-left">
            <BrandIcon size={36} />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-sm sm:text-base tracking-[0.12em] text-alabaster group-hover:text-amber transition-colors duration-300 leading-tight">
                NURKAN AYDOĞDU
              </span>
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-amber font-semibold mt-0.5">
                Erkek Kuaförü
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-noir-850/60 border border-white/[0.06] px-6 py-2.5 rounded-full backdrop-blur-md shadow-card">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.12em] text-slate hover:text-alabaster transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Open Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[11px] font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
              </span>
              Randevuya Açık
            </div>

            {/* Quick Call */}
            <a
              href="tel:+905522742383"
              className="p-2.5 rounded-full bg-noir-800 border border-white/10 text-slate hover:text-amber hover:border-amber/40 transition-all duration-300"
              title="Doğrudan Ara"
            >
              <Phone size={16} />
            </a>

            {/* Main WhatsApp Booking Button */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2.5 px-5 text-[11px]"
            >
              <WhatsAppIcon size={16} />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-full bg-noir-850 border border-white/10 text-alabaster hover:text-amber transition-colors"
            aria-label="Menüyü Aç"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-noir-950/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pt-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-dark font-semibold">
                Menü Gezintisi
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans font-bold text-2xl text-alabaster hover:text-amber flex items-center justify-between border-b border-white/[0.05] pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-slate-dark" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-emerald text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald animate-pulse"></span>
                Bugün Açık · 09:00 – 20:00
              </div>
              <p className="text-slate text-xs leading-relaxed">
                Üçtutlar Mah. Fatih Cad. No:24/A (Ulukavak Muhtarlığı Karşısı), Merkez / Çorum
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+905522742383"
                  className="btn-secondary py-3 text-center text-[11px]"
                >
                  <Phone size={14} />
                  <span>Hemen Ara</span>
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-3 text-center text-[11px]"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
