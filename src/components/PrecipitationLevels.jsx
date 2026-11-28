import React from "react";

export function PrecipitationLevels({ metric, setMetric, selectedDay, onSelectDay, bars }) {
  return (
    <section className="md:col-span-7 dashboard-card p-5" data-purpose="precipitation-levels">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Precipitation Levels</h3>
          <span className="text-[10px] text-blue-500 font-semibold">Hover bars for detailed storm metrics</span>
        </div>

        {/* Metric Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[9px] font-bold">
          {[
            { key: "rain", label: "Rain (mm)" },
            { key: "prob", label: "Prob (%)" },
            { key: "runoff", label: "Runoff" }
          ].map(m => (
            <button
              key={m.key}
              onClick={() => setMetric(m.key)}
              className={`px-2 py-0.5 rounded-md transition-all ${
                metric === m.key
                  ? "bg-white dark:bg-slate-700 text-blue-500 shadow-xs"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-3 h-40 pt-2">
        {/* Y-Scale */}
        <div className="flex flex-col justify-between h-32 text-[10px] font-semibold text-slate-400 pb-5">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* Capsule Bars Container */}
        <div className="flex-1 grid grid-cols-7 gap-3 items-end h-full">
          {bars.map(bar => {
            const isSelected = selectedDay === bar.day;
            return (
              <div
                key={bar.day}
                onClick={() => onSelectDay(bar.day)}
                className="flex flex-col items-center h-full justify-end group cursor-pointer relative"
              >
                {/* Tooltip on Hover */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-md">
                  {bar.day}: {bar.label} ({bar.sub})
                </div>

                <div
                  className={`w-4 sm:w-5 rounded-full h-32 flex flex-col justify-end overflow-hidden p-0.5 transition-all ${
                    isSelected ? "bg-blue-100 dark:bg-blue-900/40 ring-2 ring-blue-400" : "bg-slate-100 dark:bg-slate-700"
                  }`}
                >
                  <div
                    className={`w-full rounded-full transition-all duration-500 ${
                      bar.percent >= 80 ? 'bg-blue-500 group-hover:bg-rose-500' : 'bg-blue-500 group-hover:bg-blue-600'
                    }`}
                    style={{ height: `${bar.percent}%` }}
                  ></div>
                </div>
                <span
                  className={`text-[10px] mt-2 transition-colors ${
                    isSelected ? "font-bold text-blue-500" : "font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                >
                  {bar.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
