# Changelog

All notable changes, fuel burn calculations, and version releases for GeoFS-V3.9 Fuel Simulator are documented in this file.

---

## [2.0.1] - Tank Imbalance Modeling And Dump Valve Logic

### Added
- **Multi-Tank Cross-Feed Physics**: Simulates center, left, and right wing tank fuel flow with realistic roll moments on asymmetric consumption.
- **Fuel Jettison System**: Functional fuel dump rate simulation for emergency weight reduction before landing.

### Fixed
- **Dynamic Specific Fuel Consumption (SFC)**: Adjusted fuel burn curves across high-altitude cruising regimes and idle descent.
- **Weight Redistribution Smoothing**: Prevented sudden center-of-gravity jumps during in-flight refuel events.

---

## [2.0.0] - Mass Physics And Consumption Engine

### Added
- **Dynamic Weight Simulation**: Fuel burn dynamically decreases gross aircraft weight, altering stall speeds and climb performance.
- **Glassmorphic Fuel Management HUD**: Visual tank gauges, fuel flow indicators, and endurance calculators.

---

## [1.0.0] - Initial Production Release

Initial release of the fuel simulation and consumption system for GeoFS.
