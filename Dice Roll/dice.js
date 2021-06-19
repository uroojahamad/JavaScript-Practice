const image = document.querySelector("img");

function rollDice() {
    image.setAttribute("src", "images/dice.gif");
    setTimeout(rollOut, 300);
}

function rollOut() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    image.setAttribute("src", `images/${randomNumber}.png`);
}


/**
 * obj = {
 *  images1 = images/1.png;
 *  images2 = images/2.png;
 *  images3 = images/3.png;
 *  images4 = images/4.png;
 *  images5 = images/5.png;
 *  images6 = images/6.png;
 * }
 *  array notation :
 * obj[`images${randomNumber}`] 
 */