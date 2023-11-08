var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var img1 = new Image();
img1.src = 'obstacle.png';


class Cactus {
    constructor() {
        this.x = canvas.width;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = 'red';
       // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1. this.x , this.y)
    }
}

var cactusObstacles = [];
var timer = 0;
var jumptimer = 0;
var animation;

function update() {
    animation = requestAnimationFrame(update);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 200  === 0) {
        var cactus = new Cactus();
        cactusObstacles.push(cactus);
    }

    cactusObstacles.forEach((a,i,o) => {
        if(a.x < 0){
           o.splice(i,1)
        }
        a.x--;
        attack(dino,a); //장애물 요소마다 다 체크해야하니깐!
        a.draw();
    });
    if(jump==true){
        dino.y--;
        jumptimer++;
    }
    if(jump==false){
        if(dino.y < 200){
            dino.y++;
        }    
    }
    if(jumptimer > 100){
        jump=false;
        jumptimer = 0;
    
    }

    dino.draw();
}

update();

//충돌 체크
function attack(dino,cactus){
 var xx = cactus.x - (dino.x + dino.width);
 var yy = cactus.y- (dino.y + dino.height);
 if(xx < 0 && yy < 0){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cancelAnimationFrame(animation)
 }
}
var jump=false;
document.addEventListener('keydown',function(e){
    if (e.code==='Space'){
        jump=true;
    }
});