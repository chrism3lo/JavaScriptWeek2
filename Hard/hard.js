// HARD: Given the information below for Tom and Jerry.
// ● Tom - height: 9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// tomHeight = 9; // inches
// tomMass = 8; // grams
// jerryHeight = 10; //inches
// jerryMass = 45; // grams

// function bMI(a,b){
//     return a/(b*b);
// }

// tomBMI = bMI(tomMass,tomHeight);
// jerryBMI = bMI(jerryMass,jerryHeight);
// console.log(`Is Tom's BMI higher than Jerry's? ${tomBMI > jerryBMI}`);

let tom ={
    height: 9,
    weight: 8,
    bmi: function(){
        return this.weight/(this.height * this.height)
    }
};

let jerry ={
    height: 10,
    weight: 45,
    bmi: function(){
        return this.weight/(this.height * this.height)
    }
};

console.log(`Is Tom's BMI higher than Jerry's? ${tom.bmi > jerry.bmi}`);


