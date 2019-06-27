// canvas
const cvs = document.getElementById('pong');
const ctx = cvs.getContext('2d');

// function____________________________________
// draw rect function 
const drawRect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

// draw circle
const drawCircle = (x, y, r, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};

// draw text 
const drawText = (text, x, y, color) => {
    ctx.fillStyle = 'color';
    ctx.font = '45px fantasy';
    ctx.fillText(text, x, y);
};

// draw net 
const drawNet = () => {
    for (let i = 0; i <= cvs.height; i+=15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
};

// render the canvas: canvas, ball, net, score, paddle
const render = () => {
    //'use strict';
    drawRect(0, 0, cvs.width, cvs.height, 'black');
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    drawNet();
    drawText(user.score, cvs.width/4, cvs.height/5, 'white');
    drawText(com.score, 3*cvs.width/4, cvs.height/5, 'white');
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
};

// setup game
const game = () => {
    update();
    render();
};

// reset the ball after reloading
const resetBall = () => {
    ball.x = cvs.width/2;
    ball.y = cvs. height/2;
    ball.speed = 5;
    ball.velocityX = - ball.velocityX;
};

// update
const update = () => {
    // update the ball.x
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // computerLevel
    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height/2)) * computerLevel;

    // collisions above and below
    if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
        ball.velocityY = - ball.velocityY;
    }

    // player 
    let player = (ball.x < cvs.width/2) ? user : com;

    // calculate the direction and speed of reflection after each collision 
    if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height/2);
        collidePoint = collidePoint / (player.height/2);

        let angleRad = collidePoint * Math.PI/4;
        let direction = (ball.x < cvs.width/2) ? 1 : -1;

        ball.velocityX = ball.speed * Math.cos(angleRad) * direction;
        ball.velocityY = ball.speed * Math.sin(angleRad);

        ball.speed += 0.3;
    }

    // calculate points for each party
    if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
    } else if (ball.x + ball.radius > cvs.width) {
        user.score++;
        resetBall();
    }
};

// calculate the collision
const collision = (b, p) => {
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.left < p.right && b.top < p.bottom && b.bottom > p.top;
};

// locate the cursor
const movePaddle = evt => {
    let rect = cvs.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2;
};

// object_________________________________________________
// user
const user = {
    x: 0,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: 'white',
    score: 0
};

// com
const com = {
    x: cvs.width - 10,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: 'white',
    score: 0
};

// ball
const ball = {
    x: cvs.width/2,
    y: cvs.height/2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'white'
};

// net
const net = {
    x: cvs.width/2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: 'white'
};

// game init
cvs.addEventListener('mousemove', movePaddle);
const framePerSecond = 50;
setInterval(game, 1000/framePerSecond);