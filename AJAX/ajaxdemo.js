function fetchUser(){
    var httpRequest = null;
    if(window.XMLHttpRequest){
        //Safari,Chrome, Edge, Firefox....
        httpRequest = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        //IE 6 and Older
        httpRequest= new ActiveXObject("Microsoft.XMLHTTP");
    }
    /*write url here...*/
    httpRequest.open("GET","user.json");
    httpRequest.send();
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 0){
            console.log("not connected to server.........");
        }else if(httpRequest.readyState ==1){
            console.log("Request sent and connectn established");
        }else if(httpRequest.readyState ==2){
            console.log("Request received");
        }else if(httpRequest.readyState ==3){
            console.log("Request processing.....");
        }else if(httpRequest.readyState == 4){
        var user=JSON.parse(httpRequest.responseText);
            document.write(user.name);
            document.write(user.age);
        }
    };
}
