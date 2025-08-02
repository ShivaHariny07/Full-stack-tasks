const express = require('express');
const router = express.Router();

const {
  addProduct,
  editProduct,
  updateQuantity,
  deleteProduct,
  getAllProducts,
  getAllOrders,
  acceptOrder,
  deliverOrder
} = require('../controllers/adminController');

// Product routes
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.patch('/products/:id/quantity', updateQuantity);
router.delete('/products/:id', deleteProduct);
router.get('/products', getAllProducts);

// Order routes
router.get('/orders', getAllOrders);
router.patch('/orders/:id/accept', acceptOrder);
router.patch('/orders/:id/deliver', deliverOrder);

module.exports = router;
