import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchProductsData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong>: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
