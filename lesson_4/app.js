console.log("bla bla bla");

// Functions - функции

// function declaration
// default parameters
function applyDiscount(price, discount = 0){
    let priceWithDiscount =
        price * (100 - discount) / 100;
    return priceWithDiscount;
}

//function expression
let applyPromocode = function(price, promocode){

    switch (promocode){
        case "SUMMER_2024":
            return applyDiscount(price, 20);
        case "10_YEARS_2024":
            return applyDiscount(price, 25);
        default:
            return price;
    }
}

let laptopPrice = 100_000;
let blackFridayLaptopPrice =
    applyDiscount(laptopPrice, 40);

console.log("Original: ", laptopPrice,
    "Black friday:", blackFridayLaptopPrice);


let summerPrice =
    applyPromocode(laptopPrice, "SUMMER_2024");
console.log(summerPrice, " with promocode ", "SUMMER_2024");

let newYearPrice =
    applyPromocode(laptopPrice, "NEW_YEAR_2025");
console.log(newYearPrice, " with promocode ", "NEW_YEAR_2025");

let test = applyDiscount(1000);
console.log("TEST", test);


// 555112233
// +996500112233
// (996) 555 11-22-33

// 996555112233

function format(phoneNumber){
    let phoneDigits = "";
    for(let char of phoneNumber){
        let charNumber = Number(char);
        if(!isNaN(charNumber) && char !== " ")
            phoneDigits += char;
    }

    if(phoneDigits.startsWith("0")){
        phoneDigits = phoneDigits.slice(1);
    }

    if(phoneDigits.length !== 12){
        phoneDigits = "996" + phoneDigits;
    }

    return phoneDigits;
}

function getOperatorCode(phoneNumber){
    return phoneNumber.slice(3,6);
}

function checkNurtelecom(code){
    let codes = ["501", "502", "701", "702"];
    return codes.includes(code);
}

function checkMega(code){
    let codes = ["551", "552"];
    return codes.includes(code);
}

function detectOperator(phoneNumber){
    let formattedPhoneNumber = format(phoneNumber);

    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if(checkNurtelecom(operatorCode))
        return "O!";

    if(checkMega(operatorCode))
        return "MEGA";

    return "ERROR";
}



