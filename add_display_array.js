let arr = [];

function add() {
    
    let input_value = document.getElementById("input").value;
    arr.push(input_value);

    return arr;
}

function display() {
    
    let viewer = document.getElementById("viewer");

    viewer.innerHTML = `Elements in the array: ${arr}`;
}