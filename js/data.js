/* ==========================================
   1. FIX 데이터 (좌표 사전)
   ========================================== */
const rawFixData = [
    { id: "AGAVO", lat: 37.1694, lng: 123.9981, type: "SIGN-POINT" },
    { id: "AGSUS", lat: 36.7558, lng: 130.6789, type: "SIGN-POINT" },
    { id: "AKPON", lat: 33.7806, lng: 127.3314, type: "SIGN-POINT" },
    { id: "ANDOL", lat: 37.6661, lng: 133.0000, type: "SIGN-POINT" },
    { id: "ANKUS", lat: 35.1250, lng: 128.7711, type: "SIGN-POINT" },
    { id: "ANROD", lat: 34.6328, lng: 128.4978, type: "SIGN-POINT" },
    { id: "ANSIM", lat: 37.3897, lng: 124.8358, type: "SIGN-POINT" },
    { id: "ANUBA", lat: 35.1294, lng: 127.5897, type: "SIGN-POINT" },
    { id: "APARU", lat: 35.4117, lng: 129.1589, type: "SIGN-POINT" },
    { id: "APELA", lat: 34.7231, lng: 129.2333, type: "SIGN-POINT" },
    { id: "ATASO", lat: 35.8956, lng: 126.9492, type: "SIGN-POINT" },
    { id: "ATINA", lat: 33.7222, lng: 127.0731, type: "SIGN-POINT" },
    { id: "ATOTI", lat: 30.0036, lng: 125.1983, type: "SIGN-POINT" },
    { id: "BASEM", lat: 36.8436, lng: 127.9528, type: "SIGN-POINT" },
    { id: "BEDAR", lat: 31.9003, lng: 126.4861, type: "SIGN-POINT" },
    { id: "BEDES", lat: 36.1514, lng: 126.8122, type: "SIGN-POINT" },
    { id: "BEDOM", lat: 35.4203, lng: 129.2983, type: "SIGN-POINT" },
    { id: "BELTU", lat: 37.2050, lng: 125.7997, type: "SIGN-POINT" },
    { id: "BEPKO", lat: 33.6528, lng: 126.9206, type: "SIGN-POINT" },
    { id: "BESNA", lat: 34.6217, lng: 129.1308, type: "SIGN-POINT" },
    { id: "BIDRI", lat: 36.3353, lng: 124.4147, type: "SIGN-POINT" },
    { id: "BIGOB", lat: 36.7236, lng: 128.1644, type: "SIGN-POINT" },
    { id: "BIKSI", lat: 37.6756, lng: 128.5844, type: "SIGN-POINT" },
    { id: "BILUM", lat: 33.7703, lng: 127.0775, type: "SIGN-POINT" },
    { id: "BINIL", lat: 37.3969, lng: 125.2331, type: "SIGN-POINT" },
    { id: "BITUX", lat: 36.2792, lng: 128.0300, type: "SIGN-POINT" },
    { id: "BODOL", lat: 37.1894, lng: 124.8317, type: "SIGN-POINT" },
    { id: "BOGAN", lat: 37.2114, lng: 126.4700, type: "SIGN-POINT" },
    { id: "BONSO", lat: 30.4778, lng: 125.1475, type: "SIGN-POINT" },
    { id: "BOPTA", lat: 36.7350, lng: 126.6161, type: "SIGN-POINT" },
    { id: "BULGA", lat: 35.9358, lng: 129.8233, type: "SIGN-POINT" },
    { id: "BULTI", lat: 36.7228, lng: 126.8250, type: "SIGN-POINT" },
    { id: "BUSKO", lat: 37.6758, lng: 130.2694, type: "SIGN-POINT" },
    { id: "DABIK", lat: 36.2953, lng: 130.1953, type: "SIGN-POINT" },
    { id: "DALPO", lat: 36.9764, lng: 124.4147, type: "SIGN-POINT" },
    { id: "DALSU", lat: 35.1253, lng: 126.7017, type: "SIGN-POINT" },
    { id: "DANPA", lat: 35.5100, lng: 124.4147, type: "SIGN-POINT" },
    { id: "DANTI", lat: 37.3017, lng: 124.6581, type: "SIGN-POINT" },
    { id: "DOMKO", lat: 32.4800, lng: 125.9831, type: "SIGN-POINT" },
    { id: "DOTOL", lat: 34.2542, lng: 126.6103, type: "SIGN-POINT" },
    { id: "EGOBA", lat: 37.4875, lng: 127.3794, type: "SIGN-POINT" },
    { id: "ELAPI", lat: 36.3372, lng: 128.8475, type: "SIGN-POINT" },
    { id: "ELGEP", lat: 31.7814, lng: 125.9381, type: "SIGN-POINT" },
    { id: "ELPOS", lat: 35.9028, lng: 126.7853, type: "SIGN-POINT" },
    { id: "ENGOT", lat: 34.8094, lng: 128.4978, type: "SIGN-POINT" },
    { id: "ENSAL", lat: 36.9317, lng: 127.7964, type: "SIGN-POINT" },
    { id: "ENSUM", lat: 32.2172, lng: 124.7764, type: "SIGN-POINT" },
    { id: "ENTEL", lat: 36.3864, lng: 126.9514, type: "SIGN-POINT" },
    { id: "ESNEG", lat: 37.1706, lng: 129.8475, type: "SIGN-POINT" },
    { id: "GOGET", lat: 37.4117, lng: 126.5100, type: "SIGN-POINT" },
    { id: "GONAV", lat: 37.1800, lng: 124.4147, type: "SIGN-POINT" },
    { id: "GONAX", lat: 36.3864, lng: 126.8378, type: "SIGN-POINT" },
    { id: "GOSBO", lat: 34.2547, lng: 127.7928, type: "SIGN-POINT" },
    { id: "GUKDO", lat: 37.0197, lng: 127.6397, type: "SIGN-POINT" },
    { id: "GUKSU", lat: 33.8808, lng: 126.7325, type: "SIGN-POINT" },
    { id: "GUNKU", lat: 36.5706, lng: 126.9969, type: "SIGN-POINT" },
    { id: "IGDOK", lat: 35.5178, lng: 127.8186, type: "SIGN-POINT" },
    { id: "IGRAS", lat: 37.3128, lng: 132.7364, type: "SIGN-POINT" },
    { id: "IKEDO", lat: 31.7206, lng: 125.6633, type: "SIGN-POINT" },
    { id: "INVOK", lat: 34.7886, lng: 129.3231, type: "SIGN-POINT" },
    { id: "IPDAS", lat: 34.2542, lng: 126.7169, type: "SIGN-POINT" },
    { id: "KAKSO", lat: 37.1292, lng: 127.4436, type: "SIGN-POINT" },
    { id: "KALEK", lat: 35.2089, lng: 129.8847, type: "SIGN-POINT" },
    { id: "KALMA", lat: 37.3125, lng: 127.1125, type: "SIGN-POINT" },
    { id: "KALOD", lat: 35.5033, lng: 128.7739, type: "SIGN-POINT" },
    { id: "KAMIT", lat: 34.2539, lng: 126.7717, type: "SIGN-POINT" },
    { id: "KANKA", lat: 31.5319, lng: 125.5844, type: "SIGN-POINT" },
    { id: "KANSU", lat: 38.6333, lng: 132.4750, type: "SIGN-POINT" },
    { id: "KARBU", lat: 37.5331, lng: 127.6644, type: "SIGN-POINT" },
    { id: "LAMEN", lat: 31.6133, lng: 123.9983, type: "SIGN-POINT" },
    { id: "LANAT", lat: 36.3733, lng: 131.4283, type: "SIGN-POINT" },
    { id: "LAPAL", lat: 35.9036, lng: 129.0811, type: "SIGN-POINT" },
    { id: "LESBU", lat: 37.6878, lng: 129.6844, type: "SIGN-POINT" },
    { id: "LIMDI", lat: 33.5536, lng: 125.8314, type: "SIGN-POINT" },
    { id: "LINTA", lat: 35.5211, lng: 126.8553, type: "SIGN-POINT" },
    { id: "LOSNI", lat: 33.5542, lng: 126.6981, type: "SIGN-POINT" },
    { id: "LOSTO", lat: 36.3378, lng: 129.4300, type: "SIGN-POINT" },
    { id: "MAKDU", lat: 36.4533, lng: 127.8192, type: "SIGN-POINT" },
    { id: "MAKET", lat: 33.9144, lng: 127.3314, type: "SIGN-POINT" },
    { id: "MAKSA", lat: 35.5031, lng: 126.9061, type: "SIGN-POINT" },
    { id: "MALSO", lat: 37.9111, lng: 131.8178, type: "SIGN-POINT" },
    { id: "MANGI", lat: 35.5031, lng: 126.7422, type: "SIGN-POINT" },
    { id: "MASTA", lat: 35.4797, lng: 128.5611, type: "SIGN-POINT" },
    { id: "MEKIL", lat: 36.5561, lng: 126.8314, type: "SIGN-POINT" },
    { id: "MELES", lat: 35.8808, lng: 127.2617, type: "SIGN-POINT" },
    { id: "MONSI", lat: 37.2131, lng: 126.8375, type: "SIGN-POINT" },
    { id: "MOXID", lat: 36.3864, lng: 126.7331, type: "SIGN-POINT" },
    { id: "MUGUS", lat: 30.0017, lng: 124.9533, type: "SIGN-POINT" },
    { id: "NIRAT", lat: 32.0650, lng: 126.0581, type: "SIGN-POINT" },
    { id: "NISAV", lat: 34.2553, lng: 127.9764, type: "SIGN-POINT" },
    { id: "NOBUT", lat: 37.1208, lng: 129.3325, type: "SIGN-POINT" },
    { id: "NOGON", lat: 37.3806, lng: 124.4181, type: "SIGN-POINT" },
    { id: "NONOS", lat: 36.6794, lng: 124.4147, type: "SIGN-POINT" },
    { id: "NOPIK", lat: 37.4033, lng: 125.6514, type: "SIGN-POINT" },
    { id: "NULDI", lat: 34.4206, lng: 126.6275, type: "SIGN-POINT" },
    { id: "OLBIM", lat: 37.2364, lng: 124.1308, type: "SIGN-POINT" },
    { id: "OLMEN", lat: 36.7369, lng: 126.9911, type: "SIGN-POINT" },
    { id: "OLMUD", lat: 35.0403, lng: 128.8211, type: "SIGN-POINT" },
    { id: "OMKIM", lat: 33.2222, lng: 126.6872, type: "SIGN-POINT" },
    { id: "OMOTU", lat: 35.0092, lng: 128.8394, type: "SIGN-POINT" },
    { id: "ONATA", lat: 38.4756, lng: 132.1006, type: "SIGN-POINT" },
    { id: "ONIKU", lat: 32.1950, lng: 126.6547, type: "SIGN-POINT" },
    { id: "OPEDA", lat: 35.8636, lng: 127.6144, type: "SIGN-POINT" },
    { id: "OSPOT", lat: 36.8383, lng: 127.3486, type: "SIGN-POINT" },
    { id: "OSVOM", lat: 36.6456, lng: 129.3919, type: "SIGN-POINT" },
    { id: "PALDU", lat: 37.9703, lng: 132.6069, type: "SIGN-POINT" },
    { id: "PALSA", lat: 34.0253, lng: 124.4147, type: "SIGN-POINT" },
    { id: "PANSI", lat: 33.0039, lng: 126.2069, type: "SIGN-POINT" },
    { id: "PAPLU", lat: 33.5781, lng: 127.0603, type: "SIGN-POINT" },
    { id: "PEBRI", lat: 36.3864, lng: 127.0036, type: "SIGN-POINT" },
    { id: "PILIT", lat: 37.4419, lng: 129.2919, type: "SIGN-POINT" },
    { id: "POLEG", lat: 37.2136, lng: 126.9931, type: "SIGN-POINT" },
    { id: "PONIK", lat: 32.0058, lng: 125.7831, type: "SIGN-POINT" },
    { id: "POSAN", lat: 36.9375, lng: 127.2211, type: "SIGN-POINT" },
    { id: "POVEM", lat: 34.9231, lng: 128.9044, type: "SIGN-POINT" },
    { id: "POVOR", lat: 34.2556, lng: 127.7333, type: "SIGN-POINT" },
    { id: "REBIT", lat: 37.2008, lng: 125.4869, type: "SIGN-POINT" },
    { id: "REMOS", lat: 33.4347, lng: 126.3914, type: "SIGN-POINT" },
    { id: "RILRO", lat: 37.1758, lng: 124.2450, type: "SIGN-POINT" },
    { id: "RIMPO", lat: 35.1275, lng: 127.5839, type: "SIGN-POINT" },
    { id: "RINBO", lat: 35.8978, lng: 126.8969, type: "SIGN-POINT" },
    { id: "RUGMA", lat: 32.5033, lng: 126.9647, type: "SIGN-POINT" },
    { id: "RUNIT", lat: 35.1261, lng: 128.4978, type: "SIGN-POINT" },
    { id: "SABET", lat: 37.6414, lng: 132.6719, type: "SIGN-POINT" },
    { id: "SADLI", lat: 31.8333, lng: 124.9983, type: "SIGN-POINT" },
    { id: "SAMDO", lat: 33.5842, lng: 128.3158, type: "SIGN-POINT" },
    { id: "SAMIS", lat: 33.8411, lng: 126.5672, type: "SIGN-POINT" },
    { id: "SAMLO", lat: 32.5397, lng: 126.2600, type: "SIGN-POINT" },
    { id: "SAMUL", lat: 35.1267, lng: 126.8650, type: "SIGN-POINT" },
    { id: "SAPDI", lat: 35.1269, lng: 128.4978, type: "SIGN-POINT" },
    { id: "SAPRA", lat: 35.8239, lng: 130.7236, type: "SIGN-POINT" },
    { id: "SARAM", lat: 35.1267, lng: 128.5297, type: "SIGN-POINT" },
    { id: "SELPA", lat: 37.9208, lng: 130.8197, type: "SIGN-POINT" },
    { id: "SOSDO", lat: 33.0033, lng: 126.4597, type: "SIGN-POINT" },
    { id: "TAMNA", lat: 33.4708, lng: 127.3314, type: "SIGN-POINT" },
    { id: "TEBEX", lat: 36.5614, lng: 127.9914, type: "SIGN-POINT" },
    { id: "TEDAN", lat: 35.1289, lng: 127.3144, type: "SIGN-POINT" },
    { id: "TENAS", lat: 37.6389, lng: 131.5742, type: "SIGN-POINT" },
    { id: "TESIM", lat: 31.5906, lng: 125.8578, type: "SIGN-POINT" },
    { id: "TOLIS", lat: 33.8417, lng: 124.4147, type: "SIGN-POINT" },
    { id: "TOPAX", lat: 34.7653, lng: 128.4978, type: "SIGN-POINT" },
    { id: "TORUS", lat: 37.6069, lng: 128.1353, type: "SIGN-POINT" },
    { id: "TOSAN", lat: 33.0033, lng: 126.7719, type: "SIGN-POINT" },
    { id: "UGOVI", lat: 37.6847, lng: 129.8475, type: "SIGN-POINT" },
    { id: "UPGOS", lat: 33.9592, lng: 127.3314, type: "SIGN-POINT" },
    { id: "VASLI", lat: 36.7144, lng: 127.5008, type: "SIGN-POINT" },
    { id: "KWJ", lat: 35.1194, lng: 126.8142, type: "TACAN" },
    { id: "CJU", lat: 33.3846, lng: 126.6241, type: "VORTAC" },
    { id: "KAE", lat: 37.7008, lng: 128.7538, type: "VORTAC" },
    { id: "KPO", lat: 35.9772, lng: 129.4745, type: "VORTAC" },
    { id: "KUZ", lat: 35.9103, lng: 126.6114, type: "VORTAC" },
    { id: "PSN", lat: 35.1225, lng: 128.9994, type: "VORTAC" },
    { id: "SEL", lat: 37.4136, lng: 126.9284, type: "VORTAC" },
    { id: "SOT", lat: 37.0944, lng: 127.0317, type: "VORTAC" },
    { id: "TGU", lat: 35.8098, lng: 128.5908, type: "VORTAC" },
    { id: "CUN", lat: 36.6320, lng: 128.3254, type: "VOR_DME" },
    { id: "KWA", lat: 35.1262, lng: 126.8122, type: "VOR_DME" }
];

