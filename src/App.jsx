import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { HeroWeatherCard } from "./components/HeroWeatherCard.jsx";
import { TemperatureTrend } from "./components/TemperatureTrend.jsx";
import { ForecastSummary } from "./components/ForecastSummary.jsx";
import { SolarTimes } from "./components/SolarTimes.jsx";
import { PrecipitationLevels } from "./components/PrecipitationLevels.jsx";
import { WeatherAlerts } from "./components/WeatherAlerts.jsx";
import { RegionalMap } from "./components/RegionalMap.jsx";
import { SeverityBanner } from "./components/SeverityBanner.jsx";
import { ProjectDetailsModal } from "./components/ProjectDetailsModal.jsx";
import { initialAlerts, simulatedAlertPool } from "./data/mockAlerts.js";
import { initialWeatherData } from "./data/mockWeather.js";

export default function App() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDay, setSelectedDay] = useState("Sat");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showNotificationTray, setShowNotificationTray] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState({ time: "9 AM", temp: 27, x: 205 });

  const activeAlert = alerts.find(a => a.severity === 'critical') || alerts[0];

  const handleAcknowledge = (id) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, isAcknowledged: true } : a));
  };

  const handleResetSimulation = () => {
    setAlerts(initialAlerts);
    setBannerDismissed(false);
  };

  return (
    <div className="w-full max-w-[1360px] bg-[#edf2f8] dark:bg-slate-900 rounded-[28px] shadow-2xl p-3 sm:p-4 md:p-6 flex flex-col md:flex-row gap-5 border border-white/60 dark:border-slate-800">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        alerts={alerts}
        onResetSimulation={handleResetSimulation}
      />

      <main className="flex-1 flex flex-col gap-4 overflow-hidden">
        <TopBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          alerts={alerts}
          onOpenTeamModal={() => setShowTeamModal(true)}
          showNotificationTray={showNotificationTray}
          setShowNotificationTray={setShowNotificationTray}
          onAcknowledge={handleAcknowledge}
          onMarkAllRead={() => setAlerts(prev => prev.map(a => ({ ...a, isAcknowledged: true })))}
          onTriggerEvent={() => {}}
        />

        {!bannerDismissed && (
          <SeverityBanner
            alert={activeAlert}
            onDismiss={() => setBannerDismissed(true)}
            onViewMap={() => setCurrentView("map")}
            onMobilize={() => setCurrentView("resources")}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <HeroWeatherCard
                selectedDay={selectedDay === "Sat" ? "Saturday" : selectedDay}
                selectedRegion={selectedRegion}
                onToggleRegion={() => setSelectedRegion(selectedRegion === "all" ? "north" : "all")}
                activeTemp={27}
                activeCondition="Sunny Cloudy"
              />
              <TemperatureTrend
                hoveredPoint={hoveredPoint}
                setHoveredPoint={setHoveredPoint}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <ForecastSummary
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
              />
              <SolarTimes />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <PrecipitationLevels />
              <WeatherAlerts
                alerts={alerts}
                onViewAllFeed={() => setCurrentView("liveFeed")}
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-5">
            <RegionalMap
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
            />
          </div>
        </div>
      </main>

      <ProjectDetailsModal
        isOpen={showTeamModal}
        onClose={() => setShowTeamModal(false)}
      />
    </div>
  );
}

