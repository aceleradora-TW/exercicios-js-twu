function fiboSum (numero){
let aux = 0
let arr=[1,1]
let soma=0
for (let m = 2; m < numero; m++){
  arr[m]=arr[m-1]+arr[m-2];
}
for (let i = 0; i < numero; i++) {
  console.log(arr[i]);
  soma+=arr[i]
}
console.log('Soma:'+soma);
}
fiboSum(9)
