"use client";
import { motion } from "framer-motion";
import { PackageSearch, BellRing, Code2, Smartphone } from "lucide-react";

const services = [
  {
    icon: <PackageSearch className="w-8 h-8 text-emerald-500" />,
    title: "Inventory & Asset Tracking",
    description: "Stop losing expensive tools and equipment. We build mobile-friendly systems that let your field staff check items in and out instantly, giving you real-time visibility."
  },
  {
    icon: <BellRing className="w-8 h-8 text-emerald-500" />,
    title: "Automated Compliance Alerts",
    description: "Never miss an expiry date again. We automate your HSE, licensing, and maintenance tracking with custom email and WhatsApp notifications."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-emerald-500" />,
    title: "Mobile-First Web Apps",
    description: "Your team works in the field, not at a desk. We build lightweight, fast web applications that work perfectly on any smartphone, no app store download required."
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    title: "Custom Business Automation",
    description: "Still using messy, error-prone Excel spreadsheets? We replace manual data entry with streamlined, automated databases tailored to your exact workflow."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for the Way You Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Canbo Tech specializes in practical, no-nonsense software solutions that solve real operational headaches for Zimbabwean businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm border border-slate-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}