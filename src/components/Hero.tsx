import { motion } from 'framer-motion';
import { Flame, UtensilsCrossed } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/30658141/pexels-photo-30658141.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Interior de bar con luz tenue"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.9)_75%)]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-blood-800/50 bg-blood-900/20 px-4 py-1.5"
        >
          <Flame size={14} className="text-blood-500" />
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-blood-300">
            Plaza de la Merced · Huelva
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-7xl uppercase leading-[0.85] tracking-tight text-white sm:text-8xl md:text-9xl"
        >
          Mala
          <br />
          <span className="text-stroke-blood">Hierba</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-md font-heading text-lg font-medium text-neutral-300 sm:text-xl"
        >
          Comida brutal, cervezas frías y buen rock en La Merced.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href="#carta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blood-600 px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-white shadow-blood-glow transition-all duration-200 hover:scale-[1.03] hover:bg-blood-500 active:scale-95 sm:w-auto"
          >
            <UtensilsCrossed size={18} />
            Ver la carta
          </a>
          <a
            href="https://maps.google.com/?q=Plaza+de+la+Merced+Huelva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl border border-ink-700 bg-ink-900/60 px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-neutral-200 transition-all duration-200 hover:border-blood-700 hover:text-white active:scale-95 sm:w-auto"
          >
            Cómo llegar
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-neutral-700 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-blood-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
