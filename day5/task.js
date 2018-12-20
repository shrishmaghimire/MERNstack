let personObject=[{Name:'Shrishma Ghimire',Age:19,Height:'5.3'},
                  {Name:'Sagun Raj Lage',Age:53,Height:'5.9'},
                  {Name:'Anika Shrestha',Age:22,Height:'5.1'},
                  {Name:'Asim Dahal',Age:50,Height:'5.5'},
                  {Name:'Subash Shrestha',Age:49,Height:'5.7',}]
const filteredArr=personObject.filter(filterBudoManis);
function filterBudoManis(person){
    if(person.Age>40)
    {
        return false;
    }
    else{
        return true;
    }
}
console.log(filteredArr);