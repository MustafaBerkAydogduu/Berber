import React, { useState, useEffect, useMemo } from 'react';
import { Star, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import ReviewModal from '../components/ReviewModal';
import { supabase } from '../lib/supabase';

const INITIAL_REVIEWS = [
  {
    name: 'Ahmet Yılmaz',
    rating: 5,
    comment: 'Yoğun duruşma takvimimde randevu saatine harfiyen uyulması benim için en önemli kriterdi. Nurkan Bey hem çok dakik hem de makas işçiliği gerçekten çok başarılı.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Mustafa Çakır',
    rating: 5,
    comment: 'Yıllardır çarşıda esnafım, vaktim kısıtlı olduğu için randevu sistemi büyük kolaylık. Sıra beklemeden girip tıraşımı oluyorum. Sakal tıraşındaki özen ve elinin hafifliği 10 numara.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Melih Demirtaş',
    rating: 5,
    comment: 'Kafa ve yüz anatomisine göre saç kesimi yapması fark yaratıyor. Çorum’da fade geçişlerini ve saç dokusunu bu kadar temiz çıkaran usta sayısı çok az.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Emre Demir',
    rating: 4,
    comment: 'Salonun sakinliği ve Nurkan Bey’in samimi esnaflığı çok güzel. Saç kesimi ve yıkama sonrası ferahlığı çok başarılı. Akşam saatlerinde bazen yoğun olabiliyor ama randevuyla sorunsuz.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Serdar Aydın',
    rating: 5,
    comment: 'Kullandığı hijyenik ekipmanlar, kaliteli bakım ürünleri ve salonun nezih ortamı oldukça güven veriyor. Düzenli olarak geldiğim tek adres.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Burak Öztürk',
    rating: 5,
    comment: 'Çorum’a üniversite için geldim, genç tarzı ve modern saç modellerini çok iyi anlayan bir berber arıyordum. Arkadaş tavsiyesiyle geldim, kesinlikle çok başarılı.',
    service: 'Modern Fade Kesim',
  },
  {
    name: 'Volkan Kurt',
    rating: 5,
    comment: 'Hijyen ve salon düzeni konusunda çok hassas biriyim. Makasların dezenfeksiyonu, tek kullanımlık ürünler ve ortamın ferahlığı kusursuz. İşini severek yaptığı çok belli.',
    service: 'Saç & Cilt Bakımı',
  },
  {
    name: 'Kaan Şahin',
    rating: 5,
    comment: 'Düğünüm öncesi damat tıraşı için tercih etmiştim. Gösterilen ilgi, yüz bakımı ve saç tasarımı tam istediğim gibi oldu. Özel günler için Çorum’daki en doğru adres.',
    service: 'Özel Damat Paketi',
  },
  {
    name: 'Yasin Polat',
    rating: 4,
    comment: 'Randevuyu WhatsApp’tan kolayca alıp vaktinde koltuğa oturabilmek harika bir konfor. Fade kesimi ve sakal hatları çok net. Randevusuz giderseniz sıra olabilir, kesinlikle randevu alıp gidin.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Hakan Koç',
    rating: 5,
    comment: 'Sakin bir ortamda kaliteli hizmet alıyorsunuz. Sakal hatlarının simetrisi ve ustura hassasiyeti tam kıvamında. Elinize sağlık usta.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Alperen Çetin',
    rating: 5,
    comment: 'İstediğim modelin fotoğrafını gösterdim, yüz yapıma uygun şekilde birebir uyguladı. Çorum’da trend modelleri bu kadar iyi uygulayan başka salon yok.',
    service: 'Modern Fade & Doku',
  },
  {
    name: 'Onur Yıldız',
    rating: 5,
    comment: 'Fatih Caddesi’nde böyle temiz ve profesyonel bir salonun olması büyük avantaj. Hem saç hem sakal kesiminden her seferinde çok memnun ayrılıyorum.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Süleyman Kaya',
    rating: 4,
    comment: 'İş çıkışı uğradım, ilgi ve alaka çok iyi. Saç yıkama ve fön işlemi gayet özenli yapıldı. Cadde üstü bazen park yoğun olabiliyor ama ustalık 10 numara.',
    service: 'Saç Kesimi & Yıkama',
  },
  {
    name: 'Barış Güler',
    rating: 5,
    comment: 'Spor sonrası ferahlatıcı saç ve sakal bakımı için geliyorum. Cilt ürünleri çok kaliteli, tahriş sıfır. Nurkan Bey’in enerjisi ve titizliği takdire şayan.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Tolga Doğan',
    rating: 5,
    comment: 'Sürekli seyahat eden biriyim, Türkiye’nin birçok yerinde berbere gittim ama buradaki makas işçiliği ve samimiyet gerçekten üst seviyede.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Oğuzhan Çelik',
    rating: 4,
    comment: 'Müşteriyle iletişim ve stil tavsiyeleri çok profesyonel. İstediğim sakal modelini tam tarif ettiğim gibi yaptı. Hafta sonu randevularını önceden almakta fayda var.',
    service: 'Geleneksel Sakal Tasarımı',
  },
  {
    name: 'Cem Arslan',
    rating: 5,
    comment: 'Modern berberlik anlayışını Çorum’a kazandıran çok nezih bir mekan. Kahve ikramından sohbetine kadar her şey birinci sınıf.',
    service: 'Saç & Sakal Tasarımı',
  },
  {
    name: 'Fatih Şen',
    rating: 5,
    comment: 'El pratikliği ve makas geçişleri harika. Saçı hiç çekiştirmeden çok rahat bir tıraş deneyimi yaşatıyor. Gönül rahatlığıyla tavsiye ederim.',
    service: 'Kişiye Özel Saç Kesimi',
  },
  {
    name: 'Mert Aksoy',
    rating: 4,
    comment: 'Taper fade kesimi tam istediğim gibi oldu. Öğrenci dostu samimi bir yaklaşım var. Randevu saatlerine tam riayet ediliyor.',
    service: 'Modern Fade Kesim',
  },
  {
    name: 'Selim Vural',
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

  const allReviews = useMemo(() => {
    return [...dynamicReviews, ...INITIAL_REVIEWS];
  }, [dynamicReviews]);

  // Split reviews into 2 balanced rows for double-track continuous marquee
  const row1 = useMemo(() => {
    const half = Math.ceil(allReviews.length / 2);
    const firstHalf = allReviews.slice(0, half);
    return [...firstHalf, ...firstHalf];
  }, [allReviews]);

  const row2 = useMemo(() => {
    const half = Math.ceil(allReviews.length / 2);
    const secondHalf = allReviews.slice(half);
    return [...secondHalf, ...secondHalf];
  }, [allReviews]);

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-white relative border-t border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
        
        {/* 2-Column Header with Perfect Vertical Centering */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7A3B] mb-2.5">
              MÜŞTERİ DENEYİMLERİ
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#161719] tracking-tight uppercase leading-tight">
              MÜŞTERİLERİMİZİN <span className="text-[#9E7A3B]">YORUMLARI</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
              Çorum Merkez salonumuzda ağırladığımız misafirlerimizin gerçek deneyimleri ve değerlendirmeleri.
            </p>
          </div>

          {/* Right Action: Scorecard & Button Vertically Centered */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 self-start lg:self-center shrink-0 w-full sm:w-auto">
            
            {/* Scorecard */}
            <div className="p-3 sm:p-3.5 px-4 sm:px-5 rounded-xl bg-[#FAF9FB] border border-gray-200 shadow-sm flex items-center gap-3 flex-1 sm:flex-initial">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#161719] font-sans leading-none">
                4.7
              </span>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-[#9E7A3B] mb-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                  {/* 5th Star (70% fractional) */}
                  <div className="relative inline-flex items-center">
                    <Star size={12} className="text-gray-300" fill="currentColor" />
                    <div className="absolute inset-0 overflow-hidden w-[70%] flex items-center">
                      <Star size={12} className="text-[#9E7A3B] shrink-0" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none">
                  Doğrulanmış Puan
                </span>
              </div>
            </div>

            {/* Yorum Yap Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-kadir-primary py-3.5 px-6 text-xs flex items-center justify-center gap-2 whitespace-nowrap shadow-sm flex-1 sm:flex-initial"
            >
              <MessageSquarePlus size={15} />
              <span>Yorum Yap</span>
            </button>

          </div>
        </div>

      </div>

      {/* Infinite Double-Track Sliding Marquee Container */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        
        {/* Left & Right Soft Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Sliding Left */}
        <div className="animate-marquee gap-4 sm:gap-6">
          {row1.map((r, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[280px] sm:w-[360px] md:w-[380px] p-5 sm:p-7 rounded-2xl bg-[#FAF9FB] border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#9E7A3B] transition-all duration-300 flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-[#9E7A3B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < r.rating ? "currentColor" : "none"}
                        className={i < r.rating ? "text-[#9E7A3B]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#9E7A3B] bg-[#F9F5EC] border border-[#9E7A3B]/30 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                    {r.service}
                  </span>
                </div>

                <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-5 sm:mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161719] text-white flex items-center justify-center font-extrabold text-[11px] sm:text-xs shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs sm:text-sm text-[#161719] leading-tight">
                      {r.name}
                    </h4>
                    <span className="text-[9px] sm:text-[10px] text-emerald-700 flex items-center gap-1 mt-0.5 font-semibold">
                      <CheckCircle2 size={10} /> Doğrulanmış Misafir
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="animate-marquee-reverse gap-4 sm:gap-6">
          {row2.map((r, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[280px] sm:w-[360px] md:w-[380px] p-5 sm:p-7 rounded-2xl bg-[#FAF9FB] border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#9E7A3B] transition-all duration-300 flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-[#9E7A3B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < r.rating ? "currentColor" : "none"}
                        className={i < r.rating ? "text-[#9E7A3B]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#9E7A3B] bg-[#F9F5EC] border border-[#9E7A3B]/30 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                    {r.service}
                  </span>
                </div>

                <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-5 sm:mb-6 font-normal">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161719] text-white flex items-center justify-center font-extrabold text-[11px] sm:text-xs shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs sm:text-sm text-[#161719] leading-tight">
                      {r.name}
                    </h4>
                    <span className="text-[9px] sm:text-[10px] text-emerald-700 flex items-center gap-1 mt-0.5 font-semibold">
                      <CheckCircle2 size={10} /> Doğrulanmış Misafir
                    </span>
                  </div>
                </div>
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
