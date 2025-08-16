import { LanguageProvider } from './Contexts/LanguageContext';
import { Navigation } from './Components/Navigation';

import { Home, About, Experience, Projects, Technologies, Footer } from './Sections'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <main>
          <Home />
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

export { App };
