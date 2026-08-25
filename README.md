# 💈 Kuaför Nurkan Aydoğdu — Resmi Web Platformu

<div align="center">

  [![Canlı Web Sitesi](https://img.shields.io/badge/Canlı_Yayın-www.nurkanaydogdukuafor.com.tr-E5C578?style=for-the-badge&logo=googlechrome&logoColor=0D0E11)](https://www.nurkanaydogdukuafor.com.tr/)
  [![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://www.nurkanaydogdukuafor.com.tr/)
  [![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite_4-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

  <br />

  **Çorum’un öncü erkek kuaförü Kuaför Nurkan Aydoğdu için geliştirilmiş modern, ultra lüks, yüksek performanslı ve SEO uyumlu kurumsal web platformu.**

  [Canlı Yayını İncele 🌐](https://www.nurkanaydogdukuafor.com.tr/) • [Randevu Al ✂️](https://wa.me/905522742383) • [Geliştirici Profili 👨‍💻](https://github.com/MustafaBerkAydogduu)

</div>

---

## 🌟 Proje Özeti & Vizyon

Bu proje; geleneksel zanaatkarlık ile modern saç & sakal tasarımını bir araya getiren **Kuaför Nurkan Aydoğdu** markasının dijital kimliğini en üst seviyeye taşımak amacıyla geliştirilmiştir. 

Koyu obsidiyen cam morfolojisi (*dark obsidian glassmorphism*), altın sarısı detaylar ve akıcı mikro-etkileşimler kullanılarak misafirlere henüz salona adım atmadan önce premium bir deneyim sunulmaktadır.

---

## ✨ Öne Çıkan Özellikler

### 📱 1. Apple & iOS Standartlarında Mobil Deneyim
* **Lüks Alt Panel (Bottom-Sheet) Modalları:** KVKK, Aydınlatma Metni, Gizlilik ve Çerez Politikaları mobilde ekranı tam ortalayan, segmented kontrollere sahip modern diyalog pencereleriyle sunulur.
* **Akıllı Katman Yönetimi:** Menü ve yasal pencereler açıldığında arka plan kaydırması (*body scroll lock*) kilitlenir, kayan WhatsApp butonu içeriği kapatmayacak şekilde otomatik olarak gizlenir.

### 💬 2. Tek Tıkla WhatsApp Randevu Entegrasyonu
* Hizmet menüsünden (Saç Kesimi, Sakal Tasarımı, Damat Paketi vb.) seçilen hizmete özel hazır mesaj şablonlarıyla doğrudan salona WhatsApp randevu talebi iletilir.

### 🌟 3. Kesintisiz Yorum Şeridi (20 Doğrulanmış Müşteri)
* Farklı hizmetleri deneyimlemiş 20 doğrulanmış müşterinin gerçekçi yorumları, iki yönlü kayan sonsuz şerit (*infinite marquee*) animasyonuyla sunulur.

### 🚀 4. Google Search Console & Schema.org (İleri Düzey SEO)
* **Google Site Names Standardı:** Arama sonuçlarında doğrudan marka adının çıkması için bağımsız `WebSite` JSON-LD şeması.
* **Local Business & HairSalon Graph:** Adres, çalışma saatleri, konum koordinatları, fiyat skalası ve hizmet kataloğu Google zengin sonuçlarına tam uyumludur.
* **Performans:** Core Web Vitals metriklerinde yüksek hız, optimize edilmiş SVG ikonları ve modern CSS geçişleri.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| **React 18** | Bileşen tabanlı reaktif kullanıcı arayüzü |
| **Vite 4** | Ultra hızlı derleme ve paketleme motoru |
| **Tailwind CSS** | Özel koyu tema (*noir palette*) ve responsive tasarım |
| **Framer Motion** | Akıcı sayfa geçişleri ve mikro animasyonlar |
| **Lucide Icons** | Vektörel, optimize edilmiş minimalist ikon seti |
| **Vercel** | Global CDN üzerinden SSL sertifikalı kesintisiz dağıtım |

---

## 📂 Proje Dizin Yapısı

```bash
berber/
├── public/
│   ├── favicon.svg          # Altın makas vektör logosu
│   ├── favicon-192x192.png  # PWA & Google arama ikonu
│   ├── nurkan.jpg           # Salon & kurucu portfolyo görseli
│   ├── robots.txt           # Arama motoru tarama kuralları
│   ├── sitemap.xml          # Google Sitemap haritası
│   └── site.webmanifest     # Mobil uygulama manifesti
├── src/
│   ├── components/
│   │   ├── BrandIcon.jsx    # Matematiksel simetriye sahip logo bileşeni
│   │   ├── Footer.jsx       # Güvenlik rozetleri & yasal linkler
│   │   ├── LegalModal.jsx   # KVKK & Gizlilik modal sistemi
│   │   ├── Navbar.jsx       # Kayan şeffaf üst navigasyon & mobil çekmece
│   │   └── WhatsAppButton.jsx # Kayan akıllı randevu butonu
│   ├── sections/
│   │   ├── About.jsx        # Zanaat & vizyon hikayesi
│   │   ├── FAQ.jsx          # Sıkça sorulan sorular akordeonu
│   │   ├── Gallery.jsx      # Stil ve salon detay portfolyosu
│   │   ├── Hero.jsx         # Karşılama manşeti & hızlı randevu
│   │   ├── Services.jsx     # Hizmetler & bakım menüsü
│   │   └── Testimonials.jsx # 20'li kayan müşteri deneyimleri
│   ├── App.jsx              # Ana uygulama düzeni
│   └── index.css            # Tailwind & özel tasarım değişkenleri
├── index.html               # Schema.org, OpenGraph & SEO meta etiketleri
├── package.json             # Bağımlılıklar ve scriptler
├── tailwind.config.js       # Özel renk paleti ve tipografi
└── vercel.json              # Güvenlik başlıkları ve önbellek yapılandırması
```

---

## 🚀 Yerel Geliştirme (Local Setup)

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/MustafaBerkAydogduu/nurkanaydogdukuafor-web.git

# 2. Proje dizinine gidin
cd nurkanaydogdukuafor-web

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirici sunucusunu başlatın
npm run dev

# 5. Canlı sürüm için derleyin
npm run build
```

---

## 📍 Salon Bilgileri & İletişim

* **Salon Adı:** Kuaför Nurkan Aydoğdu
* **Adres:** Üçtutlar Mah. Fatih Cad. No:24/A (Ulukavak Muhtarlığı Karşısı), Merkez / Çorum
* **Telefon / WhatsApp:** [0552 274 23 83](tel:+905522742383)
* **Instagram:** [@\_nurkan\_aydogdu\_19](https://instagram.com/_nurkan_aydogdu_19)
* **Resmi Web Sitesi:** [www.nurkanaydogdukuafor.com.tr](https://www.nurkanaydogdukuafor.com.tr/)

---

## 👨‍💻 Web Tasarım & Geliştirme

**Mustafa Berk Aydoğdu**  
*Full Stack Web Developer & UI Designer*  
* 🐙 **GitHub:** [@MustafaBerkAydogduu](https://github.com/MustafaBerkAydogduu)

---

<div align="center">
  <sub>© 2026 Kuaför Nurkan Aydoğdu. Tüm hakları saklıdır.</sub>
</div>
