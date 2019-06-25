const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
// getContext('2d') sở hữu nhiều hàm dành cho vẽ hình ảnh như: hình hộp, tròn,...

//context.fillStyle = 'black';
// thuộc tính để gán CSS

//context.fillRect(100, 200, 50, 75);
// vẽ hình chữ nhật với các tọa độ sau:
// fillRect(x, y, width, height) 
// x, y là tọa độ
// góc trên cùng bên trái có tọa độ (0,0)

//circle
//context.fillStyle = 'red';
//context.beginPath();
// bắt đầu nét vẽ or thiết lập lại nét vẽ hiện tại
//context.arc(300, 350, 100, 0, Math.PI*2, false);
// 300, 500: x,y position
// 100: radius (bán kính)
// 0: start Angle
// Math.PI*2: end Angle = 360 degrees
// false: direction(phương hướng): không quan trọng nên để false



//setInterval(render, 1000);
// thiết lập hàm render() sẽ thực thi sau 1 khoảng thời gian (được xác định trước) 1000 milisecond và sẽ được lặp lại mãi mãi

// objects______________________________________________________________

const user = {
    x: 0,
    y: canvas.height/2 - 50,
    width: 10,
    height: 100,
    score: 0, 
    color: 'white'
};
const com = {
    x: canvas.width - 10,
    y: canvas.height/2 - 50,
    width: 10, 
    height: 100, 
    score: 0,
    color: 'white'
};
const net = {
    width: 2,
    height: 10,
    color: 'white',
    x: canvas.width/2 - 1,
    // trừ 1 do chiều rộng của net là 2
    y: 0
};
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color: 'white',
    speed: 5,
    velocityX: 5,
    velocityY: 5
    // velocity = speed + direction
};
//_______________________________________________________________________


// function______________________________________________________________

const drawRect = (x, y, w, h, color)=>{
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
};
// draw the rectangle

const drawCircle = (x, y, r, color)=>{
    context.fillStyle = color;
    
    // phương pháp vẽ 1 vòng tròn
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.closePath();
    // tạo nét vẽ từ vị trí hiện tại đến điểm xuất phát nét vẽ
    // sử dụng method .stroke() để hiển thị nét vẽ
    
    context.fill();
    // .fill() đổ màu lên hình hiện tại
    // mặc định là màu đen
};
// draw the circle

const drawText = (text, x, y, color)=>{
    context.fillStyle = color;
    context.font = '75px fantasy';
    // định nghĩa font-size, font-family
    
    context.fillText(text, x, y);
    // sử dụng để vẽ chữ đã được đổ màu trong canvas
    // in ra chữ 'text' tọa độ (x, y)
    // mặc định là màu đen
};
// viết chữ trong 1 ô cho trước


