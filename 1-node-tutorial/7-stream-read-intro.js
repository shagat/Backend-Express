const {createReadStream} = require('fs')

const stream = createReadStream('./content/big_file.txt', 'utf8')

//default 64Kb
//last buffer - remainder
//highWatermark - controlsize
// const stream = createReadStream('./content/big_file.txt',{highWaterMark:90000})
// const stream = createReadStream('../content/big_file.txt',{encoding:'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})