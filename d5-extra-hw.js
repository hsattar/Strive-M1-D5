// Additional assignments for Day 5

/* EXTRA 1
Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
The function should return the sum of just the numbers bigger than 5.
*/

console.log('---------- Answer Q1 --------\n')

let randomNumberArray = []
const giveMeRandom = n => {
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11)
        randomNumberArray.push(randomNumber)
    }
}

let sumOfNumbersOver5 = 0

const checkArray = randNumArray => {
    for (number of randNumArray) {
        console.log(number > 5)
        if (number > 5) {
            sumOfNumbersOver5 += number
        }
    }
}

giveMeRandom(5)
console.log(randomNumberArray)
console.log(checkArray(randomNumberArray))
console.log(sumOfNumbersOver5)


/* EXTRA 2
In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

console.log('\n\n---------- Answer Q2 --------\n')

shoppingCart = [
    {
        price: 10.99,
        name: 'Product',
        id: 123,
        qty: 1
    }, 
    {
        price: 5.99,
        name: 'Cheap Product',
        id: 456,
        qty: 6
    }, 
    {
        price: 99.99,
        name: 'Expensive Product',
        id: 789,
        qty: 1
    }, 
]

let totalPrice = 0
const shoppingCartTotal = () => {

    for (item of shoppingCart) {
        totalPrice += (item.price * item.qty)
}

}

shoppingCartTotal()
console.log(totalPrice)

/* EXTRA 3
In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log('\n\n---------- Answer Q3 --------\n')

const addToShoppingCart = (price, name, id, qty) => {
    let newItem = {
        price: price,
        name: name,
        id: id, 
        qty: qty
    }

    shoppingCart.push(newItem)
}

addToShoppingCart(15, 'Test', 159, 3)
console.log(shoppingCart.length)

/* EXTRA 4
In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

console.log('\n\n---------- Answer Q4 --------\n')

let expensiveProduct = shoppingCart[0].price
const maxShoppingCart= () => {
    for (item of shoppingCart) {
        if (item.price > expensiveProduct) {
            expensiveProduct = item.name
        }
    }
    console.log(expensiveProduct)
}

maxShoppingCart()



/* EXTRA 5
In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

console.log('\n\n---------- Answer Q5 --------\n')


/* EXTRA 6
Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

console.log('\n\n---------- Answer Q6 --------\n')


/* EXTRA 7
Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

console.log('\n\n---------- Answer Q7 --------\n')


/* EXTRA 8
Write a function called "longest" to find the longest string from a given array of strings.
*/

console.log('\n\n---------- Answer Q8 --------\n')


/* EXTRA 9
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

console.log('\n\n---------- Answer Q9 --------\n')


/* EXTRA 10
Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

console.log('\n\n---------- Answer Q10 --------\n')


/* EXTRA 11
Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
The result should be a matrix of x times y with, as value, the index of the position.
Ex.: x = 3, y = 2
["00","01","02"
"10","11","12"]
*/

console.log('\n\n---------- Answer Q11 --------\n')


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/