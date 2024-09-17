function fizzBuzz(max = 100) {
  const result = []

  for (let i = 1; i <= max; i++) {
    let output = ''
    if (i % 3 === 0) {
      output = 'fizz'
    }
    if (i % 5 === 0) {
      output += 'buzz'
    }
    result.push((output != '') ? output : i)
  }
  return result
}

console.log(fizzBuzz())