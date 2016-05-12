var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;
function preload() {
    playerImage = loadImage("po.png")
    enemyImage = loadImage("noodles2.png")
    backgroundImage = loadImage("mQFEEO0.jpg")
}
function setup() {
    createCanvas(1200, 500);
    player = createSprite(width/2, height-25);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0);
    enemy.addImage(enemyImage);
    isGameOver = false
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
    background(backgroundImage);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-5)) {
    player.position.x = player.position.x + 25;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
    player.position.x = player.position.x - 25;
    }
    if (keyDown(UP_ARROW) && player.position.y > 25) {
    player.position.y = player.position.y - 25;
    }
    if (keyDown(DOWN_ARROW) && player.position.y < height-25) {
    player.position.y = player.position.y + 25;
    }
    enemy.position.y = enemy.position.y + 20;
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5)
    }
    if (enemy.overlap(player)) {
        isGameOver = true;
    }
    
    drawSprites();
    }
}
function gameOver() {
    background(0) ;
    textAlign(CENTER) ;
    fill("white") ;
    var t = "GAME OVER! click anywhere to redeem youurself, DIRECTIONS: USE ARROW KEYS TO DODGE NOODLES"
    text(t, 40, 100, 140 ,160)
}
function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25
    enemy.position.x = width/2
    enemy.position.y = 0;
    }
}