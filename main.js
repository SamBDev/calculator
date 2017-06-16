
function getX(){
    return document.getElementById("xValue").value;
}

function getY(){
    return document.getElementById("yValue").value;
}

function getOutputLocation(){
    return document.getElementById("result");
}

function outputResult(resultToOutput){

    let outputLocation = getOutputLocation();
    outputLocation.innerHTML = '';

    let resultText = document.createTextNode(resultToOutput);
    let resultElement = document.createElement("p");
    resultElement.appendChild(resultText);
    outputLocation.appendChild(resultElement);

}

function addition(){
    let xValue = getX();
    let yValue = getY();
    let result = parseInt(xValue) + parseInt(yValue);

    outputResult(result);
}

function subtraction(){
    let xValue = getX();
    let yValue = getY();
    let result = parseInt(xValue) - parseInt(yValue);

    outputResult(result);
}

function multiplication(){
    let xValue = getX();
    let yValue = getY();
    let result = parseInt(xValue) * parseInt(yValue);

    outputResult(result);
}

function division(){
    let xValue = getX();
    let yValue = getY();
    let result = parseInt(xValue) / parseInt(yValue);

    outputResult(result);
}


document.getElementById("addition").addEventListener("click", addition);
document.getElementById("subtraction").addEventListener("click", subtraction);
document.getElementById("multiplication").addEventListener("click", multiplication);
document.getElementById("division").addEventListener("click", division);