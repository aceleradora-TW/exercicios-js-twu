
function creditCard(number) {
  number = number.split(' ').join('')
  if (number.length == 15 && (number.slice(0,2) == 34 || number.slice(0,2) == 37)) {
    return "AMEX"

  } else if (number.length == 16 && number.slice(0,4) == 6011) {
    return "Discover"

  } else if (number.length == 16 && number.slice(0,1)== 5) {
    for (var i = 51; i < 56; i++) {
      if (number.slice(0,2) == i){
          return "MasterCard"
      } else {
        return "Invalid Card"
      }
    }
  } else if ((number.length == 13 || number.length == 16) && number.slice(0,1) == 4){
    return "Visa"

  } else {
    return "Invalid Card"

  }
//  console.log(number)
}


function validaCartao(number){
  novoArray = []
  let soma=0
  number = number.split(' ').join('')
  for (var i = 0; i < number.length; i++) {
    if (i % 2 === 0){
      novoArray[i] = parseInt(number[i])* 2
    } else {
      novoArray[i] = parseInt(number[i])
    }
    if (novoArray[i]>9){
      soma += novoArray[i]-9
    } else{
      soma+=novoArray[i]
    }
  }
    if (soma%10 ===0){
      return "Valid Card"
    } else {
    "Invalid Card"
    }
}




console.log(creditCard('4408 0412 3456 7893'))
console.log(validaCartao('4408 0412 3456 7893'))
