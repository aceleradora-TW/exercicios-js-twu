
function fatoriar(numero){
 if (numero===1 || numero===0) {
  return 1
}else{
  return (numero * fatoriar(numero - 1))
  }
}
console.log (fatoriar(6))
