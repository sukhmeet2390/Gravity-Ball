$(document).ready(function() {
    var canvas = $('#canvas')[0];// document.querySelector('canvas')
        context = canvas.getContext('2d');
        W = canvas.width = window.innerWidth,
        H = canvas.height = window.innerHeight;

    var vx = 0,
        vy = (Math.random() * -10) - 5,
        ball = new Ball(canvas),
        gravity = 0.5;
        bounceFactor = .5;

   setInterval(renderFrame, 1000/60); 

    function renderFrame() {
        context.clearRect(0, 0, W, H);
        vy += gravity;
        ball.x += vx;
        ball.y += vy;
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0 || ball.y + ball.radius > canvas.height ||ball.y - ball.radius  < 0) {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - ball.radius;
            vx = 0;
            vy = (Math.random() * -15) - 5;
            vy *= bounceFactor;
        }
        ball.draw(context);
    };
});