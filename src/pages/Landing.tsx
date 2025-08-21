import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <section className="container-px">
      {/* Hero Section */}
      <div className="text-center py-20 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            AI-Powered Detection Technology
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-poppins bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            PlagiaShield
          </h1>
          
          <p className="text-2xl sm:text-3xl text-white/80 font-light max-w-3xl mx-auto">
            Advanced AI-powered plagiarism detection for academic integrity
          </p>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Upload your documents and get instant, accurate plagiarism analysis with detailed reports and suggestions for improvement.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/check" className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4">
            <motion.span whileHover={{ x: 2 }}>Start Free Check</motion.span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <button className="btn-ghost inline-flex items-center gap-2 text-lg px-8 py-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How it works
          </button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16"
      >
        {[
          { number: '99.8%', label: 'Accuracy Rate' },
          { number: '< 30s', label: 'Check Time' },
          { number: '50M+', label: 'Documents Scanned' },
          { number: '24/7', label: 'Availability' },
        ].map((stat, index) => (
          <div key={stat.label} className="glass rounded-2xl p-6 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
              className="text-3xl font-bold text-accent-500 mb-2"
            >
              {stat.number}
            </motion.div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose PlagiaShield?</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Advanced AI technology combined with comprehensive analysis for the most accurate plagiarism detection
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Lightning Fast',
              description: 'Get results in under 30 seconds with our optimized AI algorithms',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: '99.8% Accuracy',
              description: 'Industry-leading accuracy with advanced pattern recognition',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Secure & Private',
              description: 'Your documents are encrypted and never stored permanently',
              color: 'from-purple-500 to-pink-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="py-16 text-center"
      >
        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Check Your Work?</h2>
          <p className="text-white/60 mb-8 text-lg">
            Join thousands of students and professionals who trust PlagiaShield for their academic integrity
          </p>
          <Link to="/check" className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-4">
            <motion.span whileHover={{ x: 2 }}>Start Free Check Now</motion.span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}


