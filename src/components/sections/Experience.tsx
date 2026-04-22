import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { EXPERIENCE } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative ml-4 border-l border-white/10 pl-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-surface">
                <Briefcase size={12} className="text-primary" />
              </div>

              <span className="mb-1 inline-block font-mono text-xs text-primary">{exp.period}</span>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="mb-3 text-sm text-gray-500">{exp.company}</p>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{exp.description}</p>

              <ul className="mb-4 space-y-1.5">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((t) => (
                  <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
