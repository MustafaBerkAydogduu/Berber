import React, { useState } from 'react';
import { Instagram, Phone, MapPin, Clock, ArrowUpRight, Lock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import LegalModal from './LegalModal';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

const NAV_LINKS = [
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetlerimiz', href: '#services' },
  { label: 'Portfolyo', href: '#gallery' },
  { label: 'Müşteri Yorumları', href: '#testimonials' },
  { label: 'Sıkça Sorulan Sorular', href: '#faq' },
  { label: 'İletişim & Konum', href: '#contact' },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'kvkk' });

  return (
    <footer className="bg-[#161719] text-white pt-16 pb-12 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="font-signature text-4xl text-[#C5A059] mb-3 inline-block">
              Nurkan Aydoğdu
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Çorum'da modern saç kesim teknikleri, anatomik sakal tasarımı ve ferahlatıcı cilt bakımı ile birinci sınıf erkek kuaförlüğü salonu.
            </p>
            <a
              href="https://instagram.com/_nurkan_aydogdu_19"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram size={16} />
              <span>@_nurkan_aydogdu_19</span>
            </a>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-extrabold mb-5">
              Hızlı Gezinti
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-extrabold mb-5">
              İletişim & Randevu
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <a
                href="tel:+905522742383"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#C5A059]" />
                <span>0552 274 23 83</span>
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <WhatsAppIcon size={14} className="text-emerald-400" />
                <span>WhatsApp Doğrudan Hat</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>Üçtutlar Mah. Fatih Cad. No:24/A (Ulukavak Muhtarlığı Karşısı), Çorum</span>
              </div>
            </div>
          </div>

          {/* Hours (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-extrabold mb-5">
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Clock size={13} />
                <span>Pzt – Cmt</span>
              </div>
              <p className="font-extrabold text-white">09:00 – 20:00</p>
              <p className="text-[11px] text-gray-500 pt-1">Pazar Günleri Kapalıdır.</p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Kuaför Nurkan Aydoğdu. Tüm hakları saklıdır.</p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Web Tasarım & Geliştirme:{' '}
              <span className="text-[#C5A059] font-semibold">Mustafa Berk Aydoğdu</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'kvkk' })}
              className="hover:text-white transition-colors"
            >
              KVKK
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'aydinlatma' })}
              className="hover:text-white transition-colors"
            >
              Aydınlatma Metni
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal({ isOpen: true, tab: 'gizlilik' })}
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </button>
          </div>
        </div>

      </div>

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal((prev) => ({ ...prev, isOpen: false }))}
        initialTab={legalModal.tab}
      />

    </footer>
  );
}
