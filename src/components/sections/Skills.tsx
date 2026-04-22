import { motion } from "framer-motion";
import { Server, Layout, Cloud, Blocks } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { SKILLS } from "../../data/portfolio";

const ICON_MAP: Record<string, React.ElementType> = { server: Server, layout: Layout, cloud: Cloud, blocks: Blocks };

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with daily" />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((cat, ci) => {
            const Icon = ICON_MAP[cat.icon] ?? Blocks;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-lg border border-white/5 bg-gray-950/50 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