// FIX 데이터를 Key-Value 형식으로 변환 (O(1) 검색을 위해)
const fixData = {};
rawFixData.forEach(fix => {
    fixData[fix.id] = { lat: fix.lat, lon: fix.lng };
});

/* ==========================================
   2. 항로 데이터 (Route Data) - 순서 정렬됨
   ========================================== */
const routeData = [
    {
        "name": "A582",
        "segments": [
            { "from": "SEL", "to": "POLEG" },
            { "from": "POLEG", "to": "SOT" },
            { "from": "SOT", "to": "OSPOT" },
            { "from": "OSPOT", "to": "VASLI" },
            { "from": "VASLI", "to": "MAKDU" },
            { "from": "MAKDU", "to": "BITUX" },
            { "from": "BITUX", "to": "TGU" },
            { "from": "TGU", "to": "KALOD" },
            { "from": "KALOD", "to": "PSN" },
            { "from": "PSN", "to": "APELA" }
        ]
    },
    {
        "name": "A586",
        "segments": [
            { "from": "TENAS", "to": "AGSUS" },
            { "from": "AGSUS", "to": "DABIK" },
            { "from": "DABIK", "to": "BULGA" },
            { "from": "BULGA", "to": "BEDOM" },
            { "from": "BEDOM", "to": "PSN" },
            { "from": "PSN", "to": "OMOTU" },
            { "from": "OMOTU", "to": "TOPAX" },
            { "from": "TOPAX", "to": "GOSBO" },
            { "from": "GOSBO", "to": "MAKET" },
            { "from": "MAKET", "to": "ATINA" },
            { "from": "ATINA", "to": "CJU" },
            { "from": "CJU", "to": "TOSAN" },
            { "from": "TOSAN", "to": "RUGMA" }
        ]
    },
    {
        "name": "A593",
        "segments": [
            { "from": "ONIKU", "to": "NIRAT" },
            { "from": "NIRAT", "to": "PONIK" },
            { "from": "PONIK", "to": "SADLI" },
            { "from": "SADLI", "to": "LAMEN" }
        ]
    },
    {
        "name": "A595",
        "segments": [
            { "from": "CJU", "to": "TAMNA" },
            { "from": "TAMNA", "to": "SAMDO" }
        ]
    },
    {
        "name": "B332",
        "segments": [
            { "from": "KANSU", "to": "PALDU" },
            { "from": "PALDU", "to": "SABET" },
            { "from": "SABET", "to": "IGRAS" }
        ]
    },
    {
        "name": "B467",
        "segments": [
            { "from": "KAE", "to": "LESBU" },
            { "from": "LESBU", "to": "UGOVI" },
            { "from": "UGOVI", "to": "BUSKO" },
            { "from": "BUSKO", "to": "TENAS" },
            { "from": "TENAS", "to": "MALSO" },
            { "from": "MALSO", "to": "KANSU" }
        ]
    },
    {
        "name": "B576",
        "segments": [
            { "from": "SEL", "to": "POLEG" },
            { "from": "POLEG", "to": "SOT" },
            { "from": "SOT", "to": "OLMEN" },
            { "from": "OLMEN", "to": "ENTEL" },
            { "from": "ENTEL", "to": "RINBO" },
            { "from": "RINBO", "to": "LINTA" },
            { "from": "LINTA", "to": "KWA" },
            { "from": "KWA", "to": "IPDAS" },
            { "from": "IPDAS", "to": "CJU" },
            { "from": "CJU", "to": "SOSDO" },
            { "from": "SOSDO", "to": "SAMLO" },
            { "from": "SAMLO", "to": "NIRAT" },
            { "from": "NIRAT", "to": "ELGEP" },
            { "from": "ELGEP", "to": "TESIM" },
            { "from": "TESIM", "to": "ATOTI" }
        ]
    },
    {
        "name": "G339",
        "segments": [
            { "from": "PSN", "to": "INVOK" }
        ]
    },
    {
        "name": "G585",
        "segments": [
            { "from": "SEL", "to": "KALMA" },
            { "from": "KALMA", "to": "KAKSO" },
            { "from": "KAKSO", "to": "GUKDO" },
            { "from": "GUKDO", "to": "ENSAL" },
            { "from": "ENSAL", "to": "BASEM" },
            { "from": "BASEM", "to": "BIGOB" },
            { "from": "BIGOB", "to": "CUN" },
            { "from": "CUN", "to": "ELAPI" },
            { "from": "ELAPI", "to": "KPO" },
            { "from": "KPO", "to": "BULGA" },
            { "from": "BULGA", "to": "SAPRA" }
        ]
    },
    {
        "name": "G597",
        "segments": [
            { "from": "AGAVO", "to": "GONAV" },
            { "from": "GONAV", "to": "DANTI" },
            { "from": "DANTI", "to": "ANSIM" },
            { "from": "ANSIM", "to": "BINIL" },
            { "from": "BINIL", "to": "NOPIK" },
            { "from": "NOPIK", "to": "GOGET" },
            { "from": "GOGET", "to": "SEL" },
            { "from": "SEL", "to": "EGOBA" },
            { "from": "EGOBA", "to": "KARBU" },
            { "from": "KARBU", "to": "TORUS" },
            { "from": "TORUS", "to": "BIKSI" },
            { "from": "BIKSI", "to": "KAE" },
            { "from": "KAE", "to": "PILIT" },
            { "from": "PILIT", "to": "ESNEG" },
            { "from": "ESNEG", "to": "AGSUS" },
            { "from": "AGSUS", "to": "LANAT" }
        ]
    },
    {
        "name": "L512",
        "segments": [
            { "from": "TENAS", "to": "SABET" },
            { "from": "SABET", "to": "ANDOL" }
        ]
    },
    {
        "name": "V11",
        "segments": [
            { "from": "PILIT", "to": "NOBUT" },
            { "from": "NOBUT", "to": "OSVOM" },
            { "from": "OSVOM", "to": "LOSTO" },
            { "from": "LOSTO", "to": "KPO" },
            { "from": "KPO", "to": "APARU" },
            { "from": "APARU", "to": "PSN" }
        ]
    },
    {
        "name": "V543",
        "segments": [
            { "from": "DALSU", "to": "KWA" },
            { "from": "KWA", "to": "SAMUL" },
            { "from": "SAMUL", "to": "TEDAN" },
            { "from": "TEDAN", "to": "ANUBA" },
            { "from": "ANUBA", "to": "SAPDI" },
            { "from": "SAPDI", "to": "SARAM" },
            { "from": "SARAM", "to": "ANKUS" },
            { "from": "ANKUS", "to": "PSN" }
        ]
    },
    {
        "name": "V547",
        "segments": [
            { "from": "KWA", "to": "IGDOK" },
            { "from": "IGDOK", "to": "TGU" }
        ]
    },
    {
        "name": "V549",
        "segments": [
            { "from": "KUZ", "to": "ELPOS" },
            { "from": "ELPOS", "to": "RINBO" },
            { "from": "RINBO", "to": "MELES" },
            { "from": "MELES", "to": "OPEDA" },
            { "from": "OPEDA", "to": "TGU" },
            { "from": "TGU", "to": "LAPAL" },
            { "from": "LAPAL", "to": "KPO" }
        ]
    },
    {
        "name": "W45",
        "segments": [
            { "from": "KWJ", "to": "RIMPO" },
            { "from": "RIMPO", "to": "RUNIT" },
            { "from": "RUNIT", "to": "PSN" }
        ]
    },
    {
        "name": "W526",
        "segments": [
            { "from": "SARAM", "to": "TOPAX" }
        ]
    },
    {
        "name": "W61",
        "segments": [
            { "from": "SOT", "to": "MONSI" },
            { "from": "MONSI", "to": "GOGET" }
        ]
    },
    {
        "name": "W62",
        "segments": [
            { "from": "SOT", "to": "EGOBA" }
        ]
    },
    {
        "name": "Y233",
        "segments": [
            { "from": "BUSKO", "to": "SELPA" },
            { "from": "SELPA", "to": "ONATA" },
            { "from": "ONATA", "to": "KANSU" }
        ]
    },
    {
        "name": "Y253",
        "segments": [
            { "from": "DALSU", "to": "KWA" },
            { "from": "KWA", "to": "SAMUL" },
            { "from": "SAMUL", "to": "TEDAN" },
            { "from": "TEDAN", "to": "ANUBA" },
            { "from": "ANUBA", "to": "SAPDI" },
            { "from": "SAPDI", "to": "SARAM" },
            { "from": "SARAM", "to": "ANKUS" },
            { "from": "ANKUS", "to": "PSN" }
        ]
    },
    {
        "name": "Y437",
        "segments": [
            { "from": "KAE", "to": "LESBU" },
            { "from": "LESBU", "to": "UGOVI" },
            { "from": "UGOVI", "to": "BUSKO" },
            { "from": "BUSKO", "to": "TENAS" },
            { "from": "TENAS", "to": "MALSO" },
            { "from": "MALSO", "to": "KANSU" }
        ]
    },
    {
        "name": "Y571",
        "segments": [
            { "from": "SOSDO", "to": "OMKIM" },
            { "from": "OMKIM", "to": "PAPLU" },
            { "from": "PAPLU", "to": "AKPON" },
            { "from": "AKPON", "to": "NISAV" },
            { "from": "NISAV", "to": "ANROD" },
            { "from": "ANROD", "to": "POVEM" },
            { "from": "POVEM", "to": "PSN" }
        ]
    },
    {
        "name": "Y572",
        "segments": [
            { "from": "PSN", "to": "OLMUD" },
            { "from": "OLMUD", "to": "ENGOT" },
            { "from": "ENGOT", "to": "POVOR" },
            { "from": "POVOR", "to": "UPGOS" },
            { "from": "UPGOS", "to": "BILUM" },
            { "from": "BILUM", "to": "BEPKO" },
            { "from": "BEPKO", "to": "CJU" },
            { "from": "CJU", "to": "OMKIM" },
            { "from": "OMKIM", "to": "TOSAN" },
            { "from": "TOSAN", "to": "RUGMA" }
        ]
    },
    {
        "name": "Y579",
        "segments": [
            { "from": "TENAS", "to": "AGSUS" },
            { "from": "AGSUS", "to": "DABIK" },
            { "from": "DABIK", "to": "BULGA" },
            { "from": "BULGA", "to": "BEDOM" },
            { "from": "BEDOM", "to": "PSN" }
        ]
    },
    {
        "name": "Y590",
        "segments": [
            { "from": "BEDAR", "to": "ELGEP" },
            { "from": "ELGEP", "to": "IKEDO" },
            { "from": "IKEDO", "to": "SADLI" }
        ]
    },
    {
        "name": "Y644",
        "segments": [
            { "from": "AGAVO", "to": "RILRO" },
            { "from": "RILRO", "to": "GONAV" },
            { "from": "GONAV", "to": "BODOL" },
            { "from": "BODOL", "to": "REBIT" },
            { "from": "REBIT", "to": "BELTU" },
            { "from": "BELTU", "to": "BOGAN" },
            { "from": "BOGAN", "to": "MONSI" },
            { "from": "MONSI", "to": "POLEG" },
            { "from": "POLEG", "to": "EGOBA" }
        ]
    },
    {
        "name": "Y655",
        "segments": [
            { "from": "GONAV", "to": "DALPO" },
            { "from": "DALPO", "to": "NONOS" },
            { "from": "NONOS", "to": "BIDRI" },
            { "from": "BIDRI", "to": "DANPA" },
            { "from": "DANPA", "to": "PALSA" },
            { "from": "PALSA", "to": "TOLIS" },
            { "from": "TOLIS", "to": "ENSUM" },
            { "from": "ENSUM", "to": "BONSO" },
            { "from": "BONSO", "to": "ATOTI" }
        ]
    },
    {
        "name": "Y657",
        "segments": [
            { "from": "KWA", "to": "IGDOK" },
            { "from": "IGDOK", "to": "TGU" }
        ]
    },
    {
        "name": "Y659",
        "segments": [
            { "from": "KUZ", "to": "ELPOS" },
            { "from": "ELPOS", "to": "RINBO" },
            { "from": "RINBO", "to": "MELES" },
            { "from": "MELES", "to": "OPEDA" },
            { "from": "OPEDA", "to": "TGU" },
            { "from": "TGU", "to": "LAPAL" },
            { "from": "LAPAL", "to": "KPO" }
        ]
    },
    {
        "name": "Y677",
        "segments": [
            { "from": "TOLIS", "to": "LIMDI" },
            { "from": "LIMDI", "to": "REMOS" },
            { "from": "REMOS", "to": "CJU" },
            { "from": "CJU", "to": "TAMNA" },
            { "from": "TAMNA", "to": "SAMDO" }
        ]
    },
    {
        "name": "Y685",
        "segments": [
            { "from": "SEL", "to": "KALMA" },
            { "from": "KALMA", "to": "KAKSO" },
            { "from": "KAKSO", "to": "GUKDO" },
            { "from": "GUKDO", "to": "ENSAL" },
            { "from": "ENSAL", "to": "BASEM" },
            { "from": "BASEM", "to": "BIGOB" },
            { "from": "BIGOB", "to": "CUN" },
            { "from": "CUN", "to": "ELAPI" },
            { "from": "ELAPI", "to": "KPO" },
            { "from": "KPO", "to": "BULGA" },
            { "from": "BULGA", "to": "SAPRA" }
        ]
    },
    {
        "name": "Y697",
        "segments": [
            { "from": "AGAVO", "to": "OLBIM" },
            { "from": "OLBIM", "to": "NOGON" },
            { "from": "NOGON", "to": "ANSIM" },
            { "from": "ANSIM", "to": "BINIL" },
            { "from": "BINIL", "to": "NOPIK" },
            { "from": "NOPIK", "to": "GOGET" },
            { "from": "GOGET", "to": "SEL" },
            { "from": "SEL", "to": "EGOBA" },
            { "from": "EGOBA", "to": "KARBU" },
            { "from": "KARBU", "to": "TORUS" },
            { "from": "TORUS", "to": "BIKSI" },
            { "from": "BIKSI", "to": "KAE" },
            { "from": "KAE", "to": "PILIT" },
            { "from": "PILIT", "to": "ESNEG" },
            { "from": "ESNEG", "to": "AGSUS" },
            { "from": "AGSUS", "to": "LANAT" }
        ]
    },
    {
        "name": "Y711",
        "segments": [
            { "from": "MONSI", "to": "BULTI" },
            { "from": "BULTI", "to": "MEKIL" },
            { "from": "MEKIL", "to": "GONAX" },
            { "from": "GONAX", "to": "BEDES" },
            { "from": "BEDES", "to": "ELPOS" },
            { "from": "ELPOS", "to": "MANGI" },
            { "from": "MANGI", "to": "DALSU" },
            { "from": "DALSU", "to": "NULDI" },
            { "from": "NULDI", "to": "DOTOL" },
            { "from": "DOTOL", "to": "SAMIS" },
            { "from": "SAMIS", "to": "REMOS" },
            { "from": "REMOS", "to": "PANSI" },
            { "from": "PANSI", "to": "DOMKO" },
            { "from": "DOMKO", "to": "PONIK" },
            { "from": "PONIK", "to": "IKEDO" },
            { "from": "IKEDO", "to": "KANKA" },
            { "from": "KANKA", "to": "BONSO" },
            { "from": "BONSO", "to": "MUGUS" }
        ]
    },
    {
        "name": "Y722",
        "segments": [
            { "from": "SOT", "to": "OLMEN" },
            { "from": "OLMEN", "to": "GUNKU" },
            { "from": "GUNKU", "to": "PEBRI" },
            { "from": "PEBRI", "to": "ATASO" },
            { "from": "ATASO", "to": "MAKSA" },
            { "from": "MAKSA", "to": "SAMUL" },
            { "from": "SAMUL", "to": "KAMIT" },
            { "from": "KAMIT", "to": "GUKSU" },
            { "from": "GUKSU", "to": "LOSNI" },
            { "from": "LOSNI", "to": "CJU" },
            { "from": "CJU", "to": "SOSDO" },
            { "from": "SOSDO", "to": "SAMLO" },
            { "from": "SAMLO", "to": "NIRAT" },
            { "from": "NIRAT", "to": "ELGEP" },
            { "from": "ELGEP", "to": "TESIM" },
            { "from": "TESIM", "to": "ATOTI" }
        ]
    },
    {
        "name": "Y744",
        "segments": [
            { "from": "PILIT", "to": "NOBUT" },
            { "from": "NOBUT", "to": "OSVOM" },
            { "from": "OSVOM", "to": "LOSTO" },
            { "from": "LOSTO", "to": "KPO" },
            { "from": "KPO", "to": "APARU" },
            { "from": "APARU", "to": "PSN" }
        ]
    },
    {
        "name": "Y781",
        "segments": [
            { "from": "TGU", "to": "MASTA" },
            { "from": "MASTA", "to": "ANKUS" },
            { "from": "ANKUS", "to": "OMOTU" },
            { "from": "OMOTU", "to": "BESNA" }
        ]
    },
    {
        "name": "Y782",
        "segments": [
            { "from": "SEL", "to": "POLEG" },
            { "from": "POLEG", "to": "SOT" },
            { "from": "SOT", "to": "OSPOT" },
            { "from": "OSPOT", "to": "VASLI" },
            { "from": "VASLI", "to": "MAKDU" },
            { "from": "MAKDU", "to": "BITUX" },
            { "from": "BITUX", "to": "TGU" },
            { "from": "TGU", "to": "KALOD" },
            { "from": "KALOD", "to": "PSN" },
            { "from": "PSN", "to": "APELA" }
        ]
    },
    {
        "name": "Z50",
        "segments": [
            { "from": "EGOBA", "to": "SOT" },
            { "from": "SOT", "to": "BULTI" }
        ]
    },
    {
        "name": "Z51",
        "segments": [
            { "from": "BOPTA", "to": "MOXID" },
            { "from": "MOXID", "to": "BEDES" }
        ]
    },
    {
        "name": "Z52",
        "segments": [
            { "from": "OLMEN", "to": "POSAN" },
            { "from": "POSAN", "to": "KAKSO" }
        ]
    },
    {
        "name": "Z53",
        "segments": [
            { "from": "BITUX", "to": "TEBEX" },
            { "from": "TEBEX", "to": "BASEM" }
        ]
    },
    {
        "name": "Z54",
        "segments": [
            { "from": "SOT", "to": "MONSI" },
            { "from": "MONSI", "to": "GOGET" }
        ]
    },
    {
        "name": "Z55",
        "segments": [
            { "from": "AGAVO", "to": "NONOS" }
        ]
    },
    {
        "name": "Z56",
        "segments": [
            { "from": "KANSU", "to": "PALDU" },
            { "from": "PALDU", "to": "SABET" },
            { "from": "SABET", "to": "IGRAS" }
        ]
    },
    {
        "name": "Z57",
        "segments": [
            { "from": "RILRO", "to": "DALPO" }
        ]
    },
    {
        "name": "Z63",
        "segments": [
            { "from": "PILIT", "to": "LESBU" }
        ]
    },
    {
        "name": "Z81",
        "segments": [
            { "from": "SAMIS", "to": "CJU" }
        ]
    },
    {
        "name": "Z82",
        "segments": [
            { "from": "CJU", "to": "PANSI" }
        ]
    },
    {
        "name": "Z83",
        "segments": [
            { "from": "TGU", "to": "MASTA" },
            { "from": "MASTA", "to": "SARAM" },
            { "from": "SARAM", "to": "ENGOT" },
            { "from": "ENGOT", "to": "ANROD" }
        ]
    },
    {
        "name": "Z84",
        "segments": [
            { "from": "PSN", "to": "KALEK" }
        ]
    },
    {
        "name": "Z85",
        "segments": [
            { "from": "BILUM", "to": "PAPLU" },
            { "from": "PAPLU", "to": "RUGMA" },
            { "from": "RUGMA", "to": "ATINA" }
        ]
    },
    {
        "name": "Z86",
        "segments": [
            { "from": "BONSO", "to": "ATOTI" }
        ]
    },
    {
        "name": "Z91",
        "segments": [
            { "from": "PSN", "to": "INVOK" }
        ]
    }
];
