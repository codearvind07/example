"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FileCheck,
  Gavel,
  Lightbulb,
  ShieldAlert,
  Building2,
  ScrollText,
  Landmark,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";

const services = [
  {
    title: "Business Consulting",
    summary: "Strategic guidance for corporate structuring, expansion, and compliance.",
    details:
      "We evaluate operational frameworks, advise on merger implications, and craft governance models that balance agility with regulatory expectations.",
    icon: Building2,
    image: "/BusinessConsulting.jpg",
  },
  {
    title: "Tax Preparation & GST Advisory",
    summary: "Comprehensive GST planning, filing, and representation services.",
    details:
      "Our tax desk manages GST audits, optimizes indirect tax positions, and resolves departmental notices with clarity and speed.",
    icon: FileCheck,
    image: "/GST.jpg",
  },
  {
    title: "Financial Accounting & Audits",
    summary: "Precise financial reporting, statutory audits, and risk mitigation.",
    details:
      "Chartered accountants deliver accurate statements, internal control reviews, and audit liaison support for transparent compliance.",
    icon: BookOpenCheck,
    image: "/FinancialAccounting.jpg",
  },
  {
    title: "Intellectual Property Protection",
    summary: "Trademark, copyright, patent, and GI strategy & enforcement.",
    details:
      "IP specialists secure filings, monitor infringements, and litigate violations to protect technology, branding, and creative assets.",
    icon: Lightbulb,
    image: "/Intellectual.jpg",
  },
  {
    title: "Corporate & Business Law",
    summary: "End-to-end corporate legal counsel, contracts, and dispute resolution.",
    details:
      "We draft commercial agreements, manage stakeholder alignments, and represent companies in arbitration and litigation arenas.",
    icon: Gavel,
    image: "/Corporatelaw.jpg",
  },
  {
    title: "Startup & Compliance Advisory",
    summary: "Incorporation, ROC filings, LLP agreements, and regulatory roadmaps.",
    details:
      "Startups benefit from structure selection, investor-ready documentation, ESOP policies, and ongoing secretarial compliance.",
    icon: ScrollText,
    image: "/Startup.jpg",
  },
  {
    title: "Trust, Society & NGO Support",
    summary: "Registration, 80G/12AA certification, and ongoing statutory maintenance.",
    details:
      "We craft charitable governance frameworks, secure FCRA permissions, and ensure transparent financial stewardship.",
    icon: Landmark,
    image: "/ngo.jpg",
  },
  {
    title: "Complete Legal & Financial Consultancy",
    summary: "Unified advisory combining law, finance, and risk management.",
    details:
      "Dedicated relationship teams synchronize legal directives with financial performance goals for long-term resilience.",
    icon: ShieldAlert,
    image: "/CompleteLegal.jpg",
  },
  {
    title: "Startup Law & Advisory",
    summary: "Investor readiness, equity structuring, and growth compliance.",
    details:
      "Tailored incubation support, mentorship on term sheets, and IP strategies that protect emerging brands and technology.",
    icon: GraduationCap,
    image: "/Startup Law & Advisory.png",
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-xs uppercase px-4 py-2 rounded-full tracking-wider">
            Our Services
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold text-[#d4a017]">
            Holistic Expertise for Your Business Growth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Legal, financial, and strategic professionals collaborate to help your enterprise thrive confidently.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, summary, details, icon: Icon, image }, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#d4a017] transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#d4a017] text-white p-3 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                  </div>

                  <p className="mt-3 text-sm text-gray-600">{summary}</p>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-sm text-gray-700 border-t border-gray-100 pt-3"
                      >
                        {details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
