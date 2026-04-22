import { motion } from "framer-motion";
import { Target, Lightbulb, Globe } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const HIGHLIGHTS = [
  { icon: Target, title: "Architect Mindset", text: "Designing systems that scale — from monolith decomposition to event-driven microservices." },
  { icon: Lightbulb, title: "AI & Innovation", text: "Exploring NLP and AI-powered applications to build intelligent, data-driven solutions." },
  { icon: Globe, title: "Global Ambitions", text: "Seeking opportunities to work on world-class products with distributed engineering teams." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="A brief introduction" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-400"
        >
          I'm a <span className="text-white">.NET Full Stack Developer</span> with a passion for building
          high-performance, distributed systems. I work across the stack with{" "}
          <span className="text-primary">C#, .NET, React, TypeScript & AWS</span>, and I'm on a deliberate path
          toward becoming a <span className="text-white">Software Architect</span> — one well-designed system at a
          time.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <GlassCard key={title} transition={{ delay: i * 0.1 }}>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
