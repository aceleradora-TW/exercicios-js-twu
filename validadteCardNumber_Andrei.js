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
    length: [13,15]
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
  let arrayDeChar = card.split('')
  let result = 0

  arrayDeChar.forEach((charNum, index) => {
    num = parseInt(charNum)
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

function main (card) {
  const cardNumber = card.split(' ').join('')
  let finalMessage = ''
  Object.values(cardTypes).forEach((cardType) => {
    validCardType(cardNumber, cardType)
    ? finalMessage = `CardType Accepted: ${cardType.name}`
    : finalMessage = 'CardType Not Accepted by us!'

    validLuhnAlgorithm(cardNumber)
    ? finalMessage += '\nCard Number Valid'
    : finalMessage += '\nCard Number Invalid'
  })


  console.log(finalMessage);
}

main('4408 0412 3456 7893')
