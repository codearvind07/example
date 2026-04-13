import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { RequestConsultationPage } from "./RequestConsultationPage";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-brand-sand py-16 sm:py-24">
      <RequestConsultationPage />
    </section>
  );
};