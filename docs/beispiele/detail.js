const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function () {
const dataContainer = document.getElementById("resultsContainer");
const cartContainer = document.getElementById("cartContainer");

const apiUrl = "https://dummyjson.com/products";
let url = `https://dummyjson.com/products/${productID}`;
let urlCart = `https://dummyjson.com/carts/${productID}`;

fetch(url)
.then((response) => response.json())
.then((product) => {
// Erstelle einen Container für das Produkt
const productContainer = document.createElement("div");

// Erstelle ein Bild-Element und setze die Quelle auf das Produktbild
const imgElement = document.createElement("img");
imgElement.src = product.thumbnail; // Annahme: Die API gibt ein Bild als Eigenschaft 'image' zurück
imgElement.alt = "Product Image";
imgElement.style.width = "30em"; // Setze die Breite des Bildes nach Bedarf

// Erstelle ein Element für den Titel des Produkts
const titleElement = document.createElement("h2");
titleElement.textContent = `Titel: ${product.title}`;

//Füge Description ein
const descriptionElement = document.createElement("h2");
descriptionElement.textContent = `Beschreibung: ${product.description}`;

//Füge Description ein
const priceElement = document.createElement("h2");
priceElement.textContent = `Preis: ${product.price}`;

//Füge Description ein
const brandElement = document.createElement("h2");
brandElement.textContent = `Marke: ${product.brand}`;

// Füge das Bild-Element und den Titel dem Produktcontainer hinzu
productContainer.appendChild(imgElement);
productContainer.appendChild(titleElement);
productContainer.appendChild(descriptionElement);
productContainer.appendChild(priceElement);
productContainer.appendChild(brandElement);


// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
dataContainer.appendChild(productContainer);
})
.catch((error) => {
console.error("Error fetching product data:", error);
});


fetch(urlCart)
.then((response) => response.json())
.then((cart) => {
// Erstelle einen Container für das Produkt
const shopContainer = document.createElement("div");




// Erstelle ein Element für den Titel des Produkts
const titleElement = document.createElement("h2");
titleElement.textContent = `Titel: ${cart.products[0].title}`;



//Füge Description ein
const priceElement = document.createElement("h2");
priceElement.textContent = `Preis: ${cart.products[0].price}`;



// Füge das Bild-Element und den Titel dem Produktcontainer hinzu

shopContainer.appendChild(titleElement);

shopContainer.appendChild(priceElement);



// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
cartContainer.appendChild(shopContainer);
})
.catch((error) => {
console.error("Error fetching product data:", error);
});
});
