import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

const App = () => {
  const [productToEdit, setProductToEdit] = useState(null);

  const handleEditProduct = (product) => {
    setProductToEdit(product);
  };

  const handleSaveProduct = () => {
    setProductToEdit(null); // Reset edit state after saving
  };

  return (
    <Router>
      <div className="container">
        <h1>Product Management</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-product">Add Product</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ProductList onEditProduct={handleEditProduct} />}
          />
          <Route
            path="/add-product"
            element={
              <ProductForm
                productToEdit={productToEdit}
                onSave={handleSaveProduct}
                clearEdit={() => setProductToEdit(null)}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

