const readline= require('readline');
const fs=require('fs');
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log("You can write your cli commancs");
rl.on('line',(answer)=>{
    let[command,fileName,newName]=answer.split(' ');
    executeCommand(command,fileName);
}) 
 const executeCommand=(command,fileName)=>{
     switch(command){
         case 'touch':
            createFile(fileName);
        break;
        case 'delete':
            deleteFile(fileName);
        break;
        case 'rename':
            renameFile(fileName,newName);
        break;
        default:
        console.log("Invalid command")
        rl.close();

     }
 }

 const createFile=(fileName)=>{
     fs.writeFile(fileName,"hello",(err,sucess)=>{
        if(err){
            console.log("ERRRROR")
        }
        else{
            console.log("File Saved")
        }
     })
 }
 const deleteFile=(fileName)=>{
     fs.link(fileName,(err)=>{
         if(err){
             console.log(err)
         }
         else{
             console.log("file deleted")
         }
        
     })
 }
 const renameFile=(fileName)=>{
     fs.rename(fileName,newName),(err)=>{
         if(err){
             console.log(err);
         }
         else{
             console.log("File renamed")

         }
         }
     }
     //readfilesync
     //writefilesync
 