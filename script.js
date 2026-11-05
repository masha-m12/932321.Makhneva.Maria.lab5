'use strict';

const name = prompt("Как вас зовут?", "Ценитель искусства");
const temperatures = [22, 10, 25, 8, 31, 17, 30];

console.log("Имя:", name);
console.log("Температуры:", temperatures);

function findHottestDay(temps) {
    let maxTemp = temps[0]; 
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > maxTemp) {
            maxTemp = temps[i];
        }
    }
    return maxTemp; 
}

function filterWarmDays(temps) {
    let warmDays = [];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > 20) {
            warmDays.push(temps[i]);
        }
    }
    return warmDays;
}

function calculateAverageTemp(temps) {
    let sum = 0;
    for (let i = 0; i < temps.length; i++) {
        sum += temps[i];
    }
    let averageTemp = sum / temps.length;
    return averageTemp;
}

let coldCount = 0;
let coldSum = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] <= 10) {
        coldCount++;
        coldSum += temperatures[i];
    }
}

let coldAverageTemp = 0;
if (coldCount > 0) {
    coldAverageTemp = coldSum / coldCount;
}

console.log("Количество холодных дней (≤ 10 °C):", coldCount);
console.log("Средняя температура в холодные дни:", coldAverageTemp.toFixed(1), "°C");

const maximumTemperature = findHottestDay(temperatures);
const countWarmDays = filterWarmDays(temperatures);
const averageTemperature = calculateAverageTemp(temperatures);

console.log("Максимальная температура:", maximumTemperature, "°C");
console.log("Тёплые дни (> 20 °C):", countWarmDays);
console.log("Средняя температура по всем дням:", averageTemperature.toFixed(1), "°C");

alert(
    "Здравствуй, " + name + "!\n" +  "Средняя температура за период – " + averageTemperature.toFixed(1) + " °С, " + "было " + countWarmDays.length + " тёплых дней."
);

if (maximumTemperature >= 30) {
    console.log("Рекомендуется предусмотреть навесы и воду для гостей.");
}