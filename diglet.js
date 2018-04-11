
function digletDig(){
  for(let i=1; i<100; i++){
    if(i%3 == 0 && i%5 == 0){
      console.log('Diglett dig, trio trio trio');
    }
    if(i%3 == 0){
      console.log('Diglett dig');
    }
    else if(i%5 == 0){
      console.log('trio trio trio');
    }
    else{
      console.log(i);
    }
  }
}

digletDig();
