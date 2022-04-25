//Write a function named min that takes two arguments and returns their minimum.

let num1 = 10;
let num2 = 15;

function min(a,b){
    if(a > b){
        return b;
    } else if (a < b){
        return a;
    } else {
        console.log('The numbers are equal.')
    }
}
console.log(min(10,15));


