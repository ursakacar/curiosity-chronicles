# JavaScript for QA Engineers and SDETs

https://www.udemy.com/course/javascript-for-qa-engineers-and-sdets/

Started with basics on a high level I'm already familiar with: operators, variables, if statement, loops, booleans.

## Vars

* var is function scoped
* let is block scoped

## Arrays

* pop + push
* shift + unshift
* splice + slice
* length is a property, not a method!
* `arr.toString()`
* `arr.join(" | ")` // turning into string with that separator
* `array1.concat(array2)` // merges two arrays
* `array1.concat(array2, array3)` // merges three (or more) arrays
* `arr.sort()` // sorting numbers goes by first 'characters' (first number)
* `arr.reverse()` // takes whole array and turns it backwards, DOES not do a reverse sort!!

```
// sorting a number array
numArray.sort(function(a, b) { return a - b })
```

```
// filtering an array

var num = [1, 5, 10, 12, 45]
var even = num.filter(isEven)

function isEven(value, index, array) {
  return value % 2 == 0
}
```

* Just about anything you can do with forEach() you can do with map(), and vise versa
* `map()` allocates memory and stores return values, returns a new array
* `forEach()` throws away return values and always returns undefined, allows a callback function to mutate the current array

```
// forEach and map

var num = [1, 2, 3, 4, 5]
var newNum

num.forEach(test) // does not return anythong
newNum = num.map(test) // returns an array

function test(value, index, array){
  console.log(index + ": " + value + "\n")
}
```

## Functions

### Defining a function

```
const message = function() {
  console.log("hello")
}

message()
```

### Declaring a function

```
function message() {
  console.log("hello")
}

message()
```

### Return
```
function getMessage() {
  return "Hello there"
}

console.log(getMessage())
```

### Objects

* methods are functions in objects
* `this` refers to the owner of the object

```
var library = {
  books: "Animal Farm",
  checkOut: function() {
    console.log("You have checked out the book" + this.book)
  }
}

library.checkOut()
```

### Javascript Object Notation (JSON)

* it's just for storing data, don't put functions or something stupid in it

```
let school = {
  "name" : "Hogwarts",
  "classes": [
    {
      "title": "Astronomy",
      "teacher": "Teacher One",
      "courseId": "A12",
      "credits": 6
    },
    {
      "title": "Math",
      "teacher": "Mr Jones",
      "courseId": "MUGGLE",
      "credits": 2
    },
    {
      "title": "Defence Against the Dark Arts",
      "teacher": "Dumbledore",
      "courseId": "DADA",
      "credits": 12
    }
  ]
}

// you can (obviosly) do stuff like
school
school.name
school.classes
school.classes[1].title

```

* this example above is pretty print, minified is all in single line (for space saving)

### String methods

```
let greeting = "Hello from the other side"
greeting.length
greeting.indexOf("side") //first occurance of the string
greeting.lastIndexOf("side") //last occurance of the string
greeting.search("side") //first occurance of the string
```

#### Slice, substring, substr

```
var string = "One, Two, Three"
var sliceTwo = string.slice(5,8)
var sliceThree = string.slice(-5) // can do negative values
console.log(sliceTwo)
console.log(sliceThree)
console.log(string) // string is unchanged
```

```
var string = "One, Two, Three"
var sliceTwo = string.substring(5,8)
var sliceThree = string.substring(-5) // can NOT do negative values
console.log(sliceTwo)
console.log(sliceThree)
```

```
var string = "One, Two, Three"
var sliceTwo = string.substr(5,10) //10 here is the LENGTH of characters to include
console.log(sliceTwo)
```

#### Replace

```
var string = "I have turkey for lunch and turkey for dinner!"
var lunch = string.replace("turkey", "pasta") // ("what-to-replace", "with-what-to-replace"), will only do so with the first instance of the match
var lunchCaseSensitive = string.replace(/TURKEY/i, "pasta") // i = insensitive, case insensitive
var lunchGlobal = string.replace(/turkey/g, "pasta") // g = global, replace all occurences
var lunchGlobal = string.replace(/TURKEY/gi, "pasta")

console.log(lunch)
console.log(lunchCaseSensitive)
console.log(lunchGlobal)
```

#### Converting and trimming

```
var word = "happy"
var upperCase = word.toUpperCase() // .toLowerCase()
console.log(word)
```

```
var sentence = "     happy bunny    "
var trim = sentence.trim() // removes whitespace from the beginning and end
console.log(trim)
```

#### String to an array

```
var string = "1, 2, 3, 4, 5"
var array = string.split(",") // "what-to-split-by"
console.log(array)
// this is an array of strings!
```

