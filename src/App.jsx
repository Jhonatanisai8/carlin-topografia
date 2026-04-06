import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Empathy from './components/Empathy';
import Catalog from './components/Catalog';
import Authority from './components/Authority';
import Method from './components/Method';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral font-poppins selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Catalog />
        <Authority />
        <Method />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
