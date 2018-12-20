let user1={
    name:"Sagun",
    age:25,
    showinfo:function()
    {
        return `${this.name} is  ${this.age} years old`;
    },
    isOld:function(){
        if(this.age<50){
            console.log("he is baccha");
        }
        else{
            console.log("He is budo manis");
        }
    }
    }

console.log(user1.showinfo());
console.log(user1.isOld());

let user2={
    name:"sub-ass",
    age:60,
    showinfo:function(){
        return `${this.name} is ${this.age} yers old`;
    },
    isOld:function(){
        if(this.age<50){
            console.log("he is baccha");
        }
        else{
            console.log("He is budo manis");
        }
    }
    }

console.log(user2.showinfo());
console.log(user2.isOld());
