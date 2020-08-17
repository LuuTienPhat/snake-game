function Food(){
    this.x;
    this.y;

    this.draw = function(){
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.randomLocation = function(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale
    }
}