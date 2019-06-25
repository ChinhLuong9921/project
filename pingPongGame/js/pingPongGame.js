/*

context.fillStyle = 'black';
context.fillRect(100, 200, 50, 75);

context.fillStyle = 'red';
context.beginPath();
context.arc(300, 350, 100, 0, Math.PI*2, false);
context.closePath();


*/

const cvs = document.getElementById('pong');
const ctx = cvs.getContext('2d');

// function_____________________________________________________________________
// draw rect function 
const drawRect = (x, y, w, h, color) => {
    //'use strict';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

//drawRect(0, 0, 600, 400, 'black');

// draw circle
const drawCircle = (x, y, r, color) => {
    //'use strict';
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
};

// draw text
const drawText = (text, x, y, color) => {
    //'use strict';
    ctx.fillStyle = color;
    ctx.font = '45px fantasy';
    ctx.fillText(text, x, y);
};
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
const drawNet = () => {
    //'use strict';
    for (let i = 0; i <= cvs.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
};
const game = () => {
    //'use strict';
    update();
    render();
};
const resetBall = () => {
    ball.x = cvs.width/2;
    ball.y = cvs.height/2;
    ball.speed = 5; 
    ball.velocityX = - ball.velocityX;
}
const update = () => {
    //'use strict';
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height/2)) * computerLevel;

    if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
        ball.velocityY = - ball.velocityY;
    }
    
    let player = (ball.x < cvs.width/2) ? user : com;

    if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height/2);
        collidePoint = collidePoint / (player.height/2);

        let angleRad = collidePoint * Math.PI/4;
        let direction = (ball.x < cvs.width/2) ? 1 : -1;

        ball.velocityX = ball.speed * Math.cos(angleRad) * direction;
        ball.velocityY = ball.speed * Math.sin(angleRad);

        ball.speed += 0.3;
    }
    if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
    } else if (ball.x + ball.radius > cvs.width) {
        user.score++;
        resetBall();
    }
};
const collision = (b, p) => {
    //'use strict';
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    
    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
};
const movePaddle = (evt) => {
    //'use strict';
    let rect = cvs.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2;
    // rect.top vì khi scroll chuột xuống dưới sẽ khiến định vị của tấm chắn bị thay đổi ko theo ý mình
    // user.height/2 là đưa con trỏ xuống giữa thanh chắn (trc đó nó nằm ở đầu thanh chắn)
}

// object_________________________________________________________

const user = {
    x: 0,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: 'white',
    score: 0
};
const com = {
    x: cvs.width - 10,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: 'white',
    score: 0
};
const ball = {
    x: cvs.width/2,
    y: cvs.height/2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'white'
};
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