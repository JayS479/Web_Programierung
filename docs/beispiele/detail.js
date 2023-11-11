const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function () {
const dataContainer = document.getElementById("detailContainer");
const textContainer = document.getElementById("titleContainer");

const carouselContainer = document.getElementById("carouselInner");
const carouselCart = document.getElementById("carouselCart");
const cartContainer = document.getElementById("cartContainer");

const apiUrl = "https://dummyjson.com/products";
let url = `https://dummyjson.com/products/${productID}`;
let urlCart = `https://dummyjson.com/carts/${productID}`;

fetch(url)
.then((response) => response.json())
.then((product) => {
// Erstelle einen Container für das Produkt
const productContainer = document.createElement("div");
const picContainer = document.createElement("div");
const textContainer = document.createElement("div");
productContainer.classList.add("detail-result"); // CSS-Klasse für das Suchergebnis hinzufügen

// Erstelle ein Bilder-Carousel-Element
for (let i = 0; i < product.images.length-1; i++){
    if(i == 0){
    const firstItem = document.createElement("div");
    firstItem.classList.add("carousel-item");
    firstItem.classList.add("active");
    const imgElement = document.createElement("img");
    imgElement.classList.add("d-block");
    imgElement.classList.add("w-100");
    imgElement.src = product.images[i];
    imgElement.alt = "Product Image " + i;
    imgElement.style.width = "50px"; // Setze die Breite des Bildes nach Bedarf
    firstItem.appendChild(imgElement);
    carouselContainer.appendChild(firstItem);
    console.log("1");
    }else{
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    const imgElement = document.createElement("img");
    imgElement.classList.add("d-block");
    imgElement.classList.add("w-100");
    imgElement.src = product.images[i];
    imgElement.alt = "Product Image " + i;
    imgElement.style.width = "50px"; // Setze die Breite des Bildes nach Bedarf
    carouselItem.appendChild(imgElement);
    carouselContainer.appendChild(carouselItem);
    console.log("2");
    }
    }

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
picContainer.appendChild(imgElement);
productContainer.appendChild(titleElement);
productContainer.appendChild(descriptionElement);
productContainer.appendChild(priceElement);
productContainer.appendChild(brandElement);


// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
dataContainer.appendChild(productContainer);
imgContainer.appendChild(picContainer);

})
.catch((error) => {
console.error("Error fetching product data:", error);
});


fetch(urlCart)
.then((response) => response.json())
.then((cart) => {
// Erstelle einen Container für den Warenkorb


for (let i = 0; i < cart.products.length; i++){
    const shopContainer = document.createElement("div");

    const imgElement = document.createElement("img");
    imgElement.src = cart.products[i].thumbnail;
    imgElement.alt = "Product Image";
    imgElement.style.width = "5em";

    // Erstelle ein Element für den Titel des i-ten Produkts
    const titleElement = document.createElement("h2");
    titleElement.textContent = `Titel: ${cart.products[i].title}`;
    // Erstelle ein Element für den Preis des i-ten Produkts
    const priceElement = document.createElement("h2");
    priceElement.textContent = `Preis: ${cart.products[i].price}`;
    // Erstelle ein Element für die Menge des i-ten Produkts
    const quantityElement = document.createElement("h2");
    quantityElement.textContent = `Anzahl: ${cart.products[i].quantity}`;



    shopContainer.appendChild(imgElement);
    shopContainer.appendChild(titleElement);
    shopContainer.appendChild(priceElement);
    shopContainer.appendChild(quantityElement);

    // Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
    cartContainer.appendChild(shopContainer);
}
})

/*.catch((error) => {
console.error("Error fetching product data:", error);
});
for (let i = 0; i < cart.products.length-1; i++){
    if(i == 0){
    const secondItem = document.createElement("div");
    secondItem.classList.add("carousel-item");
   secondItem.classList.add("active");
    const bildElement = document.createElement("img");
    bildElement.classList.add("d-block");
    bildElement.classList.add("w-100");
    bildElement.src = cart.products[i].thumbnail;
    bildElement.alt = "Product Image " + i;
   bildElement.style.width = "50px"; // Setze die Breite des Bildes nach Bedarf
    secondItem.appendChild(bildElement);
    carouselCart.appendChild(secondItem);
    console.log("4");
    }else{
    const cartItem = document.createElement("div");
    cartItem.classList.add("carousel-item");
    const bildElement = document.createElement("img");
    bildElement.classList.add("d-block");
    bildElement.classList.add("w-100");
    bildElement.src = cart.products[i].thumbnail;
    bildElement.alt = "Product Image " + i;
    bildElement.style.width = "50px"; // Setze die Breite des Bildes nach Bedarf
    cartItem.appendChild(bildElement);
    carouselCart.appendChild(cartItem);
    console.log("5");
    }
    }
})*/
});