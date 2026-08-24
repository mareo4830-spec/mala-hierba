import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { menuCategories } from '@/lib/data';
import { fadeUp, staggerContainer, zoomFromDark } from '@/lib/motion';

export default function MenuPreview() {
  return (
    <section id="carta" className="grain relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span
            variants={fadeUp}
            className="font-heading text-xs uppercase tracking-[0.3em] text-blood-500"
          >
            Un vistazo
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl"
          >
            La Carta
          </motion.h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {menuCategories.map((cat) => (
              <motion.article
                key={cat.id}
                variants={zoomFromDark}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 shadow-card transition-colors duration-300 hover:border-blood-700/70"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-blood-600/90 px-3 py-1 font-heading text-[0.65rem] uppercase tracking-widest text-white">
                    {cat.tagline}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
                    {cat.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-12 flex justify-center">
            <button
              onClick={() => alert('La carta completa estará disponible próximamente.')}
              className="group flex items-center gap-2 rounded-xl border-2 border-blood-600 px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-blood-500 transition-all duration-200 hover:bg-blood-600 hover:text-white active:scale-95"
            >
              Cargar la carta completa
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
