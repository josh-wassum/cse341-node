const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [
    {title: 'Elantris', description: 'A great fantasy novel by Brandon Sanderson.', price: '12.99'},
    {title: 'Dune', description: 'An epic space opera written by Frank Herbert.', price: '18.99'},
    {title: 'Complete Lord of the Rings: Collectors Edition', description: "Experience Tolkien's epic fantasy novel like never before.", price: '39.99'}
];

router.get('/add-product',(req, res, next) => {
    res.render('add-product', 
    {pageTitle: "Add Product", 
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    productsActive: true
})
});

router.post('/add-product',(req, res, next) =>{
    products.push({title: req.body.title, description: req.body.description, price: req.body.price});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;