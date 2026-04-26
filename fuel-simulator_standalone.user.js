// ==UserScript==
// @name         GeoFS-V3.9_Fuel-Simulator
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Comprehensive fuel management and weight simulation for GeoFS.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System/main/design-system_standalone.user.js
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/main/core-library_standalone.user.js
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Fuel-Simulator/main/fuel-simulator_standalone.user.js
// @downloadURL  https://raw.githubusercontent.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Fuel-Simulator/main/fuel-simulator_standalone.user.js
// ==/UserScript==

(function() {
    'use strict';
    const fuelUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Fuel-Simulator/main/fuel-simulator.js';

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
            console.log('[GeoFS-V3.9_Fuel-Simulator] Foundations detected. Booting Pro Fuel Systems...');
            loadFuelSimulatorPro();
        }
    }, 500);
})();
