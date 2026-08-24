import { motion } from 'framer-motion';
import { MapPin, Clock, Euro, Heart, Instagram } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const info = [
  { icon: Clock, label: 'Abierto hasta la 1 a.m.' },
  { icon: Euro, label: 'Precio medio 10–20€' },
  { icon: Heart, label: 'Amigables con LGBTQ+' },
];

export default function Location() {
  return (
    <section id="ubicacion" className="grain relative px-5 py-24 sm:py-32">
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
            Ubicación
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl"
          >
            ¿Dónde está el ruido?
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeUp} className="flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="mt-1 shrink-0 text-blood-500" />
                <p className="font-heading text-xl font-medium text-white">
                  Pl. de la Merced, 21002 Huelva
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {info.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <item.icon size={18} className="text-blood-500" />
                    <span className="font-body text-sm text-neutral-300">{item.label}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://maps.google.com/?q=Plaza+de+la+Merced+Huelva"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-blood-600 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white shadow-blood-glow transition-all duration-200 hover:scale-[1.03] hover:bg-blood-500 active:scale-95"
              >
                <MapPin size={16} />
                Cómo llegar
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-ink-800 shadow-card"
            >
              <iframe
                title="Mapa Mala Hierba"
                src="https://www.google.com/maps?q=Plaza+de+la+Merced,+21002+Huelva&output=embed"
                className="map-invert h-72 w-full md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-ink-800 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-xl uppercase tracking-wider text-white">
            Mala<span className="text-blood-600">Hierba</span>
          </p>
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-neutral-600">
            Huelva · {new Date().getFullYear()}
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-800 text-neutral-400 transition-colors hover:border-blood-700 hover:text-blood-500"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </footer>
    </section>
  );
}
