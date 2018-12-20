const readline=require('readline'); //readline is a pre-provided module.
let rl=readline.createInterface({
    input:process.stdin,//process is a preprovided object.
    output:process.stdout
});
//rl.question("What is your Name?",(answer)=>{console.log(answer);rl.close()});

/*rl.question("Please input the number",
(answer)=>{let s=0;
    s=Number(answer)+100;
    console.log(s);

    rl.close()
});*/

rl.on('line',(answer)=>console.log(answer),
rl.close()); //nayaline maa previous line maa j type gareko tyo aaauncha
//naya jani line maamathi kto fun call gar vaneko ho
//on-event listen garni.