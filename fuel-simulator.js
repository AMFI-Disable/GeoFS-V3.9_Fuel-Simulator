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
        "dhc6":   { name: "Twin Otter", oew: 3365, mtow: 5670, fuel: 1021 },
        "pitts":  { name: "Pitts Special", oew: 327, mtow: 522, fuel: 75 },
        "ec135":  { name: "EC135", oew: 1455, mtow: 2980, fuel: 560 },
        "pa28":   { name: "PA-28 Warrior", oew: 677, mtow: 1055, fuel: 132 },
        "f14a":   { name: "F-14A", oew: 19838, mtow: 33720, fuel: 7348 }
    };

    window.fuelState = { fuel: 0, initialFuel: 0, emptyMass: 0, payload: 0, maxPayload: 0, autoRefuel: false, initialized: false };

    function updateAircraftMass() {
        if (!geofs.aircraft.instance || !window.fuelState.initialized) return;
        geofs.aircraft.instance.definition.mass = window.fuelState.emptyMass + window.fuelState.payload + window.fuelState.fuel;
    }

    window.setFuelLevelPro = function(pct) {
        window.fuelState.fuel = (pct / 100) * window.fuelState.initialFuel;
        updateAircraftMass();
    };

    window.setPayloadLevelPro = function(pct) {
        window.fuelState.payload = (pct / 100) * window.fuelState.maxPayload;
        updateAircraftMass();
    };

    window.toggleAutoRefuelPro = function() {
        window.fuelState.autoRefuel = !window.fuelState.autoRefuel;
        const btn = document.getElementById('btn-auto-refuel-pro');
        if (btn) {
            btn.textContent = window.fuelState.autoRefuel ? 'Auto-Refuel: ACTIVE' : 'Auto-Refuel: OFF';
            btn.style.background = window.fuelState.autoRefuel ? 'rgba(100,200,255,0.25)' : 'rgba(100,200,255,0.08)';
            btn.style.borderColor = window.fuelState.autoRefuel ? '#64c8ff' : 'rgba(100,200,255,0.15)';
        }
    };

    window.initFuelSimulatorPro = function() {
        if (!geofs.aircraft.instance) return;
        const ac = geofs.aircraft.instance;
        const acId = ac.id.toString();
        const acName = ac.definition.externalName?.toLowerCase() || ac.definition.name?.toLowerCase() || "";
        
        if (typeof window.registerHUDTab !== 'function' || typeof window.hudCell !== 'function') {
            console.error("[GeoFS-V3.9_Fuel-Simulator] FATAL: HUD helpers not found on window! Core Library might be outdated.");
            return;
        }

        const fuelHTML = `
            <div class="hud-section-header full-width">Tank Status</div>
            <div class="hud-cell full-width" style="margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span class="hud-label">FUEL</span>
                    <span class="hud-value hud-fuel-pct" style="font-size: 11px;">N/A</span>
                </div>
                <input type="range" class="hud-fuel-slider-pro" min="0" max="100" step="1" style="width: 100%; margin: 4px 0; -webkit-appearance: none; background: rgba(100,200,255,0.1); height: 4px; border-radius: 2px; outline: none; cursor: pointer;">
            </div>
            <div class="hud-cell full-width" style="margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span class="hud-label">PAYLOAD</span>
                    <span class="hud-value hud-payload-pct" style="font-size: 11px;">50%</span>
                </div>
                <input type="range" class="hud-payload-slider-pro" min="0" max="100" step="1" style="width: 100%; margin: 4px 0; -webkit-appearance: none; background: rgba(100,200,255,0.1); height: 4px; border-radius: 2px; outline: none; cursor: pointer;">
            </div>
            ${window.hudCell('TOTAL MASS', 'N/A', '', 'hud-mass')}
            <div style="grid-column: 1 / -1; display: flex; gap: 4px; margin-top: 8px;">
                <button onclick="window.setFuelLevelPro(100)" class="addonpack-btn success" style="flex: 1; padding: 4px 0; font-size: 9px;">Full Refuel</button>
                <button id="btn-auto-refuel-pro" onclick="window.toggleAutoRefuelPro()" class="addonpack-btn" style="flex: 1; padding: 4px 0; font-size: 9px;">Auto-Refuel: OFF</button>
            </div>
        `;
        window.registerHUDTab('fuel', 'FUEL', fuelHTML, true);

        // Slider listeners
        const panel = document.getElementById('tab-content-fuel');
        if (panel) {
            const fSl = panel.querySelector('.hud-fuel-slider-pro');
            const pSl = panel.querySelector('.hud-payload-slider-pro');
            if (fSl) fSl.addEventListener('input', (e) => window.setFuelLevelPro(e.target.value));
            if (pSl) pSl.addEventListener('input', (e) => window.setPayloadLevelPro(e.target.value));
        }

        let data = AIRCRAFT_PERFORMANCE[acId];
        if (!data) {
            const key = Object.keys(AIRCRAFT_PERFORMANCE).find(k => isNaN(k) && (acName.includes(k)));
            if (key) data = AIRCRAFT_PERFORMANCE[key];
        }

        if (data) {
            window.fuelState.emptyMass = data.oew;
            window.fuelState.initialFuel = data.fuel;
            window.fuelState.maxPayload = Math.max(data.mtow * 0.1, data.mtow - data.oew - data.fuel);
        } else {
            window.fuelState.emptyMass = ac.definition.mass * 0.7;
            window.fuelState.maxPayload = ac.definition.mass * 0.3;
            window.fuelState.initialFuel = ac.definition.mass * (ac.definition.mass < 15000 ? 0.2 : 0.4);
        }

        window.fuelState.payload = window.fuelState.maxPayload * 0.5;
        window.fuelState.fuel = window.fuelState.initialFuel;
        window.fuelState.initialized = true;
        updateAircraftMass();
    };

    setInterval(() => {
        if (!geofs.aircraft.instance || geofs.isPaused() || !window.fuelState.initialized) return;
        const ac = geofs.aircraft.instance;
        let thrust = ac.engines ? ac.engines.reduce((e, t) => e + (t.thrust || 0), 0) : 0;
        window.fuelState.fuel -= ((thrust / 180) + (globalThis.leakingFuel ? 5 : 0)) * (1 / 3600);

        if (window.fuelState.fuel <= 0) { window.fuelState.fuel = 0; ac.stopEngine(); }
        if (window.fuelState.autoRefuel && (window.fuelState.fuel / window.fuelState.initialFuel < 0.1)) window.fuelState.fuel = window.fuelState.initialFuel;

        globalThis.fuelPercentage = (window.fuelState.fuel / window.fuelState.initialFuel) * 100;
        updateAircraftMass();

        const fuelPctEl = document.querySelector('.hud-fuel-pct');
        const payloadPctEl = document.querySelector('.hud-payload-pct');
        const massEl = document.querySelector('.hud-mass');
        const fSl = document.querySelector('.hud-fuel-slider-pro');
        const pSl = document.querySelector('.hud-payload-slider-pro');

        if (fuelPctEl) fuelPctEl.textContent = globalThis.fuelPercentage.toFixed(1) + "%";
        if (payloadPctEl) payloadPctEl.textContent = (window.fuelState.payload / window.fuelState.maxPayload * 100).toFixed(0) + "%";
        if (massEl) massEl.textContent = Math.round(ac.definition.mass).toLocaleString() + " kg";
        if (fSl && document.activeElement !== fSl) fSl.value = globalThis.fuelPercentage.toFixed(0);
        if (pSl && document.activeElement !== pSl) pSl.value = (window.fuelState.payload / window.fuelState.maxPayload * 100).toFixed(0);
    }, 1000);

    setInterval(() => {
        if (geofs.aircraft.instance && (!window.fuelState.initialized || geofs.aircraft.instance.id !== window._fCurrId)) {
            window._fCurrId = geofs.aircraft.instance.id; window.initFuelSimulatorPro();
        }
    }, 2000);

    if (window.SafeInit) window.SafeInit('GeoFS-V3.9_Fuel-Simulator', window.initFuelSimulatorPro);
    else window.initFuelSimulatorPro();
})();