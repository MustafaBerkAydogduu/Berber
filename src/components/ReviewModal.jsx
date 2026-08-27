import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Sparkles, CheckCircle2, MessageSquarePlus, Send, Loader2 } from 'lucide-react';
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setErrorMsg('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      console.error('Yorum gönderme hatası:', err);
      setErrorMsg('Yorum gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-noir-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-noir-850 via-noir-900 to-noir-950 border border-amber/30 rounded-2xl sm:rounded-3xl shadow-luxury overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shadow-sm">
                  <MessageSquarePlus size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-alabaster leading-tight">
                    Deneyiminizi Paylaşın
                  </h3>
                  <span className="text-xs text-slate mt-0.5 block">
                    Kuaför Nurkan Aydoğdu Değerlendirmesi
                  </span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="p-2 rounded-full bg-noir-800/80 border border-white/10 text-slate hover:text-alabaster hover:border-amber/40 transition-colors"
                aria-label="Kapat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center text-emerald mb-4 shadow-lg">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-sans font-bold text-xl text-alabaster mb-2">
                  Değerli Yorumunuz İçin Teşekkür Ederiz!
                </h4>
                <p className="text-slate text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                  Yorumunuz başarıyla iletildi. İncelendikten kısa süre sonra sitemizdeki müşteri deneyimleri şeridine eklenecektir.
                </p>
                <button
                  onClick={resetForm}
                  className="btn-primary py-3 px-8 text-xs uppercase tracking-wider font-semibold"
                >
                  Tamam
                </button>
              </motion.div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-2">
                    Puanınız
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-noir-800/60 border border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
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
                            className="p-1 text-slate-dark hover:scale-110 transition-transform"
                          >
                            <Star
                              size={24}
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
                    <span className="text-xs font-medium text-amber ml-auto">
                      {RATING_LABELS[hoverRating || rating]}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl bg-noir-800/80 border border-white/10 text-alabaster placeholder:text-slate-dark text-sm focus:outline-none focus:border-amber/60 focus:ring-1 focus:ring-amber/40 transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                    Aldığınız Hizmet
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-noir-800/80 border border-white/10 text-alabaster text-sm focus:outline-none focus:border-amber/60 focus:ring-1 focus:ring-amber/40 transition-all cursor-pointer"
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
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate">
                      Deneyiminiz & Yorumunuz
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
                    placeholder="Kuaför Nurkan Aydoğdu'daki tıraş ve bakım deneyiminizi kısaca anlatın..."
                    className="w-full px-4 py-3 rounded-xl bg-noir-800/80 border border-white/10 text-alabaster placeholder:text-slate-dark text-sm focus:outline-none focus:border-amber/60 focus:ring-1 focus:ring-amber/40 transition-all resize-none"
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
                  className="w-full btn-primary py-3.5 px-6 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Yorumu Gönder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
