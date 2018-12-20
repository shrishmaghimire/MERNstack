function Animal(name,age)
{
    this.age=age;
    this.name=name;

    this.makeSound=function(){
        return `${this.name} made a sound`;
    }
}

let Dog= new Animal('dog',20); //new le  naya objbect instanse garcha.
console.log(Dog.makeSound());

let cat= new Animal('cat',15);
console.log(cat.makeSound());
