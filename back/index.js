const express = require('express')
const fs = require('fs')


const app = express()
const port = 3000
const data = fs.readFileSync('./data/product.json')
// const productList = JSON.parse(data)

app.use(express.static('public'))
// app.get('/', (req,res)=>{
//     res.send('Hello World)))')
// })


///////////////////////Product///////////////////

app.get('/api/products', (req,res)=>{
    const productList = JSON.parse(data)
    res.json(productList)
})

app.get('/api/products/:id', (req,res)=>{
    let id = req.params.id
    const productList = JSON.parse(data)
    let product = productList.filter(p => p.id == id)
    res.json(product)
})
app.get('/api/products/price/asc', (req,res)=>{
    const productList = JSON.parse(data)
    let product = productList.sort((pl,pm)=> pl.price-pm.price)
    res.json(product)
})
app.get('/api/products/price/desc', (req,res)=>{
    const productList = JSON.parse(data)
    let product = productList.sort((pl,pm)=> pm.price - pl.price)
    res.json(product)
})
///////////////////////Product///////////////////

////////////////// Cart///////////////////////
app.get('/api/add-to-cart/:id', (req,res)=>{
    let id = req.params.id
    const productList = JSON.parse(data)
    let product = productList.filter(p => p.id == id)
    const cartDir = './data/cart.json'
    console.log(product)
    if(!fs.existsSync(cartDir)){
        fs.writeFileSync(cartDir,JSON.stringify([]) , err => {
            if (err) {
              console.error(err)
              return
            }

          })
    }
    const cart = fs.readFileSync('./data/cart.json')
    let cartProducts = JSON.parse(cart)
    
    cartProducts.push(product[0])
    fs.writeFileSync(cartDir, JSON.stringify(cartProducts), err => {
        if (err) {
            console.error(err)
            return
        }
    })
    res.json(cartProducts)

})
////////////////// Cart///////////////////////

app.listen(port, ()=>{
    console.log(`Example `)
})
