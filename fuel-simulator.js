(function() {
    'use strict';

    const AIRCRAFT_PERFORMANCE = {
        "1":    { name: "Piper Cub", oew: 331, mtow: 553, fuel: 45 },
        "2":    { name: "Cessna 172", oew: 767, mtow: 1157, fuel: 176 },
        "3":    { name: "Alphajet", oew: 3515, mtow: 8000, fuel: 1575 },
        "7":    { name: "Boeing 737-800", oew: 42730, mtow: 79015, fuel: 20896 },
        "8":    { name: "Boeing 737-700", oew: 37648, mtow: 70080, fuel: 20131 }, 
        "10":   { name: "Airbus A380", oew: 276800, mtow: 575000, fuel: 253983 },
        "16":   { name: "Douglas DC-3", oew: 7650, mtow: 11432, fuel: 1900 },
        "18":   { name: "F-16", oew: 8573, mtow: 19187, fuel: 3249 },
        "20":   { name: "Concorde", oew: 78700, mtow: 186880, fuel: 95680 },
        "1001": { name: "737-900ER", oew: 44677, mtow: 85139, fuel: 20896 },
        "1005": { name: "777-300ER", oew: 167800, mtow: 351500, fuel: 145500 },
        "1012": { name: "A380 (Addon)", oew: 276800, mtow: 575000, fuel: 253983 },
        "1013": { name: "ATR 42-600", oew: 11700, mtow: 18600, fuel: 4500 },
        "1015": { name: "Challenger 650", oew: 12340, mtow: 21860, fuel: 9070 },
        "1016": { name: "CRJ900", oew: 21500, mtow: 38300, fuel: 8880 },
        "1018": { name: "Embraer E190/Phenom", oew: 3235, mtow: 4800, fuel: 1272 },
        "2003": { name: "KC-135R", oew: 44663, mtow: 146000, fuel: 90718 },
        "2806": { name: "UH-60 Black Hawk", oew: 4819, mtow: 10660, fuel: 1361 },
        "2951": { name: "Il-96", oew: 120000, mtow: 250000, fuel: 116000 },
        "2973": { name: "Airbus A350", oew: 155700, mtow: 316000, fuel: 110600 },
        "3534": { name: "Airbus A320", oew: 42600, mtow: 78000, fuel: 19000 },

        // Fallback normalized keys
        "dhc6":   { name: "Twin Otter", oew: 3365, mtow: 5670, fuel: 1021 },
        "pitts":  { name: "Pitts Special", oew: 327, mtow: 522, fuel: 75 },
        "ec135":  { name: "EC135", oew: 1455, mtow: 2980, fuel: 560 },
        "pa28":   { name: "PA-28 Warrior", oew: 677, mtow: 1055, fuel: 132 },
        "f14a":    { name: "F-14A", oew: 19838, mtow: 33720, fuel: 7348 }
    };

    window.fuelState = {
        fuel: 0, initialFuel: 0, emptyMass: 0, payload: 0, maxPayload: 0,
        autoRefuel: false, initialized: false
    };

    function updateAircraftMass() {
        if (!geofs.aircraft.instance || !window.fuelState.initialized) return;
        const ac = geofs.aircraft.instance;
        ac.definition.mass = window.fuelState.emptyMass + window.fuelState.payload + window.fuelState.fuel;
    }

    window.initFuelSimulatorPro = function() {
        if (!geofs.aircraft.instance) return;
        const ac = geofs.aircraft.instance;
        const acId = ac.id.toString();
        const acName = ac.definition.externalName?.toLowerCase() || ac.definition.name?.toLowerCase() || "";
        
        console.log("[GeoFS-V3.9_Fuel-Simulator] Initializing system for aircraft:", acName);

        let data = AIRCRAFT_PERFORMANCE[acId];
        if (!data) {
            const key = Object.keys(AIRCRAFT_PERFORMANCE).find(k => isNaN(k) && (acName.includes(k)));
            if (key) {
                data = AIRCRAFT_PERFORMANCE[key];
                console.log("[GeoFS-V3.9_Fuel-Simulator] Performance match found via keyword:", key);
            }
        }

        if (data) {
            window.fuelState.emptyMass = data.oew;
            window.fuelState.initialFuel = data.fuel;
            window.fuelState.maxPayload = data.mtow - data.oew - data.fuel;
            if (window.fuelState.maxPayload < 0) window.fuelState.maxPayload = data.mtow * 0.1;
            console.log("[GeoFS-V3.9_Fuel-Simulator] High-fidelity data loaded.");
        } else {
            console.log("[GeoFS-V3.9_Fuel-Simulator] No profile found. Using generic estimation logic.");
            window.fuelState.emptyMass = ac.definition.mass * 0.7;
            window.fuelState.maxPayload = ac.definition.mass * 0.3;
            window.fuelState.initialFuel = ac.definition.mass * (ac.definition.mass < 15000 ? 0.2 : 0.4);
        }

        window.fuelState.payload = window.fuelState.maxPayload * 0.5;
        window.fuelState.fuel = window.fuelState.initialFuel;
        window.fuelState.initialized = true;
        updateAircraftMass();
        console.log("[GeoFS-V3.9_Fuel-Simulator] Logic active. Fuel at 100%.");
    };

    window.setFuelLevel = (pct) => {
        window.fuelState.fuel = (pct / 100) * window.fuelState.initialFuel;
        updateAircraftMass();
        console.log(`[GeoFS-V3.9_Fuel-Simulator] Manual fuel set: ${pct}%`);
    };

    window.setPayloadLevel = (pct) => {
        window.fuelState.payload = (pct / 100) * window.fuelState.maxPayload;
        updateAircraftMass();
        console.log(`[GeoFS-V3.9_Fuel-Simulator] Manual payload set: ${pct}%`);
    };

    window.toggleAutoRefuel = () => {
        window.fuelState.autoRefuel = !window.fuelState.autoRefuel;
        console.log("[GeoFS-V3.9_Fuel-Simulator] Auto-refuel toggled:", window.fuelState.autoRefuel);
        return window.fuelState.autoRefuel;
    };

    // Main Simulation Loop
    setInterval(() => {
        if (!geofs.aircraft.instance || geofs.isPaused() || (window.flight?.recorder?.playing) || !window.fuelState.initialized) return;
        const ac = geofs.aircraft.instance;
        let thrust = ac.engines ? ac.engines.reduce((e, t) => e + (t.thrust || 0), 0) : 0;
        let burnRate = (thrust / 180) + (globalThis.leakingFuel ? 5 : 0);
        window.fuelState.fuel -= burnRate * (1 / 3600);

        if (window.fuelState.fuel <= 0) {
            window.fuelState.fuel = 0;
            console.warn("[GeoFS-V3.9_Fuel-Simulator] FUEL EXHAUSTED. FLAMEOUT INITIATED.");
            ac.stopEngine();
        }

        if (window.fuelState.autoRefuel && (window.fuelState.fuel / window.fuelState.initialFuel < 0.1)) {
            console.log("[GeoFS-V3.9_Fuel-Simulator] Critical level detected. Auto-refueling...");
            window.setFuelLevel(100);
        }

        globalThis.fuelPercentage = (window.fuelState.fuel / window.fuelState.initialFuel) * 100;
        updateAircraftMass();
    }, 1000);

    // Watch for Aircraft Changes
    setInterval(() => {
        if (geofs.aircraft.instance && (!window.fuelState.initialized || geofs.aircraft.instance.id !== window._fCurrId)) {
            window._fCurrId = geofs.aircraft.instance.id;
            window.initFuelSimulatorPro();
        }
    }, 2000);

    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_Fuel-Simulator', window.initFuelSimulatorPro);
    } else {
        window.initFuelSimulatorPro();
    }
})();
