
let ages=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(i=0;i<ages.length;i++){
    sum=sum+ages[i];
}
console.log(sum);

let v = ages.reduce(findSum,0); 
 function findSum(accumulator,element) //accumulator maa suru maa 0 bascha ani rturn gareko value bascha.
{
    return accumulator+element;
}
console.log(v);
