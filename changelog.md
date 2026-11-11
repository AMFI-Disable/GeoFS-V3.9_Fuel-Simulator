# Changelog

All notable changes, fuel burn calculations, and version releases for GeoFS-V3.9 Fuel Simulator are documented in this file.

---

## [3.9.0] - Unified Metadata

### Changed

- Standardize the userscript metadata and version across the V3.9 ecosystem.
- Match only the GeoFS main site and activate only when it reports V3.9.

---

## [Unreleased]

### Changed

- **HUD Tab Label**: Renamed registered HUD tab from `FUEL SIM` to `FUEL` for consistent layout.
- **Theme Alignment**: Updated fuel gauge bars, sliders, and numerical readout accents to neutral styling (`#dddddd`).
- **Favicon Metadata**: Switched userscript icon reference to the official GeoFS favicon.

---

## [2.0.7] - GeoFS V3.9 Compatibility

### Changed

- Start only after GeoFS reports V3.9; remain inactive on other or unrecognized versions.
- Update compatibility documentation and version metadata.

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
