let peopleArr=[{Name:'Shrishma Ghimire',Age:19,Height:'5.3'},
                {Name:'Sagun Raj Lage',Age:53,Height:'5.9'},
                {Name:'Anika Shrestha',Age:22,Height:'5.1'},
                {Name:'Asim Dahal',Age:50,Height:'5.5'},
                {Name:'Subash Shrestha',Age:49,Height:'5.7'}];
         let a =   peopleArr.find(findOldPerson); //find returns the first value.
            function findOldPerson (person)
            {
                return person.Age>50;
            }
console.log(a);