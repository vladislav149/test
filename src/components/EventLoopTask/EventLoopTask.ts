function resolveAfter2Seconds(x: number): Promise<number> {
  console.log(`Какой Х пришёл -> ${x}`)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 5000)
  })
}

async function add1(x: number) {
  console.log('add1 Hello')
  const a = await resolveAfter2Seconds(20)
  const b = await resolveAfter2Seconds(30)
  console.log('add1 Bye')
  return x + a + b
}

add1(10).then(console.log)
