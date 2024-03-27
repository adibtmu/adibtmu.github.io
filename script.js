function askForName() {
    var name = prompt("Enter your name:");
    if (name != null && name != "") { //checks that valid input was entered
        document.getElementById("output").innerHTML = "Welcome " + name;
    }
    else { //prompts user to try again if invalid input entered
        document.getElementById("output").innerHTML = "Invalid input. Please try again.";
    }
}

function enlargeImage(image) { //enlarges image when clicked on
    image.style.transform = "scale(1.2)"; 
    image.style.transition = "transform 0.5s ease"; //makes it gradually increase in size
    image.style.zIndex = "9999"; //makes it overlap all other competing elements
}

function highlight(element) { //onmouseover event
    element.style.backgroundColor = "#f0f0f0";
}

function unhighlight(element) { //onmouseout event
    element.style.backgroundColor = "transparent";
}
function highContrast() { //function for high contrast button
    document.body.classList.toggle('high-contrast');
}
function increaseFontSize() {
    
    let currentSize = window.getComputedStyle(document.body).fontSize; //find current font size
    let currentSizeNum = parseInt(currentSize, 10); // convert to int to iterate
    document.body.style.fontSize = `${currentSizeNum + 1}px`; //increase font size
}