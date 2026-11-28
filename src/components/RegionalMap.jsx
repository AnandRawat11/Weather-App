import React, { useState } from "react";

export function RegionalMap({ selectedRegion, onSelectRegion, regionsData }) {
  const [mapLayer, setMapLayer] = useState("temp");

  return (
    <section className="dashboard-card p-5 flex flex-col" data-purpose="regional-weather-map">
      {/* Card Header with functional map layers */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Temperature in various regions</h3>
          <p className="text-[10px] text-slate-400">Click pins to filter telemetry</p>
        </div>

        {/* Map layer pills */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[9px] font-bold">
          {["temp", "radar", "clouds"].map(layer => (
            <button
              key={layer}
              onClick={() => setMapLayer(layer)}
              className={`px-2 py-0.5 rounded-md uppercase transition-all ${
                mapLayer === layer
                  ? "bg-white dark:bg-slate-700 text-blue-500 shadow-xs"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Map of Australia with Active Radar storm overlay */}
      <div className="relative w-full h-64 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center p-3 border border-slate-100/60 dark:border-slate-700/60 overflow-hidden">
        {/* Radar sweep beam animation when radar layer is on */}
        {mapLayer === "radar" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-red-500/20"></div>
            <div className="w-56 h-56 rounded-full border border-blue-500/20"></div>
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-rose-500/15 via-transparent to-transparent animate-radar-sweep"></div>
          </div>
        )}

        {/* Australia SVG Path */}
        <svg className="w-full h-full fill-slate-200/90 dark:fill-slate-700/80 stroke-white dark:stroke-slate-600 stroke-[2.5] drop-shadow-sm" viewBox="0 0 380 300">
          <path d="M 90,85 C 105,75 140,70 170,82 C 180,68 195,45 220,50 C 235,52 245,75 250,90 C 265,95 295,110 305,130 C 315,150 320,180 310,205 C 300,225 280,220 270,235 C 260,250 240,240 220,230 C 200,225 180,230 160,240 C 140,245 130,225 110,215 C 95,208 80,210 70,195 C 60,180 62,150 68,135 C 75,118 78,98 90,85 Z"></path>
          <path d="M 240,265 C 248,260 258,264 256,275 C 252,284 240,280 240,265 Z"></path>
        </svg>

        {/* Regional Temperature Badges */}
        {regionsData.map(reg => (
          <div
            key={reg.id}
            onClick={() => onSelectRegion(reg.id)}
            className={`${reg.pinClass} cursor-pointer group z-10`}
          >
            <div className={`w-8 h-8 rounded-full ${reg.badgeColor}/25 radar-ring`}></div>
            <div
              className={`w-6 h-6 rounded-full text-white text-[10px] font-extrabold flex items-center justify-center shadow-lg border-2 border-white ring-2 group-hover:scale-125 transition-transform ${reg.badgeColor}`}
            >
              {reg.temp}
            </div>
          </div>
        ))}
      </div>

      {/* Locations Table Breakdown */}
      <div className="mt-5">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-700">
          <span>Locations</span>
          <span>Temperature</span>
        </div>
        <div className="divide-y divide-slate-50 dark:divide-slate-800">
          {regionsData.map(reg => (
            <div
              key={reg.id}
              onClick={() => onSelectRegion(reg.id)}
              className="flex items-center justify-between py-3 hover:bg-slate-50/70 dark:hover:bg-slate-800/60 px-1 rounded-lg transition-colors cursor-pointer"
            >
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{reg.name}</span>
              <div className="flex items-center gap-2">
                <i className={`w-4 h-4 ${reg.iconColor}`} data-lucide={reg.icon}></i>
                <span className={`text-xs font-bold ${reg.textColor}`}>{reg.temp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
