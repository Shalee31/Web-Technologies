//Function Declaration
function add(i,j){
    var result = i + j;
    return result;
}
document.write(add(10,20)+"<br/>");
//document.write(add("Hello"," World")+"<br/>");

//Function Expression
var addition = function(i,j){
    var result = i + j;
    return result;
}
document.write(addition(10,20)+"<br/>");

//Function in function - nested
function add(i,j){
    var addition = function(i,j){
        var result = i + j;
        return result;
    }
    var result = addition(i,j);
    return result;
}
document.write(addition(10,20)+"<br/>");

//Fat-Arrow Syntax/Arrow Function
//Multiple lines
var calcadd = (i,j) => {
    var result = i + j;
    return result;
}
document.write(calcadd(10,20)+"<br/>");
//Single line depends on web browser
var calcadd = (i,j) => i + j;
document.write(calcadd(10,20)+"<br/>");
