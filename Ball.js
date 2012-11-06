function Ball(canvas,context) {
    this.radius = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.radius - 20;

    this.draw = function (context) {
        context.fillStyle = 'black';
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        context.closePath();
        context.fill();
    }
}
