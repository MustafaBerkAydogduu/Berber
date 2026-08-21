import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Navigation, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getSalonStatus } from '../utils/businessHours';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20adresiniz%20ve%20m%C3%BCsaitlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const MAP_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Üçtutlar+Mahallesi+Fatih+Caddesi+No:24/A+Ulukavak+Muhtarlığı+Karşısı+Çorum";

export default function Contact() {
  const [salonStatus, setSalonStatus] = useState(getSalonStatus());

  useEffect(() => {
    // 60 saniyede bir durumu güncelle
    const interval = setInterval(() => {
      setSalonStatus(getSalonStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-noir-950 relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="section-tag">
            <MapPin size={14} className="text-amber" />
            Salon & İletişim
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight mb-4">
            Bizi Ziyaret Edin & <br />
            <span className="font-serif italic font-normal text-gradient-amber">
              İletişime Geçin.
            </span>
          </h2>
          <p className="text-slate text-sm sm:text-base leading-relaxed">
            Çorum Merkez’de, Üçtutlar Mahallesi Fatih Caddesi No:24/A (Ulukavak Muhtarlığı Karşısı) adresinde modern ve konforlu erkek kuaförlüğü deneyimi.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Working Hours & Live Status */}
            <div className="surface-card p-6 bg-gradient-to-br from-noir-850 to-noir-900 border-amber/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber">
                  <Clock size={15} />
                  <span>Çalışma Saatleri</span>
                </div>
                {salonStatus.isOpen ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
                    Şu An Açık
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    Şu An Kapalı
                  </span>
                )}
              </div>
              <div className="space-y-1.5 text-sm text-alabaster">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate">Pazartesi – Cumartesi:</span>
                  <span className="font-bold">09:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-1 text-slate-dark">
                  <span>Pazar:</span>
                  <span className="text-rose-400/90 font-semibold">Kapalı</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <a
              href="tel:+905522742383"
              className="surface-card p-5 flex items-center justify-between group hover:border-amber/40"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-noir-800 border border-white/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-noir-950 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-slate uppercase tracking-wider block">Telefon & Arama</span>
                  <span className="font-sans font-bold text-base text-alabaster group-hover:text-amber transition-colors">
                    0552 274 23 83
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-dark group-hover:text-amber transition-colors" />
            </a>

            {/* WhatsApp Card */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="surface-card p-5 flex items-center justify-between group hover:border-[#25D366]/40"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <span className="text-[11px] text-slate uppercase tracking-wider block">Hızlı WhatsApp Randevusu</span>
                  <span className="font-sans font-bold text-base text-alabaster group-hover:text-[#25D366] transition-colors">
                    0552 274 23 83
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-dark group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/_nurkan_aydogdu_19"
              target="_blank"
              rel="noreferrer"
              className="surface-card p-5 flex items-center justify-between group hover:border-pink-500/40"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-slate uppercase tracking-wider block">Resmi Instagram Hesabı</span>
                  <span className="font-sans font-bold text-base text-alabaster group-hover:text-pink-400 transition-colors">
                    @_nurkan_aydogdu_19
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-dark group-hover:text-pink-400 transition-colors" />
            </a>

            {/* Address Card */}
            <div className="surface-card p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-noir-800 border border-white/10 flex items-center justify-center text-amber shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[11px] text-slate uppercase tracking-wider block">Adres Bilgisi</span>
                <p className="font-sans font-medium text-xs sm:text-sm text-alabaster leading-snug">
                  Üçtutlar Mah. Fatih Cad. No:24/A <br className="hidden sm:inline" />
                  <span className="text-amber/90 font-normal">(Ulukavak Muhtarlığı Karşısı)</span>, Merkez / Çorum
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between surface-card p-3 sm:p-4 bg-noir-900 border-white/[0.08] min-h-[420px] lg:min-h-full">
            
            {/* Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full rounded-xl overflow-hidden border border-white/[0.06]">
              <iframe
                title="Kuaför Nurkan Aydoğdu Konumu"
                src="https://maps.google.com/maps?q=%C3%9C%C3%A7tutlar+Mahallesi+Fatih+Caddesi+No:24/A+%C3%87orum&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.85) invert(0.92) contrast(1.1) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Bottom Actions */}
            <div className="pt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate">
                Merkezi ve kolay ulaşılabilir lokasyon.
              </span>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
              >
                <Navigation size={14} />
                <span>Google Haritada Yol Tarifi Al</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
