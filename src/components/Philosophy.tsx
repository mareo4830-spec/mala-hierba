import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const pillars = [
  {
    title: 'Cero junk food',
    body: 'Cada plato está elaborado con ingredientes top. Cocina honesta, presentada con una estética original.',
  },
  {
    title: 'Rock & cervezas frías',
    body: 'Buena música, buena energía. El ambiente que acompaña la comida sin contaminación visual.',
  },
  {
    title: 'En La Merced',
    body: 'En el corazón de Huelva. Un local con personalidad, abierto hasta la 1 a.m.',
  },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="grain relative px-5 py-24 sm:py-32">
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
            Nuestra filosofía
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl"
          >
            No hacemos junk food.
            <br />
            <span className="text-neutral-500">Hacemos cocina con cojones.</span>
          </motion.h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="rounded-2xl border border-ink-800 bg-ink-900/60 p-7 shadow-card transition-colors duration-300 hover:border-blood-800/60"
              >
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-neutral-400">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
