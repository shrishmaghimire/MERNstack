//rest and spread operator eg
let personObject={
     id:1,
     name:'Sam Chakre',
     college:'Samriddhi',
     friends:['Dipendra','Arpan'],
}
//naya array huna paryo, id exclude garnu ani name college friends hunuaparyp
let{id,...y}=personObject; //..y-rest ho ani esma id chai include gareko. id chai id mai gayera bascha
console.log(y);





