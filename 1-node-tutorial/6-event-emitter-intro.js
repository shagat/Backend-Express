const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received from user :${name} with id ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic with same emit `)
})

customEmitter.emit('response', 'John',34)
