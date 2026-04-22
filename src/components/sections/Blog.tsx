import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { BLOG_POSTS } from "../../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Blog" subtitle="Writing about architecture & engineering" />

        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm transition-all hover:border-primary/20"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <ArrowUpRight size={18} className="shrink-0 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
