import React from 'react';
import { Play, Scissors, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-[#161719] text-white relative overflow-hidden">
      
      {/* Giant Signature Watermark in Background (Kadir Alkan Style) */}
      <div className="absolute top-2 sm:top-4 lg:top-8 inset-x-0 w-full text-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-signature text-[90px] sm:text-[160px] lg:text-[220px] text-[#C5A059]/[0.22] whitespace-nowrap leading-none block -rotate-2 select-none">
          Nurkan Aydoğdu
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Media Showcase Frame (Exact Kadir Alkan Video/Photo Box) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#222428] border border-white/10 shadow-2xl group">
              <img
                src="/nurkan.jpg"
                alt="Nurkan Aydoğdu Kimdir? Erkek Kuaförlüğü ve Saç Tasarımı"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[460px] object-cover object-[center_35%] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay & Video Title Banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-5 sm:p-8">
                
                {/* Top Channel Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#9E7A3B] flex items-center justify-center text-white font-bold text-xs shadow-md">
                    NA
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block leading-tight">
                      NURKAN AYDOĞDU
                    </span>
                    <span className="text-[10px] text-gray-400 block font-medium">
                      Kurucu & Saç Tasarımcısı
                    </span>
                  </div>
                </div>

                {/* Center / Play Visual Indicator */}
                <div className="self-center my-auto">
                  <a
                    href="https://instagram.com/_nurkan_aydogdu_19"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#9E7A3B] hover:bg-[#B8860B] flex items-center justify-center text-white shadow-[0_0_30px_rgba(158,122,59,0.5)] transition-transform duration-300 hover:scale-110"
                    title="İşlerimizi İzleyin"
                  >
                    <Play size={22} className="fill-white ml-1" />
                  </a>
                </div>

                {/* Bottom Overlay Title (Kadir Alkan Style) */}
                <div>
                  <span className="font-extrabold text-base sm:text-2xl text-white tracking-wide block uppercase leading-tight">
                    NURKAN AYDOĞDU ASLINDA KİMDİR? NELER YAPMIŞTIR?
                  </span>
                  <span className="text-xs text-[#C5A059] font-bold mt-1 block">
                    Çorum Merkez Salonumuzda Birebir Hizmet
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Biography & Story (Exact Kadir Alkan Text Layout) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Subtitle */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-3">
              <span>ÇORUM · MERKEZ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              <span>EST. 2019</span>
            </div>

            {/* Giant Title */}
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[52px] text-white tracking-tight leading-tight mb-5 sm:mb-6 uppercase">
              NURKAN AYDOĞDU <br />
              <span className="text-[#C5A059]">KİMDİR?</span>
            </h2>

            {/* Rich Biography Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Erkek kuaförlüğü mesleğine yıllar önce büyük bir tutku ve disiplinle adım atan <strong className="text-white">Nurkan Aydoğdu</strong>, geleneksel berber zanaatını modern dünya saç kesim trendleri ve yüz anatomisi analiziyle birleştirmiştir.
              </p>
              
              <p>
                Her misafirin saç yapısı, kafa formu ve günlük yaşam tarzı birbirinden farklıdır. Bu vizyon doğrultusunda ezbere saç kesmek yerine; kişiye özel stil haritalandırması yaparak en doğal ve kolay şekil alan kesimleri ortaya çıkarmaktadır.
              </p>

              <p>
                Çorum Merkez'de, Üçtutlar Mahallesi Fatih Caddesi'nde yer alan nezih ve ferah salonunda; hijyenik sterilize ekipmanlar, uluslararası kalitede bakım ürünleri ve randevulu çalışma disiplini ile ayrıcalıklı bir kuaförlük deneyimi sunmaktadır.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 mt-6 border-t border-white/10 w-full text-left">
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-xl text-white">7+ Yıl</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold">Ustalık Deneyimi</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-xl text-white">1.000+</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold">Mutlu Misafir</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-xl text-white">4.7 ★</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold">Müşteri Puanı</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
