function User(){
    this.loggedin=false;
    this.login=function(){
    this.loggedin=true;
        return this.loggedin;
    }
    this.logout=function(){
    this.loggedin=false;
        return  this.loggedin;
    }
    this.status=function(){
        return this.loggedin;
    }

}
const user1 = new User(); // User user1; object banako.

console.log(user1.login());
console.log(user1.status());
console.log(user1.logout());
console.log(user1.status());