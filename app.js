const { rejects } = require('assert')
//const {readFile, writeFile} = require('fs')
const { get } = require('http')
const { resolve } = require('path')
const path = require('path')

//
//##### Alt way 3: Using fs.promise
const {readFile, writeFile} = require('fs').promises
// and we dont need "const require('fs')""

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

//
//##### Alt way 2: Using promisify 
//
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt','utf8')
//         const second = await readFilePromise('./content/second.txt','utf8')
//         await writeFilePromise('./content/using_promisify_output.txt')
//         console.log(first,second)
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()


//
//#####Using promise to accomplish an async file i/o operation
//
// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if (err){
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }
                    
// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('')
//         console.log(first)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
// start()