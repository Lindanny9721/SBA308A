import { addProduct } from "./addProduct";
import { fetchProducts } from "./displayProduct.js";
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    addProduct();
});