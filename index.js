const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const height = canvas.height;
const width = canvas.width;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var food;

(function setup(){
    snake = new Snake();
    food = new Food();
    snake.draw();
    food.randomLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        food.draw();
        snake.update();
        snake.draw();

        snake.eat();
    }, 250)
})();


window.addEventListener('keydown', (event) => {
    const direction = event.code.replace("Arrow",'');
    snake.changeDirection(direction);
})

