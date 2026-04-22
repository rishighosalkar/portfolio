import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        <span className="font-mono text-primary">&lt;</span> {title}{" "}
        <span className="font-mono text-primary">/&gt;</span>
      </h2>
      {subtitle && <p className="mt-3 text-gray-400">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
