// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer: This will convert this string to an array with each of the letters separated and one value is a space.

// b) Verify and explain: The following was the output, as expected. The string was split between characters because the argument "" (without a space) was input. This indicated the array should be split between characters.
// [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]

// --------------------2) What will this log?
//
// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))
//

// a) Your answer: Output will be: Hello LEARN Student!
// b) Verify and explain:
// Output: undefined

//I was wrong. Output was undefined because there was no return included.
// I added a return and verified again.

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// Here is the ouput afer a return was added on line 38: Hello, LEARN Student!


// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This will return a new array with each value in the original array multiplied by 2. Like this: [8, 10, 12, 14, 16]

// b) Verify and explain:  Output was [ 8, 10, 12, 14, 16 ] - as expected.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will return a subset of the original array with only odd numbers [11, 13, 15]
// b) Verify and explain:  Output was [ 11, 13, 15 ] - only odd numbers, as expected.
// Here's why: Number % 2!==0 means the remainder of the given number value divided by 2 is not equal to zero (which would indicate an odd number). Only numbers that met this condition were filtered into the subset that was output after iterating through the original array.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:  This will return - Javascript.
// b) Verify and explain:  Output was as expected - JavaScript. The dotnotation accessed the property of the object as follows:
// myCodingSkills - name of the object
// .languages - the first key in the object
// [0] - index position of the value "Javascript"

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Hotel"
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// // console.log(learnStudent)

// a) Your answer:  This will create a new Learn object with the name "George" and cohort: Hotel, year: 2022.
// b) Verify and explain:  Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// Outcome was as expected. "George" was added as an argument and this changed only the student key-value pair in the new object. The others key-value pairs stayed the same.
