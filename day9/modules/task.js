const readline=require('readline');
let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

     rl.on('line',(answer)=>{
         rl.on('line',(answer1)=>{
        let newarr=answer.split(",");
        let newarr2=answer1.split(",");
            console.log(...newarr);
            console.log(...newarr2);
            newarr.forEach((elem,i)=>{
                console.log(`${elem} ${newarr[i]}`);
            })
            rl.close();
    })
})

//10 ota number input line
// first input:-1,2,3,4,5
// second input:-6,7,8,9,10
// duita chutta chutai array maa rkahni
// arrray1=[1,2,,4,5];//split
// array2=[6,7,8,9];
// rl.setprompt
// rl.prompt

// display1 
// 1 2 3 4 5
// 6 7 8 9 10

// display2
// 1  6
// 2  7
// 3  8
// 4  9
// 5  10
       
     
  
