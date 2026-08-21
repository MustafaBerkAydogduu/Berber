import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Yazılım Mühendisi',
    date: '2 gün önce',
    rating: 5,
    comment: 'Çorum’da aradığım o modern, randevusuna sadık ve işini gerçekten sanat gibi yapan kuaförü sonunda buldum. Nurkan Bey yüz hatlarıma göre saç ve sakalımı öyle bir ayarladı ki çevremdekiler hemen fark etti. Kesinlikle tavsiye ederim.',
    service: 'Saç + Sakal Kombin Ritüeli',
  },
  {
    name: 'Murat Kara',
    role: 'Mimar',
    date: '1 hafta önce',
    rating: 5,
    comment: 'Düğünümden önce damat traşı ve komple bakım paketi için tercih ettim. İlgi, alaka, sıcak havlu masajı ve hijyen gerçekten 10 numaraydı. Sıra beklemeden, vaktinde koltuğa oturup huzurla kalkıyorsunuz.',
    service: 'VIP Damat Paketi',
  },
  {
    name: 'Emre Demirtaş',
    role: 'İş İnsanı',
    date: '3 hafta önce',
    rating: 5,
    comment: 'Yıllardır saçımı kestiriyorum, makas hassasiyeti ve fade geçişleri Ankara/İstanbul’daki üst segment stüdyolardan farksız. Tertemiz ortam ve lezzetli kahve ikramı da cabası. Emeğinize sağlık.',
    service: 'Kişiye Özel Saç Kesimi',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-noir-950 relative overflow-hidden border-t border-white/[0.04]">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="section-tag">
              <Star size={14} className="text-amber" />
              Müşteri Deneyimleri
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Güven & <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Gerçek Yorumlar.
              </span>
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="surface-card p-5 px-6 flex items-center gap-4 border-amber/20 bg-noir-900/90">
            <div className="text-3xl font-extrabold text-amber font-sans">
              5.0
            </div>
            <div>
              <div className="flex text-amber mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-slate font-medium">
                Google & WhatsApp Doğrulanmış Müşteri Puanı
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="surface-card p-6 sm:p-8 flex flex-col justify-between group hover:border-amber/30"
            >
              <div>
                {/* Top Stars & Service */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-dark font-medium">
                    {r.date}
                  </span>
                </div>

                <p className="text-alabaster text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              {/* Author & Service Badge */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-sans font-bold text-sm text-alabaster flex items-center gap-1.5">
                    {r.name}
                    <CheckCircle2 size={13} className="text-emerald shrink-0" />
                  </h4>
                  <span className="text-xs text-slate-dark">
                    {r.role}
                  </span>
                </div>
                
                <span className="px-2.5 py-1 rounded-md bg-noir-800 text-[10px] text-amber font-medium border border-white/[0.06] text-right">
                  {r.service}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
