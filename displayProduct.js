export async function fetchProducts() {
    const productContainer = document.getElementById("product-container");
    const searchContainer = document.getElementById("search-input");
    try{
        const res = await fetch ("https://fakestoreapi.com/products")
        const json = await res.json();
        if(json.length > 0)
        {
            displayProducts(json);
            searchContainer.addEventListener("input", (event) => {
                filterProducts(json, event.target.value);
            });
        }
    } catch(error) {
        console.error('Error: ', error);
    }
}
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add("product-image");
        const productTitle = document.createElement("h3");
        productTitle.textContent = product.title;
        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productContainer.appendChild(productCard);
    });
}
function filterProducts(products, searchedProduct) {
    const filteredProduct = products.filter(product => {
        const lowercase = searchedProduct.toLowerCase();
        return (
            product.title.toLowerCase().includes(lowercase)
        );
    });
    displayProducts(filteredProduct);
}