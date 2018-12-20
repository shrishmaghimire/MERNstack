
let firstarray=[1,2,3,4,5,6,7];
let secondarray=firstarray;
secondarray.push(8);
console.log(firstarray);
//seond array ke first array ko reference matra leko not data, so second array maa j change aayo
//tyo first array maa auncha. this is non-primitive data type.

let personObject={
    name:'Sagun',
    age:15,
    height:5.9
};
let objectPerson=personObject;
objectPerson.friends = ['a','b','c']; //naya property assign esari garincha.
console.log(objectPerson);

//junmathi reference leko thyo , hamile copy garna milcha.
firstarray=[1,2,3,4,5,6,7]
 secondarray=firstarray.slice(); // slice maa parameter nadikana diy vane coppy gardincha
console.log(secondarray);
