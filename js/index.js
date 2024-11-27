// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function backspace() {
    display.value = display.value.slice(0, -1); // Remove the last character
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value) {
        // Toggle the sign of the current input
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue * -1).toString();
        }
    }
}