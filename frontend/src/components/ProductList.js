import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct, updateProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ onEditProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  const handleEdit = (product) => {
    onEditProduct(product);
    navigate('/add-product');
  };

  const handleQuantityChange = async (product, delta) => {
    const updatedQuantity = product.stock_quantity + delta;
    if (updatedQuantity < 0) return; // Prevent negative stock quantity
    try {
      await updateProduct(product.id, { ...product, stock_quantity: updatedQuantity });
      fetchProducts(); // Refresh list after update
    } catch (error) {
      console.error('Failed to update product quantity', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image ? `data:image/jpeg;base64,${product.image}` : '/default-image.png'}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
            <div className="product-actions">
              <button onClick={() => handleQuantityChange(product, -1)}>-</button>
              <input
                type="text"
                value={product.stock_quantity}
                readOnly
              />
              <button onClick={() => handleQuantityChange(product, 1)}>+</button>
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
