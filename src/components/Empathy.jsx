import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock } from 'lucide-react';

const Empathy = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-secondary rounded-3xl p-12 shadow-2xl relative z-10 space-y-6">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/30">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-3xl font-black text-white italic tracking-tight">¿Obra detenida?</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Sabemos que cada hora de retraso en ingeniería y minería cuesta miles. 
              Un equipo defectuoso o falta de calibración no debería ser el motivo.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <Clock className="text-accent animate-pulse" size={24} />
              <span className="text-accent font-bold uppercase tracking-widest text-sm italic">El tiempo es oro</span>
            </div>
          </div>
        </motion.div>
        
        <div className="space-y-8 order-1 md:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-secondary leading-tight"
          >
            ¿Tu obra está detenida por un <span className="text-primary italic">equipo defectuoso</span> o falta de calibración?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary/60 leading-relaxed"
          >
            No dejes tu precisión al azar. Entregamos equipos verificados que garantizan 
            que el trabajo se haga bien a la primera. No mas fricciones en campo.
          </motion.p>
          
          <div className="pt-8 grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">01</div>
              <p className="font-bold text-secondary text-sm">Garantía de precisión absoluta</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">02</div>
              <p className="font-bold text-secondary text-sm">Cero tiempos muertos por logística</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
