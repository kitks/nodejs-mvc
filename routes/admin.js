const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product',{
        docTitle: 'Add product',
        path:'/admin/add-product',
        linkActive : true,
    })
})

// /admin/add-product => POST
router.post('/product', (req, res, next) => {
    // console.log(`This is product`)
    console.log(req.body)
    products.push({ title: req.body.title })
    res.redirect(`/`)
})

exports.routes = router
exports.products = products