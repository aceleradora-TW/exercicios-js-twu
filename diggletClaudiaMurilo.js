
let multiploDeTres = (num) => num % 3 === 0 ? true : false
let multiploDeCinco = (num) => num % 5 === 0 ? true : false

// imprimir os 100 numeros
function diggletDig(){
  for(let n = 1; n <= 100; n++){
    if(multiploDeTres(n) && multiploDeCinco(n)) {
      console.log('Diglett dig, trio trio trio')
    } else if(multiploDeTres(n)) {
      console.log('Diglett dig')
    } else if(multiploDeCinco(n)) {
      console.log('trio trio trio')
    } else {
      console.log(n)
    }
  }
}

diggletDig()
