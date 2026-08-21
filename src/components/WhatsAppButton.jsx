import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { X } from 'lucide-react';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%20Nurkan%20Bey%2C%20randevu%20almak%20istiyorum.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 1500);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Speech Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden sm:flex items-center gap-3 py-2.5 px-4 bg-noir-850/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-luxury max-w-xs"
          >
            <div className="text-left">
              <span className="text-[11px] font-bold text-alabaster block leading-tight">
                Müsait saatleri öğrenin
              </span>
              <span className="text-[10px] text-slate block leading-tight">
                Nurkan Aydoğdu ile direkt mesajlaşın
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-dark hover:text-alabaster transition-colors p-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Pulse */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] transition-all duration-300 group"
        aria-label="WhatsApp Randevu"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30"></span>
        <WhatsAppIcon size={28} className="relative z-10" />
      </motion.a>

    </div>
  );
}
