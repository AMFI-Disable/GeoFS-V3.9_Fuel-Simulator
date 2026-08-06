// ==UserScript==
// @name                GeoFS-V3.9_Fuel-Simulator
// @name:vi             GeoFS-V3.9_Bộ-Mô-Phỏng-Nhiên-Liệu
// @name:zh-CN          GeoFS-V3.9_Fuel-Simulator
// @name:zh-TW          GeoFS-V3.9_燃油模擬器
// @name:ja             GeoFS-V3.9_燃料シミュレータ
// @name:ko             GeoFS-V3.9_연료-시뮬레이터
// @name:fr             GeoFS-V3.9_Simulateur-De-Carburant
// @name:de             GeoFS-V3.9_Kraftstoffsimulator
// @name:es             GeoFS-V3.9_Simulador-De-Combustible
// @name:pt-BR          GeoFS-V3.9_Simulador-De-Combustível
// @name:pt-PT          GeoFS-V3.9_Simulador-De-Combustível
// @name:ru             GeoFS-V3.9_Топливный-Симулятор
// @name:ar             GeoFS-V3.9_محاكي-الوقود
// @name:tr             GeoFS-V3.9_Yakıt-Simülatörü
// @name:id             GeoFS-V3.9_Simulator-Bahan-Bakar
// @name:th             GeoFS-V3.9_เครื่องจำลองเชื้อเพลิง
// @name:pl             GeoFS-V3.9_Symulator-Paliwa
// @name:nl             GeoFS-V3.9_Brandstofsimulator
// @name:it             GeoFS-V3.9_Simulatore-Di-Carburante
// @name:sv             GeoFS-V3.9_Bränslesimulator
// @name:da             GeoFS-V3.9_Brændstofsimulator
// @name:fi             GeoFS-V3.9_Polttoaine-Simulaattori
// @name:nb             GeoFS-V3.9_Drivstoffsimulator
// @name:cs             GeoFS-V3.9_Simulátor-Paliva
// @name:hu             GeoFS-V3.9_Üzemanyag-Szimulátor
// @name:ro             GeoFS-V3.9_Simulator-De-Combustibil
// @name:uk             GeoFS-V3.9_Симулятор-Палива
// @name:hi             GeoFS-V3.9_ईंधन-सिम्युलेटर
// @name:bn             GeoFS-V3.9_জ্বালানী-সিমুলেটর
// @name:fa             GeoFS-V3.9_شبیه-ساز-سوخت
// @name:he             GeoFS-V3.9_סימולטור-דלק
// @name:ms             GeoFS-V3.9_Simulator-Bahan-Api
// @name:fil            GeoFS-V3.9_Simulator-Ng-Gasolina
// @name:el             GeoFS-V3.9_Προσομοιωτής-Καυσίμου
// @name:hr             GeoFS-V3.9_Simulator-Goriva
// @name:sk             GeoFS-V3.9_Simulátor-Paliva
// @name:bg             GeoFS-V3.9_Симулатор-На-Гориво
// @name:sr             GeoFS-V3.9_Симулатор-Горива
// @name:lt             GeoFS-V3.9_Kuro-Simuliatorius
// @name:lv             GeoFS-V3.9_Degvielas-Simulators
// @name:et             GeoFS-V3.9_Kütuse-Simulaator
// @name:sl             GeoFS-V3.9_Simulator-Goriva
// @name:ca             GeoFS-V3.9_Simulador-De-Combustible
// @name:af             GeoFS-V3.9_Brandstof-Simulator
// @name:sw             GeoFS-V3.9_Simulator-Ya-Mafuta
// @name:zu             GeoFS-V3.9_I-Fuel-Simulator
// @name:mn             GeoFS-V3.9_Түлшний-Симулятор
// @name:my             GeoFS-V3.9_ဆီစား-Simulator
// @name:km             GeoFS-V3.9_ម៉ាស៊ីនពិសោធឥន្ធនៈ
// @name:lo             GeoFS-V3.9_ເຄື່ອງຈຳລອງນໍ້າມັນເຊື້ອໄຟ
// @name:ur             GeoFS-V3.9_ایندھن-سمیلیٹر

