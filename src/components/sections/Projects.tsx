import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { PROJECTS, PROJECT_FILTERS } from "../../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-gray-950"
                  : "border border-white/5 bg-surface-light text-gray-400 hover:border-primary/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isOpen = expanded === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/20"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary" aria-label="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary" aria-label="Live demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

                  {/* Tech stack pills */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Toggle highlights */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : project.id)}
                    className="flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-primary"
                  >
                    {isOpen ? "Hide" : "Show"} Highlights
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 space-y-1.5 overflow-hidden"
                      >
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
