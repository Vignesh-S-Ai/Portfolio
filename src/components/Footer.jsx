import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-[#a0a0a0] text-sm">
            <span className="w-2 h-2 rounded-full bg-[#00f3ff] animate-pulse" />
            <span>System Operational</span>
            <span className="text-[rgba(255,255,255,0.2)]">|</span>
            <span>© 2026 Vignesh S</span>
          </div>

          <div className="flex items-center gap-2 text-[#a0a0a0] text-sm">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-[#bc13fe]" />
            </motion.div>
            <span>&amp; React</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}