// @description         Interactive fuel management, auto-refuel logic, and dynamic weight simulation. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      Quản lý nhiên liệu tương tác, logic tự động tiếp nhiên liệu và mô phỏng trọng lượng động. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   交互式燃油管理、自动加油逻辑和动态重量模拟。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   互動式燃油管理、自動加油邏輯和動態重量模擬。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      インタラクティブな燃料管理、自動給油ロジック、および動的重量シミュレーション。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      대화형 연료 관리, 자동 연료 보급 논리 및 동적 중량 시뮬레이션. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      Gestion interactive du carburant, logique de ravitaillement automatique et simulation dynamique du poids. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Interaktives Kraftstoffmanagement, automatische Betankungslogik und dynamische Gewichtssimulation. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      Gestión interactiva de combustible, lógica de repostaje automático y simulación dinámica de peso. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   Gerenciamento interativo de combustível, lógica de reabastecimento automático e simulação dinâmica de peso. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   Gestão interativa de combustível, lógica de reabastecimento automático e simulação dinâmica de peso. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      Интерактивное управление топливом, логика автоматической дозаправки и динамическое моделирование веса. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      إدارة الوقود التفاعلية، ومنطق التزود بالوقود التلقائي، ومحاكاة الوزن الديناميكي. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      Etkileşimli yakıt yönetimi, otomatik yakıt ikmali mantığı ve dinamik ağırlık simülasyonu. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      Manajemen bahan bakar interaktif, logika pengisian bahan bakar otomatis, dan simulasi bobot dinamis. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      การจัดการเชื้อเพลิงแบบโต้ตอบ ตรรกะการเติมเชื้อเพลิงอัตโนมัติ และการจำลองน้ำหนักแบบไดนามิก © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Interaktywne zarządzanie paliwem, logika automatycznego tankowania i dynamiczna symulacja masy. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      Interactief brandstofbeheer, logica voor automatisch tanken en dynamische gewichtssimulatie. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      Gestione interattiva del carburante, logica di rifornimento automatico e simulazione dinamica del peso. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Interaktiv bränslehantering, logik för automatisk tankning och dynamisk viktsimulering. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Interaktiv brændstofstyring, auto-tank logik og dynamisk vægtsimulering. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      Interaktiivinen polttoaineen hallinta, automaattinen tankkauslogiikka ja dynaaminen painosimulaatio. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Interaktiv drivstoffstyring, logikk for automatisk drivstoff og dynamisk vektsimulering. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Interaktivní řízení paliva, logika automatického doplňování paliva a dynamická simulace hmotnosti. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      Interaktív üzemanyag-kezelés, automatikus tankolási logika és dinamikus tömegszimuláció. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      Gestionarea interactivă a combustibilului, logica de alimentare automată și simularea dinamică a greutății. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      Інтерактивне керування паливом, логіка автоматичної заправки та моделювання динамічної ваги. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      इंटरएक्टिव ईंधन प्रबंधन, ऑटो-ईंधन तर्क और गतिशील वजन सिमुलेशन। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      ইন্টারেক্টিভ ফুয়েল ম্যানেজমেন্ট, অটো-রিফুয়েল লজিক এবং ডাইনামিক ওয়েট সিমুলেশন। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      مدیریت تعاملی سوخت، منطق سوخت‌گیری خودکار و شبیه‌سازی وزن پویا. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      ניהול דלק אינטראקטיבי, לוגיקה של תדלוק אוטומטי והדמיית משקל דינמית. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      Pengurusan bahan api interaktif, logik pengisi automatik dan simulasi berat dinamik. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Interactive na pamamahala ng gasolina, auto-refuel logic, at dynamic na weight simulation. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Διαδραστική διαχείριση καυσίμου, λογική αυτόματης ανεφοδιασμού καυσίμου και δυναμική προσομοίωση βάρους. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      Interaktivno upravljanje gorivom, logika automatskog punjenja goriva i dinamička simulacija težine. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Interaktívny manažment paliva, logika automatického dopĺňania paliva a dynamická simulácia hmotnosti. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      Интерактивно управление на горивото, логика за автоматично зареждане с гориво и симулация на динамично тегло. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Интерактивно управљање горивом, логика аутоматског допуњавања горива и динамичка симулација тежине. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Interaktyvus degalų valdymas, automatinio degalų papildymo logika ir dinaminis svorio modeliavimas. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      Interaktīva degvielas pārvaldība, automātiskās degvielas uzpildes loģika un dinamiska svara simulācija. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      Interaktiivne kütusehaldus, automaatse tankimise loogika ja dünaamiline kaalusimulatsioon. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      Interaktivno upravljanje goriva, logika samodejnega točenja goriva in dinamična simulacija teže. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      Gestió interactiva del combustible, lògica de reabastament automàtic i simulació de pes dinàmica. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Interaktiewe brandstofbestuur, outo-brandstof-logika en dinamiese gewigsimulasie. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      Usimamizi shirikishi wa mafuta, mantiki ya kujaza mafuta kiotomatiki, na uigaji wa uzito unaobadilika. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      Ukuphathwa kukaphethiloli okusebenzisanayo, i-auto-refuel logic, nokulingisa isisindo esiguqukayo. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      Шатахууны интерактив удирдлага, автоматаар цэнэглэх логик, жингийн динамик загварчлал. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      အပြန်အလှန်အကျိုးပြုသောလောင်စာဆီစီမံခန့်ခွဲမှု၊ အလိုအလျောက်ဆီဖြည့်ခြင်းဆိုင်ရာ ယုတ္တိဗေဒနှင့် တက်ကြွသောအလေးချိန်တူခြင်း © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      ការគ្រប់គ្រងឥន្ធនៈអន្តរកម្ម តក្កវិជ្ជាចាក់ប្រេងដោយស្វ័យប្រវត្តិ និងការក្លែងធ្វើទម្ងន់ថាមវន្ត។ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      ການຈັດການນໍ້າມັນເຊື້ອໄຟແບບໂຕ້ຕອບ, ເຫດຜົນການເຕີມນໍ້າມັນອັດຕະໂນມັດ, ແລະການຈໍາລອງນ້ໍາຫນັກແບບເຄື່ອນໄຫວ. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      انٹرایکٹو فیول مینجمنٹ، آٹو ریفیول لاجک، اور ڈائنامک ویٹ سمولیشن۔ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.

