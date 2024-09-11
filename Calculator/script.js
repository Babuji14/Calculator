const display = document.getElementById('dispay');
function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error'; 
    }
}

function clearDisplay() {
    display.value = ''; 
}
