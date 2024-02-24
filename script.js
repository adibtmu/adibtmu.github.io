function askForName() {
    var name = prompt("Enter your name:");
    if (name != null && name != "") { //checks that valid input was entered
        document.getElementById("output").innerHTML = "Welcome " + name;
    }
    else { //prompts user to try again if invalid input entered
        document.getElementById("output").innerHTML = "Invalid input. Please try again.";
    }
}