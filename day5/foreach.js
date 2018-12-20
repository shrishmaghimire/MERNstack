

let personObject=[{Name:'Shrishma Ghimire',Age:19,Height:'5.3'},
                  {Name:'Sagun Raj Lage',Age:53,Height:'5.9'},
                  {Name:'Anika Shrestha',Age:22,Height:'5.1'},
                  {Name:'Asim Dahal',Age:50,Height:'5.5'},
                  {Name:'Subash Shrestha',Age:49,Height:'5.7',}]
            /*for(i=0;i<personObject.length;i++)
            {
                console.log(personObject[i].Name);
            } */
personObject.forEach(showPerson); // foreach le parameter(Person maa) chai iteration value halcha.
function showPerson(Person,i){
    //console.log(Person.Name);
    //console.log(Person.Age,i);
    console.log("The person Name is "+Person.Name);
    console.log("Their age is "+Person.Age );
}