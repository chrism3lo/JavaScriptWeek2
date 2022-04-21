// Create a program that accepts a number (1-12) as input and logs to the console that number
//and its corresponding month. For example: if the user enters the number 3, then it should return the
//month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let input = prompt("Please enter a number 1-12 for the corresponding month.");

if (Number(input) >= 1 && Number(input) <= 12){
    console.log(`The month you chose is ${months[Number(input)-1]}.`);
    alert(`The month you chose is ${months[Number(input)-1]}.`);
} else {
    alert('Please enter a number between 1  & 12.');
}



