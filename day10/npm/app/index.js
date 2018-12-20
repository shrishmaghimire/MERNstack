const readline=require('readline');
let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let todoArr=[];
let choice;
function start(){
    console.log("Please enter your choice");
console.log("1.Insert todo");
console.log("2.Show all todo");
console.log("3.Delete todo");
rl.on('line',(answer)=>{
choice=answer;

switch(choice){
    
    case '1': 
            rl.question("Enter title: ",(ans)=>{
            rl.question("Enter description: ",(ans1)=>{
                let newarr={
                    title:ans,
                    description:ans1
                }
                todoArr.push(newarr);
                console.log("Your data are saved.");
                rl.question("Press enter to go to main page",answer1=>{
                    start();
                })
                
            
    })
        })
        // rl.on('line',answer=>{start();}) rl.on('line',answer=>{start();})
    break;
    
    case '2':
    console.clear();
    console.log("Choose your todo");
         todoArr.forEach(function(elem,index){
             
            
             console.log(`${index+1}. ${elem.title}`);
             
            //  console.log(elem.description);
         })
        
        
     
     }
     ca
    
    })
   
}

start();
