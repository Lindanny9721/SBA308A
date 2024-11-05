export async function fetchProducts() {
    try{
        const res = await fetch ("https://fakestoreapi.com/products")
        console.log(res);
        const json = await res.json();
        console.log(json);
        displayProducts(json);
        console.log("Success: ", json);
    } catch(error) {
        console.error('Error: ', error);
    } 
}
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
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