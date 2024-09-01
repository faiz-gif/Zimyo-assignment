const { Product } = require('../models');
const path = require('path');
const fs = require('fs');

const DEFAULT_IMAGE_PATH = path.join(__dirname, '../../uploads/123.jpeg'); // Default image path

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    // Convert images from BLOB to base64 for frontend rendering
    const productsWithBase64Images = products.map(product => {
      if (product.image) {
        return {
          ...product.toJSON(),
          image: product.image.toString('base64'),
        };
      }
      return product.toJSON();
    });

    res.json(productsWithBase64Images);
  } catch (err) {
    res.status(500).json({ message: 'Database error. Please try again later.' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    // Convert image to base64 string if it exists
    const productWithBase64Image = product.image
      ? {
          ...product.toJSON(),
          image: product.image.toString('base64'),
        }
      : product.toJSON();

    res.json(productWithBase64Image);
  } catch (err) {
    res.status(500).json({ message: 'Database error. Please try again later.' });
  }
};

exports.addProduct = async (req, res) => {
  const { name, description = '', price, stock_quantity = 1 } = req.body;
  let image = null;

  // If an image is uploaded, use it; otherwise, use the default image
  if (req.file) {
    image = fs.readFileSync(req.file.path);
  } else {
    image = fs.readFileSync(DEFAULT_IMAGE_PATH);
  }

  try {
    const product = await Product.create({
      name,
      description,
      price,
      stock_quantity,
      image,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Database error. Please try again later.' });
  }
};

exports.updateProduct = async (req, res) => {
  const { name, description = '', price, stock_quantity = 1 } = req.body;
  let image = null;

  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    // If a new image is uploaded, use it; otherwise, keep the existing one
    if (req.file) {
      image = fs.readFileSync(req.file.path);
    } else {
      image = product.image;
    }

    await product.update({
      name,
      description,
      price,
      stock_quantity,
      image,
    });

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Database error. Please try again later.' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Database error. Please try again later.' });
  }
};


