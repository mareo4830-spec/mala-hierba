import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/data';
import { useScrollLock, useScrolled } from '@/lib/hooks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  useScrollLock(open);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-ink-800/60' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            onClick={() => handleNav('hero')}
            className="font-display text-2xl uppercase tracking-wider text-white"
            aria-label="Mala Hierba inicio"
          >
            Mala<span className="text-blood-600">Hierba</span>
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-200 transition-colors hover:text-blood-500"
            aria-label="Abrir menú"
          >
            <Menu size={26} strokeWidth={2.2} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center text-neutral-300 transition-colors hover:text-blood-500"
              aria-label="Cerrar menú"
            >
              <X size={28} strokeWidth={2.2} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => handleNav(link.id)}
                  className="font-display text-4xl uppercase tracking-wide text-neutral-200 transition-colors hover:text-blood-500 sm:text-5xl"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 font-heading text-xs uppercase tracking-[0.3em] text-neutral-600"
            >
              Pl. de la Merced · Huelva
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
