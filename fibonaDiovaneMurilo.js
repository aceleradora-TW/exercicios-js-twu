
function fiboSum(n) {
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
      a = a + b
      b = a + b
    }
    return b
}

console.log(fiboSum(7))
