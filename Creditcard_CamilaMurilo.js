function CardTypeValid(stringNumber){
  const number = stringNumber.split(' ').join('')
  if (number.startsWith('34') || number.startsWith('37')){
    if (number.length === 15){
        return 'AMEX'
    }
  } else if (number.startsWith('6011')) {
    if (number.length === 16){
      return 'Discover'
    }
  } else if(number.startsWith('4')){
      if (number.length === 13 || number.length === 16 ) {
        return 'Visa'
      }
  }
}

function CreditCardValid(stringNumber){
  const number = stringNumber.split(' ').join('')
  const arrNumber = number.split('')

  for (let i = 0; i < arrNumber.length; i++){
    arrNumber[i] = parseInt(arrNumber[i])

  }

  console.log(arrNumber)

}

  console.log(CardTypeValid('4408 0412 3456 7893'))
CreditCardValid('4408 0412 3456 7893')



/*function quatroDigitos(number) {
    return number.split(' ')
    // str = "['4408' ,'0412' ,'3456' ,'7893'"
  }

function creditCard(function a){
  let arrNumber = []
  for(i=0; i < quatroDigitos.length; i++){
    arrNumber = parseInt(arr[i])
  }
}
console.log(quatroDigitos('4408 0412 3456 7893'))
*/





/*def type
length = @number.size
if length == 15 && @number =~ /^(34|37)/
"AMEX"
elsif length == 16 && @number =~ /^6011/
"Discover"
elsif length == 16 && @number =~ /^5[1-5]/
"MasterCard"
elsif (length == 13 || length == 16) && @number =~ /^4/
"Visa"
else
"Unknown"
end
end*/
