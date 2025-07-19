import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map(p => <ProductItem key={p.id} product={p} />)
      )}
    </div>
  );
}

export default ProductList;
