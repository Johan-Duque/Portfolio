import { lazy, Suspense } from 'react';
import { LanguageProvider } from './Contexts/LanguageContext.tsx';
import { Navigation, Loading } from './Components';

import { Home } from './Sections';

const About = lazy(() => import('./Sections').then(module => ({ default: module.About })));
const Experience = lazy(() => import('./Sections').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./Sections').then(module => ({ default: module.Projects })));
const Technologies = lazy(() => import('./Sections').then(module => ({ default: module.Technologies })));
const Footer = lazy(() => import('./Sections').then(module => ({ default: module.Footer })));

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <main>
          <Home />
          <Suspense fallback={<Loading />}>
            <About />
            <Experience />
            <Projects />
            <Technologies />
            <Footer />
          </Suspense>
        </main>
      </div>
    </LanguageProvider>
  );
}

export { App };