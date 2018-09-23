function calculate(btnclicked){
    document.getElementById("num1span").innerText="";
    document.getElementById("num2span").innerText="";
    var num1 = document.getElementById("cal").num1.value;
    var num2 = document.getElementById("cal").num2.value;
    var opn = btnclicked.id;
    if(num1 === undefined || num1 === ""){
        document.getElementById("num1span").innerText="num1 is required";
        return false;
    }
    if(num2 === undefined || num2 === ""){
        document.getElementById("num2span").innerText="num2 is required";
        return false;
    }
    if(opn === "Addition"){
        var result= Number(num1) + Number(num2);
        document.getElementById("resultspan").innerHTML="<h3>Result is "+result+" </h3>";
    }
    else if(opn === "Subtraction"){
        var result= Number(num1) - Number(num2);
        document.getElementById("resultspan").innerHTML="<h3>Result is "+result+" </h3>";
    }
    else if(opn === "Multiplication"){
        var result= Number(num1) * Number(num2);
        document.getElementById("resultspan").innerHTML="<h3>Result is "+result+" </h3>";
    }
    else if(opn === "Division"){
        var result= Number(num1) / Number(num2);
        document.getElementById("resultspan").innerHTML="<h3>Result is "+result+" </h3>";
    }
}