import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Reviews() {
  return (
    <section id="resenas" className="grain relative px-5 py-24 sm:py-32">
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
            Reseñas reales
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl"
          >
            Lo que dice la gente
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <motion.figure
                key={review.id}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-ink-800 bg-black p-7 shadow-card transition-colors duration-300 hover:border-blood-800/60"
              >
                <Quote size={28} className="text-blood-700/70" />

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-blood-500 text-blood-500"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-neutral-300">
                  "{review.text}"
                </blockquote>

                <figcaption className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-white">
                  {review.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-center font-heading text-xs uppercase tracking-[0.25em] text-neutral-600"
          >
            Reseñas extraídas de Google Maps
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
