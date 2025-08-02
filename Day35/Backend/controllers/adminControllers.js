const Product = require('../models/product');
const Order = require('../models/Order');

exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product quantity updated", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update quantity" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId')
      .populate('productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

exports.acceptOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = "accepted";
    await order.save();

    res.json({ message: "Order accepted", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to accept order" });
  }
};

exports.deliverOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = "delivered";
    await order.save();

    res.json({ message: "Order delivered", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to deliver order" });
  }
};
