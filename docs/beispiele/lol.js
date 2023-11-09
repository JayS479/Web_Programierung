const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function () {
const dataContainer = document.getElementById("resultsContainer");

const apiUrl = "https://dummyjson.com/products";
let url = `https://dummyjson.com/products/${productID}`;

fetch(url)
.then((response) => response.json())
.then((product) => {
// Erstelle einen Container für das Produkt
const productContainer = document.createElement("div");

// Erstelle ein Bild-Element und setze die Quelle auf das Produktbild
const imgElement = document.createElement("img");
imgElement.src = product.thumbnail; // Annahme: Die API gibt ein Bild als Eigenschaft 'image' zurück
imgElement.alt = "Product Image";
imgElement.style.width = "100px"; // Setze die Breite des Bildes nach Bedarf

// Erstelle ein Element für den Titel des Produkts
const titleElement = document.createElement("h2");
titleElement.textContent = `Title: ${product.title}`;

// Füge das Bild-Element und den Titel dem Produktcontainer hinzu
productContainer.appendChild(imgElement);
productContainer.appendChild(titleElement);

// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
dataContainer.appendChild(productContainer);
})
.catch((error) => {
console.error("Error fetching product data:", error);
});
});