//Create an array of students holding their last name, first name, and age with 3 students. To
//validate, please log a greeting with the first name, last name and age of the 2nd student. The output
//should look like "Hello, my name is John Doe and I'm 19 years old."


let student1 = ["Chris", "Melo", 22];
let student2 = ["Alex", "Barrera", 22];
let student3 = ["Donovan", "Bowman", 24];
let allStudents = [student1, student2, student3];

 console.log(`Hello, my name is ${allStudents[1][0]} ${allStudents[1][1]} and I'm ${allStudents[1][2]} years old.`);
