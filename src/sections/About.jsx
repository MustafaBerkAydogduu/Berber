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
          
          {/* Left Column: Portrait Showcase Frame (Clean & Pure Studio Portrait) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#222428] border border-white/10 shadow-2xl group">
              <img
                src="/nurkan-portrait.jpg"
                alt="Nurkan Aydoğdu - Kurucu & Erkek Kuaförü"
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-103"
              />

              {/* Elegant Bottom Master Quote Overlay (Classic Version) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-7">
                <div className="border-l-2 border-[#C5A059] pl-3.5 sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-1">
                    Kurucu & Usta Notu
                  </span>
                  <blockquote className="font-serif italic text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                    “Erkek kuaförlüğü sadece saç kısaltmak değildir; insanın duruşunu, ifadesini ve özgüvenini tazeleyen bir sanattır.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Story (Clean, Authentic & Grounded) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Subtitle */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-3">
              <span>ÇORUM · MERKEZ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              <span>EST. 2019</span>
            </div>

            {/* Giant Title */}
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[48px] text-white tracking-tight leading-tight mb-5 sm:mb-6 uppercase">
              NURKAN AYDOĞDU <br />
              <span className="text-[#C5A059]">KİMDİR?</span>
            </h2>

            {/* Natural, Realistic & Authentic Biography */}
            <div className="space-y-3.5 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Erkek kuaförlüğü mesleğine yıllarını veren <strong className="text-white">Nurkan Aydoğdu</strong>, Çorum Merkez'deki salonunda her misafirinin yüz yapısına ve kişisel tarzına en uygun saç ve sakal kesimlerini titizlikle uygulamaktadır.
              </p>
              
              <p>
                Tek tip ve ezbere kesimler yerine; misafirlerinin saç yapısını, kafa formunu ve günlük kullanım alışkanlıklarını göz önünde bulundurarak hem modern hem de evde kolayca şekil alabilen doğal modeller ortaya çıkarır.
              </p>

              <p>
                Üçtutlar Mahallesi Fatih Caddesi'ndeki nezih salonunda; hijyen kurallarına uygun sterilize ekipmanlar, kaliteli bakım ürünleri ve randevulu çalışma düzeniyle samimi ve konforlu bir kuaförlük deneyimi sunmaktadır.
              </p>
            </div>

            {/* 3 Core Pillars (Symmetrically Centered & Balanced) */}
            <div className="grid grid-cols-3 divide-x divide-white/10 pt-6 mt-6 border-t border-white/10 w-full text-center">
              <div className="flex flex-col items-center px-1 sm:px-2">
                <span className="font-extrabold text-lg sm:text-2xl text-white tracking-tight">7+ Yıl</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold mt-0.5">Ustalık Deneyimi</span>
              </div>
              <div className="flex flex-col items-center px-1 sm:px-2">
                <span className="font-extrabold text-lg sm:text-2xl text-white tracking-tight">1.000+</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold mt-0.5">Mutlu Misafir</span>
              </div>
              <div className="flex flex-col items-center px-1 sm:px-2">
                <span className="font-extrabold text-lg sm:text-2xl text-white tracking-tight">4.7 ★</span>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-semibold mt-0.5">Müşteri Puanı</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
