import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

export const CTASection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-brand-royal via-brand-blue to-brand-navy py-20">
    <div className="gradient-blur left-1/3 top-0 bg-white/10" />
    <div className="mx-auto max-w-5xl px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
          Ready to begin?
        </div>
        <h2 className="mt-6 font-display text-4xl">
          Secure your business foundations with a partners-first law firm
        </h2>
        <p className="mt-4 text-sm text-white/80">
          Schedule a discovery call to align legal, tax, and IP strategies with your next milestone.
        </p>
      </motion.div>
    </div>
  </section>
);
