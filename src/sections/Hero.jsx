import React from 'react';
import { Star, ShieldCheck, ArrowRight, Scissors } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-gradient-to-r from-[#E6E7EA] via-[#ECEEF0] to-[#F5F6F8] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Gold Kicker Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#9E7A3B] uppercase mb-4">
              <span>ÇORUM · MERKEZ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7A3B]"></span>
              <span>ERKEK KUAFÖRÜ</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.1] sm:leading-[1.08] text-[#161719] tracking-tight mb-5">
              KİŞİYE ÖZEL <br />
              <span className="text-[#9E7A3B]">SAÇ & SAKAL</span> <br />
              TASARIMI
            </h1>

            {/* Subheading (with data-nosnippet so Google strictly uses the official brand description) */}
            <p data-nosnippet className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 font-medium">
              Yüz anatomisine uygun modern saç kesim teknikleri, geleneksel ustura sakal şekillendirme ve ferahlatıcı saç-cilt bakımı. Sıra beklemeden, randevulu ve nezih salon deneyimi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-kadir-primary py-4 px-8 text-xs font-bold text-center"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp'tan Randevu Al</span>
              </a>

              <a
                href="#services"
                className="btn-kadir-outline py-4 px-8 text-xs font-bold bg-white/60 text-center"
              >
                <span>Hizmetlerimizi İnceleyin</span>
              </a>
            </div>

            {/* Verification Bar */}
            <div className="pt-6 border-t border-gray-300/80 w-full flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6 text-xs text-gray-600 font-semibold">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#9E7A3B]">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <div className="relative inline-flex items-center">
                    <Star size={14} className="text-gray-300" fill="currentColor" />
                    <div className="absolute inset-0 overflow-hidden w-[70%] flex items-center">
                      <Star size={14} className="text-[#9E7A3B] shrink-0" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <span className="font-extrabold text-[#161719] text-sm">4.7 / 5.0</span>
                <span className="text-gray-500 font-normal">(Doğrulanmış Puan)</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-800">
                <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
                <span>%100 Hijyenik & Steril Ekipman</span>
              </div>
            </div>

          </div>

          {/* Right Master Portrait Visual (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Photo Card Frame with Kadir Alkan Gold Accent */}
              <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl border border-gray-200 group">
                <img
                  src="/nurkan.jpg"
                  alt="Nurkan Aydoğdu - Erkek Kuaförü ve Saç Tasarımcısı"
                  width="440"
                  height="580"
                  fetchpriority="high"
                  className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover object-[center_40%] contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Signature Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#161719] via-[#161719]/80 to-transparent text-white">
                  <span className="font-signature text-2xl sm:text-3xl text-[#C5A059] block">
                    Nurkan Aydoğdu
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300 mt-0.5 block">
                    Kurucu & Saç Tasarımcısı · Çorum
                  </span>
                </div>
              </div>

              {/* Floating Badge (7+ Yıllık Deneyim) */}
              <div className="absolute top-3 right-3 sm:-top-5 sm:-right-4 bg-[#161719] text-white border-2 border-[#9E7A3B] rounded-lg p-3 sm:p-3.5 shadow-2xl flex items-center gap-2.5 sm:gap-3 z-20">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#9E7A3B] text-white flex items-center justify-center font-bold shrink-0">
                  <Scissors size={17} />
                </div>
                <div>
                  <span className="font-extrabold text-sm sm:text-base text-white block leading-none">
                    7+ YIL
                  </span>
                  <span className="text-[9px] font-bold tracking-wider text-[#C5A059] uppercase block mt-0.5 whitespace-nowrap">
                    Zanaat & Deneyim
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
