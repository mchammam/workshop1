export function fizzBuzz(max = 100) {
  if (!Number.isInteger(max) || Number.isNaN(max)) {
    throw new Error('Input is not a valid integer')
  }

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