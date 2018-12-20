//calculator vanni class
//result=0
//add(a,b) add garera display ggaruani //replace garni result haru.
//subtract()
//multiply()
//divide()
function calculator(a,b){
    this.result=0;
    this.add=function(a,b){
        this.result=a+b;
       return this.result;
       
    }
    this.subtract=function(a,b){
        this.result=a-b;
        return this.result;
    }
    this.multiplication=function(a,b){
        this.result=a*b;
        return this.result;
    }
    this.division=function(a,b){
        this.result=a/b;
        return this.result;
    }
}
const calc = new calculator();
console.log(calc.add(5,6));
console.log(calc.subtract(10,5));
console.log(calc.multiplication(9,2));
console.log(calc.division(4,2));