// @require             https://update.greasyfork.org/scripts/581510/code.js
// @require             https://update.greasyfork.org/scripts/581511/code.js

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, _init (https://greasyfork.org/users/1594049)

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.1
// @author              _init
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/fuel-simulator.png
// @match               https://www.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// @downloadURL https://update.greasyfork.org/scripts/581517/GeoFS-V39_Fuel-Simulator.user.js
// @updateURL https://update.greasyfork.org/scripts/581517/GeoFS-V39_Fuel-Simulator.meta.js
// ==/UserScript==

(() => {
    

    console.log("[GeoFS-V3.9_Fuel-Simulator] >> Initializing simulation logic...");

    const fuelSimulatorSuite = {
        /**
         * System State: Internal registry for fuel quantity, mass distributions, 
         * and simulation flags.
         */
        state: {
            fuel: 0,
            initialFuel: 0,
            emptyMass: 0,
            payload: 0,
            maxPayload: 0,
            autoRefuel: localStorage.getItem('geofs-v39-fuel-auto') === 'true',
            immersiveRefuel: true,
            dynamicSFC: localStorage.getItem('geofs-v39-fuel-dyn') === 'true',
            realisticTanks: localStorage.getItem('geofs-v39-fuel-tanks') === 'true',
            tanks: { left: 0, center: 0, right: 0 },
            initialized: false,
            _alertLow: false,
            _alertBingo: false
        },

        /**
         * Performance Database: Reference values for supported aircraft.
         * Contains Operating Empty Weight (OEW), Maximum Takeoff Weight (MTOW), 
         * and standard fuel capacities (in KG).
         */
        performanceDB: {
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
            "silent": { name: "Silent 2 Electro", oew: 205, mtow: 315, fuel: 30 },
            "pc7":    { name: "PC-7", oew: 1330, mtow: 2700, fuel: 385 },
            "dhc2":   { name: "Beaver", oew: 1361, mtow: 2313, fuel: 303 },
            "cricri": { name: "MC-15 Cri-cri", oew: 78, mtow: 170, fuel: 18 },
            "p38":    { name: "P-38 Lightning", oew: 5800, mtow: 9798, fuel: 1800 },
            "su35":   { name: "Su-35", oew: 18400, mtow: 34500, fuel: 11500 },
            "z50":    { name: "Zlin Z-50", oew: 570, mtow: 720, fuel: 60 },
            "pa28":   { name: "PA-28 Warrior", oew: 677, mtow: 1055, fuel: 132 },
            "an140":  { name: "An-140", oew: 12810, mtow: 19150, fuel: 4370 },
            "fa18f":  { name: "F/A-18F Super Hornet", oew: 14552, mtow: 29937, fuel: 6661 },
            "fa18c":  { name: "F/A-18C Hornet", oew: 10433, mtow: 23541, fuel: 4926 },
            "baron":  { name: "Baron B55", oew: 1431, mtow: 2313, fuel: 420 },
            "rafale": { name: "Rafale", oew: 10300, mtow: 24500, fuel: 4700 },
            "potez":  { name: "Potez 25", oew: 1000, mtow: 2000, fuel: 250 },
            "t38":    { name: "T-38 Talon", oew: 3270, mtow: 5485, fuel: 1148 },
            "sportstar": { name: "Sportstar", oew: 308, mtow: 600, fuel: 60 },
            "jantar":  { name: "Jantar", oew: 274, mtow: 540, fuel: 0 },
            "mig17":   { name: "MiG-17", oew: 3919, mtow: 6069, fuel: 1170 },
            "su27":    { name: "Su-27", oew: 16380, mtow: 30450, fuel: 9400 },
            "mig21":   { name: "MiG-21", oew: 5350, mtow: 9124, fuel: 1795 },
            "f117":    { name: "F-117", oew: 13381, mtow: 23814, fuel: 8165 },
            "f14a":    { name: "F-14A", oew: 19838, mtow: 33720, fuel: 7348 }
        },

        /**
         * Notification Proxy: Routes simulation messages through the V3.9 
         * notification engine if available.
         * 
         * @param {string} text - The text content of the notification.
         * @param {string} [type="success"] - The status level of the notification.
         */
        notify: (text, type = "success") => {
            if (window.V39_NOTIF) {
                window.V39_NOTIF.show(text, type);
            } else {
                console.log(`[GeoFS-V3.9_Fuel-Simulator] >> ${text}`);
            }
        },

        /**
         * System Bootstrap: Performance Profiling
         * Determines aircraft-specific constants (OEW, MTOW, Fuel Cap) from the
         * database or falls back to generic mass-based approximations.
         */
        init: function() {
            if (this.state.initialized || !window.geofs?.aircraft?.instance) return;
            const ac = geofs.aircraft.instance;
            const acId = ac.id.toString();
            const acName = ac.definition.externalName?.toLowerCase() || ac.definition.name?.toLowerCase() || "";
            
            console.log(`[GeoFS-V3.9_Fuel-Simulator] >> Bootstrapping profile: ${acId}`);

            // Exception Handling: Space Shuttle Atlantis (Aircraft-side bug causes mass instability)
            if (acName.includes("atlantis") || acId === "2953") {
                this.notify("Atlantis stability override active. Forcing 100% fuel.", "warn");
            }

            // Database Lookup: Resolve OEW and Capacity
            let data = (window.AIRCRAFT_DATA && window.AIRCRAFT_DATA[acId]) ? window.AIRCRAFT_DATA[acId] : null;
            if (!data || data.oew === undefined) {
                data = this.performanceDB[acId];
                if (!data) {
                    const key = Object.keys(this.performanceDB).find(k => isNaN(k) && (acName.includes(k)));
                    if (key) data = this.performanceDB[key];
                }
            }

            if (data && data.oew !== undefined) {
                // Profile Match: Load high-fidelity constants
                this.state.emptyMass = data.oew || 1000;
                this.state.initialFuel = (data.maxFuel !== undefined) ? data.maxFuel : (data.fuel || 500);
                this.state.maxPayload = Math.max(data.mtow * 0.1 || 100, (data.mtow || 2000) - this.state.emptyMass - this.state.initialFuel);
            } else {
                // Generic Fallback: Use physical mass derivatives
                const baseMass = ac.definition.mass;
                if (!baseMass || isNaN(baseMass)) {
                    this.notify("Aircraft unsupported. Simulation disabled.", "warn");
                    this.state.initialized = false;
                    return;
                }
                
                this.state.emptyMass = baseMass * 0.7;
                this.state.maxPayload = baseMass * 0.3;
                this.state.initialFuel = baseMass * (baseMass < 15000 ? 0.2 : 0.4);
            }

            // Initialization: Apply starting mass distribution
            this.state.payload = this.state.maxPayload * 0.5;
            this.state.fuel = this.state.initialFuel;
            this.distributeFuel(this.state.fuel);
            this.state.initialized = true;

            this.updateAircraftMass();
            console.log("[GeoFS-V3.9_Fuel-Simulator] >> Profile resolved and mass synchronized.");
        },

        /**
         * Fuel Distribution: Manages tank-level logic for Center, Left, and Right wings.
         * 
         * @param {number} total - The total fuel to distribute.
         */
        distributeFuel: function(total) {
            this.state.tanks.center = total * 0.4;
            this.state.tanks.left = total * 0.3;
            this.state.tanks.right = total * 0.3;
        },

        /**
         * Mass Synchronization: Updates the GeoFS physics engine with the 
         * calculated gross weight (OEW + Payload + Fuel).
         */
        updateAircraftMass: function() {
            if (!geofs.aircraft.instance || !this.state.initialized) return;
            const mass = (this.state.emptyMass || 0) + (this.state.payload || 0) + (this.state.fuel || 0);
            if (!isNaN(mass) && mass > 0) {
                geofs.aircraft.instance.definition.mass = mass;
            }
        },

        /**
         * UI Construction: Builds the HUD tab for fuel monitoring and configuration.
         */
        createUI: function() {
            console.log("[GeoFS-V3.9_Fuel-Simulator] >> Registering UI Tab...");
            const content = `
                <div style="display: flex; flex-direction: column; gap: 12px; padding: 10px; background: rgba(10, 15, 20, 0.4); border-radius: 8px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border-left: 3px solid #ff9f05;">
                            <div style="font-size: 9px; color: #aaa; text-transform: uppercase;">Fuel Quantity</div>
                            <div id="fuel-pct-val" style="font-size: 16px; font-weight: bold; color: #fff;">...</div>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border-left: 3px solid #ff9f05;">
                            <div style="font-size: 9px; color: #aaa; text-transform: uppercase;">Burn Rate</div>
                            <div id="fuel-burn-val" style="font-size: 16px; font-weight: bold; color: #fff;">...</div>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border-left: 3px solid #facc15; grid-column: span 2;">
                            <div style="font-size: 9px; color: #aaa; text-transform: uppercase;">Gross Weight</div>
                            <div id="fuel-weight-val" style="font-size: 16px; font-weight: bold; color: #fff;">...</div>
                        </div>
                    </div>
                    <div style="padding: 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">
                        <input type="range" id="fuel-slider-pro" min="0" max="100" step="1" value="100" 
                            style="width: 100%;" oninput="window.fuelSimulatorSuite.setFuel(this.value)">
                        <div style="display: flex; justify-content: space-between; font-size: 9px; color: #aaa; margin-top: 4px;">
                            <span>SET FUEL</span><span id="fuel-slider-label">100%</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <button id="fuel-btn-dyn" onclick="window.fuelSimulatorSuite.toggleDynamicSFC()" 
                            style="flex: 1; padding: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; font-size: 9px; cursor: pointer; border-radius: 4px;">DYN SFC</button>
                        <button id="fuel-btn-tanks" onclick="window.fuelSimulatorSuite.toggleRealisticTanks()" 
                            style="flex: 1; padding: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; font-size: 9px; cursor: pointer; border-radius: 4px;">REAL TANKS</button>
                    </div>
                    <button id="fuel-btn-auto" onclick="window.fuelSimulatorSuite.toggleAutoRefuel()" 
                        style="padding: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; font-size: 10px; cursor: pointer; border-radius: 4px;">AUTO-REFUEL</button>
                    <div id="fuel-status-msg" style="font-size: 8px; color: #ff9f05; text-align: center; opacity: 0.6;">WAITING FOR AIRCRAFT...</div>
                </div>
            `;
            window.registerHUDTab('fuel', 'FUEL', content, false);
            
            // Sync UI states with loaded persistence
            setTimeout(() => {
                const btnDyn = document.getElementById('fuel-btn-dyn');
                const btnTanks = document.getElementById('fuel-btn-tanks');
                const btnAuto = document.getElementById('fuel-btn-auto');
                if (btnDyn) btnDyn.style.background = this.state.dynamicSFC ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)";
                if (btnTanks) btnTanks.style.background = this.state.realisticTanks ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)";
                if (btnAuto) btnAuto.style.background = this.state.autoRefuel ? "rgba(255,159,5,0.15)" : "rgba(255,255,255,0.05)";
            }, 100);
            
            if (!window._fuelTickInterval) {
                window._fuelTickInterval = setInterval(() => this.tick(), 1000);
            }
        },

        /**
         * Sets the fuel quantity to a specific percentage.
         * 
         * @param {number} pct - The target percentage of fuel capacity.
         */
        setFuel: function(pct) {
            if (!this.state.initialized) return;
            this.state.fuel = (pct / 100) * this.state.initialFuel;
            this.distributeFuel(this.state.fuel);
            this.updateAircraftMass();
            this.notify(`Fuel set to ${pct}%`);
        },

        /**
         * Toggles the dynamic Specific Fuel Consumption (SFC) calculation mode.
         */
        toggleDynamicSFC: function() {
            this.state.dynamicSFC = !this.state.dynamicSFC;
            localStorage.setItem('geofs-v39-fuel-dyn', this.state.dynamicSFC);
            const btn = document.getElementById('fuel-btn-dyn');
            if (btn) btn.style.background = this.state.dynamicSFC ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)";
            this.notify(`Dynamic SFC ${this.state.dynamicSFC ? 'ON' : 'OFF'}`);
        },

        /**
         * Toggles realistic sequential wing tank draining physics.
         */
        toggleRealisticTanks: function() {
            this.state.realisticTanks = !this.state.realisticTanks;
            localStorage.setItem('geofs-v39-fuel-tanks', this.state.realisticTanks);
            const btn = document.getElementById('fuel-btn-tanks');
            if (btn) btn.style.background = this.state.realisticTanks ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)";
            this.notify(`Realistic Tanks ${this.state.realisticTanks ? 'ON' : 'OFF'}`);
        },

        /**
         * Toggles automatic refueling when fuel is depleted.
         */
        toggleAutoRefuel: function() {
            this.state.autoRefuel = !this.state.autoRefuel;
            localStorage.setItem('geofs-v39-fuel-auto', this.state.autoRefuel);
            const btn = document.getElementById('fuel-btn-auto');
            if (btn) btn.style.background = this.state.autoRefuel ? "rgba(255,159,5,0.15)" : "rgba(255,255,255,0.05)";
            this.notify(`Auto-Refuel ${this.state.autoRefuel ? 'ON' : 'OFF'}`);
        },

        /**
         * Simulation Logic: High-Fidelity Physics Loop (1Hz)
         * Calculates dynamic fuel burn rates based on thrust, altitude, and 
         * atmospheric density. Manages tank logic and provides cockpit alerts.
         */
        tick: function() {
            // Lifecycle: Attempt profile resolution if uninitialized
            if (!this.state.initialized) {
                this.init();
                return;
            }

            if (!geofs.aircraft.instance || geofs.isPaused()) return;
            const ac = geofs.aircraft.instance;
            const acId = ac.id.toString();
            const acName = ac.definition.externalName?.toLowerCase() || ac.definition.name?.toLowerCase() || "";
            const alt = geofs.animation.values.altitude || 0;
            
            // Environmental Factors: Specific fuel consumption derivatives
            const isRocket = acName.includes("shuttle") || acName.includes("atlantis") || acName.includes("rocket") || acName.includes("x-15") || acId === "2953";
            
            // Stability Override: Space Shuttle Atlantis
            if (acName.includes("atlantis") || acId === "2953") {
                this.state.fuel = this.state.initialFuel || 1000;
                this.distributeFuel(this.state.fuel);
                this.updateAircraftMass();
                this.updateUI(0);
                return;
            }

            // SFC Logic: Base consumption rate adjusted for aircraft class
            const sfcBase = isRocket ? 0.85 : ((ac.definition.maxThrust || 0) > 50000 ? 0.0075 : 0.0095);
            
            // Atmospheric Scaling: SFC decreases in thinner air
            const altMult = this.state.dynamicSFC ? Math.max(0.1, 1 - (alt / 50000)) ** 1.1 : 1;
            const totalThrust = ac.engines ? ac.engines.reduce((sum, eng) => sum + Math.max(0, eng.thrust || 0), 0) : 0;
            const burnRate = totalThrust * sfcBase * altMult;

            // Integration: Calculate mass delta per second
            let drainAmount = burnRate * (1 / 3600);
            if (isNaN(drainAmount)) drainAmount = 0;
            this.state.fuel -= drainAmount;

            // Integrity Check: Prevent NaN-induced engine shutdown
            if (isNaN(this.state.fuel)) {
                console.warn("[GeoFS-V3.9_Fuel-Simulator] >> NaN state recovered. Syncing mass...");
                this.state.fuel = this.state.initialFuel || 1000;
            }

            // Tank Logic: Sequential or Parallel draining
            if (this.state.realisticTanks) {
                // Sequential Architecture: Center -> Wing transfer
                if (this.state.tanks.center > 0) {
                    this.state.tanks.center -= drainAmount;
                    if (this.state.tanks.center < 0) {
                        this.state.tanks.left += this.state.tanks.center / 2;
                        this.state.tanks.right += this.state.tanks.center / 2;
                        this.state.tanks.center = 0;
                    }
                } else {
                    this.state.tanks.left -= drainAmount / 2;
                    this.state.tanks.right -= drainAmount / 2;
                }

                // Physics Simulation: Roll moment due to fuel imbalance
                const imbalance = this.state.tanks.left - this.state.tanks.right;
                if (Math.abs(imbalance) > 10) {
                    const rollMoment = imbalance * 0.000001; 
                    ac.rigidBody.applyTorque(window.V3.scale(ac.object3d.worldRotation[0], rollMoment));
                }
            } else {
                // Parallel Architecture: Uniform distribution
                this.distributeFuel(this.state.fuel);
            }

            // Flameout Logic: Automatic shutdown on exhaustion
            if (this.state.fuel <= 0) {
                this.state.fuel = 0;
                this.distributeFuel(0);
                ac.stopEngine();
            }

            // Configuration Overrides
            if (this.state.autoRefuel) {
                this.state.fuel = this.state.initialFuel;
                this.distributeFuel(this.state.fuel);
            }

            // Mass Sync: Update physical gross weight
            this.updateAircraftMass();
            this.updateUI(burnRate);

            // Warning Logic: Threshold-based notifications
            const fuelPct = (this.state.fuel / this.state.initialFuel) * 100;
            if (fuelPct < 5 && !this.state._alertBingo) {
                if (window.V39_NOTIF) window.V39_NOTIF.critical("🚨 BINGO FUEL - EMERGENCY DECLARED");
                this.state._alertBingo = true;
            } else if (fuelPct < 15 && !this.state._alertLow) {
                if (window.V39_NOTIF) window.V39_NOTIF.warn("⚠️ LOW FUEL ALERT");
                this.state._alertLow = true;
            }
            if (fuelPct > 16) { this.state._alertLow = false; this.state._alertBingo = false; }
        },

        /**
         * Updates the HTML HUD interface with live telemetry parameters.
         * 
         * @param {number} burnRate - The current fuel consumption rate in kg/h.
         */
        updateUI: function(burnRate) {
            const fuelPct = (this.state.fuel / this.state.initialFuel) * 100;
            const fuelEl = document.getElementById('fuel-pct-val');
            const burnEl = document.getElementById('fuel-burn-val');
            const weightEl = document.getElementById('fuel-weight-val');
            const slider = document.getElementById('fuel-slider-pro');
            const label = document.getElementById('fuel-slider-label');
            const statusMsg = document.getElementById('fuel-status-msg');

            if (fuelEl) fuelEl.textContent = fuelPct.toFixed(1) + "%";
            if (burnEl) burnEl.textContent = Math.round(burnRate) + " kg/h";
            if (weightEl) weightEl.textContent = Math.round(this.state.emptyMass + this.state.payload + this.state.fuel).toLocaleString() + " KG";
            if (slider) slider.value = fuelPct;
            if (label) label.textContent = Math.round(fuelPct) + "%";
            if (statusMsg) statusMsg.textContent = "SYSTEMS LIVE";
        }
    };

    window.fuelSimulatorSuite = fuelSimulatorSuite;

    window.initFuelSimulatorPro = () => {
        if (window.fuelSimulatorTabRegistered) return;
        if (typeof window.registerHUDTab !== 'function') return;
        window.fuelSimulatorTabRegistered = true;
        fuelSimulatorSuite.createUI();
    };

    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_Fuel-Simulator', window.initFuelSimulatorPro);
    } else {
        const checker = setInterval(() => {
            if (window.registerHUDTab) {
                clearInterval(checker);
                window.initFuelSimulatorPro();
            }
        }, 100);
    }
})();
