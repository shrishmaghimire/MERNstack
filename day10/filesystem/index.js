const fs = require('fs');
// fs.writeFile('newfile.txt','Hello I am new file',(err,sucess)=>{
//     if(err){
//         console.log("ERROR!!!!")
//     }
//     else{
//         console.log('FILE SAVED!!!')
//     }
// })

// fs.appendFile('newfile.txt','Hello i am append to new file',(err,sucess)=>{
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log("File appended")//append le last ma data jodne kaam garcha.
//     }
// })

// fs.readFile('newfile.txt','utf8',(err,sucess)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(sucess)
//     }
// })

// fs.rename('newfile.txt','nayaFile.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file rename")
//     }
// })

fs.unlink('nayaFile.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File deleted")
    }
})