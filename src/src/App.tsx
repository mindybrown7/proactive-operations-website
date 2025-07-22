import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
