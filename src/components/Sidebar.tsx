"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  ClipboardList,
  Notebook,
  LayoutGrid,
  MessageSquare,
} from "lucide-react";
import clsx from "clsx";

const items = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Resume Optimizer", href: "/resume", icon: ClipboardList },
  { label: "Note Tracker", href: "/notes", icon: Notebook },
  { label: "Interview Prep", href: "/interview-prep", icon: MessageSquare },
  { label: "Option 3", href: "/opt3", icon: LayoutGrid },
  { label: "Option 4", href: "/opt4", icon: LayoutGrid },
  { label: "Option 5", href: "/opt5", icon: LayoutGrid },
  { label: "Option 6", href: "/opt6", icon: LayoutGrid },
];

// Small util to clamp initial theme to system preference if nothing saved
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  // Keep <html data-theme> in sync so CSS vars above take effect
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const brandText = useMemo(() => (open ? "Placed" : "P"), [open]);

  const SidebarContent = () => (
    <div className="flex h-screen w-full flex-col bg-[var(--sidebar-bg)] text-[var(--text)]">
      {/* Header */}
      <div className="h-15 flex items-center justify-between border-b px-6" style={{ borderColor: "var(--border)" }}>
        <div
          className={clsx(
            "transition-all duration-200 font-black text-indigo-700 ",
            open ? "text-2xl" : "text-2xl"
          )}

        >
          {brandText}
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-1 flex-1 overflow-y-auto">
        {items.map((it) => {
          const Icon = it.icon;
          const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));

          return (
            <a
              key={it.label}
              href={it.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 relative group",
                "outline-none",
              )}
              style={{
                color: active ? "var(--text)" : "var(--text-muted)",
                background: active ? "var(--active-bg)" : "transparent",
                borderColor: "var(--border)",
              }}
              title={!open ? it.label : undefined}
            >
              <Icon size={18} className="flex-shrink-0" />
              <span
                className={clsx(
                  "transition-all duration-200",
                  !open &&
                  "hidden lg:group-hover:block lg:absolute lg:left-12 lg:px-2 lg:py-1 lg:rounded lg:text-xs lg:whitespace-nowrap lg:z-50",
                )}
                style={!open ? { background: "var(--surface)", color: "var(--text)" } : undefined}
              >
                {it.label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="mt-auto p-4 border-t" style={{ borderColor: "var(--border)" }}>
        <div
          className={clsx(
            "flex items-center gap-3 px-2 transition-all duration-200",
            !open && "justify-center"
          )}
        >
          <div
            className="h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: "var(--muted-bg)" }}
          >
            <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              AW
            </span>
          </div>
          <div className={clsx("text-sm transition-all duration-200", !open && "hidden")}
            style={{ color: "var(--text)" }}>
            <div className="font-medium">Amily Watson</div>
            <div style={{ color: "var(--text-muted)" }}>Premium</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={clsx(
          "hidden fixed lg:flex border-r transition-all duration-300 ease-in-out",
          open ? "w-64" : "w-16"
        )}
        style={{
          background: "var(--sidebar-bg)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {/* <aside
        className={clsx(
          "lg:hidden fixed left-0 top-0 z-50 h-full w-64 border-r transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          background: "var(--sidebar-bg)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <SidebarContent />
      </aside> */}

      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-gray-800 text-white"><SidebarContent /></div>
          {/* Click outside to close */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
