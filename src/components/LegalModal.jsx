import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock, Cookie, Phone, CheckCircle2, Shield } from 'lucide-react';

const TABS = [
  { id: 'kvkk', label: 'KVKK', icon: ShieldCheck },
  { id: 'aydinlatma', label: 'Aydınlatma', icon: FileText },
  { id: 'gizlilik', label: 'Gizlilik', icon: Lock },
  { id: 'cerez', label: 'Çerezler', icon: Cookie },
];

const LEGAL_DOCS = {
  kvkk: {
    id: 'kvkk',
    title: 'KVKK Bilgilendirme Metni',
    badge: '6698 Sayılı Kanun Kapsamında',
    icon: ShieldCheck,
    sections: [
      {
        num: '01',
        title: 'Veri Sorumlusu Sıfatı',
        content: '6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Kuaför Nurkan Aydoğdu (“İşletme”) olarak; veri sorumlusu sıfatıyla, kişisel verilerinizi kanuna ve dürüstlük kuralına uygun olarak toplamakta, işlemekte ve korumaktayız.',
      },
      {
        num: '02',
        title: 'İşlenen Kişisel Verileriniz',
        content: 'Salonumuzdan ve web sitemiz üzerinden hizmet alırken bizimle paylaştığınız başlıca veriler:',
        list: [
          'Kimlik Bilgileri: Adınız, soyadınız.',
          'İletişim Bilgileri: Telefon numaranız, WhatsApp mesaj içeriğiniz.',
          'Hizmet & Randevu Bilgileri: Talep edilen işlem (saç kesimi, sakal tasarımı, damat paketi), randevu tarihi ve saati.',
        ],
      },
      {
        num: '03',
        title: 'Kişisel Verilerin İşlenme Amaçları',
        content: 'Kişisel verileriniz; randevuların oluşturulması, randevu teyitlerinin ve hatırlatmalarının yapılması, talep ettiğiniz kuaförlük ve kişisel bakım hizmetlerinin eksiksiz sunulması, müşteri memnuniyetinin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.',
      },
      {
        num: '04',
        title: 'Kişisel Verilerin Aktarılması',
        content: 'Kişisel verileriniz, kanuni zorunluluklar ve resmi mercilerin talepleri haricinde, kesinlikle üçüncü şahıslara veya ticari kurumlara aktarılmaz, satılmaz veya reklam amaçlı kullandırılmaz.',
      },
      {
        num: '05',
        title: 'KVKK Kapsamındaki Haklarınız (Madde 11)',
        content: 'Veri sahibi olarak dilediğiniz zaman işletmemize başvurarak:',
        list: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
          'İşlenmişse buna ilişkin bilgi talep etme,',
          'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
          'Verilerin düzeltilmesini, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.',
        ],
      },
    ],
  },

  aydinlatma: {
    id: 'aydinlatma',
    title: 'Müşteri & Ziyaretçi Aydınlatma Metni',
    badge: 'Açık & Şeffaf Bilgilendirme',
    icon: FileText,
    sections: [
      {
        num: '01',
        title: 'Bilgilendirme Amacı',
        content: 'Bu aydınlatma metni, Kuaför Nurkan Aydoğdu salonunu ve www.nurkanaydogdukuafor.com.tr web sitesini ziyaret eden tüm misafirlerimizin haklarını ve kişisel verilerinin korunma yöntemlerini açıklamak amacıyla hazırlanmıştır.',
      },
      {
        num: '02',
        title: 'Verilerin Toplanma Yöntemi ve Hukuki Sebebi',
        content: 'Verileriniz; web sitemiz üzerinden WhatsApp yönlendirmesi, doğrudan telefon araması veya salonumuza bizzat ziyaretiniz esnasında sözlü ve dijital yollarla toplanmaktadır. Bu süreç, “bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması” ve “veri sorumlusunun meşru menfaati” hukuki sebeplerine dayanmaktadır.',
      },
      {
        num: '03',
        title: 'Randevu ve İletişim Güvenliği',
        content: 'Alınan randevu bilgileri yalnızca sıranızın ayrılması, zaman yönetimi ve salon içi hizmet kalitesini artırmak amacıyla saklanır. Randevu tarihiniz geçtikten ve hizmet tamamlandıktan sonra gerek görülmeyen veriler periyodik olarak güvenli şekilde temizlenir.',
      },
      {
        num: '04',
        title: 'İletişim ve Başvuru',
        content: 'Haklarınıza ilişkin taleplerinizi salonumuza bizzat gelerek veya 0552 274 23 83 numaralı iletişim hattımız üzerinden işletmemize iletebilirsiniz.',
      },
    ],
  },

  gizlilik: {
    id: 'gizlilik',
    title: 'Gizlilik ve Güvenlik Politikası',
    badge: 'Gizlilik İlkeleri & Veri Güvenliği',
    icon: Lock,
    sections: [
      {
        num: '01',
        title: 'Gizlilik Taahhüdümüz',
        content: 'Kuaför Nurkan Aydoğdu olarak, misafirlerimizin ve web sitemizi ziyaret eden kullanıcılarımızın kişisel gizliliğine en üst düzeyde saygı duyuyoruz. Web sitemizde gezinirken paylaştığınız hiçbir bilgi izniniz olmaksızın kullanılmaz.',
      },
      {
        num: '02',
        title: 'Bilgi Güvenliği Standartları',
        content: 'Web sitemiz SSL (Güvenli Yuva Katmanı) sertifikası ile korunmakta olup, cihazınız ile sunucu arasındaki veri iletimi 256-bit şifreleme protokolüyle güvence altına alınmaktadır.',
      },
      {
        num: '03',
        title: 'Harici Bağlantılar ve 3. Taraf Servisler',
        content: 'Web sitemiz üzerinden WhatsApp randevu hattına, Instagram profilimize veya Google Haritalar navigasyonuna yönlendiren bağlantılar yer almaktadır. Bu harici platformların kendi gizlilik sözleşmeleri geçerli olup, ilgili platformların gizlilik uygulamalarından kendi servis sağlayıcıları sorumludur.',
      },
      {
        num: '04',
        title: 'Politika Güncellemeleri',
        content: 'İşbu Gizlilik Politikası, yasal mevzuattaki değişiklikler veya salonumuzun operasyonel süreçlerine bağlı olarak güncellenebilir. Güncel metin web sitemizde yayınlandığı andan itibaren yürürlüğe girer.',
      },
    ],
  },

  cerez: {
    id: 'cerez',
    title: 'Çerez (Cookie) Politikası',
    badge: 'Kullanıcı Deneyimi & Performans',
    icon: Cookie,
    sections: [
      {
        num: '01',
        title: 'Çerez Nedir?',
        content: 'Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün ve hızlı çalışmasını sağlamak amacıyla kullanılır.',
      },
      {
        num: '02',
        title: 'Kullanılan Çerez Türleri',
        content: 'Sitemizde yalnızca kullanıcı deneyimini iyileştiren temel çerezler kullanılır:',
        list: [
          'Zorunlu Teknik Çerezler: Web sitesinin temel fonksiyonlarının, menü geçişlerinin ve güvenlik protokollerinin çalışması için gereklidir.',
          'Performans Çerezleri: Sayfaların yüklenme hızını optimize etmek ve kullanıcı deneyimini artırmak için anonim olarak değerlendirilir.',
        ],
      },
      {
        num: '03',
        title: 'Reklam ve Takip Çerezleri Kullanılmamaktadır',
        content: 'Web sitemizde kullanıcıları takip eden, profilleme yapan veya ticari reklam hedeflemesi gerçekleştiren 3. taraf pazarlama çerezleri KULLANILMAMAKTADIR.',
      },
      {
        num: '04',
        title: 'Çerezleri Nasıl Yönetebilirsiniz?',
        content: 'Tarayıcınızın ayarlarından dilediğiniz zaman çerezleri silebilir veya çerez kullanımını engelleyebilirsiniz. Temel çerezlerin kapatılması durumunda sitenin bazı görsel geçişleri kısıtlanabilir.',
      },
    ],
  },
};

