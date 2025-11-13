const inputEl   = document.getElementById("input");
const fromEl    = document.getElementById("option");
const toEl      = document.getElementById("options2");
const resultEl  = document.getElementById("final-temperature");
// ----
function normalizeUnit(unit) {
    unit = unit.toLowerCase();
    if (unit === "farenheit") return "fahrenheit";
    return unit;
}
// ----
function convertTemperature(value, from, to) {
    from = normalizeUnit(from);
    to   = normalizeUnit(to);

    if (isNaN(value)) return null;
    if (from === to) return value;

  //Convert FROM --- Celsius
    let celsius;
    switch (from) {
    case "celsius":
    celsius = value;
    break;
    case "kelvin":
    celsius = value - 273.15;
    break;
    case "fahrenheit":
      celsius = (value - 32) * 5 / 9;
    break;
    default:
    return null;
    }

  //Convert Celsius --- TO
    let result;
    switch (to) {
    case "celsius":
    result = celsius;
    break;
    case "kelvin":
    result = celsius + 273.15;
    break;
    case "fahrenheit":
      result = celsius * 9 / 5 + 32;
    break;
    default:
    return null;
    }

    return result;
}

function updateResult() {
    const value = parseFloat(inputEl.value);
    const from  = fromEl.value;
    const to    = toEl.value;

    const converted = convertTemperature(value, from, to);

    if (converted === null) {
    resultEl.textContent = "--";
    return;
    }
// The symbols to show
    const unitSymbol =
    normalizeUnit(to) === "celsius"    ? "°C" :
    normalizeUnit(to) === "kelvin"     ? "K"  :
    normalizeUnit(to) === "fahrenheit" ? "°F" : "";

    resultEl.textContent = `${converted.toFixed(2)} ${unitSymbol}`;
}

// Recalculate whenever something changes
inputEl.addEventListener("input", updateResult);
fromEl.addEventListener("change", updateResult);
toEl.addEventListener("change", updateResult);

updateResult();
//Now we are gonna setup the custom cursor 8)

const cursor = document.querySelector('.the-cursor');

    document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    });
    document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    });

