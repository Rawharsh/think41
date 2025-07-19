import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import ProductList from "./components/ProductList";

const mockProducts = [
  { id: 1, name: "iPhone 14", category: "Phones", brand: "Apple", price: 999 },
  { id: 2, name: "Galaxy S22", category: "Phones", brand: "Samsung", price: 850 },
  { id: 3, name: "MacBook Pro", category: "Laptops", brand: "Apple", price: 1999 },
  { id: 4, name: "XPS 13", category: "Laptops", brand: "Dell", price: 1200 },
  { id: 5, name: "AirPods", category: "Accessories", brand: "Apple", price: 199 },
  { id: 6, name: "Monitor", category: "Accessories", brand: "Dell", price: 300 },
];

function App() {
  const [products] = useState(mockProducts);
  const [filtered, setFiltered] = useState(products);
  const [filters, setFilters] = useState({ category: "", brand: "", min: "", max: "" });
  const [sort, setSort] = useState("");

  useEffect(() => {
    let temp = [...products];

    if (filters.category) temp = temp.filter(p => p.category === filters.category);
    if (filters.brand) temp = temp.filter(p => p.brand === filters.brand);
    if (filters.min) temp = temp.filter(p => p.price >= Number(filters.min));
    if (filters.max) temp = temp.filter(p => p.price <= Number(filters.max));

    if (sort === "name-asc") temp.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") temp.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "price-asc") temp.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") temp.sort((a, b) => b.price - a.price);

    setFiltered(temp);
  }, [filters, sort, products]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Catalog</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <SortBar sort={sort} setSort={setSort} />
      <ProductList products={filtered} />
    </div>
  );
}

export default App;