export default function LegalModal({ isOpen, onClose, initialTab = 'kvkk' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab && LEGAL_DOCS[initialTab]) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.dispatchEvent(new CustomEvent('modal-toggle', { detail: { open: true } }));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('modal-toggle', { detail: { open: false } }));
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.dispatchEvent(new CustomEvent('modal-toggle', { detail: { open: false } }));
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc = LEGAL_DOCS[activeTab] || LEGAL_DOCS.kvkk;
  const IconComponent = currentDoc.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 overflow-hidden">
        
        {/* Deep Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-noir-950/85 backdrop-blur-xl transition-all"
        />

        {/* Modal Window (Centering with balanced spacing) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-noir-900 via-noir-900 to-noir-950 border border-amber/30 rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col max-h-[82vh] my-auto"
        >
          {/* Header Bar */}
          <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-white/[0.08] bg-noir-950/70 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/30 flex items-center justify-center text-amber shrink-0 shadow-[0_0_15px_rgba(229,197,120,0.15)]">
                <IconComponent size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber font-bold block">
                  {currentDoc.badge}
                </span>
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-alabaster tracking-tight">
                  {currentDoc.title}
                </h3>
              </div>
            </div>

            {/* Circular Close Button */}
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="w-9 h-9 rounded-full bg-noir-800 hover:bg-amber hover:text-noir-950 active:scale-95 border border-white/10 text-slate hover:border-amber transition-all flex items-center justify-center shrink-0 shadow-md"
            >
              <X size={18} />
            </button>
          </div>

          {/* Segmented Tab Bar (4-Column Clean Grid) */}
          <div className="p-2 sm:px-6 sm:py-2.5 bg-noir-950/90 border-b border-white/[0.06] shrink-0">
            <div className="grid grid-cols-4 gap-1 sm:gap-1.5 p-1 rounded-xl bg-noir-850/80 border border-white/[0.04]">
              {TABS.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-amber to-amber-dark text-noir-950 shadow-[0_2px_10px_rgba(229,197,120,0.35)] font-bold'
                        : 'text-slate hover:text-alabaster hover:bg-white/[0.04]'
                    }`}
                  >
                    <TabIcon size={12} className="hidden sm:inline shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Scrollable Body */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 custom-scrollbar">
            {currentDoc.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-noir-850/50 border border-white/[0.05] hover:border-amber/25 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold text-amber bg-amber/10 border border-amber/25 px-2 py-0.5 rounded-md">
                    {sec.num}
                  </span>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-alabaster">
                    {sec.title}
                  </h4>
                </div>
                <p className="text-slate text-xs sm:text-[13px] leading-relaxed pl-0.5">
                  {sec.content}
                </p>
                {sec.list && (
                  <ul className="space-y-1.5 pt-1 pl-1">
                    {sec.list.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-slate"
                      >
                        <CheckCircle2 size={13} className="text-amber shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Trust Assurance Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber/10 via-noir-850 to-noir-850 border border-amber/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left mt-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber/15 text-amber flex items-center justify-center shrink-0">
                  <Shield size={16} />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-xs text-alabaster">
                    Kuaför Nurkan Aydoğdu Güvencesi
                  </h5>
                  <p className="text-[11px] text-slate">
                    Kişisel verileriniz ve randevu gizliliğiniz yasal koruma altındadır.
                  </p>
                </div>
              </div>
              <a
                href="tel:+905522742383"
                className="flex items-center gap-1.5 text-amber hover:text-amber-light font-bold text-xs whitespace-nowrap"
              >
                <Phone size={13} />
                <span>0552 274 23 83</span>
              </a>
            </div>
          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="p-3.5 sm:p-4 bg-noir-950/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between gap-3 shrink-0">
            <span className="hidden sm:inline text-[11px] text-slate-dark">
              Resmi yürürlük tarihi: 2026
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto btn-primary py-2.5 sm:py-2.5 px-8 text-xs sm:text-sm font-bold shadow-lg text-center"
            >
              Anladım ve Kapat
            </button>
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