```
var stringFive = "5"
console.log(stringFive)
var numberFive = Number(stringFive)
console.log(numberFive)
```

* Number() converts the type whereas parseInt parses the value of input.

```
// Parsing
parseInt("32px");   // 32
parseInt("5e1");    // 5

// Convert type
Number('32px');     // NaN
Number('5e1');      // 50
```

### Number methods

```
// convert a number to string
var number = 1234
var string = number.toString()
typeof string
(123.5).toString()
```

#### Math() object

* has a bunch of methods

```
Math.PI
Math.round(4.54)
Math.pow(5, 2)
Math.sqrt(25)
Math.min(1, 50, 12, -45)
Math.max(1, 50, 12, -45)
Math.random() // random number between 0 and 1
```

### Dates

```
var date = new Date()

date.getFullYear()
date.getMonth() // starts with 0 !!
date.getDate()
date.getHours()
date.getMinutes()
date.getSeconds()

var today = date.getDate() + "-" + (date.getMonth() +1 ) + "-" + date.getFullYear()
```

```
var newDate - new Date()
newDate.setFullYear(2020)
newDate.setFullYear(2020, 4, 6)

newDate.getTime() // miliseconds since Jan 1, 1970
```

### The DOM

* when a browser loads HTML content, it creates DOM (document object model), a tree-like object
* siblings = on the same level

```
var headingText = document.getElementById("heading")
var paragraphText = document.getElementsByClassName("content")[1]
var heading2Text = document.getElementsByTagName("h2")[0]

console.log(document.body)
console.log(document.URL)
console.log(document.title)
console.log(document.head)

document.getElementById("heading").innerHTML = "This is a heading"
document.getElementById("heading").style.color = "blue"
```

* `createElement`. `createTextNode`, `insertBefore`, `removeChild`

### JS Events

* `<button onclick="myFunction()">Click me</button>`
* `document.getElementById("myBtn").addEventListener("click", displayDate);`
* events & event listeners
* `this` will refer to the thing that had the event on it

### Advanced objects

```
// adding & deleting properties (!not just values!) to objects

var person = {
  firstName: "Elton",
  favColor: "purple"
}

person.age = 23
delete person.fav Color
```

```
// two different ways to add methods

var person = {
  firstName: "Elton",
  lastName: "Green",
  myName: function() {
    console.log(this.firstName + " " + this.lastName)
  }
}

person.myName

var anotherPerson = {
  firstName: "Wendy",
  lastName: "Green",
  myName() { // another anotation for methods
    console.log(this.firstName + " " + this.lastName)
  }
}

anotherPerson.myName
```

#### Getters and setters

* Getter gets the value as a property (not as function)
* Setter allows you to update the value

```
var person = {
  firstName: "Elton",
  lastName: "Green",
  get myName() {
    console.log(this.firstName + " " + this.lastName)
  },
  set myName(value) {
    var name = value.split(" ")
    this.firstName = name[0];
    this.lastName = name[1]
  }
}

person.myName = "Bella Black"
```

#### Constructors

* constructor is a blueprint of an object

```
function Person(first, last) { // capital P!
  this.firstName = first
  this.lastName = last
  this.myName = function() {
    console.log(this.firstName + " " + this.lastName)
  }
}

var witch = new Person("Bella", "Black")
```

#### Prototypes

* you can't add properties to a constructor like we did for 'regular' objects, but we can use prototypes

`Person.prototype.favColor = "blue"`
`Person.prototype.printColor = function() {console.log(this.favColor)}`

### Linting

* install ES lint globally
* `npm init`
* `eslint --init`

### Testing

* testing specific functions
* actual vs. expected

```
function test(testName, expected, actual) {
  if (expected === actual) {
    console.log("Tests passed.")
  } else {
    console.log("Tests failed. Expected: " + expected + " is not equal to actual: " + actual)
  }
}

function add(num1, num2){
  return num1 + num2
}

test("Test adding two positive numbers.", 5, add(2, 3))
test("Test adding 0 and a positive number.", 1, add(0, 1))
test("Test adding decimal and whole number", 3.5, add(1.5, 2))
test("Test adding two digit numbers.", 25, add(15, 10))
test("Test adding singe and two digit number.", 17, add(15, 2))
test("Test adding negative and positive number.", -3, add(-5, 2))

// will fail, you should check for type in your function
test("Test adding number string and number.", 5, add("2", 3))

test("Test adding string plus string.", 25, add("2", "5"))

// passes, but you should be checking type
test("Test adding boolean plus string.", "trueFoo", add(true, "Foo"))

// these two fail too
test("Test missing one argument.", NaN, add(1))
test("Test missing both arguments.", NaN, add())
```

### Final Project

### Coding interviews

