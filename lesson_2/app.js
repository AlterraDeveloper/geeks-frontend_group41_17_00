// Data types - типы данных

// JSDoc
/*
string
number
boolean
undefined
null
object
 */
// ASCII

let моеИмя = "Evgeniy";
let mySurname; // undefined


let iLoveJavaScript = true; //camel case

console.log(mySurname);
console.log(iLoveJavaScript);
console.log(моеИмя)

let sum5and6 = 11;
sum5and6;

// key - value
let passport = {
    series: "ID",
    num: "123456",
    inn: "0123456789",
    isExpired: true,
    expiredDays: 155
};

let vehicle = {
    ownerName: "Ivanov Ivan",
    govNum: "01KG123ABC",
    engineVolume: 2.0,
    onTheft: false,
};


// Conditions - условия

let userEmail = null; // "terminator3000@outlook.com";
let userName = "Almaz";

let message = "🎉🎉🎉 Happy birthday, " + userName + "! 🎉🎉🎉";
//template string
let message2 = `🎉🎉🎉 Happy birthday, ${userName}! 🎉🎉🎉`;

console.log(message)
console.log(message2)

// == === != !== > < >= <=

if (userEmail !== null) {
    let emailMessage = {
        to: userEmail,
        from: "geeks@gmail.com",
        body: message2
    }
    console.log("Send email for user", emailMessage);
} else {
    console.warn("User email is empty");
}


let vehicleNumbers = "3275";

// && || !

// refactoring

// DRY - Don't repeat yourself

if (vehicleNumbers.endsWith("1") || vehicleNumbers.endsWith("2")) {
    console.error("STOP ON MONDAY");
} else if (vehicleNumbers.endsWith("3") || vehicleNumbers.endsWith("4")) {
    console.error("STOP ON TUESDAY");
} else if (vehicleNumbers.endsWith("5") || vehicleNumbers.endsWith("6")) {
    console.error("STOP ON WEDNESDAY");
}

let fuelLitres = 50;
let cardStatus = "GOLD";

let points = 0;

// if (cardStatus === "SILVER") {
//     points = fuelLitres * 0.5;
// } else if (cardStatus === "GOLD") {
//     points = fuelLitres * 0.75;
// } else if (cardStatus === "PLATINUM") {
//     points = fuelLitres;
// }

switch (cardStatus) {
    case "SILVER":
        points = fuelLitres * 0.5;
        break;
    case "GOLD":
        points = fuelLitres * 0.75;
        break;
    case "PLATINUM":
        points = fuelLitres;
        break;
}

console.log(`${fuelLitres} L => ${points} KGS`);










