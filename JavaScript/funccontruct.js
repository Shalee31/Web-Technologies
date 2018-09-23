//Constructor
function User(name,age) {
    this.name = name;
    this.age = age;

    //method in constuctor
    this.printUserDetails = () => {
        document.write("Name is: " + this.name + "<br/>");
        document.write("Age is: " + this.age + "<br/>");
    };
}

var user= new User("John",30);
user.printUserDetails();

var user= new User("Jerry",20);
user.printUserDetails();
