const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
  // chunk size
  highWaterMark: 90000,
  encoding: 'utf8',
})

// default chunk of data is 64 kilobytes
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
