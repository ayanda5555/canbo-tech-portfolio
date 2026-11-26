"use client";
import { motion } from "framer-motion";
import { Smartphone, Gamepad2, Trophy, Flame } from "lucide-react";
import Image from "next/image";

const appScreens = [
  {
    image: "/images/questify-login.png",
    caption: "Secure Login & Onboarding"
  },
  {
    image: "/images/questify-dungeon.png",
    caption: "Focus Dungeon & Timers"
  },
  {
    image: "/images/questify-menu.png",
    caption: "Hero Dashboard & Progress"
  }
];

export default function FeaturedApp() {
  return (
    <section className="py-24 bg-slate-900 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20">
            <Smartphone size={16} /> Native Android Application
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Questify: <span className="text-emerald-400">Level Up Your Real Life.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A fully gamified productivity app that turns daily tasks and deep focus sessions into an RPG adventure. Built from the ground up for Android.
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Android / Kotlin", "Gamification", "Firebase", "Material UI"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phone Mockups Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end">
          {appScreens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Realistic Phone Frame */}
              <div className="relative w-[260px] h-[540px] bg-slate-950 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-700/50">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  <Image 
                    src={screen.image} 
                    alt={screen.caption} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              
              {/* Caption below phone */}
              <p className="mt-6 text-sm font-medium text-slate-400 tracking-wide uppercase">
                {screen.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}