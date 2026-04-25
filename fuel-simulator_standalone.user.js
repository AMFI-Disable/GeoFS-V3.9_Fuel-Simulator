// ==UserScript==
// @name         GeoFS-V3.9_Fuel-Simulator
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  High-fidelity fuel burn and weight simulation for GeoFS.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System/main/standalone.user.js
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/main/standalone.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const fuelUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Fuel-Simulator/main/src/fuel-logic.js';

    function loadFuelSimulatorPro() {
        if (window.fuelState && window.fuelState.initialized) return;
        const script = document.createElement('script');
        script.src = fuelUrl;
        document.head.appendChild(script);
        console.log('[GeoFS-V3.9_Fuel-Simulator] Standalone module script injected.');
    }

    // Wait for foundations then load
    const checker = setInterval(() => {
        if (window.SafeInit && document.getElementById('geofs-addon-design-system')) {
            clearInterval(checker);
            console.log('[GeoFS-V3.9_Fuel-Simulator] Foundations detected. Booting Pro Fuel System...');
            loadFuelSimulatorPro();
        }
    }, 500);
})();
