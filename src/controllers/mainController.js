const {render} = require('ejs')
const path = require('path')

const controller = {
    index: (req, res) => {
        return res.render('index')
    },
    login: (req, res) => {
        return res.render('login')
    },
    register: (req, res) => {
        return res.render('register')
    },
    admin: (req, res) => {
        return res.render('admin')
    },
    detail: (req, res) => {
        return res.render('detail')
    },
    products : (req, res) => {
        return res.render('products')
    }
}

module.exports = controller