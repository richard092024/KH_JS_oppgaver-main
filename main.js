const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

myArray.push("mango");
for (const item of myArray) {
  console.log(item);
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

myArray.splice(2, 1);
myArray.forEach((item) => console.log(item));

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

myArray.shift();
myArray.pop();
console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space

const myArrayString = myArray.join(" ");
console.log(myArrayString);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument

function numberSquared(number) {
  return number * number;
}
console.log(numberSquared(4)); // Example call

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.

function oddOrEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(5)); // Example call

//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;

function Fibbonacci(number) {
  let a = 0,
    b = 1,
    c;
  for (let i = 0; i < number; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}
Fibbonacci(10); // Example call to print 10 Fibonacci numbers
