const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./util/path')
const app = express()

// set template engine, use ejs
app.set('view engine','ejs');
// set template path
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const pageNotFoundController = require('./controller/404')

// app.use(bodyParser.urlencoded({extended:false}))
// express built in parser
app.use(express.urlencoded({extended:true}))

// call static files
app.use(express.static(path.join(rootDir,'Public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(pageNotFoundController.get404)

app.listen(3000)
