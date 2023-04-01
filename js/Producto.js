const form = document.getElementById("product-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("product-name").value;
        const image = document.getElementById("product-image").value;
        const price = document.getElementById("product-price").value;
        const quantity = document.getElementById("product-quantity").value;
        const description = document.getElementById("product-description").value;

        const product = { name, image, price, quantity, description };
        let products = localStorage.getItem("products");
        if (products) {
            products = JSON.parse(products);
        } else {
            products = [];
        }
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));

        alert("Producto añadido correctamente");
        form.reset();
    });

// Obtenemos los productos del almacenamiento local
const products = JSON.parse(localStorage.getItem("products"));

// Obtenemos la sección de productos y la plantilla de tarjeta de producto
const productsSection = document.getElementById("products");
const productCardTemplate = document.getElementById("product-card");

// Recorremos los productos y creamos una tarjeta de producto para cada uno
products.forEach((product) => {
// Clonamos la plantilla de tarjeta de producto
const productCard = productCardTemplate.content.cloneNode(true);

// Configuramos los valores de la tarjeta de producto
productCard.querySelector(".product-image").src = product.image;
productCard.querySelector(".product-name").textContent = product.name;
productCard.querySelector(".product-price").textContent = `Precio: $${product.price}`;
productCard.querySelector(".product-quantity").textContent = `Cantidad: ${product.quantity}`;
productCard.querySelector(".product-description").textContent = product.description;

// Agregamos la tarjeta de producto a la sección de productos
productsSection.appendChild(productCard);
});