
function fat(num){
  let apoio;
  if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    apoio = num;
    while (num-- > 2) {
        apoio *= num;
    }
    return apoio;
}

console.log(fat(5));
