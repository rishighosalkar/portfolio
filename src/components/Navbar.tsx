import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-gray-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-lg font-bold text-primary">
          &lt;RG /&gt;
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm transition-colors hover:text-primary ${
                  active === item.href.slice(1) ? "text-primary" : "text-gray-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/20 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-gray-400 md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-surface-light hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
