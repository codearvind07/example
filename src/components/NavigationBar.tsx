import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
  ScrollText,
  Users,
} from "lucide-react";

const navIcons = [ShieldCheck, ScrollText, Users];

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="flex items-center justify-between px-6 py-4 bg-white shadow-md"
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-brand-navy"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-brand-navy">Edwin Corporate</p>
              <p className="text-sm text-brand-royal">
                Law Firm
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#services" className="text-brand-navy hover:text-brand-gold transition-colors">Services</a>
            <a href="#about" className="text-brand-navy hover:text-brand-gold transition-colors">About Us</a>
            <a href="#contact" className="text-brand-navy hover:text-brand-gold transition-colors">Contact</a>
            <div className="flex items-center gap-2 bg-brand-gold px-5 py-2 rounded text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
              <PhoneCall className="h-4 w-4" />
              <span className="text-sm font-semibold">+91 98765 43210</span>
            </div>
          </div>

          {/* Removed the mobile menu button since there are no navigation items */}
          <div className="lg:hidden"></div>
        </div>

       

      </div>

      {/* Changed from mapping all navIcons to only showing one "Trusted Legal Partner" element */}
      <div className="pointer-events-none absolute inset-x-0 top-full hidden justify-center lg:flex lg:translate-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60 shadow"
        >
          <ShieldCheck className="mr-2 inline-block h-3.5 w-3.5" />
          Trusted Legal Partner
        </motion.div>
      </div>
    </motion.header>
  );
};
