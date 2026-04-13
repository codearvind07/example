import { motion } from "framer-motion";
import { Mail, PhoneCall, Scale } from "lucide-react";

const footerLinks = [
  {
    title: "Corporate Office",
    description: "A-5, G/F, PAMPOSH ENCLAVE, NEAR NEHRU PLACE FLYOVER GK-1, SOUTH DELHI, DELHI, Delhi 110048",
    icon: Scale,
  },
  {
    title: "Email",
    description: "lawfirmedwincoe@gmail.com",
    icon: Mail,
    href: "mailto:lawfirmedwincoe@gmail.com",
  },
  {
    title: "Call",
    description: "+91 9911169979",
    icon: PhoneCall,
    href: "tel:+919911169979",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white bg-brand-navy">
      <div className="max-w-6xl px-6 py-16 mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
              Ak Law Chamber
            </div>
            <h3 className="mt-6 text-3xl leading-snug font-display">
              Delivering strategic legal and financial clarity to future-ready businesses.
            </h3>
            <p className="mt-4 text-sm text-white/70">
              We support enterprises with corporate law, IP protection, taxation, and compliance solutions across India.
            </p>
          </div>

          <div className="grid gap-6">
            {footerLinks.map(({ title, description, icon: Icon, href }) => (
              <motion.a
                key={title}
                href={href}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-6 text-sm border rounded-3xl border-white/15 bg-white/5 text-white/80"
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
              >
                <div className="flex items-center justify-center flex-shrink-0 h-11 w-11 rounded-2xl bg-white/10 text-brand-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-white/90">{description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 pt-6 mt-12 text-xs border-t border-white/10 text-white/60 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {year} Ak Law Chamber. All rights reserved.</p>
          <p>Trusted legal partner for enterprises, startups, and innovators nationwide.</p>
        </motion.div>
        
        {/* Added "Powered by jkinfotech" with link */}
        <div className="mt-8 text-center">
          <a 
            href="https://www.jkinfotech.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 text-white/50 hover:text-white/80"
          >
            Powered by JK Infotech
          </a>
        </div>
      </div>
    </footer>
  );
};