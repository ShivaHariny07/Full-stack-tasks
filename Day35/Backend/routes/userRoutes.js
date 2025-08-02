const express = require('express');
const router = express.Router();

const {
  createUser,
  addMoney,
  checkBalance,
  createOrder,
  checkOrderStatus,
  orderHistory
} = require('../controllers/userController');

router.post('/users', createUser);
router.post('/wallet/add', addMoney);
router.get('/wallet/balance/:id', checkBalance);

router.post('/orders', createOrder);
router.get('/orders/status/:id', checkOrderStatus);
router.get('/orders/history/:userId', orderHistory);

module.exports = router;
