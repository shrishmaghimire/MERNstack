const _=require('underscore')

var even = _.find([1, 2, 3, 4, 5, 6],(num)=>num%2==0);
console.log(even);