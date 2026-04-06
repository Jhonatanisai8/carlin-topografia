import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Check } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest leading-none">
                Cotización en Tiempo Récord
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-secondary leading-tight italic tracking-tighter">
                Obtén tu presupuesto <br />
                <span className="text-primary italic">personalizado</span> <br />
                en menos de 1 hora.
              </h2>
              <p className="text-xl text-secondary/60 max-w-xl font-medium leading-relaxed italic">
                Eliminamos la opacidad tarifaria. Recibe costos claros y transparentes sin sorpresas de última hora.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-secondary/40 font-black uppercase tracking-widest text-xs">Incluido en cada contacto:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-secondary font-bold text-sm italic">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white"><Check size={12}/></div>
                  Asesoría Técnica
                </div>
                <div className="flex items-center gap-2 text-secondary font-bold text-sm italic">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white"><Check size={12}/></div>
                  Entrega Gratuita*
                </div>
                <div className="flex items-center gap-2 text-secondary font-bold text-sm italic">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white"><Check size={12}/></div>
                  Seguro de Equipo
                </div>
                <div className="flex items-center gap-2 text-secondary font-bold text-sm italic">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white"><Check size={12}/></div>
                  Manuales & Videos
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 w-full bg-gradient-to-br from-primary to-secondary rounded-[40px] shadow-2xl relative"
          >
            <div className="bg-white rounded-[38px] p-12 space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <form className="space-y-6 relative z-10">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-secondary/40 ml-2">Empresa</label>
                     <input type="text" className="w-full h-14 bg-neutral border border-secondary/5 rounded-2xl px-6 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-secondary outline-none" placeholder="Ej. Constructora ABC" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-secondary/40 ml-2">WhatsApp</label>
                     <input type="tel" className="w-full h-14 bg-neutral border border-secondary/5 rounded-2xl px-6 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-secondary outline-none" placeholder="+51 9XX XXX XXX" />
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-secondary/40 ml-2">Tipo de Equipo</label>
                   <select className="w-full h-14 bg-neutral border border-secondary/5 rounded-2xl px-6 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-secondary outline-none appearance-none">
                     <option>Estación Total</option>
                     <option>GNSS / GPS Diferencial</option>
                     <option>Nivel Automático / Láser</option>
                     <option>Otro / Accesorio</option>
                   </select>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-secondary/40 ml-2">Duración (Días/Meses)</label>
                   <input type="text" className="w-full h-14 bg-neutral border border-secondary/5 rounded-2xl px-6 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-secondary outline-none" placeholder="Ej. 15 días" />
                 </div>
                 
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full h-16 bg-primary text-white rounded-3xl font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
                 >
                   Enviar Solicitud <Send size={20}/>
                 </motion.button>
               </form>
               
               <div className="space-y-4 pt-8 border-t border-secondary/5 relative z-10 text-center">
                 <p className="text-secondary/40 text-xs font-black uppercase tracking-widest">¿Prefieres atención inmediata?</p>
                 <motion.a 
                   href="#"
                   whileHover={{ scale: 1.05 }}
                   className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-[2rem] font-black italic tracking-tight shadow-xl shadow-green-500/20"
                 >
                   Hablar con un asesor por WhatsApp <MessageCircle size={22}/>
                 </motion.a>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
