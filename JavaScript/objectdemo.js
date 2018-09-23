//Two Syntax
var user = new Object();
var user2 = {};
var user3 = {
    name: "John",
    age: 30,
    //not reusable 
    printUserDetails: () => {
        document.write("Name is: " + user3.name + "<br/>");
        document.write("Age is: " + user3.age);
    }
};
user3.printUserDetails();
