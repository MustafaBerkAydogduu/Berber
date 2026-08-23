import React, { useState } from 'react';
import { Instagram, Phone, MapPin, Clock, ArrowUpRight, Scissors, Lock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import BrandIcon from './BrandIcon';
import LegalModal from './LegalModal';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

const NAV_LINKS = [
  { label: 'Hikaye & Zanaat', href: '#about' },
  { label: 'Hizmetler & Menü', href: '#services' },
  { label: 'Stil Portfolyosu', href: '#gallery' },
  { label: 'Müşteri Yorumları', href: '#testimonials' },
  { label: 'Sıkça Sorulan Sorular', href: '#faq' },
  { label: 'İletişim & Konum', href: '#contact' },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'kvkk' });

  return (
    <footer className="bg-noir-950 border-t border-white/[0.08] relative overflow-hidden pt-16 pb-12">
      
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
        <div className="surface-card p-8 sm:p-12 bg-gradient-to-r from-noir-900 via-noir-850 to-noir-900 border-amber/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber font-semibold block mb-2">
              Modern Erkek Kuaförlüğü
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-alabaster tracking-tight">
              Yeni Tarzınızı Keşfetmeye Hazır mısınız?
            </h3>
            <p className="text-slate text-xs sm:text-sm mt-2">
              Sıra beklemeden, vaktinize değer veren randevu sistemimizle yerinizi hemen ayırtın.
            </p>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary py-4 px-8 text-xs shrink-0 self-start lg:self-center"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp ile Randevu Al</span>
          </a>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3.5 group mb-4">
              <BrandIcon size={42} />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg tracking-[0.14em] text-alabaster group-hover:text-amber transition-colors">
                  NURKAN AYDOĞDU
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-amber font-semibold mt-0.5">
                  Erkek Kuaförü
                </span>
              </div>
            </a>
            <p className="text-slate text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Çorum'da modern saç kesim teknikleri, anatomik sakal tasarımı ve ferahlatıcı cilt bakımı ile birinci sınıf erkek kuaförlüğü salonu.
            </p>
            <a
              href="https://instagram.com/_nurkan_aydogdu_19"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram size={15} />
              <span>@_nurkan_aydogdu_19</span>
            </a>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-alabaster font-bold mb-5">
              Hızlı Gezinti
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-slate hover:text-amber transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-alabaster font-bold mb-5">
              İletişim & Randevu
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+905522742383"
                className="flex items-center gap-2.5 text-xs text-slate hover:text-alabaster transition-colors"
              >
                <Phone size={14} className="text-amber shrink-0" />
                <span>0552 274 23 83</span>
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                <span>WhatsApp Doğrudan Hat</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate">
                <MapPin size={14} className="text-amber shrink-0 mt-0.5" />
                <span>Üçtutlar Mah. Fatih Cad. No:24/A (Ulukavak Muhtarlığı Karşısı), Merkez / Çorum</span>
              </div>
            </div>
          </div>

          {/* Working Hours (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-alabaster font-bold mb-5">
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 text-xs text-slate">
              <div className="flex items-center gap-2 text-emerald font-medium">
                <Clock size={13} />
                <span>Pzt – Cmt</span>
              </div>
              <p className="font-bold text-alabaster">09:00 – 20:00</p>
              <p className="text-[11px] text-slate-dark pt-1">Pazar Günleri Kapalıdır.</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright, Credits & Legal Links */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-dark border-t border-white/[0.04]">
          
          {/* Left: Copyright & Developer Credit */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <p className="text-xs sm:text-sm text-alabaster/85 font-normal tracking-wide">
              © {new Date().getFullYear()} Kuaför Nurkan Aydoğdu. Tüm hakları saklıdır.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-dark">
              Web Tasarım & Geliştirme:{' '}
              <span className="text-slate hover:text-amber font-medium transition-colors duration-200 cursor-pointer underline underline-offset-4 decoration-amber/30 hover:decoration-amber">
                Mustafa Berk Aydoğdu
              </span>
            </p>
          </div>

          {/* Right: Legal Policy Links & Security Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[11px]">
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'kvkk' })}
              className="text-slate-dark hover:text-amber transition-colors font-medium cursor-pointer"
            >
              KVKK
            </button>
            <span className="text-white/10 hidden sm:inline">•</span>
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'aydinlatma' })}
              className="text-slate-dark hover:text-amber transition-colors font-medium cursor-pointer"
            >
              Aydınlatma Metni
            </button>
            <span className="text-white/10 hidden sm:inline">•</span>
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'gizlilik' })}
              className="text-slate-dark hover:text-amber transition-colors font-medium cursor-pointer"
            >
              Gizlilik Politikası
            </button>
            <span className="text-white/10 hidden sm:inline">•</span>
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'cerez' })}
              className="text-slate-dark hover:text-amber transition-colors font-medium cursor-pointer"
            >
              Çerez Politikası
            </button>

            {/* Security Badge Icons (Non-clickable with sleek hover glow animations) */}
            <div className="flex items-center gap-1.5 sm:border-l sm:border-white/10 sm:pl-2 text-slate-dark">
              <div
                title="256-Bit SSL Şifreli Güvenli Bağlantı"
                className="w-6 h-6 rounded-full bg-white/[0.03] hover:bg-emerald/10 border border-white/[0.08] hover:border-emerald/40 flex items-center justify-center text-slate-dark hover:text-emerald cursor-default select-none transition-all duration-300 hover:scale-110"
              >
                <Lock size={11} />
              </div>
              <div
                title="KVKK Uyumlu Güvenli Hizmet"
                className="w-6 h-6 rounded-full bg-white/[0.03] hover:bg-amber/10 border border-white/[0.08] hover:border-amber/40 flex items-center justify-center text-slate-dark hover:text-amber cursor-default select-none transition-all duration-300 hover:scale-110"
              >
                <ShieldCheck size={12} />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Full Legal Content Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal((prev) => ({ ...prev, isOpen: false }))}
        initialTab={legalModal.tab}
      />

    </footer>
  );
}
