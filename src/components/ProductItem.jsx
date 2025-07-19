import "../styles/ProductItem.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.category} | {product.brand}</p>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductItem;
