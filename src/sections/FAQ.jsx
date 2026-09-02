import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const FAQS = [
  {
    q: 'Randevu almadan çat kapı gelebilir miyim?',
    a: 'Elbette, kapımız her zaman açık! Randevusuz olarak da dilediğiniz zaman uğrayabilirsiniz. Sadece randevulu misafirlerimizin saatlerine denk gelmemesi ve hiç sıra beklemeden doğrudan koltuğa oturabilmeniz için gelmeden önce WhatsApp’tan yazabilir veya 0552 274 23 83 numaralı hattımızdan bizi arayabilirsiniz.',
  },
  {
    q: 'Randevumu nasıl oluşturabilir veya güncelleyebilirim?',
    a: 'Sitemizdeki WhatsApp butonlarına tıklayarak, mesaj atarak veya doğrudan 0552 274 23 83 numaralı telefonumuzu arayarak dilediğiniz gün ve saat için randevunuzu saniyeler içinde oluşturabilir, gerektiğinde kolayca güncelleyebilirsiniz.',
  },
  {
    q: 'Damat tıraşı ve bakım paketi için ne kadar önceden randevu almalıyım?',
    a: 'Damat hazırlıkları 90 dakikalık özel ve detaylı bir seans gerektirdiği için, düğün veya nişan tarihinizden en az 1-2 hafta önce randevunuzu ayırtmanızı tavsiye ederiz.',
  },
  {
    q: 'Salonunuz tam olarak nerede, otopark imkanı var mı?',
    a: 'Salonumuz Çorum Merkez’de, Üçtutlar Mahallesi Fatih Caddesi No:24/A (Ulukavak Muhtarlığı Karşısı) adresinde yer almaktadır. Çevrede araç park edebileceğiniz güvenli park alanları mevcuttur.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" data-nosnippet className="py-20 sm:py-28 lg:py-36 bg-[#F8F9FA] text-[#161719] relative border-t border-gray-100">

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7A3B] mb-3">
            MERAK EDİLENLER
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#161719] tracking-tight uppercase">
            SIKÇA SORULAN <span className="text-[#9E7A3B]">SORULAR</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
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
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:border-gray-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-[#161719]">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full text-gray-500 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#9E7A3B]' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h4 className="font-sans font-bold text-lg text-[#161719] mb-2">
            Aklınıza takılan farklı bir soru mu var?
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6 font-normal">
            Nurkan Bey'e doğrudan WhatsApp üzerinden mesaj yazabilir veya telefonla arayabilirsiniz.
          </p>
          <a
            href="https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20bir%20sorum%20vardı."
            target="_blank"
            rel="noreferrer"
            className="btn-kadir-primary py-3 px-8 text-xs font-bold"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp'tan Sor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
