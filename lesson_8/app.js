const $form = document.querySelector('#form');
const $phoneNumberInput =
    document.querySelector('#phoneNumber');
const $amountInput = document.querySelector('#amount');
const $feeInput = document.querySelector('#fee');
const $payBtn = $form.querySelector('input[type=submit]');

$form.addEventListener("submit", function (event) {
    event.preventDefault();

    const $formControls = $form.querySelectorAll(".form-control");
    for (const $formControl of $formControls) {
        $formControl.classList.remove("error");
        $formControl.classList.remove("success");
    }

    const phoneNumber = $phoneNumberInput.value;
    if (!phoneNumber) {
        setError($phoneNumberInput, "Введите номер телефона");
    } else if (phoneNumber.length !== 12) {
        setError($phoneNumberInput, "Проверьте номер телефона");
    } else {
        setSuccess($phoneNumberInput);
    }

    const amount = $amountInput.value;
    if (amount <= 0) {
        setError($amountInput, "Укажите сумму")
    } else if (amount > 0 && amount < 10) {
        setError($amountInput, "Минимальная сумма 10 сом")
    } else if (amount > 10_000) {
        setError($amountInput, "Максимальная сумма 10 000 сом")
    } else {
        setSuccess($amountInput)
    }

});

$phoneNumberInput.addEventListener("change", function () {
    const phoneNumber = $phoneNumberInput.value;
    $phoneNumberInput.value = format(phoneNumber);
});

$phoneNumberInput.addEventListener("input", function () {
    const phoneNumber = $phoneNumberInput.value;
    const operator = detectOperator(phoneNumber);
    let operatorImg;
    switch (operator) {
        case "O!":
            operatorImg = "images/o.jpg";
            break;
        case "MEGA":
            operatorImg = "images/mega.jpg";
            break;
        case "BEELINE":
            operatorImg = "images/beeline.jpg";
            break;
    }

    if (operatorImg) {
        document.body.style.backgroundImage = `url(${operatorImg})`;
        document.body.style.backgroundSize = "200px";
    } else {
        document.body.style.backgroundImage = `none`;
    }
});

$amountInput.addEventListener("input", function () {
    const amount = $amountInput.value;

    if (amount >= 10 && amount < 1000) {
        $feeInput.value = 5;
    } else if (amount >= 1000) {
        $feeInput.value = 10;
    } else {
        $feeInput.value = 0;
    }
})

function setError(inputElement, errorText) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add('error');
    $formControl.querySelector("small").textContent = errorText;
}

function setSuccess(inputElement) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add('success');
}
