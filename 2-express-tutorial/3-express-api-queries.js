const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send(products)
})

app.get('/api/products', (req,res) =>{
    // console.log(req)
    // console.log(req.params)
    const newProducts = products.map((product) => {
        const{ id, name, image } = product
        console.log(temp)
        return{ id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res) =>{
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        return res.send('Product does not exist').status(404)
    }
    res.json(singleProduct)
})

//using query in the api
app.get('/api/v1/query', (req, res) => {
    //console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    //res.send('Hello World')
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () =>{
    console.log('Server is listening in port nos. 5000....')
})


//hardcoding a query from the user
//
// app.get('/api/products/1', (req,res) =>{
//     const singleProduct = products.find((product) => product.id=== 1)
//     res.json(singleProduct)
// })
//respoding a json 
//
// app.get('/api/products', (req,res) =>{
//     const newProducts = products.map((product) => {
//         const {id, name, image} = product
//         return {id, name, image}
//     })
//     res.json(newProducts)
// })