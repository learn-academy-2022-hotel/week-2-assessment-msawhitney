// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

Pseudocode
Input: object with one key-value pair
Output: a string indicating if the value in the object is divisible by 3.
Process: Access the number value of each object using dot notation. Use modulo to determine if the number is divisible by three. I have gotten parts of this to work but can't get it to work all together. I keep getting an error.
Expected output: below
Actual output:

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudocode
// Input: array of strings
// Output: array of strings with value at the zero index position of each string capitalized.
// Process: Declare a function called capitalWords with array as an argument.
// Access each element and turn the character at the zero index of each element to a capital letter, turn the characters from the one index on to lowercase and add them back together.
//
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Actual output: [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// Actual output: [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]
// // b) Create the function that makes the test pass.
//
// const capitalWords = (array) => {
//   return array.map(element => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   });
// }
//
// console.log(capitalWords(randomNouns1));
// console.log(capitalWords(randomNouns2));

// a) Create a test with expect statements for each of the variables provided.





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

Pseudocode
Input: string
Output: number (index number of the first vowel in the string)
Process:use indexOf to find vowels in the string. I have had trouble trying to figure out how to run through all the vowels. I can find the first a and then the first e, etc.
Expected output: below
Actual output:

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const vowelFinda = (string) => {
  return string.indexOf("a")
}
console.log(vowelFind (vowelTester1))
//console.log(vowelTester1.split(""))
