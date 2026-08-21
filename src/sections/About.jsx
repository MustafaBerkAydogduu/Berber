import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2, Shield, HeartHandshake, Scissors, UserCheck } from 'lucide-react';

const STATS = [
  { value: '10+', label: 'Yıllık Ustalık Deneyimi', desc: 'Zanaat ve modern trendlerin birleşimi' },
  { value: '8.500+', label: 'Memnun Müşteri', desc: 'Çorum ve çevre illerden sadık misafirler' },
  { value: '%100', label: 'Kişiye Özel Tasarım', desc: 'Her kafa yapısına özel stil haritası' },
  { value: '5.0 ★', label: 'Hizmet Memnuniyeti', desc: 'Sürekli yüksek puanlı müşteri geri bildirimleri' },
];

const HIGHLIGHTS = [
  {
    title: 'Yüz & Kafa Anatomisi Analizi',
    desc: 'Kesime başlamadan önce çene hattı, elmacık kemikleri ve saç yönünü analiz ederek size en çok yakışan formu çıkarıyoruz.',
  },
  {
    title: 'Sıcak Havlu & Sakal Ritüeli',
    desc: 'Geleneksel ustura tıraşını esansiyel yağlar, buhar bakımı ve rahatlatıcı sıcak havlu masajı ile birleştiriyoruz.',
  },
  {
    title: 'Medikal Düzeyde Hijyen',
    desc: 'Tek kullanımlık havlular, sterilize edilmiş aletler ve uluslararası standartta profesyonel bakım ürünleri.',
  },
  {
    title: 'Ayrıcalıklı & Sakin Atmosfer',
    desc: 'Sıra beklemeden, gürültüden uzak, özel ikramlar eşliğinde dinlenebileceğiniz butik bir alan.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-noir-900 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="section-tag">
              <Sparkles size={14} className="text-amber" />
              Zanaat & Vizyon
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Her Detayda <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Ustalık & Saygı.
              </span>
            </h2>
          </div>
          <p className="text-slate text-sm sm:text-base max-w-md leading-relaxed">
            Nurkan Aydoğdu Stüdyosu, sıradan bir kuaför salonundan çok daha fazlasıdır. Burası her erkeğin kendine zaman ayırdığı, tarzını yenilediği ve koltuktan özgüvenle kalktığı bir stil mabedidir.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-14 lg:mb-24">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="surface-card p-4 sm:p-7 flex flex-col justify-between group hover:border-amber/40"
            >
              <div>
                <span className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-alabaster group-hover:text-amber transition-colors">
                  {stat.value}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-base text-alabaster mt-1.5 sm:mt-2 mb-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-slate text-[11px] sm:text-xs leading-relaxed mt-1 sm:mt-2">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights & Stylist Philosophy 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Highlights 4 Items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-noir-850/60 border border-white/[0.06] hover:border-amber/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center text-amber mb-4">
                  <CheckCircle2 size={16} />
                </div>
                <h4 className="font-sans font-bold text-base text-alabaster mb-2">
                  {h.title}
                </h4>
                <p className="text-slate text-xs sm:text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Master's Quote Card */}
          <div className="lg:col-span-5">
            <div className="surface-card p-8 sm:p-10 border-amber/30 bg-gradient-to-br from-noir-850 via-noir-800 to-noir-850 relative overflow-hidden">
              
              <div className="text-amber/20 font-serif text-8xl leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                “
              </div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber font-semibold block mb-4">
                  Kurucu & Usta Stilist Notu
                </span>

                <blockquote className="font-serif italic text-lg sm:text-xl text-alabaster leading-relaxed mb-6">
                  “Erkek kuaförlüğü sadece saç kısaltmak değildir. İnsanın duruşunu, ifadesini ve ilk izlenimini değiştiren bir sanattır. Stüdyomuzdaki her misafirimize bir sanat eseri titizliğiyle yaklaşıyoruz.”
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-amber/40">
                    <img
                      src="/nurkan.jpg"
                      alt="Kuaför Nurkan Aydoğdu - Çorum Erkek Kuaförü Kurucusu"
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-[center_35%] contrast-[1.08] brightness-[1.06]"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-base text-alabaster">
                      Nurkan Aydoğdu
                    </h4>
                    <span className="text-xs text-slate">
                      Master Stylist & Çorum Hair Studio
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
