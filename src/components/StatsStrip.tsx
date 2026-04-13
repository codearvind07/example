"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Building2, Globe2, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    label: "All-India Reach",
    value: 30,
    suffix: "+ Cities",
    icon: Globe2,
  },
  {
    label: "Professionals",
    value: 35,
    suffix: " Specialists",
    icon: Users,
  },
  {
    label: "Matters Delivered",
    value: 1500,
    suffix: "+",
    icon: ShieldCheck,
  },
  {
    label: "Corporate Clients",
    value: 240,
    suffix: "+",
    icon: Building2,
  },
];

function CountUp({ end, duration = 1.2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | undefined>(undefined);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    ref.current = requestAnimationFrame(animate);
    return () => {
      if (ref.current !== undefined) {
        cancelAnimationFrame(ref.current);
      }
    };
  }, [end, duration]);
  return (
    <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
      {count}
      {suffix}
    </span>
  );
}

export const StatsStrip = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
    {/* Decorative gradient glow */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>

    <div className="mx-auto max-w-7xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-white mb-14"
      >
        Trusted Nationwide by Businesses & Professionals
      </motion.h2>

      <div className="grid gap-8 rounded-3xl bg-white/5 backdrop-blur-lg p-10 shadow-2xl md:grid-cols-4 border border-white/10">
        {stats.map(({ label, value, suffix, icon: Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center text-white hover:scale-[1.05] transition-transform duration-300"
          >
            {/* Icon */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-yellow-300/10 ring-1 ring-white/10">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Icon className="h-9 w-9 text-orange-400" />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent blur-md"></div>
            </div>

            {/* Counter */}
            <p className="mt-5 font-display text-4xl font-bold leading-none tracking-tight">
              <CountUp end={value} duration={1.4} suffix={suffix} />
            </p>

            {/* Label */}
            <p className="mt-3 text-sm text-gray-300 tracking-wide">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
