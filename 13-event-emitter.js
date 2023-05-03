const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// first listen
customEmitter.on('response', (data, id) => {
  console.log(`data received: ${data} ${id}`)
})

customEmitter.on('response', () => {
  console.log(`some other logic here`)
})

// then emit
customEmitter.emit('response', 'foo', 1234)
