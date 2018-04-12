function validaCartao (numero){
  if((numero.startsWith(34) || numero.startsWith(37)) && numero.length === 15){
      console.log(valida(numero))
    }
  if(numero.startsWith(6011) && numero.length === 16 ){
      console.log(valida(numero))
    }
  if((numero.startsWith(4) && (numero.length === 13 || numero.length === 16 )) ){
      console.log(valida(numero))
    }
  for (var i = 51; i < 56; i++) {
    if((numero.startsWith(i) && numero.length === 16 ) ){
      console.log(valida(numero))
      }
    }
}

function valida (numero){
  let soma=0
let arrayNumeros = numero.split("")
for (let i = 0; i < arrayNumeros.length; i++) {
  if (i % 2===0){
    arrayNumeros[i] = parseInt(arrayNumeros[i])*2
  }else {
    arrayNumeros[i] = parseInt(arrayNumeros[i])
    }
    if (arrayNumeros[i]>9){
      soma+=arrayNumeros[i]-9
    }else{
    soma += arrayNumeros[i]
    }
  }
  if (soma%10 ===0){
    return 'Valido'
  }else{
    return 'Invalido'
  }
}
validaCartao('5508041234567894')
