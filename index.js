const arrows = document.querySelector(".arrows")
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) { 
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0; 
} else {
    let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        let UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}
if (hasTouchScreen)
    arrows.style.display="unset";

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


let snake;
let food;

(function setup() {
    //create snake and food
    snake = new Snake();
    food = new Food();

    //draw snake
    snake.draw();

    //random food
    food.randomLocation();

    //load best score from localStrorage
    loadFromLocalStorage();

    //loop after 150 millisecond
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //draw food;
        food.draw();
        //update snake
        snake.update();
        snake.draw();
        //snake eat
        snake.eat();

        //update score after snake eat
        showYourScore();
        whenScoreBiggerThanBest();

        //check if snake hit iself
        snake.checkCollision();
    }, 150)
})();



//change snake direction
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