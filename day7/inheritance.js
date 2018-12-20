let users=[];
class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
getName()
{
    return `the name is ${this.name}`;
}
}
class Admin extends User{
    constructor(name,password){
        super(name,password); //super le afno parent class ko consturcot call garxa
    }

showUsers()
{
    return users;
}
addUser(name,password)
{ users.push(new User(name,password));
}
}
let admin1=new Admin('sam','chakre');
admin1.addUser('Ram','Bahadur');
console.log(users);
