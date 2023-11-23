### Answer to the ques no 1
* let greeting;
greetign = {};
console.log(greetign); *
Answer is A {}
Explain - the variable greeting is assigned an empty object {}, and console.log(greeting) will output an empty object {} to the console.

### Answer to question no 2 
* function sum(a, b) {
  return a + b;
}
sum(1, "2"); *
Answer is C '12'
Explain - in this case, "2" is a string, and when it's concatenated with the number 1.Since one operand is a string, JavaScript converts 1 to a string and performs string concatenation, resulting in the string "12".

## Answer to the question no 3
* const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food); *

Answer is A ['🍕', '🍫', '🥑', '🍔']
Explain - when the value of info assign. favorite food to another emoji ("🍝"), it doesn't change the original array of food. The favoriteFood property of the info object is updated to hold the new emoji ("🍝"), but it doesn't affect the food array because food and info.favoriteFood are separate variables.

## Answer to question no 4

* function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi()); *

Answer is B Hi there, undefined
Explain - the function sayHi receives a name parameter, but when it call sayHi() without providing an argument, it will result in undefined.

### Answer to the question no 5 
* let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count); *
Answer is A 1
Explain - the if condition checks if the current num is truthy. It means it checks if the num is not equal to 0. So, the condition increments the count variable only when num is not zero.In the nums array, there is only one element that is not equal to 0 which is 1, so the count will be 1. The output of console.log(count) will be 1.
