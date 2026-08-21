import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const FAQS = [
  {
    q: 'Randevu almadan çat kapı gelebilir miyim?',
    a: 'Elbette, kapımız her zaman açık! Randevusuz olarak da dilediğiniz zaman uğrayabilirsiniz. Sadece randevulu misafirlerimizin saatlerine denk gelmemesi ve hiç sıra beklemeden doğrudan koltuğa oturabilmeniz için gelmeden önce WhatsApp’tan yazabilir veya 0552 274 23 83 numaralı hattımızdan bizi doğrudan arayarak müsaitlik durumunu sorabilirsiniz.',
  },
  {
    q: 'Randevumu nasıl oluşturabilir veya güncelleyebilirim?',
    a: 'Sitemizdeki WhatsApp butonlarına tıklayarak, mesaj atarak veya doğrudan 0552 274 23 83 numaralı telefonumuzu arayarak dilediğiniz gün ve saat için randevunuzu saniyeler içinde oluşturabilir, gerektiğinde kolayca güncelleyebilirsiniz.',
  },
  {
    q: 'Damat tıraşı ve bakım paketi için ne kadar önceden randevu almalıyım?',
    a: 'Damat hazırlıkları 90 dakikalık özel bir seans gerektirdiği için, düğün veya nişan tarihinizden en az 1-2 hafta önce randevunuzu ayırtmanızı tavsiye ederiz.',
  },
  {
    q: 'Hangi marka saç ve sakal bakım ürünlerini kullanıyorsunuz?',
    a: 'Salonumuzda yalnızca dermatolojik olarak test edilmiş, saç derisine ve cilde zarar vermeyen uluslararası standartlardaki profesyonel erkek bakım ürünleri ve arındırıcı tonikler kullanılmaktadır.',
  },
  {
    q: 'Salonunuz tam olarak nerede, otopark imkanı var mı?',
    a: 'Salonumuz Çorum Merkez’de, Üçtutlar Mahallesi Fatih Caddesi No:24/A (Ulukavak Muhtarlığı Karşısı) adresinde yer almaktadır. Çevrede araç park edebileceğiniz güvenli park alanları mevcuttur.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 bg-noir-900 relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <span className="section-tag justify-center">
            <HelpCircle size={14} className="text-amber" />
            Merak Edilenler
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-alabaster tracking-tight mb-4">
            Sıkça Sorulan <br />
            <span className="font-serif italic font-normal text-gradient-amber">
              Sorular & Bilgiler.
            </span>
          </h2>
          <p className="text-slate text-sm sm:text-base leading-relaxed">
            Salonumuz, randevu sistemi ve hizmetlerimiz hakkında en çok sorulan soruların yanıtları.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-noir-850 border-amber/30 shadow-card'
                    : 'bg-noir-850/50 border-white/[0.06] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-alabaster">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-amber text-noir-950 rotate-180' : 'bg-noir-800 text-slate'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate text-sm sm:text-base leading-relaxed border-t border-white/[0.04]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-noir-850/40 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate text-sm">
            Başka bir sorunuz veya özel bir isteğiniz mi var?
          </span>
          <a
            href="https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20bir%20sorum%20vard%C4%B1."
            target="_blank"
            rel="noreferrer"
            className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
          >
            <WhatsAppIcon size={14} />
            <span>Bize WhatsApp'tan Sorun</span>
          </a>
        </div>

      </div>
    </section>
  );
}
