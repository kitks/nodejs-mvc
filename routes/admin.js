const express = require('express')

const router = express.Router()

const productsController =require('../controller/products')

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct )

// /admin/add-product => POST
router.post('/product', productsController.postAddProduct)

module.exports = router