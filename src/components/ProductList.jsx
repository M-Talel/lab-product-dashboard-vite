import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} onRemove={onRemove} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;

