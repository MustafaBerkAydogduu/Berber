import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ZoomIn, X, Camera, ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['Tümü', 'Modern Fade & Klasik', 'Sakal & Çizgiler', 'Stüdyo Detayları'];

const GALLERY_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85',
    title: 'Modern Crop & Mid Fade',
    category: 'Modern Fade & Klasik',
    tag: 'Trend Kesim',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
    title: 'Geleneksel Ustura & Sakal Tasarımı',
    category: 'Sakal & Çizgiler',
    tag: 'Sakal Sanatı',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85',
    title: 'Klasik İtalyan Taper & Makas Geçişi',
    category: 'Modern Fade & Klasik',
    tag: 'Klasik Stil',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85',
    title: 'Sıcak Havlu & Esansiyel Sakal Terapisi',
    category: 'Stüdyo Detayları',
    tag: 'Bakım Ritüeli',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=85',
    title: 'Boutique Studio Ambiance & Aletler',
    category: 'Stüdyo Detayları',
    tag: 'Stüdyo',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=85',
    title: 'Low Skin Fade & Üst Doku',
    category: 'Modern Fade & Klasik',
    tag: 'Hassas Kesim',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('Tümü');
  const [activeImage, setActiveImage] = useState(null);

  const filtered = activeCat === 'Tümü'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCat);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-36 bg-noir-900 relative overflow-hidden">
      
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sand/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="section-tag">
              <Camera size={14} className="text-amber" />
              Stil Portfolyosu
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Seçilmiş <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Stil İmzaları.
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-slate text-sm max-w-xs leading-relaxed">
              Stüdyomuzdan çıkan gerçek işler ve güncel saç & sakal trendleri.
            </p>
            <a
              href="https://instagram.com/_nurkan_aydogdu_19"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2.5 px-4 text-[11px] whitespace-nowrap"
            >
              <span>Instagram'da Takip Et</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCat === cat
                  ? 'bg-amber text-noir-950 shadow-amber-glow'
                  : 'bg-noir-850 text-slate hover:text-alabaster border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[240px] sm:auto-rows-[280px] gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setActiveImage(item)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-noir-850 border border-white/[0.08] shadow-card ${item.span}`}
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={`Kuaför Nurkan Aydoğdu Çorum - ${item.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Overlay with Metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6">
                  
                  {/* Top Tag */}
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-noir-950/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-amber border border-amber/20">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-noir-900/80 border border-white/20 flex items-center justify-center text-alabaster opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ZoomIn size={14} />
                    </div>
                  </div>

                  {/* Bottom Title */}
                  <div>
                    <span className="text-[10px] text-slate uppercase tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-alabaster leading-snug">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] bg-noir-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-noir-800 border border-white/10 text-alabaster hover:text-amber transition-colors"
            >
              <X size={22} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-noir-900 border border-white/10 shadow-2xl flex flex-col"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="p-5 sm:p-6 bg-noir-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber font-bold block mb-1">
                    {activeImage.tag} · {activeImage.category}
                  </span>
                  <h4 className="font-sans font-bold text-lg text-alabaster">
                    {activeImage.title}
                  </h4>
                </div>
                <a
                  href="https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20galerideki%20bu%20stili%20yapt%C4%B1rmak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
                >
                  Bu Stili Yaptır
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
