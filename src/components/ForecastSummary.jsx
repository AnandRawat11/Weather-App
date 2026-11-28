import React from "react";

export function ForecastSummary({ selectedDay, onSelectDay }) {
  const days = [
    { day: "Mon", icon: "cloud-sun", temp: "19°", color: "text-amber-400" },
    { day: "Tue", icon: "cloud-rain", temp: "17°", color: "text-blue-400" },
    { day: "Wed", icon: "cloud-lightning", temp: "20°", color: "text-amber-500" },
    { day: "Thu", icon: "sun", temp: "26°", color: "text-amber-400" },
    { day: "Fri", icon: "cloud-sun", temp: "28°", color: "text-amber-400" },
    { day: "Sat", icon: "cloud-sun", temp: "27°", color: "text-yellow-200", isDefault: true },
    { day: "Sun", icon: "cloud", temp: "24°", color: "text-slate-400" }
  ];

  return (
    <section className="md:col-span-8 dashboard-card p-5" data-purpose="forecast-summary">
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-4">Forecast Summary</h3>

      {/* 7 Day Pill Columns matching Figma */}
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {days.map(d => {
          const isSelected = selectedDay === d.day;
          return (
            <div
              key={d.day}
              onClick={() => onSelectDay(d.day)}
              className={`flex flex-col items-center justify-between py-2.5 px-1 rounded-xl cursor-pointer transition-all transform ${
                isSelected
                  ? "bg-blue-500 text-white shadow-md shadow-blue-500/30 scale-105"
                  : "bg-slate-50/60 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80"
              }`}
            >
              <span className={`text-[11px] font-semibold ${isSelected ? "text-white font-bold" : "text-slate-500 dark:text-slate-400"}`}>
                {d.day}
              </span>
              <i className={`w-5 h-5 my-2 ${isSelected ? "text-yellow-200" : d.color}`} data-lucide={d.icon}></i>
              <span className={`text-xs ${isSelected ? "font-extrabold text-white" : "font-bold text-slate-700 dark:text-slate-200"}`}>
                {d.temp}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

