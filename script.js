const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function removeLeadingZeros(input){
    return input.replace(/\b0+(\d+)/g, '$1');
}

function calculate(){
    try{
        let sanitizedInput = removeLeadingZeros(display.value);
        display.value = eval(sanitizedInput);
    }
    catch(error){
        display.value = "Error";
    }
}

