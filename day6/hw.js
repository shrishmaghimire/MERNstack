

//const ages=[10,20,30,40,50,60,70,80];
const people=[{name:"Shree Kumar",age:99,location:'Nepal'},
             {name:"Shrishma",age:19,location:'KTM'},
             {name:"SRL",age:20,location:'BKT'}];
//ma

const names=people.map(person=>person.name);
console.log(names);

//filter
const oldpeople=people.filter(persons => { if(persons.age>50) return true;});
console.log(oldpeople);

//const add = () =>{}
//foreach
people.forEach((element)=>{
    console.log(element);
});

//sorting
let numberarray=[3,567,898976,1233,5,7];
 const sortedarr=numberarray.sort((a,b) => {if(a>b)
    return 1;});
 
 console.log(sortedarr);


