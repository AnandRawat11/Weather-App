import React from "react";

export function WeatherAlerts({ alerts, onViewAllFeed }) {
  return (
    <section className="md:col-span-5 dashboard-card p-5 flex flex-col justify-between" data-purpose="weather-alerts">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Weather Alerts</h3>
        <button
          onClick={onViewAllFeed}
          className="text-[11px] font-semibold text-blue-500 hover:underline"
        >
          View Feed ({alerts.length})
        </button>
      </div>

      {/* Alert Item 1 */}
      {alerts[0] && (
        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700/60">
          <div>
            <span className="text-[11px] font-semibold text-slate-400">
              {alerts[0].timestamp}
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{alerts[0].temp}</span>
              <span className="text-[10px] text-slate-400">H: {alerts[0].high} | L: {alerts[0].low}</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300">
            <i className="w-5 h-5" data-lucide={alerts[0].icon}></i>
          </div>
        </div>
      )}

      {/* Alert Item 2 */}
      {alerts[1] && (
        <div className="flex items-center justify-between py-2">
          <div>
            <span className="text-[11px] font-semibold text-slate-400">
              {alerts[1].timestamp}
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{alerts[1].temp}</span>
              <span className="text-[10px] text-slate-400">H: {alerts[1].high} | L: {alerts[1].low}</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300">
            <i className="w-5 h-5" data-lucide={alerts[1].icon}></i>
          </div>
        </div>
      )}
    </section>
  );
}

