// Escreva uma função queroCafe que recebe dois parâmetros:
//
// mascada: Valor numérico
//
// precos: Lista de preços de café
//
// A sua implementação deve retornar uma string com todos os preços que estão abaixo ou igual ao valor mascada ordenados de forma ascendente e separados por vírgula. Ex:
//
// queroCafe(3.14, [5.16, 2.12, 1.15, 3.11, 17.5]);
// // '1.15,2.12,3.11'

function queroCafe(preco, listaPrecos) {
  let arrAux = []
  for (let i = 0; i < listaPrecos.length; i++) {
    if (preco >= listaPrecos[i]) {
      arrAux.push(listaPrecos[i])
    }
  }
  console.log(" String final: "+arrAux.sort().toString())
}
queroCafe(3.14, [5.16, 2.12, 1.15, 3.11, 17.5])
