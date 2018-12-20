let sentence='i am a good aalu Person b';
let splitarr=sentence.split(' ');
for(let i=0; i<splitarr.length;i++){

    console.log(splitarr[i].replace(splitarr[i].charAt(0),splitarr[i].charAt(0).toUpperCase())); 
}