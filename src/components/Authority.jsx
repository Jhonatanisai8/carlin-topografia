import React from 'react';
import { motion } from 'framer-motion';
import { Headset, ScrollText, Truck, RefreshCw, Star } from 'lucide-react';

const Authority = () => {
  const differentials = [
    {
      id: 1,
      title: "Soporte Técnico 24/7",
      desc: "Asistencia inmediata ante cualquier duda en campo. Resolución remota o física.",
      icon: <Headset size={32}/>,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Certificación Garantizada",
      desc: "Cumplimiento estricto de normas de precisión nacionales e internacionales.",
      icon: <ScrollText size={32}/>,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Logística Ágil",
      desc: "Entrega directa en el proyecto o almacén. Disponibilidad de flota propia.",
      icon: <Truck size={32}/>,
      color: "bg-orange-500"
    },
    {
      id: 4,
      title: "Equipos de Respaldo",
      desc: "Si algo falla, lo cambiamos en tiempo récord. Cero fricción en tu obra.",
      icon: <RefreshCw size={32}/>,
      color: "bg-red-500"
    }
  ];

  return (
    <section id="diferenciales" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-secondary leading-tight line-height-[1.1]">
              ¿Por qué elegir <br />
              <span className="text-primary italic uppercase">CARLIN TOPOGRAFÍA?</span>
            </h2>
            <p className="text-xl text-secondary/60 max-w-xl font-medium leading-relaxed italic">
              Basado en la auditoría del sector B2B en Perú, entendemos lo que realmente importa en tu proyecto.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {differentials.map((diff, idx) => (
              <motion.div 
                key={diff.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-[2rem] bg-neutral border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${diff.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {diff.icon}
                </div>
                <h4 className="text-xl font-black text-secondary mb-3 leading-none group-hover:text-primary transition-colors">{diff.title}</h4>
                <p className="text-secondary/60 text-sm font-medium leading-relaxed italic">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-10 bg-secondary/10 blur-3xl rounded-full"></div>
          <div className="bg-secondary rounded-[3rem] p-16 shadow-2xl relative z-10 border-t-8 border-primary">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-secondary font-black text-2xl rotate-12 shadow-xl shadow-accent/20">
              #1 Lima
            </div>
            <div className="space-y-8">
              <div className="flex gap-1 text-accent">
                <Star fill="currentColor" size={24}/>
                <Star fill="currentColor" size={24}/>
                <Star fill="currentColor" size={24}/>
                <Star fill="currentColor" size={24}/>
                <Star fill="currentColor" size={24}/>
              </div>
              <h3 className="text-4xl font-black text-white italic tracking-tight">"La precisión no es un lujo, es una obligación."</h3>
              <p className="text-white/50 text-lg italic border-l-4 border-primary pl-6">
                En Carlin Topografía, eliminamos la opacidad del sector para ofrecerte claridad, respaldo y tecnología de punta.
              </p>
              <div className="pt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-black italic text-xl">C</div>
                <div>
                  <p className="text-white font-bold leading-none italic">Gerencia Técnica</p>
                  <p className="text-white/40 text-xs font-black uppercase tracking-widest mt-1">Carlin Topografía Perú</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Authority;
