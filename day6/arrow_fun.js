/*NORMAL FUNCTION

function function_ko_naam(parameters){
    return....
}

ARROW FUNCTION

const function_ko_naam=(parameters/arguments)=>{
    functionkokaam
    return...
}*/
const add=(a,b)=>{
    return a+b;
}
console.log(add(4,9));
//
const subtract=(a,b)=>a-b;
console.log(subtract(6,1)); 

//1)arrow function maa parameter/args euta matra cha vane bracket is not included.
const greeting=name=>`Hello ${name}`;
console.log(greeting("shrishma"));

//2) Function le sidhai return gardai cha vane curly braces'{}' is not needed.
let age=19;
const showAge=(age)=>console.log(`Your age is ${age}`);
showAge(age);

//3)kunai pani multi-line return garnu parne kura cha vane() use garne without 'return' keyword
const makeObject=(name,age,location)=>(
{
    name/*key*/:name,//variable or parameter.
    age:age,
    location:location
});





