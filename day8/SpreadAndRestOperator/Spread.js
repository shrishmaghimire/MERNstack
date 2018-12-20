//REST AND SPREAD OPERATORS 
//... -spread operator -extracts only value.

let numberArr=[1,2,3,4,5,6];
let newArr=[11,12,13,...numberArr,7,8,9,10];
 //numberArr ma vako data chai ...numberArr maa rakhdeko cha.
console.log(newArr);
console.log(...numberArr);

let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let combinedArr=[...arr1,...arr2];
console.log(combinedArr);

let school={
    name:'VSN',
    location:'MinBhawan'
    };
let student={
   studentname:'Asim',
    rollNo:2
};
let combo={...school,...student};
console.log(combo);