import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Technologies />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
