import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "R.K. Bansal",
    role: "Manager Purchase",
    company: "Synergy Access",
    quote:
      "The quality of consultation and after-service support from Ak Law Chamber has been exceptional. Their team responds promptly with solutions tailored to our challenges.",
    avatar:
      "https://public.youware.com/users-website-assets/prod/59284182-b3ef-454d-a012-27cd8e0d74c7/2b543c7d85ee42c1ae22232ff234443d",
  },
  {
    name: "Isha Malhotra",
    role: "Founder",
    company: "Verdant Biotech",
    quote:
      "Complete peace of mind on compliance, IP filings, and investor readiness. Their cross-functional expertise keeps our growth plans on track.",
    avatar:
      "https://public.youware.com/users-website-assets/prod/59284182-b3ef-454d-a012-27cd8e0d74c7/eb8428c3a51449709f1b0fa7aa6a03b0",
  },
  {
    name: "Arjun Patel",
    role: "Director Finance",
    company: "Patel Logistics",
    quote:
      "From GST optimization to corporate restructuring, Edwin Corporate has been a strategic ally for our national expansion.",
    avatar:
      "https://public.youware.com/users-website-assets/prod/59284182-b3ef-454d-a012-27cd8e0d74c7/888677ee52fe45fcb593b9d88f8dc386",
  },
];

const carouselInterval = 7000;

export const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const nextIndex = useMemo(() => (active + 1) % testimonials.length, [active]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, carouselInterval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-brand-sand py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
            Testimonials
          </div>
          <h2 className="mt-6 font-display text-4xl text-brand-navy">
            Trusted by growth-focused leaders across India
          </h2>
          <p className="mt-4 text-base text-brand-navy/70">
            Hear how businesses leverage Ak Law Chamber for legal clarity, fiscal confidence, and intellectual property strength.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-brand-gold/20" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl border border-brand-royal/10 bg-white px-8 py-12 shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
                <div className="order-2 text-left lg:order-1 lg:w-2/3">
                  <div className="flex items-center justify-center gap-1 text-brand-gold lg:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold/80 text-brand-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-brand-navy/80">
                    “{testimonials[active].quote}”
                  </p>
                  <div className="mt-6">
                    <p className="text-base font-semibold text-brand-navy">
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm text-brand-navy/60">
                      {testimonials[active].role}, {testimonials[active].company}
                    </p>
                  </div>
                </div>
                <div className="order-1 flex-shrink-0 lg:order-2">
                  <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-glow">
                    <img
                      src={testimonials[active].avatar}
                      alt={`${testimonials[active].name} portrait`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === active ? "bg-brand-royal" : "bg-brand-royal/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
