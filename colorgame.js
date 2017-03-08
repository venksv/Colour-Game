
var divs = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
//var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor(colors);
colorDisplay.textContent = pickedColor;

/*for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
    })
}*/

/*var colorChoice = initialiseGame();
var colors = colorChoice.colorList;
var pickedColor = colorChoice.selectColor;
console.log("Picked color in main: " + pickedColor);*/

/*function initialiseGame() {
    var noOfColors = isHard ? 6 : 3;
    var colorList = generateRandomColors(noOfColors);
    var selectColor = pickColor(colorList);

    console.log("Select color (initialiseGame): " + selectColor);

    h1.style.background = "#232323";
    colorDisplay.textContent = selectColor;
    // if (!isHard) {
    //     for (var i = 0; i < 3; i++) {
    //         divs[i].hidden = true;
    //     }
    // }
    for (var i=0; i < divs.length; i++) {
        if (colorList[i]) {
            divs[i].style.background = colorList[i];
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
        //add click listeners.
        divs[i].addEventListener("click", function() {
            //Grab colour of clicked square and compare to pickedColor;
            var clickedColor = this.style.background;
            console.log("Clicked color: " + clickedColor + ", Select color: " + selectColor);
            if (clickedColor === selectColor) {
                messageDisplay.textContent = "Correct!";
                updateColors(selectColor);
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }

    return {
        colorList : colorList,
        selectColor : selectColor
    }
}*/

resetBtn.addEventListener("click", function() {
    //Select new color array;
    colors = generateRandomColors(numSquares);
    h1.style.background = "steelblue";
    this.textContent = "New Colors"

    //Select new random color;
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;

    //Reset message display.
    messageDisplay.textContent = "";

    //Update squares;
    for (var i=0; i < divs.length; i++) {
        divs[i].style.background = colors[i];
    }
/*    colorChoice = initialiseGame();
    colors = colorChoice.colorList;
    pickedColor = colorChoice.selectColor;*/
})

easyBtn.addEventListener("click", function() {
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < divs.length; i++) {
        if (colors[i]) {
            divs[i].style.background = colors[i];
        } else {
            divs[i].style.display = "none";
        }
    }

/*    colorChoice = initialiseGame();
    colors = colorChoice.colorList;
    pickedColor = colorChoice.selectColor;*/
})

hardBtn.addEventListener("click", function() {
    numSquares = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.background = colors[i];
        divs[i].style.display = "block";
    }
})


for (var i=0; i < divs.length; i++) {
    divs[i].style.background = colors[i];

    //add click listeners.
    divs[i].addEventListener("click", function() {
        //Grab colour of clicked square and compare to pickedColor;
        var clickedColor = this.style.background;
        //console.log("Clicked: "+clickedColor+", Select: "+pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            updateColors(pickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function updateColors(color) {
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.background = color;
    }
    h1.style.background = color;
    resetBtn.textContent = "Play Again?";
}

function pickColor(colors) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateRandomColors(noOfColors) {
    var colors = [];
    for (var i = 0; i < noOfColors; i++) {
        colors.push(randomColor());
    }

    return(colors);
}

function randomColor() {
    randR = Math.floor(Math.random() * 256);
    randG = Math.floor(Math.random() * 256);
    randB = Math.floor(Math.random() * 256);

    var colorText = "rgb(" + randR + ", " + randG + ", " + randB + ")";
    return (colorText);
}
