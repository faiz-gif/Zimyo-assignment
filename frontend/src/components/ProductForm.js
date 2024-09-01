import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct, updateProduct } from '../services/productService';

const ProductForm = ({ productToEdit, onSave, clearEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setDescription(productToEdit.description || '');
      setPrice(productToEdit.price);
      setStockQuantity(productToEdit.stock_quantity || 1);
      setImage(null); // Reset image field for editing existing product
    } else {
      resetForm();
    }
  }, [productToEdit]);

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setStockQuantity('');
    setImage(null);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!price) newErrors.price = 'Price is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock_quantity', stockQuantity);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (productToEdit) {
        await updateProduct(productToEdit.id, formData);
        clearEdit();
      } else {
        await addProduct(formData);
      }
      resetForm();
      onSave();
      navigate('/');
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        {errors.price && <p className="error">{errors.price}</p>}
      </div>
      <div>
        <label>Stock Quantity:</label>
        <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit">{productToEdit ? 'Update' : 'Save'}</button>
    </form>
  );
};

export default ProductForm;

