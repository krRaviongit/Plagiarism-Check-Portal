import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedNumber({ value, duration = 1.2, suffix = '%' }: { value: number; duration?: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [value, duration, count]);

  return (
    <motion.span>{rounded}{suffix}</motion.span>
  );
}


