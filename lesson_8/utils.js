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

function checkBeeline(code){
    let codes = ["771", "772"];
    return codes.includes(code);
}

function detectOperator(phoneNumber){
    let formattedPhoneNumber = format(phoneNumber);

    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if(checkNurtelecom(operatorCode))
        return "O!";

    if(checkMega(operatorCode))
        return "MEGA";

    if(checkBeeline(operatorCode))
        return "BEELINE";

    return "ERROR";
}
