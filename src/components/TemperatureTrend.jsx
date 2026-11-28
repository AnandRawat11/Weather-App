import React, { useState } from "react";

export function TemperatureTrend({ chartMetric, setChartMetric, hoveredPoint, setHoveredPoint, activeChartData }) {
  return (
    <section className="md:col-span-7 dashboard-card p-5 flex flex-col justify-between" data-purpose="temperature-trend-graph">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Temperature Trend</h3>
          <p className="text-[10px] text-slate-400">Interactive Telemetry & Barometric Curve</p>
        </div>

        {/* Metric Switcher Tabs */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[10px] font-bold">
          {["Hourly", "Weekly", "Pressure", "Wind"].map(mode => (
            <button
              key={mode}
              onClick={() => setChartMetric(mode)}
              className={`px-2 py-0.5 rounded-md transition-all ${
                chartMetric === mode
                  ? "bg-white dark:bg-slate-700 text-blue-500 shadow-xs"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive / Visual SVG Chart */}
      <div className="relative w-full h-44 mt-2">
        {/* Dynamic Tooltip */}
        <div
          className="absolute -top-1 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10 transition-all duration-150"
          style={{ left: `${(hoveredPoint.x / 460) * 100}%` }}
        >
          <span
            className="px-2.5 py-0.5 rounded-md text-white text-[11px] font-bold shadow-md transition-colors"
            style={{ backgroundColor: activeChartData.color }}
          >
            {hoveredPoint.val}{hoveredPoint.unit}
          </span>
          <div className="w-1.5 h-1.5 rotate-45 -mt-1" style={{ backgroundColor: activeChartData.color }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-slate-900 border-2 mt-1" style={{ borderColor: activeChartData.color }}></div>
          <div className="w-[1px] h-24 border-dashed border-l mt-0.5 opacity-60" style={{ borderColor: activeChartData.color }}></div>
        </div>

        {/* SVG Curve + Grid */}
        <svg
          className="w-full h-32 overflow-visible"
          viewBox="0 0 460 140"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const relX = ((e.clientX - rect.left) / rect.width) * 460;
            let closest = activeChartData.points[0];
            let minDist = Math.abs(relX - closest.x);
            for (let pt of activeChartData.points) {
              const dist = Math.abs(relX - pt.x);
              if (dist < minDist) {
                minDist = dist;
                closest = pt;
              }
            }
            setHoveredPoint(closest);
          }}
        >
          <defs>
            <linearGradient id="modDynamicGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={activeChartData.color} stopOpacity="0.3"></stop>
              <stop offset="100%" stopColor={activeChartData.color} stopOpacity="0.0"></stop>
            </linearGradient>
          </defs>

          {/* Gridlines */}
          <line stroke="#f1f5f9" className="dark:stroke-slate-700/60" strokeDasharray="3,3" strokeWidth="1.2" x1="30" x2="450" y1="20" y2="20"></line>
          <line stroke="#f1f5f9" className="dark:stroke-slate-700/60" strokeDasharray="3,3" strokeWidth="1.2" x1="30" x2="450" y1="45" y2="45"></line>
          <line stroke="#f1f5f9" className="dark:stroke-slate-700/60" strokeDasharray="3,3" strokeWidth="1.2" x1="30" x2="450" y1="70" y2="70"></line>
          <line stroke="#f1f5f9" className="dark:stroke-slate-700/60" strokeDasharray="3,3" strokeWidth="1.2" x1="30" x2="450" y1="95" y2="95"></line>
          <line stroke="#f1f5f9" className="dark:stroke-slate-700/60" strokeDasharray="3,3" strokeWidth="1.2" x1="30" x2="450" y1="120" y2="120"></line>

          {/* Y-Axis Labels */}
          {activeChartData.yLabels.map((lbl, idx) => (
            <text key={idx} fill="#94a3b8" fontFamily="Plus Jakarta Sans" fontSize="9" x="12" y={24 + (idx * 25)}>
              {lbl}
            </text>
          ))}

          {/* Gradient & Line */}
          <path d={activeChartData.gradientPath} fill="url(#modDynamicGradient)" className="transition-all duration-300"></path>
          <path d={activeChartData.path} fill="none" stroke={activeChartData.color} strokeLinecap="round" strokeWidth="2.4" className="transition-all duration-300"></path>

          {/* Points */}
          {activeChartData.points.map((pt, idx) => (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r={hoveredPoint.time === pt.time ? "5" : "3"}
              fill={hoveredPoint.time === pt.time ? activeChartData.color : "#ffffff"}
              stroke={activeChartData.color}
              strokeWidth="2"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(pt)}
            />
          ))}
        </svg>

        {/* X-Axis */}
        <div className="flex justify-between pl-7 pr-1 text-[10px] font-semibold text-slate-400 mt-2">
          {activeChartData.points.map(pt => (
            <span
              key={pt.time}
              onMouseEnter={() => setHoveredPoint(pt)}
              className={`cursor-pointer px-1 rounded transition-colors ${
                hoveredPoint.time === pt.time ? "text-blue-500 font-bold" : "hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              {pt.time}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
