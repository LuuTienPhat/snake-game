function Snake() {
    //create snake properties 
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    //draw snake 
    this.draw = function(){
        ctx.fillStyle = "#ffa372";

        for(let i = 0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    //update snake
    this.update = function() {
        for(let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }
        
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //check snake hit the wall
        this.snakeHitTheWall(); 
    }
    
    //change direction for snake
    this.changeDirection = function(direction) {
        switch(direction) {
            case 'UP':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case 'DOWN':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'RIGHT':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
            case 'LEFT':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;        
        }
    }

    //snake eat food
    this.eat = function(){
        if(this.x === food.x && this.y === food.y){
            //random food location after snake eat it
            food.randomLocation();
            // increase score
            this.total++;
        }
    }

    //check snake hit the wall
    this.snakeHitTheWall = function(){
        if(this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            //save to localStrorage
            saveToLocalStorage();
            //restart the game
            this.restart();
        };
    }

    //check snake hit itself
    this.checkCollision = function(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                 //save to localStrorage
                saveToLocalStorage();
                //restart the game
                this.restart();
            }
        }
    }

    //restart game when snake hit wall or itsefl
    this.restart = function(){
        //reset the snake
        this.x = width/2;
        this.y = height/2;
        this.total = 0;
        this.tail = [];
        //avoid snake turn follow direction
        direction = 'RIGHT';
        this.changeDirection('RIGHT');
        //random food
        food.randomLocation();
    }
}