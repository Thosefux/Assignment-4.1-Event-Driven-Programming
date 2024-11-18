// Variable to store our intervalID
let intervalId;
// Variable for our image element
const element = document.getElementById("img");
// Boolean to store state of start button
let startDisabled = true;
// Boolean to store state of stop button
let stopDisabled = false;

// Our start function
function start() {
    // Disable our start button
    disableControl('start')
    // Check if an interval has already been set up
    if (!intervalId) {
        // If not then we set the intervalId by calling setInterval()
        intervalId = setInterval(moveAround, 1000);
        // Enable our stop button
        enableControl('stop')
    }
}

// Our stop function
function stop() {
    // Disable our stop button
    disableControl('stop')
    // Uses our intervalId to stop setInterval loop
    clearInterval(intervalId);
    // Release our intervalId from the variable
    intervalId = null;
    // Enable our start button
    enableControl('start')
}

// Our function to continuously move our image
function moveAround() {
    // Using the Math floor and Math random functions to create a number between 1 and 3
    var randNumb = Math.floor(Math.random() * 9) + 1;
    // Change header text to show what number position meme is in
    adjustHeader(randNumb);
    // IfLadder logic, sets Pos of element by random #
    if (randNumb === 1) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(-245px, -20px)";
    } else if (randNumb === 2) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(0px, -30px)";
    } else if (randNumb === 3) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(245px, -30px)";
    } else if (randNumb === 4) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(-245px, 250px)";
    } else if (randNumb === 5) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(0px, 250px)";
    } else if (randNumb === 6) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(245px, 250px)";
    } else if (randNumb === 7) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(-245px, 520px)";
    } else if (randNumb === 8) {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(0px, 520px)";
    } else {
        // We adjust the elements position with the transform property
        element.style.transform = "translate(245px, 520px)";
    }
}

// Function to change the class of our button
function setState(button, state) {
    // Grays out our disabled buttons
    if (state) {
        // Removes the normal style class
        button.classList.remove("butn");
        // Adds our grayout class to the button
        button.classList.add("disBut");
    } 
    // Removes the grayout for enabled buttons
    else {
        // Removes the grayout style class
        button.classList.remove("disBut");
        // Adds back our normal style class
        button.classList.add("butn");
    }
return;
}

// Enable button function
function enableControl(id) {
    // Get our button element
    var button = document.getElementById('' + id);
    // Set our button element
    button.disabled = false;
    // Sets boolean state of our buttons
    setState(button, false);
}

// Disable button function
function disableControl(id) {
    // Get our button element
    var button = document.getElementById('' + id);
    // Set our button element
    button.disabled = true;
    // Sets boolean state of our buttons
    setState(button, true);
}

function adjustHeader(pos) {
    // Get the header element
    const header = document.getElementById("header"); 
    // Change the text content
    header.textContent = "Meme moved to position number " + pos;
}

// Listener for start button being clicked
document.getElementById("start").addEventListener("click", start);
// Listener for stop button being clicked
document.getElementById("stop").addEventListener("click", stop);