function drawNet(){
    for (let i = 0;i <= canvas.height;i+=15){ // mỗi net cách nhau 15px
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}
// draw the net

function render(){
    drawRect(0, 0, canvas.width, canvas.height, 'black');
    // background
    
    drawNet();
    // đường phân cách 2 bên
    
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    // draw the circle
    
    drawRect(user.x, user.y, user.width, user.height, user.color);
    // thanh chắn của user

    drawRect(com.x, com.y, com.width, com.height, com.color);
    // thanh chắn của computer
    
    drawText(user.score, canvas.width/4, canvas.height/5, 'white');
    // ô điểm số của user
    
    drawText(com.score, 3*canvas.width/4, canvas.height/5, 'white');
    // ô điểm số của com
}
// bố trí canvas

// canvas được chia ra thành lưới với tỉ lệ ngang dọc như sau: 
/*
0----w/4----2*w/4----3*w/4----4*w/4
|      |       |       |       |
|      |       |       |       |
h/5-------------------------------
|      |       |       |       |
|      |       |       |       |
2*h/5-----------------------------
|      |       |       |       |
|      |       |       |       |
3*h/5-----------------------------
|      |       |       |       |
|      |       |       |       |
4*h/5-----------------------------
|      |       |       |       |
|      |       |       |       |
5*h/5----------------------------
*/



// collision: va chạm

function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    
    // AI to control the com paddle
    // com sẽ không bao giờ bắt trượt ball
    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height/2)) * computerLevel;
    // com sẽ tính toán trục y để đưa paddle đến đúng vị trí ball tới
    
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.velocityY = - ball.velocityY;
    // nếu bóng di chuyển lên cạnh trên (dưới) thì velocityY sẽ đổi dấu để tọa độ Y bay ngược lại
    // tránh trường hợp bóng bay ra ngoài 
    
    let player = (ball.x < canvas.width/2) ? user : com;
    // player là object
    // nếu bóng bay về hướng trái thì player sẽ là user
    // tương tự với hướng phải thì player sẽ là com
    
    if (collision(ball, player)){
        let collidePoint = ball.y - (player.y + player.height/2);
        collidePoint = collidePoint / (player.height/2);
        // công thức tính va chạm
        
        let angleRad = (Math.PI/4) * collidePoint;
        let direction = (ball.x < canvas.width/2) ? 1 : -1;
        // bên trái: direction = 1
        // bên phải: direction = -1
        // dùng để xác định âm dương của góc PI/4 
        
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        
        ball.speed += 0.3;
        // mỗi lần ball chạm vào paddle
        // tăng tốc độ lên 0.3
    }
    
    if (ball.x - ball.radius < 0){
        com.score++;
        resetBall();
        // the com win
    }
    else if (ball.x + ball.radius > canvas.width){
        user.score++;
        resetBall();
        // the user win
    }
    // update the score
}

function resetBall(){
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 5;
    ball.velocityX = - ball.velocityX;
    // or ball.velocityY = - ball.velocityY
}
// func reset lại ball về vị trí trung tâm
// khi user or com đã được cộng 1 điểm

const collision = (b, p)=>{
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    // mặt va chạm
    
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    // lúc va chạm với thanh chắn
    
    return b.right > p.left && b.left < p.right && b.top < p.bottom && b.bottom > p.top;
};
// collision() tính cho cả mặt va chạm của user và com nên mới tính va chạm cả 4 cạnh


function movePaddle(evt){
    let rect = canvas.getBoundingClientRect();
    // phương thức getBoundingClientRect() trả về kích thước của một phần tử và vị trí của nó so với khung hình
    
    user.y = evt.clientY - rect.top - user.height/2;
}
// (cần tìm hiểu thêm)

function game(){
    update();
    render();
}
//______________________________________________________________________


canvas.addEventListener('mousemove', movePaddle);
// .addEventListener có tác dụng thêm sự kiện cho 1 đối tượng trong HTML

const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond);
// update cứ 20 milisecond/lần
    


// xét trục x, y
/*
  ball.velocityX
---------------------------->x
|\ )a  |
| \    |
|  \   |
|   \  |
|    \ |
|     \|ball.speed 
|-------
|
|
|
\/
y
(ball.velocityY)

 cos(a) = ball.velocityX / ball.speed
 sin(a) = ball.velocityY / ball.speed
 
 => ball.velocityX = ball.speed * cos(a)
 => ball.velocityY = ball.speed * sin(a)

// collide point: điểm va chạm

// sơ đồ va chạm và cách tính tọa độ

      ___       ____(a)
user.y     |```|
           |   |
           |   |
user.y     |   |
+      --- | * |----(b)
user.h/2   |   |
           |   |
           |   |
           |   |
            ``` ````(c)
            

nếu ball va chạm tại: 
(a) => góc phản xạ là -1*Math.PI/4
(b) => góc phản xạ là 0
(c) => góc phản xạ là 1*Math.PI/4

let angleRad = collidePoint * Math.PI/4

Bóng sẽ bay theo hướng vecto là:
- tại (a)
   cos(-PI/4) = 0.7 * ball.speed__velocityX = 3.5
   sin(-PI/4) = -0.7 * ball.speed__ velocityY = -3.5
- tại (b)
  velocityX = 5
  velocityY = 0
- tại (c)
  velocityX = 3.5 
  velocityY = 3.5
*/ 