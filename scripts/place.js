// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LAST MODIFIED DATE
document.getElementById("modified").textContent = document.lastModified;


// ---------------- WIND CHILL ----------------

// Static values (match your HTML content)
const temp = parseFloat(document.getElementById("temp").textContent);     // °C
const speed = parseFloat(document.getElementById("speed").textContent);   // km/h

/**
 * Wind chill formula for Celsius + km/h
 * Returns wind chill temperature
 */
function calculateWindChill(t = 30, s = 12) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const winchill = Number(calculateWindChill().toFixed(2));

const winspace = document.getElementById('windchill');
winspace.textContent = `${winchill}°C`