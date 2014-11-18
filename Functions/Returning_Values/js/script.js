/* This JS goes along with the Returning Values Screencast */

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; // function returns area back to calcArea
}

console.log(total);

// Functions return values
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//Procedure does not return anything
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}
