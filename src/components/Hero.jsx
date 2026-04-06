import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform -translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
            <ShieldCheck size={18} />
            <span>Certificación Vigente Incluida</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-secondary leading-tight">
            Equipos topográficos <br />
            <span className="text-primary italic">listos, precisos</span> <br />
            y sin complicaciones.
          </h1>
          
          <p className="text-xl text-secondary/70 max-w-xl leading-relaxed">
            Alquiler de estaciones totales, GNSS y niveles con certificación vigente 
            y soporte técnico en Lima. <span className="font-bold text-primary">Evita retrasos en obra</span> 
            con tecnología de alta precisión.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-secondary font-black py-4 px-10 rounded-2xl shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all text-lg uppercase tracking-wider"
            >
              Solicitar Cotización Rápida
            </motion.button>
            <div className="flex items-center gap-3 px-4 py-2 border-2 border-secondary/10 rounded-2xl bg-white/50 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-2 border-white text-[10px] text-white">L</div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-white text-[10px] text-white">C</div>
              </div>
              <span className="text-sm font-bold text-secondary/70">"Entrega inmediata en Lima y Callao"</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-secondary/10">
            <div className="flex flex-col gap-1">
              <span className="font-black text-3xl text-secondary">24/7</span>
              <span className="text-xs uppercase font-bold tracking-widest text-secondary/40">Soporte Técnico</span>
            </div>
            <div className="flex flex-col gap-1 border-x border-secondary/10 px-6">
              <span className="font-black text-3xl text-secondary">100%</span>
              <span className="text-xs uppercase font-bold tracking-widest text-secondary/40">Calibrated</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-black text-3xl text-secondary">&lt; 1hr</span>
              <span className="text-xs uppercase font-bold tracking-widest text-secondary/40">Response Time</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
            <img 
              src="/assets/hero.png" 
              alt="Surveyor using Topography equipment" 
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-110"
            />
            {/* Overlay indicators */}
            <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-secondary/40">Status</p>
                <p className="font-black text-secondary">Calibrado & Listo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
