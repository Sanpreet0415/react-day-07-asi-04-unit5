// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const ProductList = () => {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    if (isLoggedIn) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null; // Or render a message to login
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
