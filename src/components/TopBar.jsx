import React from "react";

export function TopBar({
  searchQuery,
  setSearchQuery,
  isDarkMode,
  setIsDarkMode,
  alerts,
  onOpenTeamModal,
  showNotificationTray,
  setShowNotificationTray,
  onAcknowledge,
  onMarkAllRead,
  onTriggerEvent
}) {
  const unreadCount = alerts.filter(a => !a.isAcknowledged).length;

  return (
    <header className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4" data-purpose="topbar-header">
      {/* Left Title and Subtitle */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Weather Tracker</h1>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            EARLY-WARNING LIVE
          </span>
        </div>
        <p className="text-xs md:text-sm text-slate-400 font-medium">Saturday, 1 June 2024</p>
      </div>

      {/* Center Search Capsule */}
      <div className="flex-1 max-w-md mx-0 lg:mx-4">
        <div className="relative w-full">
          <i className="w-4 h-4 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2" data-lucide="search"></i>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#dfe8f3] dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-full border border-slate-200/50 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:bg-white dark:focus:bg-slate-750 transition-all shadow-inner"
            placeholder="Search..."
            type="text"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Right Quick Action Bar */}
      <div className="flex items-center gap-3 self-end lg:self-center">
        {/* Day / Night Toggle Pill */}
        <div className="flex items-center bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
          <button
            onClick={() => setIsDarkMode(false)}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              !isDarkMode ? "bg-blue-500 text-white shadow-xs" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
            title="Light Mode"
          >
            <i className="w-4 h-4" data-lucide="sun"></i>
          </button>
          <button
            onClick={() => setIsDarkMode(true)}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              isDarkMode ? "bg-blue-500 text-white shadow-xs" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
            title="Dark Mode"
          >
            <i className="w-4 h-4" data-lucide="moon"></i>
          </button>
        </div>

        {/* Mail Notification (Academic Submission Information) */}
        <button
          onClick={onOpenTeamModal}
          className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow transition-all relative"
          title="Team Info & Mentor Guide"
        >
          <i className="w-4 h-4" data-lucide="mail"></i>
          <span className="w-2 h-2 rounded-full bg-blue-500 absolute top-2 right-2 border-2 border-white dark:border-slate-800"></span>
        </button>

        {/* Bell Alert */}
        <div className="relative">
          <button
            onClick={() => setShowNotificationTray(!showNotificationTray)}
            className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow relative transition-all"
            title="Live Alert Notifications"
          >
            <i className="w-4 h-4" data-lucide="bell"></i>
            {unreadCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2 border-2 border-white dark:border-slate-800 animate-pulse"></span>
            )}
          </button>

          {/* Notification Tray Dropdown */}
          {showNotificationTray && (
            <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 z-50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700 mb-3">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Live Alert Stream ({unreadCount})</span>
                <button
                  onClick={onMarkAllRead}
                  className="text-[11px] text-blue-500 font-semibold hover:underline"
                >
                  Mark read
                </button>
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                {alerts.slice(0, 4).map(alert => (
                  <div key={alert.id} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200/60 dark:border-slate-700 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{alert.title}</span>
                      <span className="text-[10px] font-bold text-red-500 uppercase">{alert.severity}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{alert.description}</p>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-400">
                      <span>{alert.region}</span>
                      <button onClick={() => onAcknowledge(alert.id)} className="text-blue-500 font-semibold">
                        Acknowledge
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Chip */}
        <div
          onClick={onOpenTeamModal}
          className="flex items-center gap-2 bg-white dark:bg-slate-800 pl-1.5 pr-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
          title="Team Info & Project Specs"
        >
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border border-amber-300">
            <span className="text-xs font-bold text-amber-700">WP</span>
          </div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Winter Potter</span>
          <i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down"></i>
        </div>
      </div>
    </header>
  );
}

