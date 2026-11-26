"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Clock, ShieldCheck, MessageCircle } from "lucide-react";

const stats = [
  { icon: <GraduationCap className="w-6 h-6 text-emerald-600" />, label: "NUST Computer Science", value: "Student" },
  { icon: <Code2 className="w-6 h-6 text-emerald-600" />, label: "Production Systems", value: "Deployed" },
  { icon: <Clock className="w-6 h-6 text-emerald-600" />, label: "Fast Turnaround", value: "Days, not Months" },
  { icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, label: "Local Support", value: "Based in Bulawayo" }
];

export default function About() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Story */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built by a Local Expert, <br />
            <span className="text-emerald-600">For Local Businesses.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Canbo Tech was founded to bridge the gap between complex enterprise software and the daily operational headaches of Zimbabwean SMEs. 
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            As a Computer Science student at NUST currently managing IT operations for a local contractor, I don't just write code in a classroom. I build systems that solve real problems in the field, every single day.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="https://wa.me/263782040304" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={20} /> WhatsApp (Primary)
            </a>
            <a 
              href="https://wa.me/263780959082" 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
            >
              <MessageCircle size={20} /> WhatsApp (Secondary)
            </a>
          </div>
          
          <p className="text-sm text-slate-500">
            Or call us directly: <span className="font-medium text-slate-700">+263 78 204 0304</span> / <span className="font-medium text-slate-700">+263 78 095 9082</span>
          </p>
        </motion.div>

        {/* Right Side: The Trust Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}