var NUM_CIRCLES = 4;
var CIRCLE_DIA;
var CIRCLE_RAD;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480,600);
    CIRCLE_DIA = width/NUM_CIRCLES;
    CIRCLE_RAD = CIRCLE_DIA/2
}

function draw() {
    rVal = 30
    gVal = 2
    bVal = 30;
    var alternatingRow = false;
    var startX;
    for (var y = height; y >= 0; y = y-CIRCLE_RAD){
        if (alternatingRow) {
           startX = CIRCLE_RAD;
            } else {
              startX = 0
            }
        for (var x = startX; x <= width; x = x+CIRCLE_DIA) {
            fill(color(rVal,gVal,bVal));
            ellipse(x, y, CIRCLE_DIA, CIRCLE_DIA);
        }
        alternatingRow = !alternatingRow;
        rVal = rVal +3
        gVal = gVal +20
        bVal = bVal +18
    }
}