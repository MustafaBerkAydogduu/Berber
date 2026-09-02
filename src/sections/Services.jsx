import React from 'react';
import { Scissors, Sparkles, Clock, Check, Award, Crown, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const SERVICES = [
  {
    num: '01',
    icon: Scissors,
    category: 'SAÇ TASARIMI',
    title: 'Kişiye Özel Saç Kesimi',
    duration: '45 Dk',
    isPopular: false,
    desc: 'Yüz ve kafa anatomisine uygun stil analizi, detaylı makas ve modern fade geçişleri, saç yıkama ve özel fön şekillendirme.',
    features: [
      'Kafa anatomisine göre stil analizi',
      'Detaylı makas ve modern fade tekniği',
      'Ferahlatıcı saç yıkama & tonik',
      'Kişiye özel fön & kalıcı şekillendirme',
    ],
  },
  {
    num: '02',
    icon: Sparkles,
    category: 'SAKAL BAKIMI',
    title: 'Geleneksel Sakal Tasarımı',
    duration: '30 Dk',
    isPopular: false,
    desc: 'Ustura ile jilet gibi net yanak ve boyun çizgileri, sakal boyu kısaltma, sıcak havlu terapisi ve cilt yatıştırıcı losyon bakımı.',
    features: [
      'Ustura ile jilet gibi keskin hatlar',
      'Yanak ve boyun detay temizliği',
      'Geleneksel sıcak havlu terapisi',
      'Cilt yatıştırıcı ferahlatıcı losyon',
    ],
  },
  {
    num: '03',
    icon: Award,
    category: 'FULL BAKIM PAKETİ',
    title: 'Saç & Sakal Kombin Paket',
    duration: '60 Dk',
    isPopular: true,
    badgeText: 'EN ÇOK TERCİH EDİLEN',
    desc: 'Salonumuzun en popüler komple bakım seansı. Kişiye özel saç kesimi, ustura ile sakal tasarımı ve arındırıcı stil deneyimi.',
    features: [
      'Eksiksiz saç kesimi & stil analizi',
      'Ustura ile sakal tasarımı & hat netleştirme',
      'Saç toniği & bakım uygulaması',
      'Gün boyu kalıcı profesyonel fön',
    ],
  },
  {
    num: '04',
    icon: Crown,
    category: 'VIP SEANS',
    title: 'Özel Damat Tıraşı & Bakım',
    duration: '90 Dk',
    isPopular: false,
    desc: 'Düğün ve nişan günleriniz için VIP özel hazırlık. Detaylı saç ve sakal tasarımı, yüz maskesi, cilt bakımı ve komple arındırma.',
    features: [
      'Özel damat saç & sakal tasarımı',
      'Yüz maskesi & derinlemesine cilt bakımı',
      'Kaş, kulak ve ense detay temizliği',
      'Ferahlatıcı özel esans & tonik bakımı',
    ],
  },
];

export default function Services() {
  const getWhatsAppLink = (serviceTitle) => {
    return `https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20"${encodeURIComponent(serviceTitle)}"%20hizmetiniz%20i%C3%A7in%20randevu%20almak%20istiyorum.`;
  };

  return (
    <section id="services" data-nosnippet className="py-20 sm:py-28 lg:py-36 bg-[#FBFBFC] relative border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7A3B] mb-3">
            HİZMETLERİMİZ & MENÜ
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#161719] tracking-tight uppercase mb-4">
            ERKEK <span className="text-[#9E7A3B]">KUAFÖRLÜĞÜ</span> HİZMETLERİ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Her saç ve sakal tipi için anatomik analizle uygulanan, geleneksel ustalığın modern stille buluştuğu özel hizmetlerimiz.
          </p>
        </div>

        {/* High-End Studio Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group h-full bg-white ${
                  s.isPopular
                    ? 'border-2 border-[#9E7A3B] shadow-xl hover:-translate-y-2'
                    : 'border border-gray-200/90 shadow-sm hover:border-[#9E7A3B]/60 hover:shadow-xl hover:-translate-y-2'
                }`}
              >
                {/* Popular Integrated Badge */}
                {s.isPopular && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#9E7A3B] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-xs self-start">
                    <Sparkles size={11} />
                    <span>{s.badgeText}</span>
                  </div>
                )}

                {/* Card Content Top */}
                <div className="flex-1 flex flex-col">
                  {/* Icon & Duration Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9FB] border border-gray-200/80 flex items-center justify-center text-[#161719] group-hover:bg-[#9E7A3B] group-hover:text-white group-hover:border-[#9E7A3B] transition-colors">
                      <Icon size={18} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF9FB] border border-gray-200/80 text-[11px] font-bold text-gray-700">
                      <Clock size={12} className="text-[#9E7A3B]" />
                      <span>{s.duration}</span>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#9E7A3B] uppercase block mb-1">
                    {s.category}
                  </span>
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#161719] leading-snug mb-2.5">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal">
                    {s.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-gray-100 mb-6 mt-auto">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#9E7A3B]/10 text-[#9E7A3B] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Uniform High-End CTA Button */}
                <a
                  href={getWhatsAppLink(s.title)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 mt-auto shadow-xs ${
                    s.isPopular
                      ? 'bg-[#9E7A3B] hover:bg-[#85632A] text-white shadow-md'
                      : 'bg-[#161719] hover:bg-[#9E7A3B] text-white'
                  }`}
                >
                  <WhatsAppIcon size={15} />
                  <span>Randevu Al</span>
                </a>

              </div>
            );
          })}
        </div>

        {/* Bottom Transparent Pricing & Info Bar */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF9FB] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#161719] text-white flex items-center justify-center shrink-0 hidden sm:flex">
              <Scissors size={22} className="text-[#C5A059]" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#161719]">
                Güncel Fiyatlar & Özel Talepleriniz İçin
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5 font-normal">
                Tüm saç ve sakal bakım hizmetlerimiz için doğrudan WhatsApp üzerinden hızlıca bilgi alabilirsiniz.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20fiyatlar%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="btn-kadir-gold whitespace-nowrap text-xs py-3.5 px-7 shrink-0 w-full sm:w-auto text-center"
          >
            <WhatsAppIcon size={15} />
            <span>Fiyat Bilgisi Al</span>
          </a>
        </div>

      </div>
    </section>
  );
}
