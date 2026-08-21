import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, Sparkles, ArrowDown, Scissors, Clock } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

const MARQUEE_ITEMS = [
  'KİŞİYE ÖZEL SAÇ TASARIMI',
  'SAKAL ŞEKİLLENDİRME',
  'SICAK HAVLU RİTÜELİ',
  'CİLT BAKIMI & MASKE',
  'ÖZEL DAMAT TRAŞI',
  'YÜZ ANATOMİSİ ANALİZİ',
  'PREMİUM ERKEK BAKIMI',
  'ÇORUM MERKEZ',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-radial-glow flex flex-col justify-between">
      
      {/* Background Decorative Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-sand/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Editorial Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill-badge mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
              <span className="text-alabaster font-medium">Boutique Men's Studio</span>
              <span className="text-slate-dark">/</span>
              <span className="text-amber">Çorum</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[64px] leading-[1.12] sm:leading-[1.08] text-alabaster tracking-[-0.03em] mb-5 sm:mb-6"
            >
              Kusursuz Kesim & <br />
              <span className="font-serif italic font-normal text-gradient-amber pr-2">
                Kişiye Özel
              </span>
              Stil İmzası.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-7 sm:mb-8"
            >
              Yüz anatomisi, saç yapısı ve yaşam tarzınıza özel olarak tasarlanan modern kuaförlük deneyimi. Üçtutlar Mah. Fatih Caddesi No:24/A (Ulukavak Muhtarlığı Karşısı) adresinde, randevulu ve ayrıcalıklı hizmet.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp'tan Randevu Al</span>
              </a>

              <a
                href="#services"
                className="btn-secondary"
              >
                <span>Hizmetleri Keşfet</span>
              </a>
            </motion.div>

            {/* Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-5 sm:pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-slate"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="font-bold text-alabaster">4.8</span>
                <span className="text-[11px] sm:text-xs text-slate-dark font-medium">(Müşteri Puanı)</span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <ShieldCheck size={15} className="text-emerald shrink-0" />
                <span>%100 Hijyen & Memnuniyet</span>
              </div>
            </motion.div>

          </div>

          {/* Right Master Stylist Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Outer Glow Frame */}
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Decorative Luxury Back Frame */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl border border-amber/20 bg-gradient-to-b from-amber/10 via-transparent to-transparent -z-10 blur-[1px]"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-noir-800 border border-white/15 shadow-luxury group">
                <img
                  src="/nurkan.jpg"
                  alt="Kuaför Nurkan Aydoğdu - Çorum Erkek Kuaförü ve Özel Saç Tasarımcısı"
                  width="440"
                  height="580"
                  fetchPriority="high"
                  className="w-full h-[450px] sm:h-[530px] lg:h-[580px] object-cover object-[center_42%] contrast-[1.08] brightness-[1.06] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Name Banner */}
                <div className="absolute bottom-0 inset-x-0 pt-16 pb-4 sm:pb-5 px-4 sm:px-6 bg-gradient-to-t from-noir-950 via-noir-950/75 to-transparent">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber font-semibold block mb-1">
                    Master Stylist & Founder
                  </span>
                  <h3 className="font-sans font-bold text-lg sm:text-2xl text-alabaster tracking-tight">
                    Nurkan Aydoğdu
                  </h3>
                </div>
              </div>

              {/* Floating Badge (Top Right): 10+ Years */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-3 -right-2 sm:-top-5 sm:-right-5 bg-noir-850/95 border border-amber/30 rounded-2xl p-3 sm:p-4 shadow-luxury backdrop-blur-xl flex items-center gap-2.5 sm:gap-3 z-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-amber shrink-0">
                  <Scissors size={18} />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-base sm:text-xl text-alabaster block leading-none">
                    7+ Yıl
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate uppercase tracking-wider mt-0.5 sm:mt-1 block">
                    Zanaat Tecrübesi
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Smooth Marquee Ticker */}
      <div className="w-full mt-12 sm:mt-16 py-4 bg-noir-850/50 border-y border-white/[0.06] backdrop-blur-sm overflow-hidden flex items-center">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-8 items-center">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-semibold tracking-[0.2em] text-slate-dark hover:text-amber transition-colors">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber/50"></span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
