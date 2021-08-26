const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./util/path')
const app = express()

// set template engine, use ejs
app.set('view engine','ejs');
// set template path
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// app.use(bodyParser.urlencoded({extended:false}))
// express built in parser
app.use(express.urlencoded({extended:true}))

// call static files
app.use(express.static(path.join(rootDir,'Public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=>{
   // res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'))
   res.status(404).render('404page', {docTitle:'404 Not found'})
})

app.listen(3000)
