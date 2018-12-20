// filter returns true of false. true cha vane naya array maa haldincha navai haldidaina

const ages=[10,20,30,40,50,60,70,80];
const filteredArray=ages.filter(filterOldPeople);
function filterOldPeople(age){
    if(age>50){
        return false;
    }
    else{
        return true;
    }
}
console.log(filteredArray);
