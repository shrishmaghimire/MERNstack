//
let numberarray=[3,567,898976,1233,5,7];
 const sortedarr=numberarray.sort(sortAscending);
 function sortAscending(a,b){
     /*if(a>b){
         return 1;//1 vo vane pachadi dhakaldincha
     }
     else{
         return -1; //(negative)-1 garyo vane jaha cha tei rahancha
     }
     */
    return a-b; //subtract garda negative aauncha so.
    return a+b; //descending
 }
 console.log(sortedarr);