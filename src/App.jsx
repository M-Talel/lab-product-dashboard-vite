import React, { useMemo, useState } from 'react';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return showInStockOnly ? products.filter((p) => p.inStock) : products;
  }, [products, showInStockOnly]);

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div>
        <button type="button" onClick={() => setShowInStockOnly(false)}>
          All
        </button>
        <button type="button" onClick={() => setShowInStockOnly(true)}>
          In Stock
        </button>
      </div>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;

