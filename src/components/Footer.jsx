import React from "react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Facebook = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-20 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
              C
            </div>
            <h2 className="text-3xl font-black italic tracking-tighter">
              CARLIN <span className="text-primary">TOPOGRAFÍA</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed italic pr-6 italic">
            Equipos topográficos listos, precisos y sin complicaciones. Líderes
            en el sector B2B del Perú.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group shadow-lg">
              <Facebook
                size={20}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group shadow-lg">
              <Instagram
                size={20}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group shadow-lg">
              <Linkedin
                size={20}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-black text-white italic tracking-tight">
            Soluciones
          </h4>
          <ul className="space-y-3 text-white/40 text-sm font-bold uppercase tracking-widest">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Estaciones Totales
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Sistemas GNSS
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Niveles & Láser
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Accesorios Obra
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-black text-white italic tracking-tight">
            Empresa
          </h4>
          <ul className="space-y-3 text-white/40 text-sm font-bold uppercase tracking-widest">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Acerca de nosotros
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Diferenciales
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Certificaciones
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Casos de Éxito
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-black text-white italic tracking-tight">
            Contacto
          </h4>
          <ul className="space-y-4 text-white/60 text-sm italic">
            <li className="flex items-start gap-3">
              <MapPin
                size={20}
                className="text-primary shrink-0 transition-all"
              />
              <span>Av. Javier Prado Este, San Isidro, Lima - Perú</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone
                size={20}
                className="text-primary shrink-0 transition-all"
              />
              <span>+51 987 654 321</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail
                size={20}
                className="text-primary shrink-0 transition-all"
              />
              <span>contacto@carlintopografia.pe</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.2em] text-white/20">
        <p>&copy; 2024 CARLIN TOPOGRAFÍA. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <span className="hover:text-white transition-colors cursor-pointer">
            Privacidad
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Términos
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
