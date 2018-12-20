//ghadi banauni.

function showTime(){
    //console.clear();
    var date= new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();
   
   console.log(h+":"+m+":"+s);
   
}

setInterval(showTime,1000);
