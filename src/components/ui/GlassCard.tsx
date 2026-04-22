import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { children: React.ReactNode };

export default function GlassCard({ children, className = "", ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/20 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
