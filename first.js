//Casting in Java script or type conversions (Explisit convertion)


//Converting a string to a number 
let num = Number("1234")

console.log(typeof num)

//Converting a Number to a string

let num1 = String(8)
console.log("Type of the variable is: " + typeof num1)


//type coversion.
let variable02;
console.log(variable02, typeof variable02);

variable02 = 10
console.log(variable02, typeof variable02);

variable02 = variable02 + "";
console.log(variable02, typeof variable02);

variable02 = variable02 - 2;
console.log(variable02, typeof variable02);

variable02 = !variable02
console.log(variable02, typeof variable02);

//converting a random number to boolean to see what the output.
console.log("Converting 1 into boolean: " + Boolean(1));
console.log("Converting 2 into boolean: " + Boolean(2));
console.log("Converting 3 into boolean: " + Boolean(3));
console.log("Converting 4 into boolean: " + Boolean(4));
console.log("Converting 5 into boolean: " + Boolean(5));
console.log("Converting 10 into boolean: " + Boolean(10));
console.log("Converting 0 into boolean: " + Boolean(0));
//By the above conversion we can conclude that in JavaScript only null
//values and 0 are converted into false, When converting into boolean.

// usint parseInt() .

let variable03 = "Kulanaka 7";
console.log(variable03);

variable03 = parseInt("7 Kulanaka");
console.log(variable03);