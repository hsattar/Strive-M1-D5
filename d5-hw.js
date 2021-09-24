/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log('---------- Answer Q1 --------\n')

const area = (l1, l2) => {return l1 * l2}

console.log(area(3, 5))

/* EXERCISE 2
Write a function called "crazySum" which receives two integers as parameters.
It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log('\n\n---------- Answer Q2 --------\n')

const crazySum = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3
    }
    return num1 + num2
}

console.log(crazySum(5, 5))

/* EXERCISE 3
Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

console.log('\n\n---------- Answer Q3 --------\n')

const crazyDiff = (number) => {
    if (number > 19) {
        return (number - 19) * 3
    }
    return 19 - number
}

console.log(crazyDiff(22))

/* EXERCISE 4
Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log('\n\n---------- Answer Q4 --------\n')

const boundry = n => {
    if (((n >= 20) && (n <= 100)) || (n === 400) ) {
        return true
    } else {
        return false
    }
}

console.log(boundry(400))

/* EXERCISE 5
Write a function called "strivify" which accepts a string as a parameter.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log('\n\n---------- Answer Q5 --------\n')

const strivify = (string) =>  {
    if (string) {

    }
}

/* EXERCISE 6
Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
HINT: Modulus Operator
*/

console.log('\n\n---------- Answer Q6 --------\n')

const check3and7 = (positiveNumber) => {
    if ((typeof positiveNumber === 'number') && (positiveNumber > 0)) {
        if ((positiveNumber % 3 === 0) || (positiveNumber % 7 === 0)) {
            console.log(`The number ${positiveNumber} is a multiple of 3 or 7`)
        } else {
            console.log(`The number ${positiveNumber} is not a multiple of 3 or 7`)
        }
    } else {
        console.log('Choose A Positive Number')
    }
}

check3and7(50)

/* EXERCISE 7
Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log('\n\n---------- Answer Q7 --------\n')

/* EXERCISE 8
Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log('\n\n---------- Answer Q8 --------\n')

/* EXERCISE 9
Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log('\n\n---------- Answer Q9 --------\n')

/* EXERCISE 10
Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log('\n\n---------- Answer Q10 --------\n')

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/