import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock, Cookie, Phone } from 'lucide-react';

const LEGAL_DOCS = {
  kvkk: {
    id: 'kvkk',
    title: 'KVKK Bilgilendirme Metni',
    badge: '6698 Sayılı Kanun Kapsamında',
    icon: ShieldCheck,
    content: (
      <div className="space-y-6 text-slate text-xs sm:text-sm leading-relaxed">
        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            1. Veri Sorumlusu Sıfatı
          </h4>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>Kuaför Nurkan Aydoğdu</strong> (“İşletme”) olarak; veri sorumlusu sıfatıyla, kişisel verilerinizi kanuna ve dürüstlük kuralına uygun olarak toplamakta, işlemekte ve korumaktayız.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            2. İşlenen Kişisel Verileriniz
          </h4>
          <p className="mb-2">
            Salonumuzdan ve web sitemiz üzerinden hizmet alırken bizimle paylaştığınız başlıca veriler şunlardır:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate">
            <li><strong>Kimlik Bilgileri:</strong> Adınız, soyadınız.</li>
            <li><strong>İletişim Bilgileri:</strong> Telefon numaranız, WhatsApp mesaj içeriğiniz.</li>
            <li><strong>Hizmet & Randevu Bilgileri:</strong> Talep edilen işlem (saç kesimi, sakal tasarımı, damat paketi), randevu tarihi ve saati.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            3. Kişisel Verilerin İşlenme Amaçları
          </h4>
          <p>
            Kişisel verileriniz; randevuların oluşturulması, randevu teyitlerinin ve hatırlatmalarının yapılması, talep ettiğiniz kuaförlük ve kişisel bakım hizmetlerinin eksiksiz sunulması, müşteri memnuniyetinin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            4. Kişisel Verilerin Aktarılması
          </h4>
          <p>
            Kişisel verileriniz, kanuni zorunluluklar ve resmi mercilerin talepleri haricinde, <strong>kesinlikle üçüncü şahıslara veya ticari kurumlara aktarılmaz, satılmaz veya reklam amaçlı kullandırılmaz.</strong>
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            5. KVKK Kapsamındaki Haklarınız (Madde 11)
          </h4>
          <p className="mb-2">
            Veri sahibi olarak dilediğiniz zaman işletmemize başvurarak:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Verilerin düzeltilmesini, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.</li>
          </ul>
        </div>
      </div>
    ),
  },

  aydinlatma: {
    id: 'aydinlatma',
    title: 'Müşteri & Ziyaretçi Aydınlatma Metni',
    badge: 'Açık & Şeffaf Bilgilendirme',
    icon: FileText,
    content: (
      <div className="space-y-6 text-slate text-xs sm:text-sm leading-relaxed">
        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            1. Bilgilendirme Amacı
          </h4>
          <p>
            Bu aydınlatma metni, <strong>Kuaför Nurkan Aydoğdu</strong> salonunu ve <strong>www.nurkanaydogdukuafor.com.tr</strong> web sitesini ziyaret eden tüm misafirlerimizin haklarını ve kişisel verilerinin korunma yöntemlerini açıklamak amacıyla hazırlanmıştır.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            2. Verilerin Toplanma Yöntemi ve Hukuki Sebebi
          </h4>
          <p>
            Verileriniz; web sitemiz üzerinden WhatsApp yönlendirmesi, doğrudan telefon araması veya salonumuza bizzat ziyaretiniz esnasında sözlü ve dijital yollarla toplanmaktadır. Bu süreç, <em>"bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması"</em> ve <em>"veri sorumlusunun meşru menfaati"</em> hukuki sebeplerine dayanmaktadır.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            3. Randevu ve İletişim Güvenliği
          </h4>
          <p>
            Alınan randevu bilgileri yalnızca sıranızın ayrılması, zaman yönetimi ve salon içi hizmet kalitesini artırmak amacıyla saklanır. Randevu tarihiniz geçtikten ve hizmet tamamlandıktan sonra gerek görülmeyen veriler periyodik olarak güvenli şekilde temizlenir.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            4. İletişim ve Başvuru
          </h4>
          <p>
            Haklarınıza ilişkin taleplerinizi salonumuza bizzat gelerek veya <strong>0552 274 23 83</strong> numaralı iletişim hattımız üzerinden işletmemize iletebilirsiniz.
          </p>
        </div>
      </div>
    ),
  },

  gizlilik: {
    id: 'gizlilik',
    title: 'Gizlilik ve Güvenlik Politikası',
    badge: 'Gizlilik İlkeleri & Veri Güvenliği',
    icon: Lock,
    content: (
      <div className="space-y-6 text-slate text-xs sm:text-sm leading-relaxed">
        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            1. Gizlilik Taahhüdümüz
          </h4>
          <p>
            Kuaför Nurkan Aydoğdu olarak, misafirlerimizin ve web sitemizi ziyaret eden kullanıcılarımızın kişisel gizliliğine en üst düzeyde saygı duyuyoruz. Web sitemizde gezinirken paylaştığınız hiçbir bilgi izniniz olmaksızın kullanılmaz.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            2. Bilgi Güvenliği Standartları
          </h4>
          <p>
            Web sitemiz SSL (Güvenli Yuva Katmanı) sertifikası ile korunmakta olup, cihazınız ile sunucu arasındaki veri iletimi 256-bit şifreleme protokolüyle güvence altına alınmaktadır.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            3. Harici Bağlantılar ve 3. Taraf Servisler
          </h4>
          <p>
            Web sitemiz üzerinden WhatsApp randevu hattına, Instagram profilimize veya Google Haritalar navigasyonuna yönlendiren bağlantılar yer almaktadır. Bu harici platformların kendi gizlilik sözleşmeleri geçerli olup, ilgili platformların gizlilik uygulamalarından kendi servis sağlayıcıları sorumludur.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            4. Politika Güncellemeleri
          </h4>
          <p>
            İşbu Gizlilik Politikası, yasal mevzuattaki değişiklikler veya salonumuzun operasyonel süreçlerine bağlı olarak güncellenebilir. Güncel metin web sitemizde yayınlandığı andan itibaren yürürlüğe girer.
          </p>
        </div>
      </div>
    ),
  },

  cerez: {
    id: 'cerez',
    title: 'Çerez (Cookie) Politikası',
    badge: 'Şeffaf Kullanıcı Deneyimi',
    icon: Cookie,
    content: (
      <div className="space-y-6 text-slate text-xs sm:text-sm leading-relaxed">
        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            1. Çerez (Cookie) Nedir?
          </h4>
          <p>
            Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler web sitesinin daha verimli çalışmasını, hızlanmasını ve kullanıcı tercihlerinin hatırlanmasını sağlar.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            2. Web Sitemizde Kullanılan Çerez Türleri
          </h4>
          <div className="space-y-3">
            <div className="p-3.5 bg-noir-850 border border-white/[0.06] rounded-xl">
              <span className="font-bold text-alabaster block text-xs mb-1">Zorunlu ve Teknik Çerezler</span>
              <p className="text-xs text-slate">Sitenin temel fonksiyonlarının (sayfa geçişleri, güvenlik doğrulamaları ve hızlı yükleme) çalışması için zorunludur.</p>
            </div>
            <div className="p-3.5 bg-noir-850 border border-white/[0.06] rounded-xl">
              <span className="font-bold text-alabaster block text-xs mb-1">Performans ve Deneyim Çerezleri</span>
              <p className="text-xs text-slate">Sayfaların yüklenme hızını optimize etmek ve kullanıcı deneyimini iyileştirmek için anonim verilerle kullanılır.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base text-alabaster mb-2">
            3. Çerezleri Nasıl Kontrol Edebilirsiniz?
          </h4>
          <p>
            İnternet tarayıcınızın (Chrome, Safari, Firefox, Edge vb.) ayarlar bölümünden çerezleri dilediğiniz zaman engelleyebilir, sınırlandırabilir veya tamamen temizleyebilirsiniz. Zorunlu çerezlerin kapatılması durumunda sitenin bazı görsel bileşenleri standart dışı çalışabilir.
          </p>
        </div>
      </div>
    ),
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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc = LEGAL_DOCS[activeTab] || LEGAL_DOCS.kvkk;
  const IconComponent = currentDoc.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-noir-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-noir-900 border border-amber/25 rounded-2xl shadow-luxury overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          
          {/* Top Bar: Tabs & Close Button */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-noir-950/60 backdrop-blur-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Title / Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0">
                <IconComponent size={20} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber font-semibold block">
                  {currentDoc.badge}
                </span>
                <h3 className="font-sans font-bold text-base sm:text-lg text-alabaster tracking-tight">
                  {currentDoc.title}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="absolute top-4 right-4 sm:static w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate hover:text-alabaster flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Pill Tabs */}
          <div className="px-4 sm:px-6 pt-3 pb-2 bg-noir-900/90 border-b border-white/[0.04] flex items-center gap-2 overflow-x-auto scrollbar-none">
            {Object.values(LEGAL_DOCS).map((doc) => {
              const TabIcon = doc.icon;
              const isActive = activeTab === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveTab(doc.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-amber text-noir-950 font-semibold shadow-sm'
                      : 'bg-noir-850/80 text-slate hover:text-alabaster hover:bg-noir-800'
                  }`}
                >
                  <TabIcon size={13} />
                  <span>{doc.id === 'kvkk' ? 'KVKK' : doc.id === 'aydinlatma' ? 'Aydınlatma Metni' : doc.id === 'gizlilik' ? 'Gizlilik Politikası' : 'Çerez Politikası'}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-1 space-y-6">
            {currentDoc.content}

            {/* Business Contact Footer Info */}
            <div className="pt-5 mt-6 border-t border-white/[0.08] bg-noir-950/40 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-5 sm:p-6 rounded-b-2xl flex items-center justify-between gap-4 text-xs text-slate-dark">
              <span className="font-semibold text-alabaster text-xs sm:text-sm">
                Kuaför Nurkan Aydoğdu
              </span>
              <a
                href="tel:+905522742383"
                className="flex items-center gap-1.5 text-amber hover:underline text-xs shrink-0"
              >
                <Phone size={13} />
                <span>0552 274 23 83</span>
              </a>
            </div>
          </div>

          {/* Modal Bottom Action */}
          <div className="p-3 sm:p-4 bg-noir-950 border-t border-white/[0.06] flex justify-end">
            <button
              onClick={onClose}
              className="btn-secondary py-2 px-5 text-xs font-semibold"
            >
              Anladım ve Kapat
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
