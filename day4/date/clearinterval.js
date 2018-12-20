let myInterval=setInterval(sayHello,1000);
setTimeout(clearMyInterval,10000);
function sayHello()
{
    console.log("Hyalo franns");
}
function clearMyInterval(){
    clearInterval(myInterval);
}