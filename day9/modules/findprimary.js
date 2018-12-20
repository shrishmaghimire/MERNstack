let array=[2,4,6,7];
let result;
 result=array.filter((elem)=>{
     for(let i=0;i<Math.sqrt(array);i++){
         if(elem%i!==0){
             return elem;
         }
         
     }

 })

console.log(result);