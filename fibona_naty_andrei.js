function fiboSum(tam){
  var anterior = 0
  var atual = 1
  var aux
  var soma = 0

  for (var i = 0; i < tam; i++) {
    console.log(atual);
    soma += atual
    aux = atual
    atual = atual + anterior
    anterior = aux

  }
console.log(soma)
}



fiboSum(7)
