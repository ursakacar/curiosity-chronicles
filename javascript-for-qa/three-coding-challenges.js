/* eslint-disable space-before-function-paren */
/*
A Palindrome is a word or phrase that is the same forwards of backwards.
Example: "Anna" backwards is "Anna"

- Write a function that checks if a word or phrase is a palindrome.
- Write some tests for your function.
*/

function isPalindrome(word) {
  if (!(typeof word === 'string' || word instanceof String)) {
    return false
  }
  word = stringCleanup(word)

  for (let i = 1; i <= (word.length / 2); i++) {
    if (word[i - 1] !== word[word.length - i]) {
      return false
    }
  }
  return true
}

function stringCleanup(originalString) {
  const removeSpacesRegex = /\s/g
  const removeSpecialCharsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

  let cleanedUpString

  cleanedUpString = originalString.toLowerCase()
  cleanedUpString = cleanedUpString.replace(removeSpacesRegex, '')
  cleanedUpString = cleanedUpString.replace(removeSpecialCharsRegex, '')

  return cleanedUpString
}

function testIsPalindromeFunction(testName, expected, actual) {
  if (expected === actual) {
    console.log('Test passed.')
  } else {
    console.log('Test FAILED. Expected result: ' + expected + ' is not equal to actual result: ' + actual)
  }
}

// Palindromes
testIsPalindromeFunction('Lowercase palindrome, even number of characters', true, isPalindrome('anna'))
testIsPalindromeFunction('Lowercase palindrome, odd number of characters', true, isPalindrome('anina'))
testIsPalindromeFunction('Upper+ lowercase palindrome, even number of characters', true, isPalindrome('AnNa'))
testIsPalindromeFunction('Upper+ lowercase palindrome, odd number of characters', true, isPalindrome('aNiNA'))
testIsPalindromeFunction('Full sentence palindrome with spaces and special characters', true, isPalindrome('Was it a car or a cat I saw?'))
testIsPalindromeFunction('Full sentence palindrome with spaces and special characters ver.2', true, isPalindrome('Mr. Owl ate my metal worm'))

// Not palindromes
testIsPalindromeFunction('Not palindrome, word', false, isPalindrome('test'))
testIsPalindromeFunction('Not palindrome, sentence', false, isPalindrome('The quick brown fox jumps over the lazy dog'))
testIsPalindromeFunction('Not palindrome, null', false, isPalindrome())
testIsPalindromeFunction('Not palindrome, number', false, isPalindrome(1))
testIsPalindromeFunction('Not palindrome, String array', false, isPalindrome(['madam', 'anna']))
testIsPalindromeFunction('Not palindrome, numbers array', false, isPalindrome([1, 2]))

/*
Create a function that takes an array as a parameter and compares the values of the array.
Print out the number of matches.

Here is an example:
[1, 1, 2, 3]

1 and 1 are the same.
1 and 2 are different.

Print out would have a count of 1 match.

Write some tests for your function.
*/

// const origArray = [1, 2, 1, 2, 3, 3, 4]

function countArray(origArray) {
  let sameCount = 0
  for (let i = 0; i < origArray.length - 1; i++) {
    for (let j = i + 1; j < origArray.length; j++) {
      if (origArray[i] === origArray[j]) {
        sameCount++
        break
      }
    }
  }
  return sameCount
}

function testCountArray(testname, expected, actual) {
  if (expected === actual) {
    console.log(testname + ' Test passed')
  } else {
    console.log(testname + 'Test FAILED. Expected result: ' + expected + ' is not equal to actual result: ' + actual)
  }
}

testCountArray('Count should be 0:', 0, countArray([1, 2, 3]))
testCountArray('Count should be 1:', 1, countArray([1, 1, 3]))
testCountArray('Count should be 4:', 4, countArray([1, 1, 2, 3, 2, 6, 2, 6]))
testCountArray('Count should be 2:', 2, countArray([1, 'string', true, 3, 2, 6, 2, 6]))
testCountArray('Count should be 2:', 2, countArray(['string', true, 'string', 'test', true]))

/*
Create a function that does the following:
- The function must take 2 numbers. A start and an end.
- The function should check each number in the range given to see if it meets one of these criteria:
  - If the number is divisible by 3 print out "Fizz"
  - If the number is divisible by 5 print out "Buzz"
  - If the number is divisible by both 3 and 5, print out "FizzBuzz"
  - If none of the above is true then just print the number

Write some tests for your function.
*/

// const numberRange = [1, 10]

function fizzBuzz(numberRange) {
  let fizzCount = 0
  let buzzCount = 0
  let fizzBuzzCount = 0
  let otherNumberCount = 0

  for (let i = numberRange[0]; i <= numberRange[1]; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      // console.log('Number ' + i + ' is divisible by 3 and 5! FizzBuzz')
      fizzBuzzCount++
    } else if (i % 3 === 0) {
      // console.log('Number ' + i + ' is divisible by 3! Fizz')
      fizzCount++
    } else if (i % 5 === 0) {
      // console.log('Number ' + i + ' is divisible by 5! Buzz')
      buzzCount++
    } else {
      // console.log('Number ' + i + ' is not divisible by 3 or 5')
      otherNumberCount++
    }
  }
  const resultArray = [fizzCount, buzzCount, fizzBuzzCount, otherNumberCount]
  return resultArray
}

function testFizzBuzz(testname, expected, actual) {
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log(testname + ' Test passed')
  } else {
    console.log(testname + 'Test FAILED. Expected result: ' + expected + ' is not equal to actual result: ' + actual)
  }
}

testFizzBuzz('Counts should should be [4, 2, 1, 8]:', [4, 2, 1, 8], fizzBuzz([1, 15]))
testFizzBuzz('Counts should should be [5, 3, 2, 11]:', [5, 3, 2, 11], fizzBuzz([0, 20]))
testFizzBuzz('Counts should should be [0, 0, 0, 0]:', [0, 0, 0, 0], fizzBuzz(['string', 20]))
testFizzBuzz('Counts should should be [5, 3, 2, 11]:', [5, 3, 2, 11], fizzBuzz(['0', 20]))
testFizzBuzz('Counts should should be [16, 9, 4, 32]:', [16, 9, 4, 32], fizzBuzz([-20, 40]))
