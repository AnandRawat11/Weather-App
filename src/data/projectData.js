export const projectDetails = {
  title: "Storm & Disaster Early-Warning Board",
  batchNo: "Batch No. 2",
  section: "Section 3AC",
  semester: "Semester 5",
  submissionDate: "21/09/26",
  facultyMentor: "Anurag Das",
  teamMembers: [
    {
      sNo: 1,
      name: "AKASH SONI",
      rollNo: "2415000152",
      role: "Team Lead & Frontend Developer",
      avatarBg: "bg-blue-100 text-blue-700",
      initials: "AS"
    },
    {
      sNo: 2,
      name: "AKSHAT KARIDHAL",
      rollNo: "2415000165",
      role: "UI/UX Designer",
      avatarBg: "bg-purple-100 text-purple-700",
      initials: "AK"
    },
    {
      sNo: 3,
      name: "ANAND RAWAT",
      rollNo: "2415000201",
      role: "Map & Alert Logic Developer",
      avatarBg: "bg-emerald-100 text-emerald-700",
      initials: "AR"
    },
    {
      sNo: 4,
      name: "ANANYA KUSHWAH",
      rollNo: "2415000208",
      role: "Resource Panel & Banner Developer",
      avatarBg: "bg-pink-100 text-pink-700",
      initials: "AK"
    },
    {
      sNo: 5,
      name: "ANKUR THENUA",
      rollNo: "2415000240",
      role: "Testing & Documentation Lead",
      avatarBg: "bg-amber-100 text-amber-700",
      initials: "AT"
    }
  ],
  description:
    "A command-center style board simulating live disaster/weather alerts from a client-generated event feed, with an animated map, severity-tiered banners, and a resource-status panel — every piece computed and rendered without any backend, using timers to simulate live conditions.",
  objectives: [
    "Animated map showing live locations of disaster/weather alerts",
    "Color-coded banners showing alert severity — low to critical",
    "Resource panel showing status of rescue teams, shelters, and supplies",
    "Live feed displaying new alerts as they come in",
    "Fully frontend-based system — no backend server used",
    "JavaScript timers simulate real-time data updates in the browser",
    "Alert data generated as mock/dummy data within the app itself",
    "Dashboard designed for quick, at-a-glance monitoring like a control room",
    "Fully responsive layout, easy to view on different screen sizes"
  ],
  futureScope: [
    "Integration with real live weather/disaster APIs instead of mock data",
    "Backend support for storing and managing historical alert data",
    "User authentication and role-based access for different responders",
    "Push notifications/SMS alerts for critical severity events",
    "Interactive filtering — view alerts by region, type, or severity level",
    "Mobile app version for on-the-go monitoring",
    "Analytics dashboard showing alert trends and response times over time",
    "Multi-language support for wider accessibility"
  ],
  toolsAndTechnologies: [
    { name: "HTML5", purpose: "Structuring dashboard layout & semantic tags" },
    { name: "CSS3 / Tailwind CSS", purpose: "Styling, radar animations & responsive design" },
    { name: "JavaScript (ES6)", purpose: "State logic, simulation timers & dynamic updates" },
    { name: "React.js", purpose: "Building modular reactive UI components" },
    { name: "Mock / Dummy JSON", purpose: "Simulating live emergency disaster feed" },
    { name: "Git & GitHub", purpose: "Version control & project tracking" },
    { name: "VS Code", purpose: "Integrated development environment" }
  ],
  expectedOutcomes: [
    "A fully working dashboard that displays disaster/weather alerts in real time",
    "Clear visual understanding of alert severity through color-coded banners",
    "Easy tracking of resource availability (rescue teams, shelters, supplies) at a glance",
    "Smooth, real-time simulation of live data using JavaScript timers",
    "A responsive, command-center style interface usable on any device",
    "A strong foundation project that can be extended with real APIs and backend in the future"
  ]
};

