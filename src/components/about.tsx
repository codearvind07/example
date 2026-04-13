import React from "react";
import { Header } from "../components/Header";

import { Scale, ShieldCheck, Award, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Ensure the Header is included */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0a1845] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4a017]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Advocating for Your <span className="text-[#d4a017]">Success</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            At Ak Law Chamber, we blend decades of legal expertise with a modern approach to solve complex business and legal challenges. We are dedicated to providing strategic, result-oriented counsel to enterprises and individuals alike.
          </p>
        </div>
      </section>

    
      {/* Additional Law Firm Content: Values & Approach */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#d4a017] pl-4">Our Core Values</h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start gap-4"><Scale className="w-6 h-6 text-[#d4a017] shrink-0" /> <span><strong className="text-gray-900">Integrity:</strong> Upholding the highest ethical standards in every case and transaction we handle.</span></li>
                <li className="flex items-start gap-4"><Award className="w-6 h-6 text-[#d4a017] shrink-0" /> <span><strong className="text-gray-900">Excellence:</strong> Delivering outstanding legal representation and innovative compliance solutions.</span></li>
                <li className="flex items-start gap-4"><Briefcase className="w-6 h-6 text-[#d4a017] shrink-0" /> <span><strong className="text-gray-900">Client-Centric:</strong> Putting our clients' needs first and ensuring transparent, timely communication.</span></li>
                <li className="flex items-start gap-4"><ShieldCheck className="w-6 h-6 text-[#d4a017] shrink-0" /> <span><strong className="text-gray-900">Tenacity:</strong> Relentlessly pursuing the best possible outcomes to protect your interests.</span></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#d4a017] pl-4">Our Approach</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  We understand that every legal issue is unique. Our multidisciplinary team of legal experts takes the time to deeply understand your specific circumstances, offering personalized strategies rather than one-size-fits-all advice.
                </p>
                <p>
                  Whether you are navigating corporate compliance, intellectual property disputes, tax regulations, or complex litigation, Ak Law Chamber is your trusted partner in the pursuit of justice and sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}