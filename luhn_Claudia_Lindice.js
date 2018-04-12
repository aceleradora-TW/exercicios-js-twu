function validaCartao(cartao){
  if (cartao.length == 15) {
    primeirosDigitos = cartao.slice(0,2)
    if (primeirosDigitos == 34 || primeirosDigitos ==37) {
      console.log("AMEX");
    }
  }
    if (cartao.length == 16) {
      disco = cartao.slice(0,4)
      if (disco == 6011) {
        console.log("DISCOVER");
        }
    }
    if (cartao.length == 16) {
      master = cartao.slice(0,2)
      if (master >= 51 && master <= 55) {
        console.log("MASTERCARD");
        }
    }
    if (cartao.length == 16 || cartao.length == 13) {
      visa = cartao.slice(0,1)
      if (visa == 4) {
        console.log("VISA");
        }
    }
}

function numeroCartao(numero) {
  numero = numero.split('').reverse()
  console.log(numero);
  for (let i = 0; i < numero.length; i+=2) {
  numero[i] *= 2;
   if (numero[i] > 10) {
     numero[i] = numero[i].toString().split('')
     console.log(numero[i]);
   }
  }
}


//
// validaCartao('348656547541123')
// validaCartao('6011876547541123')
// validaCartao('5311876547541123')
// validaCartao('4311876547541123')
numeroCartao('123456')
