const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

console.log({ first, second })

// create a new file
// flag: 'a' to append to the file
writeFileSync('./content/third.txt', `Here is the result ${first}, ${second}`, {
  flag: 'a',
})
