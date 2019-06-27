const cvs = document.getElementById('snake');
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

//load images
const ground = new Image();
ground.src = 'img/ground.png';
const foodImg = new Image();
foodImg.src = 'img/food.png';

// load audio files
let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = 'audio/dead.mp3';
eat.src = 'audio/eat.mp3';
up.src = 'audio/up.mp3';
right.src = 'audio/right.mp3';
left.src = 'audio/left.mp3';
down.src = 'audio/down.mp3';

// create the snake
let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
};

// create the food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
};

// create the score 
let score = 0;
let speed;

// control the snake
let d;

const direction = event => {
    let key = event.keyCode;
    if (key == 37 && d != 'right') {
        d = 'left';
        left.play();
        // play audio
    }else if (key == 38 && d != 'down') {
        d = 'up';
        up.play();
    }else if (key == 39 && d != 'left') {
        d = 'right';
        right.play();
    }else if (key == 40 && d != 'up') {
        d = 'down';
        down.play();
    }
}

// addEventListener bắt buộc function phải được khai báo trước đó
document.addEventListener('keydown', direction);

// check collision function 
const collision = (head, array) => {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) return true;
    }
    return false;
};

// draw everything to the canvas
const draw = () => {
    ctx.drawImage(ground, 0, 0);
    
    for ( let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        
        // draw the border of box
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    // sau mỗi 100ms update con rắn sẽ từ tiến thêm 1 box nữa
    if (d == "left") snakeX -= box;
    if (d == "up") snakeY -= box;
    if (d == "right") snakeX += box;
    if (d == "down") snakeY += box;
    
    // if the snake eats the food
    if (snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random() * 17 + 1) * box,
            y : Math.floor(Math.random() * 15 + 3) * box
        };
    }else {
        // remove the tail
        snake.pop();
    }

    // add new Head
    let newHead = {
        x : snakeX,
        y : snakeY
    };
    
    // game over
    if (snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
        clearInterval(game);
        dead.play();
    }
    
    
    snake.unshift(newHead);
    
    // draw the score
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
};


//const speed = 100;
/*
const setLevel = level => {
    level = level.keyCode;
    if (level == 49) {
        speed = 140;
        up.play();
    }else if (level == 50) {
        speed = 120;
        up.play();
    }else if (level == 51) {
        speed = 100;
        up.play();
    }else if (level == 52) {
        speed = 80;
        up.play();
    }else if (level == 53) {
        speed = 60;
        up.play();
    }
}
*/
//document.addEventListener('keydown', setLevel);

// call draw function every 100ms
let game = setInterval(draw, 100);

// EX: 
/*
thêm chức năng cài đặt tốc độ cho rắn qua các nút 1,2,3,4,5 
*/
