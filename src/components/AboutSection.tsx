  "use client";
  import { motion } from "framer-motion";
  import { Building, Flag, MapPin, Users } from "lucide-react";

  const highlights = [
    {
      title: "Founded in 2014",
      description:
        "Guiding Indian businesses for over a decade with reliable compliance and growth strategies.",
      icon: Building,
    },
    {
      title: "Mission",
      description:
        "To deliver holistic legal and financial strategies that protect innovation and inspire confidence.",
      icon: Flag,
    },
    {
      title: "Nationwide Presence",
      description:
        "Serving clients across India, headquartered in South Delhi with regional partners nationwide.",
      icon: MapPin,
    },
    {
      title: "Multidisciplinary Team",
      description:
        "A synergy of lawyers, IP experts, chartered accountants, and company secretaries for 360° solutions.",
      icon: Users,
    },
  ];

  export const AboutSection = () => {
    return (
      <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9f9f9] to-[#f3f4f8] py-24">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#f1c94c]/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse lg:flex-row items-center gap-20 px-6 lg:px-10">
          {/* LEFT COLUMN - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d4a017]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017] shadow-sm border border-[#d4a017]/30">
              About Us
            </div>

            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              <span className="text-[#d4a017]">About Ak Law Chamber</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Since 2014, Ak Law Chamber has empowered businesses across India with integrated
              legal, financial, and intellectual property services. Our goal is to deliver end-to-end
              business solutions tailored for growth and compliance.
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-700">
              Backed by lawyers, IP professionals, chartered accountants, and company secretaries, we
              deliver expertise across GST, IPR, ITR, ROC, Company/LLP Incorporation, Trust/Society
              registration, ISO certification, IEC codes, and financial consulting.
            </p>

            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-[#d4a017] to-transparent rounded-full"></div>
          </motion.div>

          {/* RIGHT COLUMN - HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-[#d4a017]/20 bg-[#0a1845] p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4a017] text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 bg-[url('/overlay-pattern.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      </section>
    );
  };
