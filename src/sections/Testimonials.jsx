import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MessageSquare, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Yazılım Mühendisi',
    date: '2 gün önce',
    rating: 5,
    comment: 'Çorum’da aradığım o modern, randevusuna sadık ve işini gerçekten sanat gibi yapan kuaförü sonunda buldum. Nurkan Bey yüz hatlarıma göre saç ve sakalımı öyle bir ayarladı ki çevremdekiler hemen fark etti.',
    service: 'Saç & Sakal Kombin',
  },
  {
    name: 'Murat Kara',
    role: 'Mimar',
    date: '1 hafta önce',
    rating: 5,
    comment: 'Düğünümden önce VIP damat paketi için tercih ettim. İlgi, alaka, sıcak havlu masajı ve hijyen gerçekten 10 numaraydı. Sıra beklemeden, vaktinde koltuğa oturup huzurla kalkıyorsunuz.',
    service: 'VIP Damat Paketi',
  },
  {
    name: 'Emre Demirtaş',
    role: 'İş İnsanı',
    date: '2 hafta önce',
    rating: 5,
    comment: 'Yıllardır saçımı kestiriyorum, makas hassasiyeti ve fade geçişleri büyükşehirlerdeki üst segment stüdyolardan farksız. Tertemiz ortam ve lezzetli kahve ikramı da cabası. Emeğinize sağlık.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Burak Çetin',
    role: 'Finans Danışmanı',
    date: '2 hafta önce',
    rating: 5,
    comment: 'Randevu saatine harfiyen uyulması benim için en önemli kriterdi. Koltuğa oturduğunuz andan itibaren sadece sizinle ilgileniliyor. Sakal çizgileri ve sıcak havlu ritüeli muazzam.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Dr. Serdar Aydın',
    role: 'Doktor',
    date: '3 hafta önce',
    rating: 5,
    comment: 'Hijyen standartları, kullanılan ekipmanlar ve kaliteli bakım ürünleri gerçekten çok başarılı. Saç yapısına göre verdiği tavsiyeler sayesinde stilim tamamen oturdu.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Kaan Öztürk',
    role: 'Makine Mühendisi',
    date: '1 ay önce',
    rating: 5,
    comment: 'Çorum’da fade kesimi ve kat geçişlerini bu kadar kusursuz yapan başka bir usta görmedim. Nurkan Bey’in makas ustalığı ve el çabukluğu tartışılmaz.',
    service: 'Saç & Sakal Kombin',
  },
  {
    name: 'Tolga Şahin',
    role: 'Avukat',
    date: '1 ay önce',
    rating: 5,
    comment: 'Damat traşım için gittim, kendinizi gerçekten çok özel ve rahat hissettiriyorlar. Özel gün hazırlığı için Çorum’daki en doğru ve nezih adres.',
    service: 'VIP Damat Paketi',
  },
  {
    name: 'Onur Korkmaz',
    role: 'İç Mimar',
    date: '1 ay önce',
    rating: 5,
    comment: 'Stüdyonun tasarımı, sakin ve nezih atmosferi, randevulu çalışmanın getirdiği huzur harika. Artık saç ve sakal için başka bir yere gitmem imkansız.',
    service: 'Geleneksel Sakal Tasarımı',
  },
];

export default function Testimonials() {
  // Duplicate for seamless infinite loop
  const marqueeReviewsRow1 = [...REVIEWS.slice(0, 4), ...REVIEWS.slice(0, 4), ...REVIEWS.slice(0, 4)];
  const marqueeReviewsRow2 = [...REVIEWS.slice(4, 8), ...REVIEWS.slice(4, 8), ...REVIEWS.slice(4, 8)];

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-noir-950 relative overflow-hidden border-t border-white/[0.04]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="section-tag">
              <Star size={14} className="text-amber" />
              Yorumlar
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Müşteri Deneyimleri & <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Gerçek Yorumlar.
              </span>
            </h2>
          </div>

          {/* Rating Summary Card (Cleaned without Google text) */}
          <div className="surface-card p-5 px-6 flex items-center gap-4 border-amber/20 bg-noir-900/90 shrink-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber font-sans">
              4.8
            </div>
            <div>
              <div className="flex text-amber mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-slate font-medium block">
                Doğrulanmış Müşteri Değerlendirmesi
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Sliding Tracks Container */}
      <div className="relative w-full overflow-hidden space-y-6">
        
        {/* Left & Right Edge Gradient Fades for Smooth Look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-noir-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-noir-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Sliding Left (Pause on hover) */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeReviewsRow1.map((r, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[320px] sm:w-[380px] surface-card p-6 sm:p-7 flex flex-col justify-between shrink-0 bg-noir-900/90 border-white/[0.08] hover:border-amber/40 hover:bg-noir-850 transition-all duration-300 shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-dark font-medium">
                    {r.date}
                  </span>
                </div>

                <p className="text-alabaster text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-alabaster flex items-center gap-1.5">
                    {r.name}
                    <CheckCircle2 size={13} className="text-emerald shrink-0" />
                  </h4>
                  <span className="text-[11px] text-slate-dark">
                    {r.role}
                  </span>
                </div>
                
                <span className="px-2.5 py-1 rounded-md bg-noir-800 text-[10px] text-amber font-medium border border-white/[0.06]">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right (Reverse, Pause on hover) */}
        <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeReviewsRow2.map((r, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[320px] sm:w-[380px] surface-card p-6 sm:p-7 flex flex-col justify-between shrink-0 bg-noir-900/90 border-white/[0.08] hover:border-amber/40 hover:bg-noir-850 transition-all duration-300 shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-dark font-medium">
                    {r.date}
                  </span>
                </div>

                <p className="text-alabaster text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-alabaster flex items-center gap-1.5">
                    {r.name}
                    <CheckCircle2 size={13} className="text-emerald shrink-0" />
                  </h4>
                  <span className="text-[11px] text-slate-dark">
                    {r.role}
                  </span>
                </div>
                
                <span className="px-2.5 py-1 rounded-md bg-noir-800 text-[10px] text-amber font-medium border border-white/[0.06]">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
