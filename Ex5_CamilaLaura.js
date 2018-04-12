function notas(){
  let nota1 = prompt("Digite a nota do aluno na prova 1: ")
  let nota2 = prompt("Digite a nota do aluno na prova 2: ")
  let nota3 = prompt("Digite a nota do aluno na prova 3: ")
  let nota1Conv = parseInt(nota1)
  let nota2Conv = parseInt(nota2)
  let nota3Conv = parseInt(nota3)
  let media = (nota1Conv+nota2Conv+nota3Conv)/3
  alert("A média do aluno é: "+media)
}
notas()


/*
function notas(){
for (let i=0, i<3, i++ ){
let nota[]  = prompt("Digite as notas do aluno em cada prova: ")
 nota[i] = parseInt(nota[i])
let media = (nota1Conv+nota2Conv+nota3Conv)/3
}

  alert("A média do aluno é: "+media)
}
notas()
*/
