/*Escreva uma função diglettDig() que, utilizando console.log,
imprime todos os números de 1 até 100, com duas exceções:

quando o número for divisível por 3, imprima 'Diglett dig' em vez do número

quando o número for divisível por 5 (e não por 3), imprima 'trio trio trio' em vez do número

Após ter essa lógica funcionando, altere a função para imprimir
 'Diglett dig, trio trio trio' para números que são divisíveis tanto por 3 quanto por 5
(e que continue imprimindo 'Diglett dig' ou 'trio trio trio' para os números divisíveis apenas por 3 ou 5).

*/

function diglettDig (){

  for (let i = 0; i < 100; i++) {
    if (i%3==0){
      console.log("Digglet dig")
    } else if(i%5==0){
      console.log("trio trio trio")
    } else { console.log(i) }
}
console.log(diggletDig())
