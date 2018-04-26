const cardType = (name, firstDigits, allowedLength) => ({name, firstDigits, allowedLength})

const cardTypes = [
  cardType('AMEX', [34,37], [15]),
  cardType('Discover', [6011], [16]),
  cardType('MasterCard', [51,52,53,54], [16]),
  cardType('Visa', [4], [13,16])
]

const cardNumber = (card = '') => ({
  asIntArray: () => removeBlankSpaces(card).split('').map((digit) => parseInt(digit)),
  asString: () => removeBlankSpaces(card),
  length: () => removeBlankSpaces(card).length
})

const UNKNOW_CARD = {
  name: 'UNKNOW_CARD'
}
const removeBlankSpaces = (card) => {
  return card.replace(/\s/g, '')
}

const validLength = (card, targetLength) => targetLength.includes(card.length())

const validFirstDigits = (card, digits) => digits
  .some((digitsItem) => card.asString().startsWith(digitsItem))

const isEven = (digit) => digit % 2 === 0

const calculateLuhnDigit = (digit, index) => {
  const luhnNumber = isEven(index) ? (digit*2) : digit

  return luhnNumber < 9
  ? luhnNumber
  : luhnNumber-9
}

const luhnValueOf = (cardNumber) => cardNumber
  .asIntArray()
  .reduce((sum, digit, index) => sum + calculateLuhnDigit(digit, index),0)

const validLuhnAlgorithm = (cardNumber) => luhnValueOf(cardNumber) % 10 === 0

const findCardType = (card, cardTypes) => cardTypes
  .filter((cardType) => validLength(card, cardType.allowedLength))
  .find((cardType) => validFirstDigits(card,cardType.firstDigits))
  || UNKNOW_CARD


const card = cardNumber('4408 0412 3456 7893')

console.log('Is a valid luhn number:', validLuhnAlgorithm(card))
console.log('Card Type: ', findCardType(card, cardTypes).name);
