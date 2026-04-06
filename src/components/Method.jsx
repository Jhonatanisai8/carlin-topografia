import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Send, HeartHandshake } from 'lucide-react';

const Method = () => {
  const steps = [
    {
      id: 1,
      title: "Consulta",
      desc: "Cuéntanos tu proyecto y necesidades específicas.",
      icon: <MessageSquare size={28}/>,
      label: "Paso 01"
    },
    {
      id: 2,
      title: "Propuesta",
      desc: "Recibe el equipo ideal para tu terreno en menos de 1 hora.",
      icon: <FileText size={28}/>,
      label: "Paso 02"
    },
    {
      id: 3,
      title: "Despliegue",
      desc: "Entrega rápida y lista para operar en tu zona de trabajo.",
      icon: <Send size={28}/>,
      label: "Paso 03"
    },
    {
      id: 4,
      title: "Soporte",
      desc: "Estamos contigo durante toda la jornada de trabajo.",
      icon: <HeartHandshake size={28}/>,
      label: "Paso 04"
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-secondary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest leading-none">
            El Proceso "Cero Fricción"
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white italic tracking-tight">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto italic font-medium leading-relaxed">
            Un método diseñado para ahorrarte tiempo y garantizar que tu proyecto no se detenga.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-white/10 z-0 border-t-2 border-dashed border-white/20"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 group"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 rounded-[2rem] bg-white text-secondary flex items-center justify-center shadow-2xl relative group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-accent text-secondary text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg group-hover:-translate-y-2 transition-transform">
                    {step.label}
                  </div>
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white italic tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[200px] mx-auto italic group-hover:text-white transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
