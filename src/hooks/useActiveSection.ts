import { useState, useEffect } from "react";

export function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}
