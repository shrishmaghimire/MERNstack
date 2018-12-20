let personObject={
    name:"Shrishma Ghimire",
    college:"Samriddhi College",
    age:"19",
    friends:["Reeti","Adfhf"],
    isold:true,
    _id:1244,
    jobdesc:{
        jobname:'IIT',
        joblocation:'Ktm',
    }
}
console.log(personObject.name);
console.log(personObject['name']); //underscore cha vane dot le acess garna mildaina.
console.log(personObject['_id']);
console.log(personObject.friends[0]);
console.log(personObject.jobdesc.jobname);
