class Person{
    constructor(name,sound) // c++ maa chai constructor cal garda Person(); huncha tara esma constructor vanera nai lekhna parcha.
    {
        this.name=name;
        this.sound=sound;
    
    }
    
    greeting(){//method huda let, const , ra funcntion vanera lekhna pardaiana.
    console.log(`hello ${this.name}`);
    }
}
let user1= new Person("Shrishma","speech");
user1.greeting();