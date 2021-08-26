const Products = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {
        docTitle: 'Add product',
        path: '/admin/add-product',
        linkActive: true,
    })
}

exports.postAddProduct = (req, res, next) => {

    console.log(req.body)
    const product = new Products(req.body.title)
    product.save()
    res.redirect(`/`)
}

exports.getProducts = (req, res, next) => {

    Products.fetchAll((products) => {
        res.render('shop', {
            path: '/',
            prods: products,
            docTitle: 'My products',
            hasProducts: products.length > 0,
            linkActive: true
        })
    })
    // render() the template

}