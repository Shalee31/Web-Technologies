//Two Syntax
var favColors = new Array();
var favColors2 = [];
var favColors3 = ['Pink','Orange','White','Green'];
//simple for loop
for(var i=0; i<favColors3.length; i++){
    document.write(favColors3[i]+ "<br/>");
}
//for of loop
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}
//add to last
favColors3.push("Red");
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}
//remove from last
favColors3.pop();
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}
//add to first
favColors3.unshift("Red");
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}
//remove from first
favColors3.shift();
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}
//remove elements at certain postion
//splice(startat,removeno)
favColors3.splice(1,1);
document.write("<br/>")
for (const color of favColors3) {
    document.write(color + "<br/>");
}


//function for filtering data
var status = favColors3.filter(function(color,index, favColors){
   return color.length >3;
 });
 document.write("Status is: "+status+"<br/>")