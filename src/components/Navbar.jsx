import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { getSalonStatus } from '../utils/businessHours';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

const NAV_LINKS = [
  { label: 'HAKKIMIZDA', href: '#about' },
  { label: 'HİZMETLERİMİZ', href: '#services' },
  { label: 'YORUMLAR', href: '#testimonials' },
  { label: 'SSS', href: '#faq' },
  { label: 'İLETİŞİM', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [salonStatus, setSalonStatus] = useState(getSalonStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setSalonStatus(getSalonStatus());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open: mobileOpen } }));

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
      window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open: false } }));
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[60] bg-white border-b border-gray-100 py-4 sm:py-4.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

          {/* 1. SOL BLOK: Logo */}
          <div className="flex items-center shrink-0">
            <a href="#" className="inline-flex items-center group py-0.5">
              <span className="font-signature text-2xl sm:text-3xl lg:text-[34px] text-[#161719] group-hover:text-[#9E7A3B] transition-colors leading-normal tracking-normal whitespace-nowrap">
                Nurkan Aydoğdu
              </span>
            </a>
          </div>

          {/* 2. ORTA BLOK: Menü Linkleri */}
          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-8 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold tracking-[0.12em] text-[#161719]/80 hover:text-[#9E7A3B] transition-colors uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 3. SAĞ BLOK: Durum, Telefon & Randevu Butonu */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Canlı Durum Rozeti */}
            {salonStatus.isOpen ? (
              <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Açık
              </span>
            ) : (
              <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-neutral-100 text-neutral-700 border border-neutral-200 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                {salonStatus.isSunday ? 'Pazar Kapalı' : 'Kapalı'}
              </span>
            )}

            {/* Telefon Butonu (Masaüstünde WhatsApp önde olduğu için sadece mobilde/tabletlerde pratik arama olarak tutulur) */}
            <a
              href="tel:+905522742383"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-[#FAF9FB] hover:bg-gray-100 hover:border-[#9E7A3B] text-[#161719] flex items-center justify-center transition-all shrink-0 lg:hidden"
              title="Telefonla Ara (0552 274 23 83)"
              aria-label="Telefonla Ara"
            >
              <Phone size={15} className="text-[#9E7A3B]" />
            </a>

            {/* Randevu Al Butonu */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex btn-kadir-primary py-2.5 px-5 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap shrink-0 items-center justify-center gap-2 rounded-md"
            >
              <WhatsAppIcon size={15} />
              <span>Randevu Al</span>
            </a>

            {/* Hamburger Menü */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#161719] hover:bg-gray-100 hover:text-[#9E7A3B] transition-colors"
              aria-label={mobileOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-white xl:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans font-bold text-lg tracking-[0.12em] text-[#161719] hover:text-[#9E7A3B] flex items-center justify-between py-3.5 border-b border-gray-100 text-left uppercase transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#9E7A3B] transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-100 mt-4">
              <div className="flex items-center gap-2 text-xs font-bold">
                {salonStatus.isOpen ? (
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Şu An Açık (09:00 – 20:00)
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-rose-600">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    {salonStatus.isSunday ? 'Bugün Kapalı (Pazar)' : 'Şu An Kapalı (Açılış: 09:00)'}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Üçtutlar Mah. Fatih Cad. No:24/A (Ulukavak Muhtarlığı Karşısı), Merkez / Çorum
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+905522742383"
                  className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9FB] hover:bg-gray-100 text-[#161719] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Phone size={14} className="text-[#9E7A3B]" />
                  <span>Hemen Ara</span>
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#9E7A3B] hover:bg-[#7A5C28] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
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