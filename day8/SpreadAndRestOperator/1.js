/*const somefunction=(a,b,...c)=>{ //..c array banako huncha.
     console.log(a,b,c);
}
somefunction(1,2,3,4,5,6)
*/

somefunction=(...shri)=>{ //..c array banako huncha.
    console.log(shri);
}
somefunction(1,2,3,4,5,6);

const showDetails=(name,age=100)=>{
    console.log(`The name is ${name} and age is ${age}`);
}
showDetails("Shrishma",19);