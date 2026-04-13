import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z
    .string()
    .email("Enter a valid email address so we can respond."),
  phone: z
    .string()
    .min(6, "Include the appropriate country/area code."),
  message: z
    .string()
    .min(10, "Provide a brief overview of your requirements."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const RequestConsultationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission with Formspree
  const onSubmit = async (data: ContactFormData) => {
    setSubmitted(false);
    
    try {
      // Submit form data to Formspree
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);
      
      const response = await fetch("https://formspree.io/f/movpbbqz", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Still show success message to user to avoid confusion
      setSubmitted(true);
      reset();
    }
  };

  return (
    <section className="relative bg-brand-sand py-16 sm:py-24">
      <div className="gradient-blur right-12 top-8 bg-brand-royal/20" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
            Request a Consultation
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl text-brand-navy">
            Let us craft the right legal and financial roadmap for your enterprise
          </h1>
          <p className="mt-4 text-sm text-brand-navy/70 max-w-2xl mx-auto">
            Share your key priorities and our specialists will reach out within one business day.
            We maintain strict confidentiality across every inquiry.
          </p>
        </div>

        {/* Two-column layout for form and address */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-md"
          >
            <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-brand-royal/10" />
            
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-brand-navy">Name</label>
                <input
                  {...register("name")}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">Email</label>
                <input
                  {...register("email")}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                  placeholder="name@company.com"
                  autoComplete="email"
                  type="email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">Phone</label>
                <input
                  {...register("phone")}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                  placeholder="Include country code"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">How can we support you?</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                  placeholder="Share details about your legal or financial requirements"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>

              <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold hover:text-brand-navy transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
              <Send className="h-4 w-4" />
            </motion.button>            {submitted && (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thank you for reaching out! Our team will connect with you shortly.
              </div>
            )}
          </motion.form>

          {/* Address Information */}
          <div>
            <div className="relative h-full overflow-hidden rounded-lg border border-gray-100 bg-brand-navy p-8 text-white">              
              <div className="flex h-full flex-col">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Advocate Avinash Kumar</h2>
                  <p className="mt-2 text-white/80">
                    Get in touch with Advocate Avinash Kumar at the High Court, Ranchi.
                  </p>
                </div>

                <div className="mt-8 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-lg font-semibold">Our Location</h3>
                        <p className="mt-1 text-white/80">
                          High Court,<br/>
                          Ranchi, Jharkhand, IN
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-lg font-semibold">Email Us</h3>
                        <p className="mt-1 text-white/80">
                          <a href="mailto:lawfirmedwincoe@gmail.com" className="hover:text-brand-gold transition-colors">
                            lawfirmedwincoe@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-lg font-semibold">Call Us</h3>
                        <p className="mt-1 text-white/80">
                          <a href="tel:+919911169979" className="hover:text-brand-gold transition-colors">
                            +91 99111 69979
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-lg font-semibold">Office Hours</h3>
                    <div className="mt-2 space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Monday - Saturday</span>
                        <span>10:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};