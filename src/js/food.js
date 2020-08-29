function Food(){
    this.x;
    this.y;

    //draw food
    this.draw = function(){
        ctx.fillStyle = "#ed6663";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    //pick random location for food
    this.randomLocation = function(){
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale
    }
}