import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Key,
  Menu,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { to: "/", label: "Workflow Builder", icon: Zap },
  { to: "/workflows", label: "Workflows", icon: GitBranch },
  { to: "/api-keys", label: "API & Keys", icon: Key },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={onMobileClose}
          onKeyUp={(e) => e.key === "Escape" && onMobileClose()}
          role="button"
          tabIndex={-1}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col transition-smooth",
          "bg-sidebar border-r border-sidebar-border",
          "md:relative md:translate-x-0",
          collapsed ? "md:w-[64px]" : "md:w-[240px]",
          mobileOpen
            ? "translate-x-0 w-[240px]"
            : "-translate-x-full w-[240px] md:translate-x-0",
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex items-center gap-3 px-4 h-14 border-b border-sidebar-border flex-shrink-0",
            collapsed && "md:justify-center md:px-0",
          )}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary flex-shrink-0">
            <Zap
              className="w-4 h-4 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>
          {!collapsed && (
            <span className="font-semibold text-sm text-sidebar-foreground truncate">
              Workflow Automation
            </span>
          )}
          {/* Mobile close */}
          <button
            type="button"
            onClick={onMobileClose}
            className="ml-auto md:hidden p-1 rounded text-muted-foreground hover:text-foreground"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto scrollbar-thin">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
            const isActive =
              to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-smooth",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-sidebar-primary/15 text-sidebar-primary font-medium"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "md:justify-center md:px-2",
                )}
                data-ocid={`nav-${label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                title={collapsed ? label : undefined}
                onClick={onMobileClose}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && <span className="truncate">{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden md:flex px-2 pb-4">
          <button
            type="button"
            onClick={onToggle}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg w-full text-xs text-muted-foreground",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-smooth",
              collapsed && "justify-center px-2",
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <>
                <ChevronLeft className="w-4 h-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

// Hook for sidebar state
export function useSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return {
    collapsed,
    mobileOpen,
    toggle: () => setCollapsed((v) => !v),
    openMobile: () => setMobileOpen(true),
    closeMobile: () => setMobileOpen(false),
  };
}

// Mobile hamburger trigger
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-smooth"
      aria-label="Open navigation"
    >
      <Menu className="w-5 h-5" />
    </button>
  );
}
