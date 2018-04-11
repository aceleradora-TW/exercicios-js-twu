function diglettDig() {
  let num;
  for (var i = 1; i < 101; i++) {
    num = i;
    if (num % 3 === 0) {
        console.log('Diglett dig');
    } else if(num % 5 === 0 && num % 3 != 0){
      console.log('trio trio trio');
    } else{
      console.log(num);
    }
  }
}

diglettDig();
