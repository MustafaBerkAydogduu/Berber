import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Star, CheckCircle2, MessageSquarePlus, Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const SERVICES = [
  'Kişiye Özel Saç Tasarımı & Kesim',
  'Geleneksel Sakal Tasarımı',
  'Kombin: Saç & Sakal Tasarımı',
  'Özel Damat Tıraşı & Komple Bakım',
  'Modern Fade Kesim',
  'Saç & Cilt Bakımı',
];

const RATING_LABELS = {
  1: 'Geliştirilmeli',
  2: 'Orta',
  3: 'İyi',
  4: 'Çok Başarılı',
  5: 'Mükemmel & Kusursuz',
};

export default function ReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [service, setService] = useState(SERVICES[0]);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Lock scroll non-blockingly
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      requestAnimationFrame(() => {
        document.body.style.overflow = 'hidden';
      });
      setIsSuccess(false);
      setErrorMsg('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setErrorMsg('Lütfen adınızı ve yorumunuzu eksiksiz doldurun.');
      return;
    }

    if (comment.trim().length < 10) {
      setErrorMsg('Yorumunuz en az 10 karakter olmalıdır.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          name: name.trim(),
          rating,
          service,
          comment: comment.trim(),
          is_approved: false, // Moderation gate
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
      if (onReviewSubmitted) onReviewSubmitted();
    } catch (err) {
      console.error('Yorum iletme hatası:', err);
      setErrorMsg('Yorum iletilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setRating(5);
    setService(SERVICES[0]);
    setComment('');
    setIsSuccess(false);
    setErrorMsg('');
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto transform-gpu">
      {/* Native GPU Accelerated Backdrop */}
      <div
        onClick={resetForm}
        className="fixed inset-0 bg-black/80 transition-opacity duration-150 ease-out"
        style={{ willChange: 'opacity' }}
      />

      {/* Modal Dialog Card (Mounted instantly via Portal) */}
      <div
        className="relative w-full max-w-lg bg-noir-900 border border-amber/30 rounded-2xl sm:rounded-3xl shadow-luxury z-10 p-5 sm:p-8 transform-gpu transition-all duration-150 ease-out animate-fadeIn"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4 sm:mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0 shadow-sm">
              <MessageSquarePlus size={18} />
            </div>
            <div>
              <h3 className="font-sans font-bold text-base sm:text-xl text-alabaster leading-tight">
                Deneyiminizi Paylaşın
              </h3>
              <span className="text-[11px] sm:text-xs text-slate mt-0.5 block">
                Kuaför Nurkan Aydoğdu Değerlendirmesi
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="p-2 rounded-full bg-noir-800 border border-white/10 text-slate hover:text-alabaster hover:border-amber/40 transition-colors"
            aria-label="Kapat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center text-emerald mb-3.5 shadow-lg">
              <CheckCircle2 size={28} />
            </div>
            <h4 className="font-sans font-bold text-lg sm:text-xl text-alabaster mb-2">
              Değerli Yorumunuz İçin Teşekkür Ederiz!
            </h4>
            <p className="text-slate text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Yorumunuz başarıyla iletildi. İncelendikten kısa süre sonra sitemizdeki müşteri deneyimleri şeridine eklenecektir.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="btn-primary py-3 px-8 text-xs uppercase tracking-wider font-semibold"
            >
              Tamam
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Rating Selector */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                Puanınız
              </label>
              <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-noir-800/80 border border-white/[0.08]">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const activeStar = hoverRating || rating;
                    const isFilled = star <= activeStar;
                    return (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 touch-manipulation hover:scale-110 active:scale-95 transition-transform"
                      >
                        <Star
                          size={22}
                          className={
                            isFilled
                              ? 'text-amber fill-amber drop-shadow-[0_0_8px_rgba(229,197,120,0.5)]'
                              : 'text-slate-dark'
                          }
                        />
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-amber">
                  {RATING_LABELS[hoverRating || rating]}
                </span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                required
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Örn: Ahmet Yılmaz"
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-noir-800 border border-white/10 text-alabaster placeholder:text-slate-dark text-sm focus:outline-none focus:border-amber/60 transition-all"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                Aldığınız Hizmet
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-noir-800 border border-white/10 text-alabaster text-sm focus:outline-none focus:border-amber/60 transition-all cursor-pointer"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-noir-900 text-alabaster">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Comment */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate">
                  Yorumunuz
                </label>
                <span className="text-[10px] text-slate-dark">
                  {comment.length}/300
                </span>
              </div>
              <textarea
                required
                rows={3}
                maxLength={300}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Kuaför Nurkan Aydoğdu'daki deneyiminizi kısaca paylaşın..."
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-noir-800 border border-white/10 text-alabaster placeholder:text-slate-dark text-sm focus:outline-none focus:border-amber/60 transition-all resize-none"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <p className="text-xs text-rose-400 font-medium text-center">
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 sm:py-3.5 px-6 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Gönderiliyor...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Yorumu Gönder</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
