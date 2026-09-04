import React, { useState, useEffect, useMemo } from 'react';
import { Star, MessageSquarePlus, Instagram, ArrowUpRight } from 'lucide-react';
import ReviewModal from '../components/ReviewModal';
import { supabase } from '../lib/supabase';

const INITIAL_REVIEWS = [
  {
    name: 'Ahmet Yılmaz',
    rating: 5,
    service: 'Fade Kesim',
    comment: 'Saçımı istediğim gibi yaptı, özellikle fade geçişleri çok temizdi. Tekrar giderim.',
  },
  {
    name: 'Mustafa Çakır',
    rating: 5,
    service: 'Sakal Tıraşı',
    comment: 'Eli baya hafif sakalda hiç tahriş falan yapmadı. Dükkan da temiz esnaflığı da güzel.',
  },
  {
    name: 'Emre Demir',
    rating: 5,
    service: 'Saç & Sakal',
    comment: 'Randevu saatinde direkt aldı beklemedim hiç. Kafamdaki modeli tam oturttu eline sağlık.',
  },
  {
    name: 'Burak Öztürk',
    rating: 4,
    service: 'Modern Fade',
    comment: 'Fade kesimi gayet iyi ama akşamları biraz kalabalık oluyo randevusuz gitmeyin kesinlikle.',
  },
  {
    name: 'Serdar Aydın',
    rating: 5,
    service: 'Saç Bakımı',
    comment: 'Temiz ve nezih ortam. Makas işçiliği ve ilgisi 10 numara, çok memnun kaldım.',
  },
  {
    name: 'Kaan Şahin',
    rating: 5,
    service: 'Damat Paketi',
    comment: 'Düğün tıraşı için gitmiştim saç sakal tam istediğim gibi oldu fotoğraflarda da çok iyi durdu teşekkürler.',
  },
  {
    name: 'Yasin Polat',
    rating: 5,
    service: 'Saç Kesimi',
    comment: 'Aceleye getirmeden özenerek kesiyor. Yıkama ve fön de başarılı tavsiye ederim.',
  },
  {
    name: 'Hakan Koç',
    rating: 4,
    service: 'Sakal Düzeltme',
    comment: 'Sakal düzeltme ve saç için gittim gayet güzel oldu. Cadde üstünde park yeri bazen sıkıntı ama tıraş başarılı.',
  },
  {
    name: 'Mert Aksoy',
    rating: 5,
    service: 'Taper Fade',
    comment: 'Taper fade tam fotodaki gibi oldu genç tarzından anlayan usta bulmak zor eline sağlık Nurkan usta.',
  },
  {
    name: 'Tolga Doğan',
    rating: 5,
    service: 'Saç & Sakal',
    comment: 'İlk defa gittim çok memnun kaldım hem sohbeti hem işçiliği çok iyi artık buradayız.',
  },
  {
    name: 'Oğuzhan Çelik',
    rating: 5,
    service: 'Ustura & Sakal',
    comment: 'Sakal çizgilerini çok nizami çekiyor makineyle değil usturayla özenerek yapıyor eyvallah usta.',
  },
  {
    name: 'Fatih Şen',
    rating: 5,
    service: 'Saç Kesimi',
    comment: 'Saçı hiç çekiştirmeden tertemiz kesti vaktinde de aldı. Eline koluna sağlık.',
  },
];

function ReviewCard({ r }) {
  return (
    <div className="w-[280px] sm:w-[340px] md:w-[360px] h-[175px] sm:h-[185px] md:h-[190px] p-5 sm:p-6 rounded-2xl bg-[#FAF9FB] border border-gray-200/90 shadow-xs hover:shadow-md hover:border-[#9E7A3B] transition-all duration-300 flex flex-col justify-between shrink-0">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
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
          <span className="text-[10px] font-bold text-[#9E7A3B] bg-[#F9F5EC] border border-[#9E7A3B]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {r.service}
          </span>
        </div>

        <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3">
          “{r.comment}”
        </p>
      </div>

      <div className="pt-3 border-t border-gray-200/80 flex items-center gap-2.5 mt-auto">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161719] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs shrink-0">
          {r.name.charAt(0)}
        </div>
        <h4 className="font-sans font-bold text-xs sm:text-sm text-[#161719] leading-tight truncate">
          {r.name}
        </h4>
      </div>
    </div>
  );
}

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
            service: item.service || 'Saç Kesimi',
            tag: 'Tavsiye Ediyor',
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

          {/* Right Action: Unified Luxury Rating & Action Card */}
          <div className="self-start lg:self-center shrink-0 w-full sm:w-auto">
            <div className="inline-flex items-stretch rounded-2xl bg-white border border-gray-200/90 shadow-sm p-1.5 gap-2 hover:shadow-md transition-all duration-300 w-full sm:w-auto justify-between sm:justify-start">
              
              {/* Left: Score & Stars Block */}
              <div className="flex items-center gap-3 px-3 sm:px-4 py-1.5">
                <span className="text-2xl sm:text-3xl font-black text-[#161719] font-sans tracking-tight leading-none">
                  4.8
                </span>
                <div className="flex flex-col text-left justify-center">
                  <div className="flex items-center text-[#9E7A3B]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wide mt-0.5 whitespace-nowrap">
                    Müşteri Memnuniyeti
                  </span>
                </div>
              </div>

              {/* Elegant Vertical Divider */}
              <div className="w-[1px] bg-gray-200 self-center h-8 hidden sm:block" />

              {/* Right: Integrated Action CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#161719] hover:bg-[#9E7A3B] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 shadow-sm active:scale-95"
              >
                <MessageSquarePlus size={14} />
                <span>Yorum Yap</span>
              </button>

            </div>
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
            <ReviewCard key={`row1-${idx}`} r={r} />
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="animate-marquee-reverse gap-4 sm:gap-6">
          {row2.map((r, idx) => (
            <ReviewCard key={`row2-${idx}`} r={r} />
          ))}
        </div>

      </div>

      {/* Bottom Instagram Portfolio Showcase Banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9FB] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-sm">
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#161719]">
                Yapılan İşleri & Güncel Modelleri İnceleyin
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5 font-normal">
                Salonumuzda uyguladığımız saç kesimlerini, sakal modellerini ve güncel video paylaşımlarımızı Instagram hesabımızdan görebilirsiniz.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/_nurkan_aydogdu_19"
            target="_blank"
            rel="noreferrer"
            className="btn-kadir-primary whitespace-nowrap text-xs py-3.5 px-7 shrink-0 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Instagram size={15} />
            <span>Instagram'da İncele</span>
            <ArrowUpRight size={14} />
          </a>
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
