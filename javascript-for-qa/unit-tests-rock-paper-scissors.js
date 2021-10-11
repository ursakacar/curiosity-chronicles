/* eslint-disable space-before-function-paren */
/**
Use the included js file for this assignment.

Create unit tests to verify that each scenario provides the expected results.
Make sure to test the happy path and any error scenarios you can think of.

Once you have tested everything, go ahead and fix all the errors so that your tests all pass.

Here is a simple explanation of the function:
This is a simple Rock, Paper, Scissors function.
There are 2 inputs. A value for player 1 and a value for player 2.
You can use "r", "p", or "s" for the values.
"r" = Rock
"p" = Paper
"s" = Scissors

If you never played Rock, Paper, Scissors... here are the rules:
Each player choose only one of "rock", "paper", or "scissors".

To win:
Rock beats scissors.
Scissors beats paper.
Paper beats rock.

If both players choose the same item, then it is a tie and no one wins.
**/

function rps(player1, player2) {
  if (player1 === 'r') {
    if (player2 === 'r') {
      return 'Tie'
    } else if (player2 === 'p') {
      return 'Paper beats rock. Player 2 wins.'
    } else if (player2 === 's') {
      return 'Rock beats scissors. Player 1 wins.'
    } else {
      return 'Player 2 made an invalid selection.'
    }
  } else if (player1 === 'p') {
    if (player2 === 'r') {
      return 'Paper beats rock. Player 1 wins.'
    } else if (player2 === 'p') {
      return 'Tie'
    } else if (player2 === 's') {
      return 'Scissors beat paper. Player 2 wins.'
    } else {
      return 'Player 2 made an invalid selection.'
    }
  } else if (player1 === 's') {
    if (player2 === 'r') {
      return 'Rock beats scissors. Player 2 wins.'
    } else if (player2 === 'p') {
      return 'Scissors beat paper. Player 1 wins.'
    } else if (player2 === 's') {
      return 'Tie'
    } else {
      return 'Player 2 made an invalid selection.'
    }
  } else {
    return 'Player 1 made an invalid selection.'
  }
}

function test(testName, expected, actual) {
  if (expected === actual) {
    console.log('Tests passed.')
  } else {
    console.log('Tests failed. Expected: ' + expected + ' is not equal to actual: ' + actual)
  }
}

// happy paths (rock beats scissors beat paper beats rock)
test('Player 1: Test that rock beats scissors.', 'Rock beats scissors. Player 1 wins.', rps('r', 's'))
test('Player 1: Test that scissors beat paper.', 'Scissors beat paper. Player 1 wins.', rps('s', 'p'))
test('Player 1: Test that paper beats rock.', 'Paper beats rock. Player 1 wins.', rps('p', 'r'))

test('Player 2: Test that rock beats scissors.', 'Rock beats scissors. Player 2 wins.', rps('s', 'r'))
test('Player 2: Test that scissors beat paper.', 'Scissors beat paper. Player 2 wins.', rps('p', 's'))
test('Player 2: Test that paper beats rock.', 'Paper beats rock. Player 2 wins.', rps('r', 'p'))

// tie
test('Tie: both select rock', 'Tie', rps('r', 'r'))
test('Tie: both select paper', 'Tie', rps('p', 'p'))
test('Tie: both select scissors', 'Tie', rps('s', 's'))

// invalid
test('Player 1: Invalid move', 'Player 1 made an invalid selection.', rps('3', 's'))
test('Player 2: Invalid move', 'Player 2 made an invalid selection.', rps('s'))
