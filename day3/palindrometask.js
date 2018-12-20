let n='abba';
/*-string to Array
-reberse the Array
-join the Array
compare reverse string and origina; string
show SpeechRecognitionResult */
let splitarr=n.split('');
let a=splitarr.reverse();
let b=splitarr.join('');
if(b==n)
{
    console.log("palindrom");
}
else{
console.log("not a palindrome");
}

