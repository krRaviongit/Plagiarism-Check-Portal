import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Landing from './pages/Landing';
import Check from './pages/Check';
import Results from './pages/Results';
import About from './pages/About';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
};

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1"
              >
                <Landing />
              </motion.main>
            }
          />
          <Route
            path="/check"
            element={
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1"
              >
                <Check />
              </motion.main>
            }
          />
          <Route
            path="/results"
            element={
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1"
              >
                <Results />
              </motion.main>
            }
          />
          <Route
            path="/about"
            element={
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1"
              >
                <About />
              </motion.main>
            }
          />
        </Routes>
      </AnimatePresence>
      <footer className="text-center text-white/50 text-sm py-6">Made with ❤️ by Kumar Ravi and Abinash Giri</footer>
    </div>
  );
}


