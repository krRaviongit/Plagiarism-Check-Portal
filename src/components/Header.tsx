import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="container-px">
        <div className="mt-4 mb-6 glass rounded-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: -6 }}
                animate={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-600 grid place-items-center shadow-lg"
              >
                <span className="font-extrabold">AI</span>
              </motion.div>
              <div className="leading-tight">
                <div className="font-poppins font-semibold tracking-wide">PlagiaShield</div>
                <div className="text-xs text-white/60">Stay Original</div>
              </div>
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <HeaderLink to="/" label="Home" />
              <HeaderLink to="/check" label="Check Plagiarism" />
              <HeaderLink to="/about" label="About" />
            </nav>
            <div className="sm:hidden">
              <Link to="/check" className="btn-primary text-sm">Try Now</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-xl transition-colors ${
          isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {label}
    </NavLink>
  );
}


