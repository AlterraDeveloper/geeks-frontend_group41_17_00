// window.addEventListener('DOMContentLoaded', () => {
//
// })


let $container = document.querySelector('.container');
let $flashlight = document.querySelector('.flashlight');

$container.addEventListener("mouseover", function (event) {
    $flashlight.style.display = "block";
    $flashlight.style.top = `${event.offsetY}px`;
    $flashlight.style.left = `${event.offsetX}px`;
});

$container.addEventListener("mouseleave", function () {
    $flashlight.style.display = "none";
});

let flashlightRadius = 50; // in pixels

window.addEventListener("wheel", function (event) {
    event.preventDefault();
    console.log(event);

    if (event.deltaY < 0) { //maximize
        flashlightRadius = Math.min(100, flashlightRadius + 10);
    } else { // minimize
        flashlightRadius = Math.max(50, flashlightRadius - 10);
    }

    $flashlight.style.boxShadow = `0 0 20px ${flashlightRadius}px rgba(255, 255, 255)`;
})

// event bubbling (propagation)