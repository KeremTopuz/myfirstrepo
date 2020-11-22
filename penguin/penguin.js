const penguin = document.querySelector(".penguin")

let number = 0

function movePenguin() {
    number += Math.floor(Math.random() * 100);
    console.log(number);
    if (number % 2 === 0) {
        penguin.style.left = number + "px";
    } else penguin.style.top = number + "px";
}

penguin.addEventListener("mouseover", movePenguin)