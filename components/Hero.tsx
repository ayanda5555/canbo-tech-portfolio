"use client";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 px-6 py-20">
      {/* Top Left Logo */}
      <div className="absolute top-8 left-6 md:left-12 z-20">
        <Logo width={130} />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: The Pitch */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-800 text-sm font-semibold tracking-wide"
          >
            🚀 Built by NUST Computer Science Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
          >
            Custom Software for <span className="text-emerald-600">Zimbabwean Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-lg"
          >
            We replace messy spreadsheets and lost tools with automated, mobile-friendly web apps.
            Track your inventory, automate your alerts, and scale your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="https://wa.me/263782040304"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            <a
              href="#portfolio"
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-400 text-slate-900 px-8 py-3.5 rounded-lg font-semibold transition-all"
            >
              View Our Work <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Phone Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-10"></div>
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              <Image
                src="/images/dashboard.png"
                alt="App Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-xs text-slate-500">System Status</p>
                <p className="text-sm font-bold text-slate-900">100% Automated</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}