"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <>
      {/* Sticky WhatsApp Button */}
      <motion.a
        href="https://wa.me/263782040304"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Standard Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            {/* White pill so the dark logo stays visible on the dark footer */}
            <div className="bg-white px-4 py-2 rounded-xl">
              <Logo width={120} />
            </div>
            <p className="text-sm">Building practical software for Zimbabwean businesses.</p>
          </div>
          <div className="text-sm">
            &copy; 2026 Canbo Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}