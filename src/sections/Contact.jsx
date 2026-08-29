import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Navigation, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getSalonStatus } from '../utils/businessHours';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20adresiniz%20ve%20m%C3%BCsaitlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const MAP_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Üçtutlar+Mahallesi+Fatih+Caddesi+No:24/A+Ulukavak+Muhtarlığı+Karşısı+Çorum";

export default function Contact() {
  const [salonStatus, setSalonStatus] = useState(getSalonStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setSalonStatus(getSalonStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-white relative">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7A3B] mb-3">
            SALON & İLETİŞİM
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#161719] tracking-tight uppercase">
            BİZİ <span className="text-[#9E7A3B]">ZİYARET</span> EDİN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Çorum Merkez’de, Üçtutlar Mahallesi Fatih Caddesi No:24/A (Ulukavak Muhtarlığı Karşısı) adresinde modern ve konforlu salon deneyimi.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16 sm:mb-24">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            
            {/* Working Hours & Live Status */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#FAF9FB] border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#161719]">
                  <Clock size={15} className="text-[#9E7A3B]" />
                  <span>Çalışma Saatleri</span>
                </div>
                {salonStatus.isOpen ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-extrabold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Şu An Açık
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[11px] font-bold">
                    Şu An Kapalı
                  </span>
                )}
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Pazartesi – Cumartesi:</span>
                  <span className="font-bold text-[#161719]">09:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-1 text-gray-400">
                  <span>Pazar:</span>
                  <span className="text-rose-600 font-bold">Kapalı</span>
                </div>
              </div>
            </div>

            {/* Direct Phone */}
            <a
              href="tel:+905522742383"
              className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-between group hover:border-[#161719] transition-all"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#161719] text-white flex items-center justify-center group-hover:bg-[#9E7A3B] transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block">Telefon & Arama</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-[#161719]">
                    0552 274 23 83
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#161719] transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-between group hover:border-emerald-500 transition-all"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block">Hızlı WhatsApp Randevusu</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-[#161719] group-hover:text-[#25D366] transition-colors">
                    0552 274 23 83
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/_nurkan_aydogdu_19"
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-between group hover:border-pink-500 transition-all"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block">Resmi Instagram Hesabı</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-[#161719] group-hover:text-pink-600 transition-colors">
                    @_nurkan_aydogdu_19
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-400 group-hover:text-pink-600 transition-colors" />
            </a>

            {/* Address */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#9E7A3B] text-white flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block">Salon Adresi</span>
                <p className="font-sans font-bold text-xs sm:text-sm text-[#161719] leading-snug">
                  Üçtutlar Mah. Fatih Cad. No:24/A <br className="hidden sm:inline" />
                  <span className="text-gray-500 font-medium">(Ulukavak Muhtarlığı Karşısı)</span>, Merkez / Çorum
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-3 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-lg min-h-[380px] lg:min-h-full">
            
            {/* Map Frame */}
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full rounded-lg overflow-hidden border border-gray-100">
              <iframe
                title="Kuaför Nurkan Aydoğdu Konumu"
                src="https://maps.google.com/maps?q=%C3%9C%C3%A7tutlar+Mahallesi+Fatih+Caddesi+No:24/A+%C3%87orum&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Bottom Actions */}
            <div className="pt-4 px-1 sm:px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-gray-500 font-medium">
                Merkezi ve kolay ulaşılabilir salon lokasyonu.
              </span>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-kadir-primary py-2.5 px-6 text-xs whitespace-nowrap text-center"
              >
                <Navigation size={14} />
                <span>Google Haritada Yol Tarifi Al</span>
              </a>
            </div>

          </div>

        </div>

        {/* Kadir Alkan Style Final Banner */}
        <div className="p-7 sm:p-14 rounded-2xl bg-[#161719] text-white flex flex-col items-center text-center justify-center shadow-2xl relative overflow-hidden">
          <span className="font-signature text-3xl sm:text-4xl text-[#C5A059] mb-2 block">
            Nurkan Aydoğdu
          </span>
          <h3 className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4 max-w-2xl leading-tight">
            YENİ TARZINIZI KEŞFETMEK İÇİN YERİNİZİ AYIRTIN
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-8 font-normal">
            Sıra beklemeden, vaktinize değer veren randevu sistemimizle koltuğunuz sizi bekliyor.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-kadir-gold py-4 px-10 text-xs font-extrabold shadow-xl w-full sm:w-auto text-center"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp ile Randevu Al</span>
          </a>
        </div>

      </div>
    </section>
  );
}
