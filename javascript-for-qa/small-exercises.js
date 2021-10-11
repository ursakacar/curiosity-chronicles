/* eslint-disable space-before-function-paren */
// Just some mini coding assignemnts that were given during the course

const owedAmount = 100
const paidAmount = prompt('That would be ' + owedAmount + '. How much are you paying?')
subtract()

function subtract() {
  const difference = paidAmount - owedAmount

  if (paidAmount > owedAmount) {
    console.log('You gave too much. Your change due is $' + difference)
  } else if (paidAmount < owedAmount) {
    console.log('You gave too little. You still owe ' + Math.abs(difference))
  } else if (paidAmount === owedAmount) {
    console.log('You gave the exact amount.')
  } else {
    console.log("I'm sorry, something went wrong. Maybe " + paidAmount + ' is in the wrong currency, or not a number? Please try again.')
  }
}

/*
Your assignment is to build a simple object that contains multiple properties and functions.

Here are the things that should be included:
1. An object named "restaurantMenu"
2. Properties that contains
    a. The name of the restaurant
    b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.
    c. A method that lists out all the menu items with their prices via an alert.
    d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.
*/

const restaurantMenu = {
  name: 'How about some dumplings?',
  menu: [
    {
      name: 'One and a half dumpling',
      price: 3
    },
    {
      name: 'Three dumplings',
      price: 6
    },
    {
      name: 'A dozen dumplings',
      price: 15
    },
    {
      name: 'Dumplings for two',
      price: 17
    },
    {
      name: 'Dumplings for everyone',
      price: 25
    }
  ],
  listItems: function() {
    let fullMenu = ''

    for (const dish in this.menu) {
      fullMenu += this.menu[dish].name + ' cost: ' + this.menu[dish].price + '\n'
    }
    alert(fullMenu)
  },
  orderFood: function() {
    const order = prompt('Which dish would you like to order?')

    if (this.menu.some(person => person.name === order)) {
      alert('You ordered ' + order + '. Thank you and enjoy your meal!')
    } else {
      alert("Oops, looks like we don't have " + order + ' on the menu.')
      this.listItems()
      this.orderFood()
    }
  }
}

restaurantMenu.listItems()
restaurantMenu.orderFood()

/*
I want you to do the following to the story.
1. Find all instances of the word "cheeseburgers", and replace it with the word "hamburgers". Be sure to note the casing of the word.
2. Find all instances of the word "bun", and capitilize all the letters.

Then I want you to provide the following information using string methods.
1. How many characters are in the story?
2. How many words are in the story?
*/

let story = 'Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need.'

const storyArray = story.split(' ')

story = story.replace(/Cheeseburger/g, 'Hamburger')
story = story.replace(/cheeseburger/g, 'hamburger')
story = story.replace(/bun/gi, 'BUN')

console.log(story)
console.log('Number of words in the story: ' + storyArray.length)
console.log('Number of characters in the story: ' + story.length)

/*
I want you to create a "Random Number Generator".
You should create a function that takes in 2 numbers.
I want only whole numbers. No decimals.
*/

let numberPrompt

function getNumber() {
  numberPrompt = Number(prompt('Pick a number!'))
  numberChecks(numberPrompt)
  return numberPrompt
}

function numberChecks(number) {
  if (isNumber(number)) {
    alert('Number saved!')
    return number
  } else {
    alert('Your input is not a number. Try again.')
    getNumber()
  }
}

function isNumber (number) {
  return !isNaN(number)
}

function getRandom() {
  const numberOne = getNumber()
  const numberTwo = getNumber()

  return Math.floor(Math.random() * (numberTwo - numberOne) + numberOne)
}

getRandom()
