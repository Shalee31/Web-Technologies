//Using Function Constructor with Array 
function User(name,age) {
    this.name = name;
    this.age = age;

    this.printUserDetails = () => {
        document.write("<tr><td> " + this.name + "</td>");
        document.write("<td> " + this.age + "</td></tr>");
    };
}

var users= [new User("John",30),new User("Jerry",20),
           new User("Tom",34),new User("Popeye",25)];

document.write("<table border='1'><thead><th>Name</th><th>Age</th></thead>");
document.write("<tbody>");
for (const user of users) {
    user.printUserDetails();
}
document.write("</tbody></table>");







