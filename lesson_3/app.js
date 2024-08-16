// alert
let clientSum = prompt("Enter sum:")
let clientFuelType = prompt("Enter fuel type(92, 95, gas):");

console.log(clientSum, clientFuelType);

let fuelPrice;

// > < >= <= == != === !==

switch (clientFuelType) {
    case "92": // ===
        fuelPrice = 65;
        break;
    case "95":
        fuelPrice = 75;
        break;
    case "gas":
        fuelPrice = 30;
        break;
    default:
        console.error("Invalid fuel type");
        fuelPrice = null;
}

// Falsy: false, 0, NaN, null, undefined, ""

if (clientSum && fuelPrice) {
    console.log(clientSum / fuelPrice + " litres");
} else {
    console.warn("Invalid data");
}

// Infinity NaN

// Array - массив

let months = ["jan", "feb", "mar", "apr", "may", "jun"];
//                     0       1      2      3
console.log("First month in year is " + months[1]);

// Loops - циклы
// 1. for..of
// 2. for
// 3. for..in
// 4. while
// 5. do..while

console.log("Month count:" + months.length)

for (let month of months) {
    let season;
    switch (month) {
        case "jan":
        case "feb":
            season = "winter❄️";
            break;
        case "mar":
        case "apr":
        case "may":
            season = "spring";
            break;
        case "jun":
        case "jul":
        case "aug":
            season = "summer";
            break;
    }
    console.log(month + " is " + season);
}

let homeworksPoints = [10, 9, 8, 9, 5, 8, 10, 4];
let totalPoints = 0;
for (let points of homeworksPoints) {
    totalPoints += points;
}
console.log("Total:", totalPoints);

for (let i = 0; i < homeworksPoints.length; i++) {
    console.log("Lesson " + (i + 1) + " you get "
        + homeworksPoints[i] + " points");
}

for (let olympicYear = 2024; olympicYear < 2100; olympicYear += 4) {
    console.log("Olympic year", olympicYear);
}







