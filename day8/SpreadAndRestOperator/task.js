let array1=[{id:1,name:'Shrishma'},
            {id:2,name:'Govinda'},
            {id:3,name:'Sagun'}]
let array2=[{id:1,age:100},
            {id:2,age:200},
            {id:3,age:300}];
/*expected output array=[{id:1,name:'Shrishma',age:100}
                        {id:2,name:'Govinda',age:200}
                        {id:3,name:'Sagun',age:300}] */
let newarr=[];

array1.forEach((element,i)=>{array2.forEach((elements,i2)=>{
   if (element.id===elements.id){
       newarr.push({...array1[i],...array2[i]});
   }
})
})

   

console.log(newarr);