var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;
function preload() {
    playerImage = loadImage("patrick.png")
    enemyImage = loadImage("Krabby_Patty.png")
    backgroundImage = loadImage("Squidward_house.png")
}
function setup() {
    createCanvas(668, 500);
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
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
    player.position.x = player.position.x + 35;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
    player.position.x = player.position.x - 35;
    }
    if (keyDown(UP_ARROW) && player.position.y > 25) {
    player.position.y = player.position.y - 35;
    }
    if (keyDown(DOWN_ARROW) && player.position.y < height-25) {
    player.position.y = player.position.y + 35;
    }
    enemy.position.y = enemy.position.y + 30;
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
    var t = "GAME OVER! click anywhere to redeem youurself"
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