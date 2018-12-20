
const people=[{name:"Shree Kumar",age:99,location:'Nepal'},
             {name:"Shrishma",age:19,location:'KTM'},
             {name:"SRL",age:20,location:'BKT'}];
const showPeopleName=people.forEach(function(person){ //yaha function ko naam rakhna mildaina.
    console.log(person.name)
})
//arrowfunction ko tarika map maa.
const names=people.map(person=>person.name);
console.log(names);

