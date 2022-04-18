const {readFile, writeFile} = require('fs').promises

//##### Alt way 3: Using fs.promise


const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/using_promisify_output.txt',
        `This is Awesaome: ${first} ${second}`,
         {flag : 'a'}
         )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}
start()