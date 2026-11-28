export const initialResources = {
  rescueTeams: [
    {
      id: "RT-101",
      name: "NDRF Swift Water Rescue Alpha",
      region: "Northern Australia",
      status: "Deployed",
      statusColor: "emerald",
      personnel: 24,
      equipment: "Zodiac Boats (4), Drone Scanners (2), SatCom",
      assignedMission: "Evacuation assistance at Fitzroy River basin",
      contact: "Unit Leader: Capt. R. Sharma"
    },
    {
      id: "RT-102",
      name: "Coastal Search & Rescue Bravo",
      region: "Eastern Australia",
      status: "En-Route",
      statusColor: "amber",
      personnel: 18,
      equipment: "Heavy Amphibious Vehicles, Winch Units",
      assignedMission: "High-wind debris clearing and rescue support",
      contact: "Unit Leader: Lt. S. Patel"
    },
    {
      id: "RT-103",
      name: "Aeromedical Lifeline Division",
      region: "Western Australia",
      status: "Standby",
      statusColor: "blue",
      personnel: 12,
      equipment: "Air Ambulance Helicopters (2), Trauma ICU kits",
      assignedMission: "Emergency medical triage & rapid casualty airlift",
      contact: "Chief Medical Officer: Dr. V. Nair"
    },
    {
      id: "RT-104",
      name: "Tactical Wildfire Taskforce Charlie",
      region: "Eastern Australia",
      status: "Deployed",
      statusColor: "emerald",
      personnel: 30,
      equipment: "Brushfire Pumper Engines (6), Thermal Imagers",
      assignedMission: "Containment line defense along residential interface",
      contact: "Battalion Commander: M. Thompson"
    },
    {
      id: "RT-105",
      name: "Urban Disaster Relief Unit Echo",
      region: "South Australia",
      status: "Standby",
      statusColor: "blue",
      personnel: 16,
      equipment: "Shoring Gear, Acoustic Listening Devices",
      assignedMission: "Structural safety inspections and staging area maintenance",
      contact: "Engineer Lead: K. Jensen"
    }
  ],
  shelters: [
    {
      id: "SH-01",
      name: "Northern Civic Emergency Refuge",
      region: "Northern Australia",
      status: "Open",
      occupied: 850,
      capacity: 1000,
      suppliesStock: "92%",
      medicalBay: "Operational",
      powerBackup: "Diesel Generator 100% (48 hrs)"
    },
    {
      id: "SH-02",
      name: "East Coast High School Relief Hub",
      region: "Eastern Australia",
      status: "Open",
      occupied: 1200,
      capacity: 1500,
      suppliesStock: "86%",
      medicalBay: "Operational",
      powerBackup: "Solar + Grid Hybrid"
    },
    {
      id: "SH-03",
      name: "Victoria Community Multi-Hall",
      region: "South Australia",
      status: "Open",
      occupied: 320,
      capacity: 800,
      suppliesStock: "95%",
      medicalBay: "Standby",
      powerBackup: "Grid Nominal"
    },
    {
      id: "SH-04",
      name: "Perth West Sports Complex Shelter",
      region: "Western Australia",
      status: "Standby",
      occupied: 140,
      capacity: 2500,
      suppliesStock: "98%",
      medicalBay: "Ready",
      powerBackup: "Dual Backup Systems Ready"
    }
  ],
  supplies: [
    {
      item: "Potable Drinking Water (L)",
      totalStock: 50000,
      allocated: 41200,
      unit: "Liters",
      category: "Hydration",
      status: "Sufficient",
      percentage: 82
    },
    {
      item: "MRE Emergency Ration Packs",
      totalStock: 18000,
      allocated: 14600,
      unit: "Meal Kits",
      category: "Food Relief",
      status: "Sufficient",
      percentage: 81
    },
    {
      item: "Trauma & Emergency First-Aid Kits",
      totalStock: 3500,
      allocated: 2980,
      unit: "Kits",
      category: "Medical",
      status: "High Demand",
      percentage: 85
    },
    {
      item: "Heavy-Duty Inflatable Rafts",
      totalStock: 35,
      allocated: 31,
      unit: "Units",
      category: "Watercraft",
      status: "Critical Deployment",
      percentage: 89
    },
    {
      item: "Satellite Comms & Emergency Radios",
      totalStock: 120,
      allocated: 94,
      unit: "Transceivers",
      category: "Communications",
      status: "Operational",
      percentage: 78
    },
    {
      item: "Thermal Blankets & Cots",
      totalStock: 8000,
      allocated: 6700,
      unit: "Units",
      category: "Shelter Comfort",
      status: "Sufficient",
      percentage: 84
    }
  ]
};

