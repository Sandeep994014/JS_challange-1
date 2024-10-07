// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter )

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

let markHigherBMI ;

markHigherBMI =  BMIMark > BMIJohn ;
console.log(markHigherBMI)