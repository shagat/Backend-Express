const {writeFileSync} = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big_file.txt',
     `Hello World ${i}`,
      {flag: 'a'}
      )
}