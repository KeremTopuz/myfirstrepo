const robot = document.querySelector(".robot")

let number = 0

function moveRobot() {
    number += Math.floor(Math.random() * 10)
    console.log(number)
    if (number % 2 === 0) {
        robot.style.left = number + "px";
    } else robot.style.top = number + "px"
}

robot.addEventListener("mouseover", moveRobot)