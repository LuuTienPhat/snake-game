//these functions use for control device has touchscreen
const arrows = document.querySelector(".arrows")
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

//if device has touchscreen arrows will show up
if (detection()) {
    arrows.style.display= "flex";
}

//declare direction
let direction;

//add event for arrow buttons
up.addEventListener("click", function () {
    if (direction != 'DOWN') {
        direction = 'UP';
    }
    snake.changeDirection(direction);
});

down.addEventListener("click", function () {
    if (direction != 'UP') {
        direction = 'DOWN';
    }
    snake.changeDirection(direction);
});

left.addEventListener("click", function () {
    if (direction != 'RIGHT') {
        direction = 'LEFT';
    }
    snake.changeDirection(direction);
});

right.addEventListener("click", function () {
    if (direction != 'LEFT') {
        direction = 'RIGHT';
    }
    snake.changeDirection(direction);
});

//change snake direction using keyboard
window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (keyCode === 38 && direction !== "DOWN") {
        direction = "UP";
    } else if (keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT"
    } else if (keyCode === 40 && direction !== "UP") {
        direction = "DOWN";
    }

    snake.changeDirection(direction);

});