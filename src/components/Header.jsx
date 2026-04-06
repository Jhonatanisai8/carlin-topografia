import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className="bg-secondary text-white py-2 px-4 shadow-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14}/> +51 987 654 321</span>
            <span className="flex items-center gap-1"><Mail size={14}/> contacto@carlintopografia.pe</span>
          </div>
          <span className="flex items-center gap-1"><MapPin size={14}/> Lima & Callao, Perú</span>
        </div>
      </div>
      <nav className="bg-white/80 backdrop-blur-md border-b border-primary/10 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
            <h1 className="text-2xl font-black tracking-tighter text-secondary uppercase">CARLIN <span className="text-primary">TOPOGRAFÍA</span></h1>
          </div>
          <div className="hidden lg:flex gap-8 font-semibold text-secondary/70">
            <a href="#soluciones" className="hover:text-primary transition-colors">Soluciones</a>
            <a href="#diferenciales" className="hover:text-primary transition-colors">Diferenciales</a>
            <a href="#metodo" className="hover:text-primary transition-colors">Método</a>
          </div>
          <a href="#contacto" className="bg-primary text-white py-2 px-6 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
            Cotizar Ahora
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
