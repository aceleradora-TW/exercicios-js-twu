const cardTypes = {
  amex: {
    name: 'AMEX',
    inicialDigits: [34,37],
    length: 15
  },
  discover: {
    name: 'Discover',
    inicialDigits: 6011,
    length: 16
  },
  masterCard: {
    name: 'MasterCard',
    inicialDigits: [51,52,54,55],
    length: 16
  },
  visa: {
    name: 'Visa',
    inicialDigits: 4,
    length: [13,16]
  }
}

function validLength (card, targetLength) {
  return typeof targetLength === 'object'
  ? targetLength.includes(card.length)
  : card.length === targetLength
}

function validFirtDigits (card, digits) {
  return typeof digits === 'object'
  ? digits.some((digitsItem) => card.startsWith(digitsItem))
  : card.startsWith(digits)
}

function validLuhnAlgorithm (card) {
  const arrayDeChar = card.split('')
  let result = 0

  arrayDeChar.forEach((charNum, index) => {
    let num = parseInt(charNum)
    if (index % 2 == 0)
      num *= 2

    num < 9
    ? result += num
    : result += num - 9
  })
  return result % 10 === 0
}

function validCardType(card, cardType) {
  return validFirtDigits(card, cardType.inicialDigits)
         ? validLength(card, cardType.length)
         : false
}

function validateCardNumber (card) {
  const cardNumber = card.split(' ').join('')
  let finalMessage = 'CardType Not Accepted by us or Number is Invalid'
  Object.values(cardTypes).some((cardType) => {
    if(validCardType(cardNumber, cardType) && validLuhnAlgorithm(cardNumber))
      finalMessage = `CardType Accepted: ${cardType.name}. Card Number also Valid!`
  })
  console.log(finalMessage)
}

validateCardNumber('5108 0412 3456 7893')
