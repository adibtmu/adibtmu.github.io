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
    image.style.transform = "scale(2)";
    image.style.transition = "transform 0.3s ease";
    image.style.zIndex = "9999";
}