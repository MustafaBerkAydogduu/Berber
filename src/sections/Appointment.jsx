import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WA_URL = "https://wa.me/905522742383?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

export default function Appointment() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden bg-dark">

      {/* BG accent photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622288432450-277d0fce5c15?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/60" />
      </div>

      <div id="appointment" className="scroll-mt-28 relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="section-label"
          >
            — Randevu Al
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Sıra Beklemek <br className="hidden sm:block" />
            İstemiyor musunuz?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted text-sm sm:text-base leading-relaxed mb-10"
          >
            Modern randevu sistemimizle zamanınızı yönetin.
            Size en uygun saati belirleyin ve stüdyomuzda öncelikli hizmet alın.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-semibold text-sm tracking-wider uppercase hover:bg-[#1ebe57] transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:-translate-y-1"
          >
            <WhatsAppIcon size={20} />
            WhatsApp'tan Randevu Al
          </motion.a>

          <p className="mt-5 text-xs text-muted/60">
            Sizi en kısa sürede onay mesajıyla arayacağız.
          </p>
        </div>
      </div>
    </section>
  );
}
