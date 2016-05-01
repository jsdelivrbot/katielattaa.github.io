function makeChop3Sound() {
    var chop3Sound = new Audio("chop3.mp3");
    chop3Sound.play() ;
}
$("#chop3").on("click",makeChop3Sound);
function makeKick4Sound() {
    var kick4Sound =new Audio("kick4.mp3");
    kick4Sound.play();
}
$("#kick4").on("click", makeKick4Sound);
function makePerc1Sound() {
    var perc1Sound = new Audio("Gooey.mp3");
    perc1Sound.play();
}
$("#perc1").on("click", makePerc1Sound);
function makeVox9Sound() {
    var vox9Sound = new Audio("peaches.mp3");
    vox9Sound.play();
}
$("#vox9").on("click", makeVox9Sound);

