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

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// Pseudocode (rework)
// Input: object with one key-value pair
// Output: a string indicating if the value in the object is divisible by 3.
// Process: Access the number value of each object using dot notation. Use modulo to determine if the number is divisible by three.
// Use conditional statements to run through the objects, use string interpolation to return output.
// (The problem I was having before had to do with using dot notation with string interpolation. I think I was getting the dot notation wrong - or it was the way I was calling the function. But I did get it to work now! :)
//
// Expected output: below
// Actual output as expected:
// const object1 = { number: 15 }
// 15 is divisible by three
// const object2 = { number: 0 }
// 0 is divisible by three
// const object3 = { number: -7 }
// -7 is not divisible by three
//
// --------------Previous Pseudocode--------
// Input: object with one key-value pair
// Output: a string indicating if the value in the object is divisible by 3.
// Process: Access the number value of each object using dot notation. Use modulo to determine if the number is divisible by three. I have gotten parts of this to work but can't get it to work all together. I keep getting an error.
// --------------

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
//
// describe("divisibleBythree", () => {
//   it("returns a string indicating whether or not the a number within the object is divisible by three", () => {
//     expect(divisibleBythree(object1)).toEqual("15 is divisible by three")
//     expect(divisibleBythree(object1)).toEqual("0 is divisible by three")
//     expect(divisibleBythree(object1)).toEqual("-7 is not divisible by three")
//   })
// })

// ---------------JEST test ---- Good FAIL
// /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
// FAIL  ./jest.test.js
//  divisibleBythree
//    ✕ returns a string indicating whether or not the a number within the object is divisible by three
//
//  ● divisibleBythree › returns a string indicating whether or not the a number within the object is divisible by three
//
//    ReferenceError: divisibleBythree is not defined
//
//      133 | describe("divisibleBythree", () => {
//      134 |   it("returns a string indicating whether or not the a number within the object is divisible by three", () => {
//    > 135 |     expect(divisibleBythree(object1)).toEqual("15 is divisible by three")
//          |     ^
//      136 |     expect(divisibleBythree(object1)).toEqual("0 is divisible by three")
//      137 |     expect(divisibleBythree(object1)).toEqual("-7 is not divisible by three")
//      138 |   })
//
//      at Object.expect (jest.test.js:135:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.171 s, estimated 1 s
// Ran all test suites.
//
// ---------------------
//
// // b) Create the function that makes the test pass.
//
// const divisibleBythree = (object) => {
//   if (object.number % 3 === 0)  {
//     return `${object.number} is divisible by three`;
//   } else {
//     return `${object.number} is not divisible by three`;
//     }
//   }
// ------------- JEST TEST ------ PASS
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   divisibleBythree
//     ✓ returns a string indicating whether or not the a number within the object is divisible by three (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.159 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.56s.
// learnacademy@LEARNs-MacBook-Air jest-aileen %
// --------------------------------------

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

// describe("capitalWords", (array) => {
//   it("returns an array of strings with the first letter of each string capitalized", () => {
//     expect(capitalWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//     expect(capitalWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//   })
// })
//
// const capitalWords = (array) => {
//   return array.map(element => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   });
// }
//
// console.log(capitalWords(randomNouns1));
// console.log(capitalWords(randomNouns2));


// describe("firstVowel", () => {
//   it("returns the index number of the first vowel in a string", () => {
//     expect(firstVowel("jest")).toEqual(1)
//   })
// })

// -------------------JEST test PASSED
//
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//   console.log
//     [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
//
//       at Object.log (jest.test.js:182:9)
//
//   console.log
//     [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]
//
//       at Object.log (jest.test.js:183:9)
//
//  PASS  ./jest.test.js
//   capitalWords
//     ✓ returns an array of strings with the first letter of each string capitalized (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.169 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.71s.
// learnacademy@LEARNs-MacBook-Air jest-aileen %


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudocode
// Input: string
// Output: number (index number of the first vowel in the string)
// Process:use an array of vowels and a for loop to find vowels in the string.
// Expected output: below
// Actual output:
// 1
//   at Object.log (jest.test.js:92:9)
// console.log
// 0
//   at Object.log (jest.test.js:93:9)
// console.log
// 2
//   at Object.log (jest.test.js:94:9)


// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// const vowelTester1 = "learn"
// const vowelTester2 = "academy"
// const vowelTester3 = "challenges"

// const firstVowel = () => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < string.length; i++)
//   {
//     if (vowels.includes(string[i].toLowerCase()))
//     {
//       return i;
//     }
//   }
// return -1;

// }

// -----------------VOWELTESTER - JEST TEST - GOOD fail

// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  FAIL  ./jest.test.js
//   firstVowel
//     ✕ returns the index number of the first vowel in a string (1 ms)

//   ● firstVowel › returns the index number of the first vowel in a string

//     ReferenceError: firstVowel is not defined

//       27 | describe("firstVowel", (string) => {
//       28 |   it("returns the index number of the first vowel in a string", () => {
//     > 29 |     expect(firstVowel("jest")).toEqual(1)
//          |     ^
//       30 |   })
//       31 | })
//       32 |

//       at Object.expect (jest.test.js:29:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.146 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air jest-aileen %

// const vowelTester1 = "learn"
// const vowelTester2 = "academy"
// const vowelTester3 = "challenges"
//
// const firstVowel = (string) => {
//   //create an array of vowels
//   const vowels = ["a", "e", "i", "o", "u"];
//   //use a for loop to iterate through each character in the string that is input to see if it's included in the vowel array (using includes). If the character is included, return the index of the character. If the for loop completes without a vowel, return -1.
//   for (let i = 0; i < string.length; i++)
//   {
//     if (vowels.includes(string[i]))
//     {
//       return i;
//     }
//   }
// return -1;
//
// console.log (firstVowel(vowelTester1))
// console.log (firstVowel(vowelTester2))
// console.log (firstVowel(vowelTester3))
//
// // -----------------VOWELTESTER - JEST TEST - PASS
//
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//   console.log
//     1
//
//       at Object.log (jest.test.js:92:9)
//
//   console.log
//     0
//
//       at Object.log (jest.test.js:93:9)
//
//   console.log
//     2
//
//       at Object.log (jest.test.js:94:9)
//
//  PASS  ./jest.test.js
//   firstVowel
//     ✓ returns the index number of the first vowel in a string (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.169 s
// Ran all test suites.
// ✨  Done in 0.62s.
// learnacademy@LEARNs-MacBook-Air jest-aileen %
