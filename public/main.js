function main() {
  // Practice Creating Variables
  const numberOfCupsOfCoffee = 1
  const fullName = 'Mandy Wade'

  console.log(
    `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cup of coffee a day.`
  )

  const aboutMe = {
    fullName: 'Mandy Wade',
    luckyNumber: 4,
    favoriteMovies: ['Grease', 'Cinderella', 'Spice World', 'Teen Witch'],
  }

  // Practice Getting Input From the User
  const userName = window.prompt('What is your name?')

  console.log(`Hello ${userName}. It is very nice to meet you!`)

  // Converting String Input Into Numbers
  const firstOperand = parseFloat(window.prompt('Please, pick a number.'))
  const secondOperand = parseFloat(
    window.prompt('Please, pick another number.')
  )

  // Doing Math
  const sum = firstOperand + secondOperand
  const difference = firstOperand - secondOperand
  const product = firstOperand * secondOperand
  const quotient = firstOperand / secondOperand
  const remainder = firstOperand % secondOperand

  console.log(
    `The two numbers you entered were ${firstOperand} and ${secondOperand}. These numbers added together equals ${sum}. The first number minus the second number equals ${difference}. These numbers multiplied together equals ${product}. The first number divided by the second number equals ${quotient} and has a remainder of ${remainder}.`
  )

  // Using Arrays
  const numbers = [
    96,
    17,
    96,
    45,
    91,
    71,
    54,
    2,
    52,
    23,
    22,
    91,
    17,
    84,
    90,
    69,
    99,
    33,
    13,
    98,
    54,
    53,
    84,
    9,
    68,
    85,
    19,
    29,
    40,
    29,
    16,
    67,
    47,
    49,
    49,
    54,
    83,
    60,
    83,
    29,
    35,
    4,
    29,
    47,
    79,
    85,
    25,
    40,
    2,
    86,
    32,
    78,
    12,
    94,
    99,
    42,
    25,
    35,
    19,
    85,
    72,
    65,
    73,
    18,
    63,
    50,
    48,
    33,
    34,
    37,
    99,
    16,
    10,
    78,
    77,
    95,
    62,
    46,
    24,
    32,
    84,
    79,
    4,
    64,
    54,
    61,
    27,
    83,
    63,
    7,
    63,
    91,
    64,
    21,
    96,
    32,
    10,
    19,
    50,
    50,
  ]

  let smallest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < smallest) {
      smallest = numbers[index]
    }
  }

  let largest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) {
      largest = numbers[index]
    }
  }

  let sumTotal = 0
  for (let index = 0; index < numbers.length; index++) {
    sumTotal += numbers[index]
  }

  const average = sumTotal / numbers.length

  const statistics = {
    smallest: smallest,
    largest: largest,
    sum: sumTotal,
    average: average,
  }
}

document.addEventListener('DOMContentLoaded', main)
