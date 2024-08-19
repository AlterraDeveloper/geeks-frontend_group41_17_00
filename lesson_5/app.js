let $counter = document.querySelector("#counter");
let $decreaseButton = document.getElementById("decrease");
let $resetButton = document.getElementById("reset");
let $increaseButton = document.getElementById("increase");

let counterValue = 0;

function updateCounter() {
    if (counterValue > 0) {
        // $counter.style.color = "lightgreen";
        $counter.classList.add("success");
    } else if (counterValue < 0) {
        $counter.style.color = "red";
    } else {
        $counter.style.color = "cyan";
    }
    $counter.innerText = counterValue;
}

updateCounter();

$decreaseButton.addEventListener("click", function (){
    counterValue--;
    updateCounter();
});

$resetButton.addEventListener("click", function (){
    counterValue = 0;
    updateCounter();
});

$increaseButton.addEventListener("click", function (){
    counterValue++;
    updateCounter();
})