import React from "react";

export function HeroWeatherCard({ selectedDay, selectedRegion, onToggleRegion, activeTemp, activeCondition }) {
  return (
    <section className="md:col-span-5 dashboard-card p-5 flex flex-col justify-between" data-purpose="current-weather-hero">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{selectedDay}</h2>
          <p className="text-xs text-slate-400 font-medium">1 June 2024</p>
        </div>
        {/* Location Badge */}
        <span
          onClick={onToggleRegion}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-sm shadow-blue-500/30 cursor-pointer hover:brightness-105"
        >
          <i className="w-3 h-3" data-lucide="map-pin"></i>
          {selectedRegion === "all" ? "Australia" : selectedRegion}
        </span>
      </div>

      {/* Weather Illustration and Temp matching Figma exactly */}
      <div className="my-4 flex items-center justify-between">
        {/* Weather Graphic */}
        <div className="relative w-28 h-24 flex items-center justify-center">
          {/* Stylized Sun */}
          <div className="absolute -top-1 left-2 w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-lg shadow-amber-400/40 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-yellow-200/50 blur-[2px]"></div>
          </div>
          {/* Stylized Soft Cloud */}
          <div className="absolute bottom-2 left-0 w-24 h-12 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full shadow-md border border-white dark:border-slate-600 flex items-center justify-center">
            <div className="absolute -top-4 left-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700"></div>
            <div className="absolute -top-2 left-10 w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>
          {/* Micro cloud hint */}
          <div className="absolute top-1 right-1 w-8 h-4 bg-slate-200/80 dark:bg-slate-600/80 rounded-full blur-[0.5px]"></div>
        </div>

        {/* Numerical Temp Values */}
        <div className="text-right">
          <div className="text-4xl lg:text-5xl font-extrabold text-amber-500 tracking-tight">{activeTemp}°C</div>
          <div className="text-[11px] font-semibold text-slate-400 mt-1">High : 29° Low : 15°</div>
        </div>
      </div>

      {/* Condition description */}
      <div>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{activeCondition}</p>
      </div>
    </section>
  );
}

