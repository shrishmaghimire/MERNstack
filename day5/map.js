//map le chai return gareko naya value halcha.

/*let personArray=[{Name:'Shrishma Ghimire',Age:19,Height:'5.3'},
                  {Name:'Sagun Raj Lage',Age:53,Height:'5.9'},
                  {Name:'Anika Shrestha',Age:22,Height:'5.1'},
                  {Name:'Asim Dahal',Age:50,Height:'5.5'},
                  {Name:'Subash Shrestha',Age:49,Height:'5.7',}]*/

const ages=[10,20,30,40,50,60,70,80];
const newArray=ages.map(addNewProperty);
function addNewProperty(age){
 return age*2;
}
  
console.log(newArray);