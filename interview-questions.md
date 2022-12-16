# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the bucket for the argument (value) to go into in a function. The argument is the value.
With the function below as an example, the x is a parameter and the argument is 4.

const square = (x) => x*x;
console.log(square(4))

Researched answer: Parameters are variables that are defined when the function is declared. Arguments are the actual values that are input when the function is called.

Another example is below. The parameters are in the parentheses (parameter1, parameter2). When the function is called within the console log, the values of 3 and 2 are input. They are the arguments in this example.

const sum = (parameter1, parameter2) => {
  return parameter1 + parameter2
}
console.log(sum(3, 2))

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The method .map() has predefined parameters. They are value, index, and array. Value is required and index and array are optional.

Researched answer: The method .map() has three predefined parameters. They are value of the array at the current iteration,  index of the array at the current iteration, and the array the high-order function was called on. The .map method has to take at least one parameter (value), but the other two parameters are optional.

3. What is the difference between map and filter?

Your answer: Map is a built-in method that iterates through an array and returns a new array of the same length. Filter is also a built-in method that iterates through an array, but it returns a subset of the original array based on criteria set by a conditional evaluation.

Researched answer: Map will always have a representation of each element in the original array and the length of the new array will be the same as the original. Filter, on the other hand, is not the same length as the original and will return a subset of the original - filtering through only the elements that meet the requirements of the function.

4. What is iteration?

Your answer: Iteration is going through each value in an array to evaluate the value or perform some method on it in order to return a new value or filter out specific values in the array.  

Researched answer: Iteration is a sequence of code that is repeated until a specific end result is achieved. An example would be iterating through an array using a for loop or .filter in order to return a subset of the original array that only contains odd numbers.

5. What is the difference between a class and an object?

Your answer: Classes are instructions, or blueprints for creating objects. Objects are a data type that has collections of key-value pairs.

Researched answer: Classes are the blueprints or template for creating objects. So think of the classes like the design plans and then objects are instances of those designs. So if you have design plans for a car, that would be the class whereas the car itself would be the object. The class would designate the limit or valid range of values (like color, model, etc. of a car), the object would be an instance of the design - like a specific car.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I haven't heard of this.

Researched answer: This is something that Javascript does. It means moving a variable to the top of the current function or scope. It's a default behavior for Javascript, but it can cause problems or bugs if a variable is declared after the scope. If you use let and const- if the variable is declared after the function, JavaScript will be aware of the variable but it can't be used until it's declared.
Let will result in an error message and const will not run because of a syntax error. So, to prevent bugs, it's best to always declare variables at the beginning of the the scope.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User stories are descriptions of what a website user will see. The are in natural language and written from the perspective of a final user of the software or app.

Here is an example for the website visuwords.com: I am an English language learner and want to look up a word and get a visual representation of the word with definitions and related words. I type in the URL and come to a landing page with a button that says "Explore" after clicking on the button, I see a sample word and notice "visualize a word" at the top and it appears to be a search field. In the search field, I type the word I want to understand more about and press enter. In the middle of the screen, connected movable colored circles appear with words over them. If you hover over some of the circles, a definition appears. To the left of the connected circles is an unchanging legend that explains that certain colors represent nouns, verbs, adjectives, etc. To the bottom of the screen is a small advertisement.

2. Spread operator: This is a new addition to JavaScript ES6. It is denoted by three dots and can be used with objects that iterate (like arrays.) It can be used to quickly combine objects and arrays. 

3. React state: this is a special variable in React that stores data and determines how a component shows and behaves. Components in React are made dynamic by allowing the value of state to change as the user interacts with the page or application.

4. React props: Props (properties) in React are like parameters in functions and attributes in HTML. They are used to pass data between components of React. Unlike states, they can't be changed.

5. DOM events: DOM stands for Document Object Model and it is used to access the content and structure of a page. How a user interacts with a page is called a DOM event. Some examples of DOM events are: mouse clicks, hovering (over elements on a page) or typing with a keyboard. The DOM should always be "listening" for user changes in order to respond to user inputs and actions and quickly display what the user wants to see.
