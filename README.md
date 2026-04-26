# GeoFS-V3.9_Fuel-Simulator

![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![Ecosystem](https://img.shields.io/badge/GeoFS-V3.9_Addon--Pack-64c8ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Construction-orange?style=for-the-badge)

The high-fidelity fuel burn and weight simulation framework for **GeoFS v3.9**. This system introduces aircraft-specific performance profiles, dynamic mass calculations based on fuel state, and real-time fuel exhaustion mechanics to enhance the simulation's realism.

## ✨ Features

- **⛽ Precision Fuel Burn**: Real-time fuel consumption logic based on engine thrust settings and aircraft-specific performance data.
- **⚖️ Dynamic Mass Simulation**: Automatically updates aircraft mass as fuel is consumed, directly affecting flight handling and stall speeds.
- **🔍 High-Fidelity Profiles**: Built-in performance data for major aircraft (737, A320, A380, F-16, etc.) with a generic fallback system for unknown airframes.
- **🧩 HUD Pro Integration**: Plugs directly into the **[FUEL]** tab of the [HUD Information Display Pro](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_HUD-Information-Display-Pro) for real-time monitoring and refuel control.
- **🚀 Advanced Boot Logging**: Detailed, branded console logs track performance data matching and critical fuel thresholds.

## 🛠️ Installation

### Standalone (Tampermonkey)
1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Click **Create a new script**.
3. Paste the contents of `fuel-simulator_standalone.user.js` from this repository.
4. Save and launch GeoFS.

## 🔗 Ecosystem Dependencies
This module is part of the **GeoFS-V3.9 Addon-Pack** ecosystem and requires:
- [GeoFS-V3.9_Core-Library](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library)
- [GeoFS-V3.9_Design-System](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System)

## 🤝 Credits
- **AwesomeOddEven** (Fuel Logic & Performance Architecture)
- **NightKeys** (Aeronautical Data Research & QA)
- **LunarBlink** (Ecosystem Synthesis & Documentation)

---
*© 2026 AwesomeOddEven-NightKeys-LunarBlink. Part of the GeoFS-V3.9 Pro Suite.*
