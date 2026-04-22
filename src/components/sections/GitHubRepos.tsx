import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const LANG_COLORS: Record<string, string> = {
  "C#": "#178600",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/rushikeshghosalkar/repos?sort=updated&per_page=4")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setRepos(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!loading && repos.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Open Source" subtitle="Latest from GitHub" />

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl bg-surface-light/50" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-white/5 bg-surface-light/50 p-5 backdrop-blur-sm transition-all hover:border-primary/20"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>
                <p className="mb-3 line-clamp-2 text-xs text-gray-500">{repo.description || "No description"}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: LANG_COLORS[repo.language] || "#8b949e" }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
