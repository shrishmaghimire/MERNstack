//random prints number from 0 to 1
//math.random()*(thulonumber-sanonumber+sanonumber)+sanonumber.
// console.log((Math.random()*5-3)+3);
//creating dice
//   (Math.floor(Math.random()*(6-1+1))+1);

// pot and chakka.
     let a=(Math.floor(Math.random()*(6-1+1))+1);
    if(a==1||a==6)
    {
        console.log("YOU WIN");
    }
    else{
        console.log("YOU LOSE");
    }