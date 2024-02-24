function askForName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "!";
    }
}