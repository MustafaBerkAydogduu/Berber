import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const CATEGORIES = ['Tümü', 'Saç & Kesim', 'Sakal & Bakım', 'VIP & Damat'];

const SERVICES = [
  {
    id: 1,
    category: 'Saç & Kesim',
    title: 'Kişiye Özel Saç Kesimi',
    subtitle: 'Yıkama + Şekillendirme + Tonik Masajı',
    duration: '45 dk',
    popular: true,
    desc: 'Yüz anatomisine uygun stil danışmanlığı, detaylı makas ve fade kesim tekniği, yıkama ve fön işlemi.',
    features: ['Yüz tipi analizi', 'Detaylı makas/makine kesimi', 'Ferahlatıcı saç toniği', 'Kişiye özel şekillendirme'],
  },
  {
    id: 2,
    category: 'Sakal & Bakım',
    title: 'Geleneksel Sakal Tasarımı',
    subtitle: 'Ustura + Sıcak Havlu + Sakal Yağı',
    duration: '30 dk',
    popular: false,
    desc: 'Yanak ve boyun çizgisi netleştirme, sıcak havlu kompresi ve özel bitkisel sakal bakım yağı uygulaması.',
    features: ['Ustura ile net hatlar', 'Sıcak havlu buhar bakımı', 'Sakal serumu & besleme', 'Cilt ferahlatıcı losyon'],
  },
  {
    id: 3,
    category: 'Saç & Kesim',
    title: 'Kombin: Saç & Sakal Ritüeli',
    subtitle: 'Tam Bakım + Yıkama + Sıcak Havlu',
    duration: '60 dk',
    popular: true,
    desc: 'Stüdyomuzun en çok tercih edilen deneyimi. Saç kesimi, sakal tasarımı ve sıcak havlu ritüelinin eksiksiz paketi.',
    features: ['Eksiksiz saç kesimi & yıkama', 'Sakal şekillendirme & ustura', 'Çift sıcak havlu kompresi', 'Saç & sakal şekillendirme'],
  },
  {
    id: 4,
    category: 'VIP & Damat',
    title: 'Özel VIP Damat Traşı & Bakım Paketi',
    subtitle: 'Düğün / Özel Günler İçin Eksiksiz Deneyim',
    duration: '90 dk',
    popular: true,
    desc: 'Hayatınızın en özel günü için baştan aşağı lüks hazırlık. Saç, sakal, cilt bakımı, masaj ve özel ikram.',
    features: ['VIP saç kesimi & sakal tasarımı', 'Derin cilt bakımı & maske', 'Kaş ve kulak detay temizliği', 'Sıcak havlu & masaj', 'Özel gün stil sabitleme'],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('Tümü');

  const filtered = activeTab === 'Tümü' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  const getWhatsAppLink = (serviceTitle) => {
    return `https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20"${encodeURIComponent(serviceTitle)}"%20hizmetiniz%20i%C3%A7in%20randevu%20almak%20istiyorum.`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-noir-950 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="section-tag">
              <Scissors size={14} className="text-amber" />
              Hizmetler & Menü
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Ayrıcalıklı Bakım & <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Usta Dokunuşları.
              </span>
            </h2>
          </div>
          <p className="text-slate text-sm sm:text-base max-w-md leading-relaxed">
            Her saç ve sakal tipi için anatomik analizle uygulanan, geleneksel ustalığın modern stille buluştuğu özel hizmetler.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14 pb-2 border-b border-white/[0.06]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-amber text-noir-950 shadow-luxury'
                  : 'bg-noir-900 text-slate hover:text-alabaster hover:bg-noir-850 border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (4 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                  service.popular
                    ? 'surface-card border-amber/30 bg-gradient-to-b from-amber/[0.04] to-transparent shadow-card hover:border-amber/50'
                    : 'surface-card hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-amber text-noir-950 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <Sparkles size={11} />
                    Öne Çıkan
                  </div>
                )}

                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-noir-800 border border-white/10 text-xs text-amber font-medium">
                      <Clock size={13} className="text-amber" />
                      {service.duration}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-dark">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-alabaster group-hover:text-amber transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate text-xs mb-4 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-slate text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 pt-4 border-t border-white/[0.06] mb-8">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate">
                        <Check size={13} className="text-amber shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Pre-filled Button */}
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    service.popular
                      ? 'bg-amber text-noir-950 hover:bg-amber-light shadow-sm'
                      : 'bg-noir-800 text-alabaster hover:bg-noir-700 hover:text-amber border border-white/10'
                  }`}
                >
                  <WhatsAppIcon size={15} />
                  <span>Randevu Al</span>
                  <ArrowUpRight size={14} className="opacity-70" />
                </a>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Inquiry Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-noir-900 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-sans font-bold text-base sm:text-lg text-alabaster mb-1">
              Özel bir bakım veya etkinlik için mi randevu almak istiyorsunuz?
            </h4>
            <p className="text-slate text-xs sm:text-sm">
              Gelin-Damat hazırlıkları, toplu randevular ve özel saatler için bize doğrudan WhatsApp'tan ulaşabilirsiniz.
            </p>
          </div>
          <a
            href="https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20özel%20etkinlik%20ve%20randevu%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary whitespace-nowrap"
          >
            <WhatsAppIcon size={16} />
            <span>Bilgi & Randevu</span>
          </a>
        </div>

      </div>
    </section>
  );
}
