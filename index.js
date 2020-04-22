let dodger = document.getElementById("dodger");

dodger.style.background = "#FF69B4";

const moveDodgerLeft = () => {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 15}px`
    }
}

const moveDodgerRight = () => {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 15);

    if (left > 0) {
        dodger.style.left = `${left + 5}px`
    }
}

// `keydown` event listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        // go left
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        // go right
        moveDodgerRight();
    }
})

