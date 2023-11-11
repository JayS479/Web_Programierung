const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function () {
const carouselContainer = document.getElementById("carouselContainer");
const textContainer = document.getElementById("textContainer");
const cartContainer = document.getElementById("cartContainer");

const apiUrl = "https://dummyjson.com/products";
let url = `https://dummyjson.com/products/${productID}`;
let urlCart = `https://dummyjson.com/carts/${productID}`;

fetch(url)
.then((response) => response.json())
.then((product) => {
// Erstelle einen Container für das Produkt
const descriptionContainer = document.createElement("div");
const carouselElement = document.createElement("div");


// Erstelle ein Bilder-Carousel-Element

carouselElement.classList.add("image-carousel");
for (let i = 0; i < product.images.length; i++){
const imgElement = document.createElement("img");
imgElement.src = product.images[i];
imgElement.alt = "Product Image " + i;
imgElement.style.width = "30em"; // Setze die Breite des Bildes nach Bedarf
carouselElement.appendChild(imgElement);
}


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
carouselContainer.appendChild(carouselElement);
descriptionContainer.appendChild(titleElement);
descriptionContainer.appendChild(descriptionElement);
descriptionContainer.appendChild(priceElement);
descriptionContainer.appendChild(brandElement);


// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
textContainer.appendChild(descriptionContainer);
carouselContainer.appendChild(carouselElement);
})