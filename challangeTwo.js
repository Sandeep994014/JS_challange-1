// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

let BMIMark ;
let massMark = 78;
let heightMark = 1.69;

BMIMark = massMark / (heightMark * heightMark)
console.log(BMIMark)

let BMIJohn ;
let massJohn  = 92;
let heightJohn = 1.95;

BMIJohn = massJohn  / (heightJohn * heightJohn)
console.log(BMIJohn)

// let markHigherBMI ;

// markHigherBMI =  BMIMark > BMIJohn ;
// console.log(markHigherBMI)

if(BMIMark > BMIJohn){
    console.log(`Mark's ${BMIMark.toFixed(1)} is higher than John's! ${BMIJohn.toFixed(1)}`);
}else if(BMIMark === BMIJohn){
    console.log("Marks and jhons has equall wait and Bmi");
}else{
    console.log(`John's ${BMIJohn.toFixed(1)} is higher than Mark's! ${BMIMark.toFixed(1)}`);
}