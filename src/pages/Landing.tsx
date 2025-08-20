import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <section className="container-px">
      <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins"
          >
            AI-Powered Plagiarism Checker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg"
          >
            Upload. Analyze. Stay Original.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Link to="/check" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              <motion.span whileHover={{ x: 2 }}>
                Try Now
              </motion.span>
            </Link>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 max-w-md pt-6">
            {[
              { label: 'Fast', sub: 'Real-time checks' },
              { label: 'Accurate', sub: 'Smart matching' },
              { label: 'Secure', sub: 'Your data stays private' },
            ].map((i) => (
              <div key={i.label} className="glass rounded-xl p-4 text-center">
                <div className="font-semibold">{i.label}</div>
                <div className="text-xs text-white/60">{i.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-video w-full glass rounded-3xl p-1">
            <div className="w-full h-full rounded-2xl bg-gradient-tech" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden lg:block">
            <div className="glass rounded-2xl p-4">
              <div className="text-sm text-white/70">Smooth page transitions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


