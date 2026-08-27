import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MessageSquare, Quote, MessageSquarePlus } from 'lucide-react';
import ReviewModal from '../components/ReviewModal';
import { supabase } from '../lib/supabase';

const REVIEWS = [
  {
    name: 'Ahmet Yılmaz',
    date: '3 gün önce',
    rating: 5,
    comment: 'Yoğun duruşma takvimimde randevu saatine harfiyen uyulması benim için en önemli kriterdi. Nurkan Bey hem çok dakik hem de makas işçiliği gerçekten çok başarılı.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Mustafa Çakır',
    date: '5 gün önce',
    rating: 5,
    comment: 'Yıllardır çarşıda esnafım, vaktim kısıtlı olduğu için randevu sistemi büyük kolaylık. Sıra beklemeden girip tıraşımı oluyorum. Sakal tıraşındaki özen ve elinin hafifliği 10 numara.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Melih Demirtaş',
    date: '1 hafta önce',
    rating: 5,
    comment: 'Kafa ve yüz anatomisine göre saç kesimi yapması fark yaratıyor. Çorum’da fade geçişlerini ve saç dokusunu bu kadar temiz çıkaran usta sayısı çok az.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Emre Demir',
    date: '1 hafta önce',
    rating: 4,
    comment: 'Salonun sakinliği ve Nurkan Bey’in samimi esnaflığı çok güzel. Saç kesimi ve yıkama sonrası ferahlığı çok başarılı. Akşam saatlerinde bazen yoğun olabiliyor ama randevuyla sorunsuz.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Serdar Aydın',
    date: '2 hafta önce',
    rating: 5,
    comment: 'Kullandığı hijyenik ekipmanlar, kaliteli bakım ürünleri ve salonun nezih ortamı oldukça güven veriyor. Düzenli olarak geldiğim tek adres.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Burak Öztürk',
    date: '2 hafta önce',
    rating: 5,
    comment: 'Çorum’a üniversite için geldim, genç tarzı ve modern saç modellerini çok iyi anlayan bir berber arıyordum. Arkadaş tavsiyesiyle geldim, kesinlikle çok başarılı.',
    service: 'Modern Fade Kesim',
  },
  {
    name: 'Volkan Kurt',
    date: '3 hafta önce',
    rating: 5,
    comment: 'Hijyen ve salon düzeni konusunda çok hassas biriyim. Makasların dezenfeksiyonu, tek kullanımlık ürünler ve ortamın ferahlığı kusursuz. İşini severek yaptığı çok belli.',
    service: 'Saç & Cilt Bakımı',
  },
  {
    name: 'Kaan Şahin',
    date: '3 hafta önce',
    rating: 5,
    comment: 'Düğünüm öncesi damat tıraşı için tercih etmiştim. Gösterilen ilgi, yüz bakımı ve saç tasarımı tam istediğim gibi oldu. Özel günler için Çorum’daki en doğru adres.',
    service: 'Özel Damat Paketi',
  },
  {
    name: 'Yasin Polat',
    date: '1 ay önce',
    rating: 4,
    comment: 'Randevuyu WhatsApp’tan kolayca alıp vaktinde koltuğa oturabilmek harika bir konfor. Fade kesimi ve sakal hatları çok net. Randevusuz giderseniz sıra olabilir, kesinlikle randevu alıp gidin.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Hakan Koç',
    date: '1 ay önce',
    rating: 5,
    comment: 'Sakin bir ortamda kaliteli hizmet alıyorsunuz. Sakal hatlarının simetrisi ve ustura hassasiyeti tam kıvamında. Elinize sağlık usta.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Alperen Çetin',
    date: '1 ay önce',
    rating: 5,
    comment: 'İstediğim modelin fotoğrafını gösterdim, yüz yapıma uygun şekilde birebir uyguladı. Çorum’da trend modelleri bu kadar iyi uygulayan başka salon yok.',
    service: 'Modern Fade & Doku',
  },
  {
    name: 'Onur Yıldız',
    date: '1 ay önce',
    rating: 5,
    comment: 'Fatih Caddesi’nde böyle temiz ve profesyonel bir salonun olması büyük avantaj. Hem saç hem sakal kesiminden her seferinde çok memnun ayrılıyorum.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Süleyman Kaya',
    date: '1 ay önce',
    rating: 4,
    comment: 'İş çıkışı uğradım, ilgi ve alaka çok iyi. Saç yıkama ve fön işlemi gayet özenli yapıldı. Cadde üstü bazen park yoğun olabiliyor ama ustalık 10 numara.',
    service: 'Saç Kesimi & Yıkama',
  },
  {
    name: 'Barış Güler',
    date: '1 ay önce',
    rating: 5,
    comment: 'Spor sonrası ferahlatıcı saç ve sakal bakımı için geliyorum. Cilt ürünleri çok kaliteli, tahriş sıfır. Nurkan Bey’in enerjisi ve titizliği takdire şayan.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Tolga Doğan',
    date: '2 ay önce',
    rating: 5,
    comment: 'Sürekli seyahat eden biriyim, Türkiye’nin birçok yerinde berbere gittim ama buradaki makas işçiliği ve samimiyet gerçekten üst seviyede.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Oğuzhan Çelik',
    date: '2 ay önce',
    rating: 4,
    comment: 'Müşteriyle iletişim ve stil tavsiyeleri çok profesyonel. İstediğim sakal modelini tam tarif ettiğim gibi yaptı. Hafta sonu randevularını önceden almakta fayda var.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Cem Arslan',
    date: '2 ay önce',
    rating: 5,
    comment: 'Modern berberlik anlayışını Çorum’a kazandıran çok nezih bir mekan. Kahve ikramından sohbetine kadar her şey birinci sınıf.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Fatih Şen',
    date: '2 ay önce',
    rating: 5,
    comment: 'El pratikliği ve makas geçişleri harika. Saçı hiç çekiştirmeden çok rahat bir tıraş deneyimi yaşatıyor. Gönül rahatlığıyla tavsiye ederim.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Mert Aksoy',
    date: '2 ay önce',
    rating: 4,
    comment: 'Taper fade kesimi tam istediğim gibi oldu. Öğrenci dostu samimi bir yaklaşım var. Randevu saatlerine tam riayet ediliyor.',
    service: 'Modern Fade Kesim',
  },
  {
    name: 'Selim Vural',
    date: '3 ay önce',
    rating: 5,
    comment: 'Yıllardır saçımı Nurkan ustaya emanet ederim. Tek bir gün bile memnuniyetsiz ayrılmadım. Çorum’un en iyi erkek kuaförüdür.',
    service: 'Saç & Sakal Tasarımı',
  },
];

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dynamicReviews, setDynamicReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setDynamicReviews(
          data.map((item) => ({
            name: item.name,
            date: 'Yeni',
            rating: item.rating,
            comment: item.comment,
            service: item.service,
          }))
        );
      }
    } catch (err) {
      console.error('Yorum yükleme hatası:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Combine dynamic approved reviews with existing reviews
  const allReviews = [...dynamicReviews, ...REVIEWS];
  const half = Math.ceil(allReviews.length / 2);
  const marqueeReviewsRow1 = [...allReviews.slice(0, half), ...allReviews.slice(0, half)];
  const marqueeReviewsRow2 = [...allReviews.slice(half), ...allReviews.slice(half)];

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-noir-950 relative overflow-hidden border-t border-white/[0.04]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="section-tag">
              <Star size={14} className="text-amber" />
              Yorumlar
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-alabaster tracking-tight">
              Müşteri Deneyimleri & <br />
              <span className="font-serif italic font-normal text-gradient-amber">
                Gerçek Yorumlar.
              </span>
            </h2>
          </div>

          {/* Action Buttons & Rating Summary Card */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary py-3 px-5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-amber/20"
            >
              <MessageSquarePlus size={16} />
              <span>Yorum Bırak</span>
            </button>

            {/* Rating Summary Card */}
            <div className="surface-card p-4 sm:p-5 px-5 sm:px-6 flex items-center gap-3.5 sm:gap-4 border-amber/20 bg-noir-900/90 shrink-0">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber font-sans">
                4.8
              </div>
              <div>
                <div className="flex text-amber mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-slate font-medium block">
                  Doğrulanmış Değerlendirme
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Sliding Tracks Container */}
      <div className="relative w-full overflow-hidden space-y-6">
        
        {/* Left & Right Edge Gradient Fades for Smooth Look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-noir-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-noir-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Sliding Left (Pause on hover) */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeReviewsRow1.map((r, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[320px] sm:w-[380px] surface-card p-6 sm:p-7 flex flex-col justify-between shrink-0 bg-noir-900/90 border-white/[0.08] hover:border-amber/40 hover:bg-noir-850 transition-all duration-300 shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < r.rating ? "currentColor" : "none"}
                        className={i < r.rating ? "text-amber" : "text-white/20"}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-dark font-medium">
                    {r.date}
                  </span>
                </div>

                <p className="text-alabaster text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/25 flex items-center justify-center text-amber font-bold text-xs shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-alabaster leading-tight">
                      {r.name}
                    </h4>
                    <span className="text-[10px] text-emerald flex items-center gap-1 mt-0.5 font-medium">
                      <CheckCircle2 size={10} /> Doğrulanmış Müşteri
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-amber bg-amber/10 border border-amber/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right (Pause on hover) */}
        <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeReviewsRow2.map((r, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[320px] sm:w-[380px] surface-card p-6 sm:p-7 flex flex-col justify-between shrink-0 bg-noir-900/90 border-white/[0.08] hover:border-amber/40 hover:bg-noir-850 transition-all duration-300 shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < r.rating ? "currentColor" : "none"}
                        className={i < r.rating ? "text-amber" : "text-white/20"}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-dark font-medium">
                    {r.date}
                  </span>
                </div>

                <p className="text-alabaster text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/25 flex items-center justify-center text-amber font-bold text-xs shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-alabaster leading-tight">
                      {r.name}
                    </h4>
                    <span className="text-[10px] text-emerald flex items-center gap-1 mt-0.5 font-medium">
                      <CheckCircle2 size={10} /> Doğrulanmış Müşteri
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-amber bg-amber/10 border border-amber/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={fetchReviews}
      />

    </section>
  );
}
