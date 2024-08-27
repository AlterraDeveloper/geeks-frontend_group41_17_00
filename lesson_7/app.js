let $container = document.querySelector(".container");

let CELLS_COUNT = 288;

$container.innerHTML = "";
for (let i = 0; i < CELLS_COUNT; i++) {
    let cell = document.createElement("div"); // <div></div>
    cell.className = "cell";
    $container.append(cell);
}

let $cells = $container.querySelectorAll(".cell");

for (let $cell of $cells) {
    $cell.addEventListener("mouseenter", function (event) {
        const colors = ["red", "green", "blue", "yellow", "purple"];
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomColorIndex];
        event.target.style.backgroundColor = randomColor;
        event.target.style.boxShadow = `0 0 2px 2px ${colors[randomColorIndex]}`;
    });
    $cell.addEventListener("mouseleave",
        function (event) {
            event.target.style.backgroundColor = "#777";
            event.target.style.boxShadow = "none";
        })
}