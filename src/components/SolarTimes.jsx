import React from "react";

export function SolarTimes() {
  return (
    <section className="md:col-span-4 dashboard-card p-5 flex flex-col justify-between gap-3" data-purpose="solar-times">
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Today</h3>

      {/* Sunrise Widget */}
      <div className="flex items-center gap-3 bg-slate-50/70 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/80">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-orange-400 to-indigo-600 flex items-center justify-center text-white shadow-inner flex-shrink-0">
          <i className="w-5 h-5" data-lucide="sunrise"></i>
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-400">Sunrise</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">6.40 <span className="text-[11px] font-semibold text-blue-500">AM</span></p>
        </div>
      </div>

      {/* Sunset Widget */}
      <div className="flex items-center gap-3 bg-slate-50/70 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/80">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-orange-500 via-rose-500 to-purple-800 flex items-center justify-center text-white shadow-inner flex-shrink-0">
          <i className="w-5 h-5" data-lucide="sunset"></i>
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-400">Sunset</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">5.15 <span className="text-[11px] font-semibold text-blue-500">PM</span></p>
        </div>
      </div>
    </section>
  );
}

