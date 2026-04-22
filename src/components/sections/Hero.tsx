import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { SOCIAL_LINKS } from "../../data/portfolio";

const TYPING_LINES = [
  '> const developer = "Rushikesh Ghosalkar";',
  '> const role = "Full Stack .NET Engineer";',
  "> developer.build(scalableSystems);",
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
              Available for opportunities
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rushikesh
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-lg text-gray-400">
              Building <span className="text-white">scalable systems</span> &{" "}
              <span className="text-white">intelligent applications</span>. .NET Full Stack Developer focused on
              microservices, system design & AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-gray-950 transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/10 bg-surface-light px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-primary/30 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/5 bg-surface-light p-2.5 text-gray-400 transition-all hover:border-primary/30 hover:text-primary" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/5 bg-surface-light p-2.5 text-gray-400 transition-all hover:border-primary/30 hover:text-primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/5 bg-surface-light p-2.5 text-gray-400 transition-all hover:border-primary/30 hover:text-primary" aria-label="Blog">
                <FileText size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right — Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-xl border border-white/5 bg-surface-light/80 shadow-2xl backdrop-blur-sm">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-gray-500">~/rushikesh/portfolio</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                {TYPING_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.4 }}
                    className="text-green-400"
                  >
                    {line}
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 2, repeat: Infinity, duration: 1 }}
                  className="mt-2 inline-block h-4 w-2 bg-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex justify-center"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={20} className="text-gray-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
