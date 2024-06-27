function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}
function calculate() {
    const display = document.getElementById('display');
    try
    {
        display.value = eval(display.value);
    } 
    catch(error) 
    {
        alert('Invalid expression');
        clearDisplay();
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
