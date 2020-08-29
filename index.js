const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");


//set up canvas height and width
// let height, width, rows, columns;

let scale = 20;

(function setupCanvas(){
    const screenWidth = window.innerWidth;
    if(window.innerWidth < 480 ) {
        scale = 15;

        canvas.height = 300;
        canvas.width = 300;
    }
    else if(screenWidth > 480 && screenWidth <= 650) {
        scale = 20;
        
        canvas.height = 400;
        canvas.width = 400;
    }

    else if(screenWidth > 650){
        scale = 20;
        
        canvas.height = 600;
        canvas.width = 600;
    }

})();

const height = canvas.height;
const width = canvas.width;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

console.log(window.innerWidth);


let snake;
let food;

(function setup(){
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
        ctx.clearRect(0, 0,canvas.width, canvas.height);

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

let direction = 'RIGHT';

//change snake direction
window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if(keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    }
    else if(keyCode === 38 && direction !== "DOWN") {
        direction = "UP"; 
    }
    else if(keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT"
    }
    else if(keyCode === 40 && direction !== "UP") {
        direction = "DOWN";    
    }

    snake.changeDirection(direction);
      
});