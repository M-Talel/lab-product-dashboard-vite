import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const outOfStock = product && product.inStock === false;

  return (
    <div className={outOfStock ? `${styles.outOfStockClass} outOfStockClass` : undefined}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{outOfStock ? 'Out of stock' : 'In stock'}</p>

      <button type="button" onClick={() => onRemove?.(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;

