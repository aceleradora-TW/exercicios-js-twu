/*Faça uma função fiboSum que calcule a soma da sequência de Fibonacci para n números informados. Exemplo de chamada:

fiboSum(7);
// 33 (soma dos 7 primeiros números da sequência: 1+1+2+3+5+8+13)

Dica: bom momento para aprender sobre algoritmos recursivos! ;D*/

function fiboSum (n1){

var resultado = [];

//F(2) = (F(2 - 1)) + (F(2 - 2)) = 1 e 0 → 1

for (var i = 0; i < n1; i++) {
  resultado[i] = n1;
  n1 = (n1-1) + (n1 - 2);
}
console.log(resultado)
}

fiboSum(7)
