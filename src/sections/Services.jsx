import React from 'react';
import { Scissors, Sparkles, Clock, Check } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const SERVICES = [
  {
    num: '01',
    category: 'SAÇ TASARIMI',
    title: 'Kişiye Özel Saç Kesimi & Tasarımı',
    duration: '45 Dk',
    popular: true,
    desc: 'Yüz ve kafa anatomisine uygun stil analizi, detaylı makas ve fade kesim teknikleri, saç yıkama, ferahlatıcı tonik ve fön şekillendirme.',
    features: [
      'Yüz anatomisine göre kesim',
      'Detaylı makas ve fade tekniği',
      'Ferahlatıcı saç toniği',
      'Kişiye özel fön & şekillendirme',
    ],
  },
  {
    num: '02',
    category: 'SAKAL BAKIMI',
    title: 'Geleneksel Sakal Tasarımı & Ustura',
    duration: '30 Dk',
    popular: false,
    desc: 'Ustura ile hassas yanak ve boyun çizgileri netleştirme, sakal boyu kısaltma, sıcak havlu ve cilt yatıştırıcı losyon uygulaması.',
    features: [
      'Ustura ile jilet gibi net hatlar',
      'Yanak ve boyun temizliği',
      'Sıcak havlu & yumuşatma',
      'Cilt yatıştırıcı ferahlatıcı losyon',
    ],
  },
  {
    num: '03',
    category: 'FULL BAKIM',
    title: 'Kombin: Saç & Sakal Tasarım Paketi',
    duration: '60 Dk',
    popular: true,
    desc: 'Salonumuzun en çok tercih edilen seansı. Kişiye özel saç kesimi, sakal tasarımı, saç yıkama, tonik ve profesyonel stilin eksiksiz paketi.',
    features: [
      'Eksiksiz saç kesimi & yıkama',
      'Sakal şekillendirme & ustura',
      'Saç toniği & bakım uygulaması',
      'Gün boyu kalıcı şekillendirme',
    ],
  },
  {
    num: '04',
    category: 'VIP BAKIM',
    title: 'Özel Damat Tıraşı & Komple Bakım',
    duration: '90 Dk',
    popular: false,
    desc: 'Düğün ve nişan günleriniz için VIP seans. Detaylı saç kesimi, sakal tasarımı, cilt bakımı, maske ve arındırıcı tonik bakımı.',
    features: [
      'Özel damat saç & sakal tasarımı',
      'Yüz maskesi & cilt bakımı',
      'Kaş ve ense detay temizliği',
      'Ferahlatıcı özel koku & tonik',
    ],
  },
];

export default function Services() {
  const getWhatsAppLink = (serviceTitle) => {
    return `https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20"${encodeURIComponent(serviceTitle)}"%20hizmetiniz%20i%C3%A7in%20randevu%20almak%20istiyorum.`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-white relative">
      
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

        {/* Modern Photo-Less Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className={`relative rounded-2xl p-6 sm:p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between group h-full ${
                s.popular
                  ? 'bg-[#FAF9FB] border-2 border-[#9E7A3B] shadow-xl hover:-translate-y-1.5'
                  : 'bg-[#FAF9FB] border border-gray-200/90 shadow-sm hover:border-[#161719] hover:shadow-xl hover:-translate-y-1.5'
              }`}
            >
              {/* Popular Badge */}
              {s.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#9E7A3B] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap z-10">
                  <Sparkles size={11} />
                  <span>EN ÇOK TERCİH EDİLEN</span>
                </div>
              )}

              {/* Card Content Top */}
              <div className="flex-1 flex flex-col">
                {/* Number & Duration */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-gray-200/80">
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl text-gray-300 group-hover:text-[#9E7A3B] transition-colors">
                    {s.num}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 shadow-xs">
                    <Clock size={13} className="text-[#9E7A3B]" />
                    <span>{s.duration}</span>
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#9E7A3B] uppercase block mb-1.5">
                  {s.category}
                </span>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#161719] leading-snug mb-3">
                  {s.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal">
                  {s.desc}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2.5 pt-4 sm:pt-5 border-t border-gray-200/80 mb-6 sm:mb-8 mt-auto">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#F9F5EC] text-[#9E7A3B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button Anchored to Bottom */}
              <a
                href={getWhatsAppLink(s.title)}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all duration-300 mt-auto ${
                  s.popular
                    ? 'bg-[#9E7A3B] text-white hover:bg-[#7A5C28] shadow-md'
                    : 'bg-[#161719] text-white hover:bg-[#9E7A3B] shadow-sm'
                }`}
              >
                <WhatsAppIcon size={15} />
                <span>Randevu Al</span>
              </a>

            </div>
          ))}
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
