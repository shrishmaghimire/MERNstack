//let kunai arr = [1,2,[2,3,4]]
//output=[1,2,2,3,4]
let narr=[1,2,[2,3,4,]];
let arr=[];
function flatten(narr) {
    for(let i=0;i<narr.length;i++){
        let element=narr[i];
        if(Array.isArray(element)){
            flatten(element);
        }
        else{
            arr.push(element);
        }   
        
    } 
    return arr;
}
console.log(flatten(narr));




 



