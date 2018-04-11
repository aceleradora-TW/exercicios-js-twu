let precos = [5.16, 2.12, 1.15, 3.11, 17.5]


precos.sort(function(a, b){
    return a - b;
});

function queroCafe(mascada, precos) {
  for (var i = 0; i < precos.length; i++) {
    if (precos[i] <= mascada) {
      console.log(precos[i] + ",")
    } else {

    }
}
}

queroCafe(3.14 , precos);
