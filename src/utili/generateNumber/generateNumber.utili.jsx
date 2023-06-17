function generateNumberFunction() {
  const resultArray = []
  const max = 45
  let lastCount = 0

  while (1) {
    const num = Math.floor(Math.random() * max + 1)

    if (resultArray.includes(num)) {
      continue
    } else {
      resultArray.push(num)
      lastCount++
    }

    if (lastCount > 5) break
  }

  return resultArray.sort((a, b) => a - b)
}

export default generateNumberFunction
