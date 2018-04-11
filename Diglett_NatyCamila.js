function diglettDig(){
  for(let i=1; i<=100; i++){
    if(i %5 === 0 && i %3 === 0){
      console.log('Diglett Dig , Trio, Trio ,Trio')}

    else if(i %3 === 0){
      console.log('Diglett Dig')}

        else if(i %5 === 0 && i %3 !== 0){
          console.log('Trio, Trio ,Trio')
        }
        else if(i %5 === 0 && i %3 === 0){
          console.log('Diglett Dig , Trio, Trio ,Trio')}
        else{
            console.log(i)
}




}
}

diglettDig()
