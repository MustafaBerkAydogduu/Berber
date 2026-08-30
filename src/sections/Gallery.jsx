import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ZoomIn, Instagram } from 'lucide-react';

const CATEGORIES = ['TÜMÜ', 'SAÇ KESİMİ', 'SAKAL TASARIMI', 'SALON DETAYLARI'];

const WORKS = [
  {
    id: 1,
    src: '/nurkan.jpg',
    title: 'Nurkan Aydoğdu · Kişiye Özel Saç Tasarımı',
    category: 'SAÇ KESİMİ',
    tag: 'KURUCU & SAÇ TASARIMCISI',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=85',
    title: 'Modern Fade & Kişiye Özel Saç Şekillendirme',
    category: 'SAÇ KESİMİ',
    tag: 'FADE KESİM',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=85',
    title: 'Geleneksel Ustura & Anatomik Sakal Tasarımı',
    category: 'SAKAL TASARIMI',
    tag: 'SAKAL TASARIMI',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=85',
    title: 'Hassas Makas İşçiliği & Stil Geçişi',
    category: 'SAÇ KESİMİ',
    tag: 'MAKAS KESİMİ',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85',
    title: 'Nezih & Konforlu Salon Deneyimi',
    category: 'SALON DETAYLARI',
    tag: 'SALONUMUZ',
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('TÜMÜ');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered = activeCat === 'TÜMÜ'
    ? WORKS
    : WORKS.filter(item => item.category === activeCat);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-36 bg-[#F8F9FA] text-[#161719] relative border-t border-gray-100">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7A3B] mb-3">
            PORTFOLYO & GALERİ
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#161719] tracking-tight uppercase">
            SEÇİLMİŞ <span className="text-[#9E7A3B]">STİL</span> İMZALARI
          </h2>
        </div>

        {/* Filter Tabs (Wrapped Cleanly with Zero Scrollbars) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCat === cat
                  ? 'bg-[#161719] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:text-[#9E7A3B] border border-gray-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Bento Grid (Pixel-Perfect PC & Mobile Layout) */}
        {activeCat === 'TÜMÜ' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:h-[580px]">
            {/* Featured Large Card (Left 2 cols on PC) */}
            <div
              onClick={() => setSelectedPhoto(WORKS[0])}
              className="sm:col-span-2 lg:col-span-2 sm:row-span-2 h-[340px] sm:h-[420px] lg:h-full relative rounded-2xl overflow-hidden group cursor-pointer bg-white shadow-md border border-gray-200/90 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={WORKS[0].src}
                alt={WORKS[0].title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6 text-white">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded bg-[#9E7A3B] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    {WORKS[0].tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ZoomIn size={14} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider block font-bold mb-0.5">
                    {WORKS[0].category}
                  </span>
                  <h4 className="font-sans font-bold text-base sm:text-lg">
                    {WORKS[0].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* 4 Smaller Cards (2x2 grid on right) */}
            {WORKS.slice(1).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="col-span-1 h-[260px] lg:h-full relative rounded-2xl overflow-hidden group cursor-pointer bg-white shadow-md border border-gray-200/90 transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded bg-[#9E7A3B] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-wider block font-bold mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="col-span-1 h-[280px] sm:h-[320px] relative rounded-2xl overflow-hidden group cursor-pointer bg-white shadow-md border border-gray-200/90 transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded bg-[#9E7A3B] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-wider block font-bold mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Instagram Showcase Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-lg">
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#161719]">
                Daha Fazla Güncel Saç & Sakal Tasarımı
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5 font-normal">
                Salonumuzda uyguladığımız en yeni saç modellerini ve video paylaşımlarını Instagram hesabımızdan keşfedin.
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/_nurkan_aydogdu_19"
            target="_blank"
            rel="noreferrer"
            className="btn-kadir-primary whitespace-nowrap text-xs py-3.5 px-7 shrink-0 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Instagram size={16} />
            <span>Instagram'da İncele</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={22} />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden bg-white shadow-2xl flex flex-col"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full max-h-[65vh] sm:max-h-[70vh] object-contain bg-black"
              />
              <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#9E7A3B] block">
                    {selectedPhoto.category}
                  </span>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#161719]">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <a
                  href="https://wa.me/905522742383"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-kadir-primary py-2.5 px-6 text-xs text-center"
                >
                  Bu Modeli İstiyorum
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
