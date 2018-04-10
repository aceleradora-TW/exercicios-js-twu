/*F= f-1 + f-2*/

function fibona(num) {
  function fibonacci(pos) {
    if (pos === 1 || pos === 2) return 1
    return fibonacci(pos - 1) + fibonacci(pos - 2)
  }

  let result = 0

  for(let i = 1; i <= num; i++) {
      result += fibonacci(i)
  }

  return result
}

console.log(fibona(7))
console.log(fibona(100))
