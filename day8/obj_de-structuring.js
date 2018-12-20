//de-structuring
const personDetails={
    name:'Sagun',
    grade:10,
    age:100,
    friends:['a','b','c']
};
//let name=personDetails.name; 
//console.log(name);

//declare gareko ra vairable ko naam eutai cha vane esari garne curly brackeet rakhera.
//dubaiko kaam gaarcha.

let {name,grade,age,friends}=personDetails;
console.log(name,grade,age,friends);