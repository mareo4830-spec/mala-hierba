import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

export default function NfcButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2"
    >
      <a
        href="#carta"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex items-center gap-2 rounded-full bg-blood-600 px-7 py-4 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-blood-glow-lg animate-pulse-glow transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <UtensilsCrossed size={18} />
        Ver Carta y Pedir
      </a>
    </motion.div>
  );
}
