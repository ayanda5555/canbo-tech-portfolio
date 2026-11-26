"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Smartphone, Mail, Database, QrCode, FileText, PlusCircle, X } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Main Dashboard",
    description: "Real-time overview of stock levels, pending approvals, and quick actions for field staff.",
    image: "/images/dashboard.png",
    color: "bg-emerald-600"
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Admin Overview",
    description: "Detailed administrative view for managing users, roles, and system-wide settings.",
    image: "/images/dashboard-2.png",
    color: "bg-slate-700"
  },
  {
    icon: <PlusCircle className="w-6 h-6 text-white" />,
    title: "Stock Receiving",
    description: "Streamlined form for logging incoming stock, attaching receipts, and updating inventory instantly.",
    image: "/images/stock-receive.png",
    color: "bg-blue-600"
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Add New Item",
    description: "Quick entry form to register new tools and equipment into the system with full details.",
    image: "/images/add-item.png",
    color: "bg-purple-600"
  },
  {
    icon: <QrCode className="w-6 h-6 text-white" />,
    title: "QR Code Labels",
    description: "Auto-generated QR codes for every item, allowing instant scanning and tracking in the field.",
    image: "/images/qr-labels.png",
    color: "bg-orange-600"
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Reporting Module",
    description: "Generate and export detailed reports on stock movement, usage, and current asset locations.",
    image: "/images/reports.png",
    color: "bg-rose-600"
  }
];

export default function Portfolio() {
  // State to track which image is currently zoomed in
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Solutions. Real Results.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete look at the inventory management system we built and deployed for a local Bulawayo contractor. Click any screenshot to zoom in.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Clickable Image Area */}
              <div 
                onClick={() => setSelectedImage(feature.image)}
                className="h-80 bg-slate-100 flex items-center justify-center p-4 border-b border-slate-100 cursor-pointer group relative"
              >
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={400} 
                  height={600} 
                  className="w-full h-full object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-opacity">
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="https://wa.me/263770000000" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            Request a Live Demo of This System <ArrowUpRight size={20} />
          </a>
        </motion.div>

      </div>

      {/* ZOOM MODAL (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close when clicking background
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Zoomed Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <Image 
                src={selectedImage} 
                alt="Zoomed View" 
                width={1200} 
                height={800} 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}