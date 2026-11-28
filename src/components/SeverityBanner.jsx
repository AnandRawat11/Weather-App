import React from "react";

export function SeverityBanner({ alert, onDismiss, onViewMap, onMobilize }) {
  if (!alert) return null;

  const isCritical = alert.severity === 'critical';

  return (
    <div
      className={`w-full rounded-2xl p-3 sm:p-3.5 border shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
        isCritical
          ? 'bg-gradient-to-r from-rose-50 via-red-50 to-amber-50 dark:from-red-950/60 dark:to-slate-900 border-red-300 dark:border-red-900/60'
          : 'bg-gradient-to-r from-amber-50 via-yellow-50 to-blue-50 dark:from-amber-950/40 dark:to-slate-900 border-amber-300 dark:border-amber-900/60'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isCritical
              ? 'bg-red-500 text-white animate-pulse shadow-md shadow-red-500/30'
              : 'bg-amber-500 text-white'
          }`}
        >
          <i className="w-5 h-5" data-lucide={alert.icon || "alert-triangle"}></i>
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white">
              {alert.severity} ALERT
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
              {alert.title} — {alert.region}
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              ({alert.windSpeed} | Rain: {alert.rainfall})
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-1">
            {alert.description} <span className="font-semibold text-rose-600 dark:text-rose-400">Action: {alert.advisory}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
        <button
          onClick={onViewMap}
          className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs"
        >
          View Map
        </button>
        <button
          onClick={onMobilize}
          className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white hover:bg-blue-600 shadow-xs shadow-blue-500/30"
        >
          Mobilize Teams
        </button>
        <button
          onClick={onDismiss}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
          title="Dismiss Banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

