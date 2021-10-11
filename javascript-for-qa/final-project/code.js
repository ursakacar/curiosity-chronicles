/* eslint-disable space-before-function-paren */
/*
The utility page is a basic web page that gives you data for testing forms so that you don't have to come up with your own random data.
It also has a few things added like ft to inches conversion and text length comparison.
*/

const randomNumberButton = document.getElementById('button-random-number')
const randomRangeButton = document.getElementById('button-random-number-range')
const longLoremipsumButton = document.getElementById('button-long-loremipsum')
const currentDateButton = document.getElementById('button-current-date')
const currentTimeButton = document.getElementById('button-current-time')
const inchToFtButton = document.getElementById('button-inch-to-ft')
const ftToInchButton = document.getElementById('button-ft-to-inch')
const compareSameLengthButton = document.getElementById('button-compare-same-length')
const randomPasswordButton = document.getElementById('button-random-password')
const oddEvenButton = document.getElementById('button-odd-even')
const randomColorButton = document.getElementById('button-random-color')

const resultRandomNumber = document.getElementById('result-random-number')
const resultRandomRange = document.getElementById('result-random-number-range')
const resultLongLoremipsum = document.getElementById('result-long-loremipsum')
const resultCurrentDate = document.getElementById('result-current-date')
const resultCurrentTime = document.getElementById('result-current-time')
const resultInchToFt = document.getElementById('result-inch-to-ft')
const resultFtToInch = document.getElementById('result-ft-to-inch')
const resultCompareSameLength = document.getElementById('result-compare-same-length')
const resultRandomPassword = document.getElementById('result-random-password')
const resultOddEven = document.getElementById('result-odd-even')
const resultRandomColor = document.getElementById('result-random-color')

randomNumberButton.addEventListener('click', getRandomNumber)
randomRangeButton.addEventListener('click', getRandomRangeNumber)
longLoremipsumButton.addEventListener('click', getLongLoremipsum)
currentDateButton.addEventListener('click', getCurrentDate)
currentTimeButton.addEventListener('click', getCurrentTime)
inchToFtButton.addEventListener('click', convertInchToFeet)
ftToInchButton.addEventListener('click', convertFeetToInch)
compareSameLengthButton.addEventListener('click', compareStringSameLength)
randomPasswordButton.addEventListener('click', getRandomPassword)
oddEvenButton.addEventListener('click', getOddOrEven)
randomColorButton.addEventListener('click', getRandomColor)

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101)
  writeToHTML(resultRandomNumber, randomNumber)
}

function getRandomRangeNumber() {
  let rangeStart = document.getElementsByName('random-start')[0].value
  let rangeEnd = document.getElementsByName('random-end')[0].value

  if (inputEmpty(rangeStart, resultRandomRange) ||
  inputEmpty(rangeEnd, resultRandomRange)) {
    return
  }

  rangeStart = stringToNumber(rangeStart)
  rangeEnd = stringToNumber(rangeEnd)
  const randomRange = Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart)
  writeToHTML(resultRandomRange, randomRange)
}

function getLongLoremipsum() {
  fetch('https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1').then(response => {
    return response.json()
  }).then(loremipsumAPI => {
    writeToHTML(resultLongLoremipsum, loremipsumAPI)
  })
}

function getCurrentDate() {
  let currentDate = new Date()
  currentDate = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear()
  writeToHTML(resultCurrentDate, currentDate)
}

function getCurrentTime() {
  let currentTime = new Date()
  currentTime = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds()
  writeToHTML(resultCurrentTime, currentTime)
  setTimeout(getCurrentTime, 1000)
}

function convertInchToFeet() {
  let inputInches = document.getElementsByName('input-inches')[0].value
  if (inputEmpty(inputInches, resultInchToFt)) {
    console.log('im here')
    return
  }
  inputInches = stringToNumber(inputInches)
  const resultFeet = inputInches / 12
  writeToHTML(resultInchToFt, resultFeet)
}

function convertFeetToInch() {
  let inputFeet = document.getElementsByName('input-feet')[0].value
  if (inputEmpty(inputFeet, resultFtToInch)) {
    return
  }
  inputFeet = stringToNumber(inputFeet)
  const resultInches = inputFeet * 12
  writeToHTML(resultFtToInch, resultInches)
}

function compareStringSameLength() {
  const firstWord = document.getElementsByName('first-word')[0].value
  const secondWord = document.getElementsByName('second-word')[0].value

  if (inputEmpty(firstWord, resultCompareSameLength) ||
 inputEmpty(secondWord, resultCompareSameLength)) {
    return
  }

  if (firstWord.length === secondWord.length) {
    writeToHTML(resultCompareSameLength, 'Words are the same length')
  } else {
    writeToHTML(resultCompareSameLength, 'Words have different lengths')
  }
}

function getRandomPassword() {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const passwordLength = Math.random() * (20 - 6) + 6
  let password = ''

  for (let i = 0; i <= passwordLength; i++) {
    const randomCharacter = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomCharacter, randomCharacter + 1)
  }
  writeToHTML(resultRandomPassword, `${password} (password length: ${password.length})`)
}

function getOddOrEven() {
  let oddEvenNumber = document.getElementsByName('odd-even')[0].value
  if (inputEmpty(oddEvenNumber, resultOddEven)) {
    return
  }
  oddEvenNumber = stringToNumber(oddEvenNumber)

  if (oddEvenNumber % 2 === 0) {
    writeToHTML(resultOddEven, 'Number is even')
  } else {
    writeToHTML(resultOddEven, 'Number is odd')
  }
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  resultRandomColor.style.color = `#${randomColor}`
  writeToHTML(resultRandomColor, `#${randomColor}`)
}

function inputEmpty(input, element) {
  if (input.length === 0) {
    writeToHTML(element, 'error: Empty input')
    return true
  }
}

function writeToHTML(element, result) {
  element.innerHTML = result
}

function stringToNumber(number) {
  const toNumber = parseInt(number)
  return toNumber
}
