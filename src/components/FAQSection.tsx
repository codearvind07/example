import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can the firm onboard new corporate matters?",
    answer:
      "Engagements are initiated within two business days. We assign a partner-level lead, align multidisciplinary specialists, and share a detailed action plan and document checklist immediately after onboarding.",
  },
  {
    question: "Do you support nationwide filings and representation?",
    answer:
      "Yes. Our network across major jurisdictions enables us to file, appear, and coordinate with authorities for GST, ROC, IP, and litigation matters across India.",
  },
  {
    question: "Can startups access tailored legal and compliance support?",
    answer:
      "We provide startup playbooks covering incorporation choices, investor agreements, ESOP policies, IP protection, and ongoing statutory filings aligned with funding stages.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with technology, manufacturing, retail, logistics, healthcare, NGOs, and creative enterprises—adapting engagement models to sector-specific regulations.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-brand-sand py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
            FAQs
          </div>
          <h2 className="mt-6 font-display text-4xl text-brand-navy">
            Answers for decision-makers planning the next move
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-3xl border border-brand-royal/10 bg-white p-6 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-base font-semibold text-brand-navy">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full bg-brand-royal/10 p-2 text-brand-royal"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-4 text-sm text-brand-navy/70"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
