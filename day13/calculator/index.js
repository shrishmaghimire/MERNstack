function c(val)
{
    document.getElementById("d").value=val;

}
function v(val){
    document.getElementById("d").value+=val;

}
function e(){
    try 
    { 
      c(eval(document.getElementById("d").value)) 
    } 
    catch(e) 
    {
      c('Error') 
    } 
    }  
    // function cos_function()
    // {
    
    //     document.getElementById("d").value+=Math.cos();
    // }
    // function sin_function()
    // {
      
    //     document.getElementById("d").value+=Math.sin();
    // }
    // function tan_function()
    // {
       
    //     document.getElementById("d").value+=Math.tan();
    // }    
    function cos(form) {
        form.display.value = Math.cos(form.display.value);
    }
    

