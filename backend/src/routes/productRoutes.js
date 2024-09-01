const express = require('express');
const productController = require('../controllers/productController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.get('/products', apiKeyMiddleware, productController.getAllProducts);
router.get('/products/:id', apiKeyMiddleware, productController.getProductById);
router.post('/products', apiKeyMiddleware, upload.single('image'), productController.addProduct);
router.put('/products/:id', apiKeyMiddleware, upload.single('image'), productController.updateProduct);
router.delete('/products/:id', apiKeyMiddleware, productController.deleteProduct);

module.exports = router;


