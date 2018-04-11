
let precos = [5.16, 2.12, 1.15, 3.11, 17.5]


precos.sort(function(a, b){
    return a - b;
});

function queroCafe(mascada,precos) {
      for (let i = 0; i < precos.length; i++) {
        if(precos[i] <= mascada) {
          return precos[i] + ","
        }
      }
}

console.log(queroCafe(3.14, precos));
