//declare snake and food
let snake;
let food;

//setup the game
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
