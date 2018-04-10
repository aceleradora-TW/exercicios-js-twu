/*Faça uma função fiboSum que calcule a soma da sequência de Fibonacci
para n números informados. Exemplo de chamada:

fiboSum(7);
// 33 (soma dos 7 primeiros números da sequência: 1+1+2+3+5+8+13)

*/


function fibona(num){
   a = 1
   b = 0

 fiboSoma=0
 numeros=[]
for (i=0; i<=num; i++){
  a = a + b
  aux = a
  b = aux
  num --
  numeros[i] = b
  fiboSoma = numeros[i+1] + fiboSoma
}

 return fiboSoma

}
console.log (fiboSoma)
