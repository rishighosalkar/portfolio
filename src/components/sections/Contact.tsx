import { useState, type FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Download, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import SectionHeading from "../ui/SectionHeading";
import { SOCIAL_LINKS } from "../../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          from_email: form.email,
          to_email: SOCIAL_LINKS.email,
          message: form.message,
        }
      );
      
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/5 bg-gray-950/50 px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Contact" subtitle="Let's build something together" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="mb-8 text-gray-400 leading-relaxed">
              I'm always open to discussing new projects, architecture challenges, or opportunities to be part of
              something great. Drop me a message!
            </p>

            <div className="space-y-4">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary">
                <Mail size={18} /> {SOCIAL_LINKS.email}
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary">
                <GitHubIcon /> GitHub
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary">
                <LinkedInIcon /> LinkedIn
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1m62D5Fo4OdPdWGt3XlPcp8FWrEC9pBz2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/20"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-gray-950 transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
            </button>
            {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
