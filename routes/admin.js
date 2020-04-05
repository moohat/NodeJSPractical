const path = require('path');

const express = require('express');

const prodctsController = require('../controllers/product')
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', prodctsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', prodctsController.postAddProduct);

module.exports = router
