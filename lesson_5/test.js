

// DOM - Document Object Model

let $button = document.querySelector("#btn");
// let $button = document.querySelector(".my-btn");
// let $button = document.querySelector("button");

$button.innerText = "Tap here";
$button.style.height = "100px";
$button.style.width = "300px";
$button.style.fontSize = "4rem";
$button.style.backgroundColor = "blue";
$button.style.color = "white";
$button.style.margin = "50px";

// $button.remove();

function changeBackground(){
    let colors = ["red", "green", "blue", "yellow", "purple", "cyan"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randomIndex];
    document.body.style.backgroundColor = color;
}

$button.addEventListener("click", changeBackground);

