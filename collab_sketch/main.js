var config = {
    apiKey: "AIzaSyA5ybTtYZHYfvevE5zGweKoZanJcF7axsg",
    authDomain: "collab-sketch.firebaseapp.com",
    databaseURL: "https://collab-sketch.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var points = []

function setup() {
    var c = color(100, 200, 78);
    var canvas = createCanvas(400,400);
    background(255);
    fill(c);
    canvas.mousePressed (drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}
pointsData.on("child_added", function (point) {
    points.push(point.val())
});
function draw() {
    background(255);
    
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}
function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY});
}
function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}