import { Outlet } from "@tanstack/react-router";
import { MobileMenuButton, Sidebar, useSidebar } from "./components/Sidebar";

export default function Layout() {
  const sidebar = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        collapsed={sidebar.collapsed}
        onToggle={sidebar.toggle}
        mobileOpen={sidebar.mobileOpen}
        onMobileClose={sidebar.closeMobile}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center gap-3 px-4 h-14 bg-card border-b border-border flex-shrink-0">
          <MobileMenuButton onClick={sidebar.openMobile} />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">
                W
              </span>
            </div>
            <span className="font-semibold text-sm">Workflow Automation</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto scrollbar-thin">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
