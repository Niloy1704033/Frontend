// components/Topbar.tsx
"use client";
import { Search, Sun, Moon, CloudMoon, Bell, PanelRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "night";

export const Topbar = ({ onToggle }: { onToggle: () => void }) => {
  const pathname = usePathname();
  const pageTitle =
    pathname.replace(/^\//, "")
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") || "Dashboard";

  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    try {
      const saved = (localStorage.getItem("theme") as Theme) || null;
      if (saved && ["light", "dark", "night"].includes(saved)) {
        setTheme(saved);
        applyTheme(saved);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial: Theme = prefersDark ? "dark" : "light";
        setTheme(initial);
        applyTheme(initial);
      }
    } catch {
      // Fallback to light theme
      setTheme("light");
      applyTheme("light");
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "night");
    root.classList.add(newTheme);

    try {
      localStorage.setItem("theme", newTheme);
    } catch { }
  };

  // Apply theme class + persist
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : prev === "dark" ? "night" : "light"));
  };


  return (
    <header
      className="
        sticky top-0 z-30 backdrop-blur border-b transition-colors duration-200
        bg-[var(--surface-80)] border-[var(--border)]
      "
    >
      <div className="flex items-center gap-x-3 px-6 h-15">
        <PanelRight className="w-5 h-5" onClick={onToggle} />
        <div className="flex items-center justify-between w-full">
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <span className="px-3 py-1 rounded-lg bg-[var(--muted-bg)] text-[var(--muted)] transition-colors duration-200">
              Dashboard
            </span>
            <span className="text-[var(--muted)]/40 transition-colors duration-200">/</span>
            <span className="px-3 py-1 rounded-lg bg-[var(--accent)] text-white font-medium transition-colors duration-200">
              {pageTitle}
            </span>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative w-52 sm:w-72 max-w-full">
              <input
                placeholder="Search..."
                className="
                w-full rounded-xl border bg-[var(--input)] text-[var(--text)]
                border-[var(--border)] placeholder:text-[var(--muted)]
                py-2 pl-10 pr-4 text-sm outline-none transition-all duration-200
                focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]
              "
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors duration-200"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={toggleTheme}
                className="
                p-2 rounded-lg transition-all duration-200 hover:scale-105
                text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--muted-bg)]
              "
                aria-label="Toggle theme"
                title={`Current theme: ${theme}`}
              >
                {theme === "light" && <Sun className="w-5 h-5" />}
                {theme === "dark" && <Moon className="w-5 h-5" />}
                {theme === "night" && <CloudMoon className="w-5 h-5" />}
              </button>

              <button
                className="
                p-2 rounded-lg transition-all duration-200 hover:scale-105
                text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--muted-bg)]
              "
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}