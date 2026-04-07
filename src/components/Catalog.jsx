import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const Catalog = () => {
  const equipments = [
    {
      id: 1,
      name: "Estaciones Totales",
      description: "Equipos robóticos y convencionales. Precisión angular y lineal superior.",
      brands: ["Leica", "Topcon", "Trimble"],
      image: "/assets/total_station.png",
      badge: "Más Solicitado"
    },
    {
      id: 2,
      name: "GNSS / GPS Diferencial",
      description: "Receptores de doble frecuencia con precisión centimétrica en tiempo real (RTK).",
      brands: ["Leica", "Trimble", "Santh"],
      image: "/assets/gnss.png",
      badge: "Alta Precisión"
    },
    {
      id: 3,
      name: "Niveles Automáticos & Láser",
      description: "Compensadores automáticos de alta sensibilidad para nivelación geométrica.",
      brands: ["Leica", "Carlson", "Sokkia"],
      image: "/assets/level.png",
      badge: "Uso Diario"
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-neutral overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">
            <Star size={12}/> Catálogo de Soluciones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary leading-tight">
            Nuestra flota de <br className="sm:hidden" /><span className="text-primary italic">tecnología topográfica</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary/50 font-medium">Equipos de última generación listos para el despliegue inmediato.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {equipments.map((eq, idx) => (
            <motion.div 
              key={eq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-b-[6px] border-primary/20 group hover:border-primary transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-white/50 group-hover:bg-primary/5 transition-colors">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-secondary text-white text-[10px] uppercase font-black rounded-lg">
                  {eq.badge}
                </div>
                <img 
                  src={eq.image} 
                  alt={eq.name} 
                  className="w-full h-full object-contain p-6 sm:p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 sm:p-10 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-black text-secondary leading-none">{eq.name}</h3>
                <p className="text-secondary/60 font-medium text-xs sm:text-sm leading-relaxed">{eq.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {eq.brands.map(brand => (
                    <span key={brand} className="px-3 py-1 bg-neutral rounded-lg text-primary text-[10px] font-black uppercase tracking-wide border border-primary/5">
                      {brand}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3.5 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transform active:scale-95 transition-all duration-300">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 p-6 sm:p-10 bg-primary rounded-[2.5rem] md:rounded-[40px] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative z-10 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-xl">
              <CheckCircle2 size={32} className="sm:w-10 sm:h-10" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white/60 uppercase font-black text-[10px] tracking-widest leading-none mb-2">Etiqueta de confianza</p>
              <h4 className="text-lg sm:text-2xl lg:text-3xl font-black text-white italic tracking-tight leading-tight">"Todos los equipos incluyen certificado de calibración vigente"</h4>
            </div>
          </div>
          
          <div className="h-px w-full md:w-px md:h-16 bg-white/20"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <p className="text-white font-black text-lg sm:text-xl italic tracking-tight mb-1 sm:mb-2">Protocolo ISO 2024</p>
            <p className="text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Cumplimiento estricto</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;
