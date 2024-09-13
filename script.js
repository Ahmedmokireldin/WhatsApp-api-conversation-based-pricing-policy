const pricingData = {
    "Argentina": { "service": 0.04, "authentication": 0.04, "utility": 0.04, "marketing": 0.07 },
    "Brazil": { "service": 0.04, "authentication": 0.04, "utility": 0.01, "marketing": 0.08 },
    "Chile": { "service": 0.05, "authentication": 0.06, "utility": 0.02, "marketing": 0.10 },
    "Colombia": { "service": 0.01, "authentication": 0.01, "utility": 0.00, "marketing": 0.02 },
    "Egypt": { "service": 0.07, "authentication": 0.07, "utility": 0.01, "marketing": 0.12 },
    "France": { "service": 0.10, "authentication": 0.08, "utility": 0.03, "marketing": 0.16 },
    "Germany": { "service": 0.09, "authentication": 0.09, "utility": 0.06, "marketing": 0.16 },
    "India": { "service": 0.01, "authentication": 0.00, "utility": 0.00, "marketing": 0.01 },
    "Indonesia": { "service": 0.02, "authentication": 0.03, "utility": 0.02, "marketing": 0.05 },
    "Israel": { "service": 0.02, "authentication": 0.02, "utility": 0.01, "marketing": 0.04 },
    "Italy": { "service": 0.04, "authentication": 0.04, "utility": 0.03, "marketing": 0.08 },
    "Malaysia": { "service": 0.03, "authentication": 0.02, "utility": 0.02, "marketing": 0.10 },
    "Mexico": { "service": 0.01, "authentication": 0.03, "utility": 0.01, "marketing": 0.05 },
    "Netherlands": { "service": 0.10, "authentication": 0.08, "utility": 0.06, "marketing": 0.18 },
    "Nigeria": { "service": 0.04, "authentication": 0.03, "utility": 0.01, "marketing": 0.06 },
    "Pakistan": { "service": 0.02, "authentication": 0.03, "utility": 0.01, "marketing": 0.05 },
    "Peru": { "service": 0.02, "authentication": 0.04, "utility": 0.02, "marketing": 0.08 },
    "Saudi Arabia": { "service": 0.02, "authentication": 0.03, "utility": 0.01, "marketing": 0.05 },
    "South Africa": { "service": 0.02, "authentication": 0.02, "utility": 0.01, "marketing": 0.04 },
    "Spain": { "service": 0.04, "authentication": 0.04, "utility": 0.02, "marketing": 0.07 },
    "Turkey": { "service": 0.01, "authentication": 0.01, "utility": 0.01, "marketing": 0.01 },
    "United Arab Emirates": { "service": 0.02, "authentication": 0.02, "utility": 0.02, "marketing": 0.04 },
    "United Kingdom": { "service": 0.04, "authentication": 0.04, "utility": 0.03, "marketing": 0.08 },
    "Canada": { "service": 0.01, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "United States": { "service": 0.01, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    // Rest of Africa
    "Algeria": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Angola": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Benin": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Botswana": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Burkina Faso": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Burundi": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Cameroon": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Chad": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Republic of the Congo": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Democratic Republic of the Congo": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Eritrea": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Ethiopia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Gabon": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Gambia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Ghana": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Guinea-Bissau": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Ivory Coast": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Kenya": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Lesotho": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Liberia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Libya": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Madagascar": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Malawi": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Mali": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Mauritania": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Morocco": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Mozambique": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Namibia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Niger": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Rwanda": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Senegal": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Sierra Leone": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Somalia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "South Sudan": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Sudan": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Swaziland": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Tanzania": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Togo": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Tunisia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Uganda": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Zambia": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    "Zimbabwe": { "service": 0.04, "authentication": 0.02, "utility": 0.01, "marketing": 0.03 },
    // Rest of the world
    "Other": { "service": 0.02, "authentication": 0.04, "utility": 0.01, "marketing": 0.07 }
};

function populateCountries() {
    const countrySelect = document.getElementById('country');
    for (let country in pricingData) {
        let option = document.createElement('option');
        option.value = country;
        let countryCode = getCountryCode(country);
        option.innerHTML = `<span class="fi fi-${countryCode}"></span> ${country}`;
        option.className = 'country-option';
        countrySelect.appendChild(option);
    }
}

function getCountryCode(countryName) {
    const countryCodes = {
        "Argentina": "ar", "Brazil": "br", "Chile": "cl", "Colombia": "co", "Egypt": "eg",
        "France": "fr", "Germany": "de", "India": "in", "Indonesia": "id", "Israel": "il",
        "Italy": "it", "Malaysia": "my", "Mexico": "mx", "Netherlands": "nl", "Nigeria": "ng",
        "Pakistan": "pk", "Peru": "pe", "Saudi Arabia": "sa", "South Africa": "za", "Spain": "es",
        "Turkey": "tr", "United Arab Emirates": "ae", "United Kingdom": "gb", "Canada": "ca",
        "United States": "us", "Algeria": "dz", "Angola": "ao", "Benin": "bj", "Botswana": "bw",
        "Burkina Faso": "bf", "Burundi": "bi", "Cameroon": "cm", "Chad": "td", 
        "Republic of the Congo": "cg", "Democratic Republic of the Congo": "cd", "Eritrea": "er",
        "Ethiopia": "et", "Gabon": "ga", "Gambia": "gm", "Ghana": "gh", "Guinea-Bissau": "gw",
        "Ivory Coast": "ci", "Kenya": "ke", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly",
        "Madagascar": "mg", "Malawi": "mw", "Mali": "ml", "Mauritania": "mr", "Morocco": "ma",
        "Mozambique": "mz", "Namibia": "na", "Niger": "ne", "Rwanda": "rw", "Senegal": "sn",
        "Sierra Leone": "sl", "Somalia": "so", "South Sudan": "ss", "Sudan": "sd", "Swaziland": "sz",
        "Tanzania": "tz", "Togo": "tg", "Tunisia": "tn", "Uganda": "ug", "Zambia": "zm",
        "Zimbabwe": "zw"
    };
    return countryCodes[countryName] || "un"; // "un" for unknown
}

function updatePrice() {
    const country = document.getElementById('country').value;
    const messageType = document.getElementById('messageType').value;
    const pricePerMessage = pricingData[country][messageType];
    document.getElementById('pricePerMessage').textContent = `$${pricePerMessage.toFixed(2)}`;
    calculatePrice();
}

function calculatePrice() {
    const country = document.getElementById('country').value;
    const messageType = document.getElementById('messageType').value;
    const messageCount = parseInt(document.getElementById('messageCount').value);

    if (pricingData[country] && pricingData[country][messageType]) {
        const pricePerMessage = pricingData[country][messageType];
        const totalCost = pricePerMessage * messageCount;

        document.getElementById('pricingResults').innerHTML = `
            <h3>${getTranslation('pricingResults')}</h3>
            <p>${getTranslation('country')}: ${country}</p>
            <p>${getTranslation('messageType')}: ${getTranslation(messageType + 'Conversation')}</p>
            <p>${getTranslation('numberOfMessages')}: ${messageCount}</p>
            <p>${getTranslation('pricePerMessage')}: $${pricePerMessage.toFixed(2)}</p>
            <p>${getTranslation('totalCost')}: $${totalCost.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('pricingResults').innerHTML = `<p>${getTranslation('pricingNotAvailable')}</p>`;
    }
}

function updateVisitorStats() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            let countryVisits = JSON.parse(localStorage.getItem('countryVisits')) || {};
            let country = data.country_name;
            let countryCode = data.country_code.toLowerCase();
            countryVisits[country] = {
                visits: (countryVisits[country]?.visits || 0) + 1,
                code: countryCode
            };
            localStorage.setItem('countryVisits', JSON.stringify(countryVisits));
            updateTopCountries();
        })
        .catch(error => console.error('Error fetching country data:', error));
}

function updateTopCountries() {
    let count