export async function addProduct() {
    document.getElementById("addProductForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;
        const category = document.getElementById("category").value;
        const newProduct = {
            title: title,
            description: description,
            price: Number(price),
            image: image,
            category: category
        };
        try {
            const res = await fetch("https://fakestoreapi.com/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            const json = await res.json();
            console.log("Success: ", json);
        } catch (error) {
            console.error("Error: ", error);
        }
    });
}