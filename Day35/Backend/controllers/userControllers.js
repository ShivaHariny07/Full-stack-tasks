const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/product');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ error: "User or Product not found" });
    }
    if (product.quantity < 1) {
      return res.status(400).json({ error: "Product out of stock" });
    }
    if (user.wallet < product.price) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    user.wallet -= product.price;
    product.quantity -= 1;

    const order = new Order({
      userId,
      productId,
      totalAmount: product.price,
    });

    await user.save();
    await product.save();
    await order.save();

    res.json({ message: "Order placed", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to place order" });
  }
};

exports.addMoney = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.wallet += amount;
    await user.save();
    res.json({ message: "Money added", wallet: user.wallet });
  } catch (error) {
    res.status(500).json({ error: "Failed to add money" });
  }
};

exports.checkBalance = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ wallet: user.wallet });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve balance" });
  }
};

exports.checkOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('productId');
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to get order status" });
  }
};

exports.orderHistory = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate('productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to get order history" });
  }
};
