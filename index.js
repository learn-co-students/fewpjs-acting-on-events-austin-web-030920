// Your code here
// Grab our little dude
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

// Use keyboard to make dude move, but don't let it go out of the box
function moveDodgerLeft() {
    let left = parseInt(dodger.style.left, 10);
    if (left > 0) {
        dodger.style.left = `${left - 2}px`;
    }
};

// Use KB to move dude right, but not out of the box
function moveDodgerRight() {
    let left = parseInt(dodger.style.left, 10);
    if (left < 360) {
        dodger.style.left = `${left + 2}px`;
    }
};

// Event listener that looks for keyboard presses
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } 
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    } 
});