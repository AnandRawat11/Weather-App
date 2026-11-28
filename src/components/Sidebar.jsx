import React from "react";

export function Sidebar({ currentView, setCurrentView, soundEnabled, setSoundEnabled, alerts, onResetSimulation }) {
  const hasUnread = alerts.some(a => !a.isAcknowledged);

  return (
    <aside
      className="w-full md:w-16 lg:w-20 bg-white dark:bg-slate-800 rounded-2xl flex md:flex-col items-center justify-between py-4 px-3 md:py-6 shadow-sm border border-slate-100 dark:border-slate-700 flex-shrink-0"
      data-purpose="icon-sidebar"
    >
      {/* Top Brand Mark */}
      <div className="flex md:flex-col items-center gap-6">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-500 flex items-center justify-center hover:scale-105 transition-transform"
          title="Storm & Disaster Early-Warning Board"
        >
          <i className="w-6 h-6 stroke-[2.2]" data-lucide="cloud-sun"></i>
        </button>

        {/* Navigation Menu Icons matching Figma */}
        <nav className="flex md:flex-col items-center gap-3" data-purpose="sidebar-nav">
          <button
            onClick={() => setCurrentView("dashboard")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentView === "dashboard"
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25 brightness-105"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60"
            }`}
            title="Dashboard Overview"
          >
            <i className="w-5 h-5" data-lucide="layout-grid"></i>
          </button>

          <button
            onClick={() => setCurrentView("analytics")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentView === "analytics"
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60"
            }`}
            title="Analytics & Telemetry"
          >
            <i className="w-5 h-5" data-lucide="bar-chart-2"></i>
          </button>

          <button
            onClick={() => setCurrentView("map")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentView === "map"
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60"
            }`}
            title="Regional Radar Map"
          >
            <i className="w-5 h-5" data-lucide="map-pin"></i>
          </button>

          <button
            onClick={() => setCurrentView("liveFeed")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all relative ${
              currentView === "liveFeed"
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60"
            }`}
            title="Live Alert Feed"
          >
            <i className="w-5 h-5" data-lucide="list"></i>
            {hasUnread && (
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5 animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setCurrentView("resources")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentView === "resources"
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60"
            }`}
            title="Rescue Teams & Resource Panel"
          >
            <i className="w-5 h-5" data-lucide="shield"></i>
          </button>

          <button
            onClick={() => setCurrentView("settings")}
            className="w-10 h-10 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center justify-center transition-colors"
            title="Settings & Documentation"
          >
            <i className="w-5 h-5" data-lucide="settings"></i>
          </button>
        </nav>
      </div>

      {/* Bottom Exit & Audio Actions */}
      <div className="mt-auto flex md:flex-col items-center gap-3">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            soundEnabled
              ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
              : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
          title={soundEnabled ? "Audio Alerts Enabled" : "Audio Alerts Muted"}
        >
          <i className="w-4 h-4" data-lucide={soundEnabled ? "volume-2" : "volume-x"}></i>
        </button>

        <button
          onClick={onResetSimulation}
          className="w-10 h-10 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center transition-colors"
          title="Reset Simulation Feed"
        >
          <i className="w-5 h-5" data-lucide="log-out"></i>
        </button>
      </div>
    </aside>
  );
}

