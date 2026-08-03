# GeoFS-V3.9_Fuel-Simulator

![Version](https://img.shields.io/badge/Version-V2.0.0-3b82f6?style=flat-square&logo=git&logoColor=white)
![Ecosystem](https://img.shields.io/badge/GeoFS--V3.9-Fuel_Simulator-10b981?style=flat-square&logo=shell&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable-10b981?style=flat-square&logo=lighthouse&logoColor=white)

The high-fidelity fuel management and consumption framework for **GeoFS-V3.9**. This module introduces realistic fuel-weight physics, consumption curves, and cross-feed logic for long-haul operations.

## ✨ Features

- **⛽ Realistic Consumption**: Fuel burn rate is calculated based on throttle position, engine type, and altitude (Dynamic SFC).
- **⚖️ Center of Gravity Physics**: Fuel weight dynamically affects aircraft mass and can cause roll imbalances in Multi-Tank mode.
- **🛢️ Multi-Tank Simulation**: Realistic sequential fuel draining (Center -> Wings) for complex flight management.
- **⚖️ Gross Weight Display**: Live monitoring of total aircraft weight in KG directly on the HUD.
- **🛠️ Ground Operations**: Integrated refueling system for pre-flight and turn-around procedures.

## 🛠️ Installation

### Standalone (Tampermonkey)

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Install the script via [**Greasy Fork**](https://greasyfork.org/en/scripts/581517-geofs-v3-9-fuel-simulator).
3. Refresh GeoFS and the module will automatically initialize alongside the HUD.

*© 2026 _init. Part of the [GeoFS-V3.9_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
