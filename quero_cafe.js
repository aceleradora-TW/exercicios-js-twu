let arr = [5.16, 2.12, 1.15, 3.11, 17.5]

function queroCafe(mascada, precos){
  let menores = []
  let str = ''
  for(let i = 0; i < precos.length; i++){
    if(arr[i] <= mascada){
      menores.push(arr[i])
    }
  }
    return str + menores.sort()
}

console.log(queroCafe(3.14, arr));
