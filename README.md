# Storm & Disaster Early-Warning Board

### Academic Project Details
* **Project Title:** Storm & Disaster Early-Warning Board
* **Batch No.:** Batch No. 2
* **Section:** Section 3AC
* **Semester:** Semester 5
* **Date of Submission:** 21/09/26
* **Faculty Mentor / Guide:** Anurag Das

---

## 👥 Team Members & Project Roles

| S.No. | Name of Student | University Roll No. | Role in Project | Key Responsibilities |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **AKASH SONI** | **2415000152** | Team Lead & Frontend Developer | Architecture orchestration, layout integration, overall state management |
| **2** | **AKSHAT KARIDHAL** | **2415000165** | UI/UX Designer | Control-room visual design, typography, card elevation, dark/light themes |
| **3** | **ANAND RAWAT** | **2415000201** | Map & Alert Logic Developer | SVG vector radar map, coordinate tracking, event feed simulation timers |
| **4** | **ANANYA KUSHWAH** | **2415000208** | Resource Panel & Banner Developer | Severity-tiered alert banners, rescue team & shelter capacity status panel |
| **5** | **ANKUR THENUA** | **2415000240** | Testing & Documentation Lead | Real-time simulation verification, responsive testing, submission documentation |

---

## 📖 Project Description

A command-center style board simulating live disaster and weather alerts from a client-generated event feed, complete with an animated map, severity-tiered banners, and a comprehensive resource-status panel. **Every single piece is computed and rendered entirely on the frontend without any backend server**, using client-side JavaScript interval timers to simulate real-world emergency conditions.

---

## 🎯 Objectives & Proposed Work

- [x] **Animated Map showing Live Locations:** Stylized geographic SVG map with animated radar pulse waves and regional pins.
- [x] **Color-Coded Severity Banners:** Dynamic top banners displaying alert levels from **Low** (Blue/Green), **Moderate** (Yellow), **High** (Amber), to **Critical** (Red).
- [x] **Resource Status Panel:** Dedicated tracking for Search & Rescue Squads, Emergency Shelters (occupancy & power backups), and relief supplies buffer (water, food, medical).
- [x] **Live Incoming Event Feed:** Continuous real-time stream of weather and disaster alerts simulated via JavaScript timers.
- [x] **Zero-Backend Architecture:** Fully frontend-driven execution requiring no database or server setup.
- [x] **JavaScript Timers for Simulation:** `setInterval` engines driving simulated alert generation, clock ticks, and telemetry data.
- [x] **Client-Side Mock Data Engine:** Comprehensive event pool of cyclones, flash floods, wildfires, gale winds, and heatwaves.
- [x] **Command-Center At-a-Glance Control Room:** Designed for rapid situational awareness like a national emergency operations center.
- [x] **Pixel-Faithful Design:** Matches the reference in `frontendDesign` (`code.html` and `screen.png`) with exact card elevations, fonts, and SVG curves.
- [x] **Fully Responsive:** Adapts cleanly across desktop, tablet, and mobile viewport sizes.

---

## 🚀 Future Scope & Enhancements

1. **Live Weather & Disaster API Integration:** Connect to real APIs (e.g., OpenWeatherMap, USGS Earthquakes, GDACS, Copernicus Emergency Service).
2. **Backend Persistence & Historical Analytics:** Implement cloud backend storage (Node.js/Firebase/PostgreSQL) to store historical alert logs.
3. **Role-Based Responder Access (RBAC):** Authentication for incident commanders, field rescue teams, and public observers.
4. **Push Notifications & SMS Gateways:** Twilio/WebPush integration for immediate mass alerting during Category 4/5 emergencies.
5. **Multi-Criteria Interactive Filtering:** Filter alerts by precise geographic polygon, wind-speed threshold, or evacuation tier.
6. **Mobile Companion Application:** Dedicated React Native app for field responders with offline GPS maps.
7. **Predictive AI Storm Trajectory Modeling:** Machine learning integration for predicting storm paths and flash-flood arrival windows.
8. **Multi-Language Support:** Regional localization for diverse communities and emergency services.

---

## 🛠️ Tools & Technologies Used

* **HTML5:** Semantic document structure, SVG vector graphics, canvas/audio bindings.
* **CSS3 & Tailwind CSS:** Custom utility classes, animations (radar pulse, gentle float), dark mode theming, and responsive grids.
* **JavaScript (ES6+):** Pure client-side simulation engine, Web Audio API alert chimes, timer intervals, and state logic.
* **React.js 18:** Component-based UI architecture, reactive state hooks (`useState`, `useEffect`, `useMemo`), and modal overlays.
* **Mock / Dummy JSON:** Seed datasets for regional alerts, rescue squads, shelter occupancy, and barometric telemetry.
* **Git & GitHub:** Version control, branch management, and commit tracking.
* **VS Code:** Source code editor and development environment.

---

## 🖥️ How to Run the Project

### Option 1: Direct Browser Launch (Zero Setup)
Simply open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge). No Node.js build step or internet server required!

### Option 2: Local HTTP Server
```bash
# Using Python
python3 -m http.server 3000

# Using Node / npx
npx serve .
```
Then navigate to `http://localhost:3000` in your browser.

---

## 📊 Expected Outcomes Delivered

* **Real-time Live Alert Display:** Alerts arrive dynamically via timers with visual and optional audio feedback.
* **Severity Comprehension:** Color-coded banners and badges allow immediate risk assessment in under 2 seconds.
* **Resource Readiness at a Glance:** Tracking active deployment rates for emergency rescue personnel, shelter capacity, and life-critical supplies.
* **Seamless Design Fidelity:** Preserves 100% of the aesthetics from the `frontendDesign` prototype while adding deep interactive disaster command capabilities.

# Weather-App
