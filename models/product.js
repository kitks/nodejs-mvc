const fs = require('fs')
const path = require('path')


module.exports = class Product {

    constructor(inputTitle) {
        this.title = inputTitle
    }

    save() {
        console.log(path.join(path.dirname(require.main.filename), 'data', 'products.json'))

        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            // array when read
            let products = []
            if (!err) {
                // parse json first
                products = JSON.parse(fileContent)
            }
            // then push product
            products.push(this)

            // Write the products back to json file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(callback) {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return callback([])
            }
            return  callback(JSON.parse(fileContent))
            // products = JSON.parse(fileContent)
        })

    }


}