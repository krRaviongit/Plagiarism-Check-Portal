import { motion } from 'framer-motion';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'easeOut' }}
      />
    </div>
  );
}


