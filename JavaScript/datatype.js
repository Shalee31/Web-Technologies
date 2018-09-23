var num=10;
var name="John";
var salary = 232.23;
var flag=true;
document.write("num is "+num+".<br/>");
document.write("name is "+name+".<br/>");
document.write("salary is "+salary+".<br/>");
document.write("flag is "+flag+".<br/>");

/*Checking Datatype*/
document.write("<br/>Datatype:<br/>")
document.write("num is "+typeof(num)+".<br/>");
document.write("name is "+typeof(name)+".<br/>");
document.write("salary is "+typeof(salary)+".<br/>");
document.write("flag is "+typeof(flag)+".<br/>");

num=null;
document.write("<br/>num is "+num+".<br/>");
document.write("num is "+typeof(num)+".<br/>");

document.write("<br/>"+typeof Math)