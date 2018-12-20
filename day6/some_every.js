//returns boolean. some  maa sab condition true vo vane true huncha.

//every le chai sab conditon true vo vane matra true dekhauncha.
let ages=[1,2,3,4,5,6,7,8,9,10];
let oldPeopleExist=ages.some(checkOldPeople);
function checkOldPeople(person){
    return person>30;
}
console.log(oldPeopleExist);

let oldPeople=ages.every(checkOldPeople);
function checkOldPeople(person){
    return person>30;
}
console.log(oldPeople);



