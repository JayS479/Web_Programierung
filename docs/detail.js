//Variablen die aus der Suche übergeben wurden.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productID = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function () {
//Referenzen zu den HTML-Elementen    
    const dataContainer = document.getElementById("detailContainer");
    const carouselContainer = document.getElementById("carouselInner");
    const cartContainer = document.getElementById("cartContainer");
//URL der API, von der die Daten abgerufen werden sollen
    let url = `https://dummyjson.com/products/${productID}`;
    let urlCart = `https://dummyjson.com/carts/${productID}`;

    fetch(url)
        .then((response) => response.json())
        .then((product) => {
// Erstellen eines Containers für das Produkt
        const productContainer = document.createElement("div");

        productContainer.classList.add("detail-result"); // CSS-Klasse für das Suchergebnis hinzufügen

// Erstelle ein Bilder-Carousel-Element
        for (let i = 0; i < product.images.length - 1; i++) {
            if (i == 0) {
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
            } else {
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
// Erstelle ein Element für den Titel des Produkts
            const titleElement = document.createElement("h1");
            titleElement.textContent = `${product.title}`;
//Füge Description ein
            const descriptionElement = document.createElement("h2");
            descriptionElement.textContent = `Beschreibung: ${product.description}`;
//Füge Preis ein
            const priceElement = document.createElement("h2");
            priceElement.textContent = `Preis: ${product.price}€`;
//Füge Markenname ein
            const brandElement = document.createElement("h2");
            brandElement.textContent = `Marke: ${product.brand}`;
// Füge den Titel und die Beschreibung dem Produktcontainer hinzu
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

//Beginn erstellung Warenkorb
        fetch(urlCart)
            .then((response) => response.json())
            .then((cart) => {

//Fragt ab, ob es einen Warenkorb gibt.
        if (productID >= 20) {
            const meldungElement = document.createElement("h5");
            meldungElement.textContent = "Es sind keine Waren im Einkaufswagen.";
            cartContainer.appendChild(meldungElement);
        } else {
            for (let i = 0; i < cart.products.length; i++) {
// Erstelle einen Container für den Warenkorb
            const shopContainer = document.createElement("div");
            const imgElement = document.createElement("img");
            imgElement.src = cart.products[i].thumbnail;
            imgElement.alt = "Product Image";
            imgElement.style.width = "5em";
//Erstelle eine Box für alles in der Infobox
            const boxElement = document.createElement("div");
// Erstelle ein Element für den Titel des i-ten Produkts
            const titleElement = document.createElement("h2");
            titleElement.textContent = `${cart.products[i].title}`;
// Erstelle ein Element für den Preis des i-ten Produkts
            const priceElement = document.createElement("h2");
            priceElement.textContent = `Preis: ${cart.products[i].price}€`;
// Erstelle ein Element für die Menge des i-ten Produkts
            const quantityElement = document.createElement("h2");
            quantityElement.textContent = `Anzahl: ${cart.products[i].quantity} Stk.`;
            shopContainer.appendChild(imgElement);
            boxElement.appendChild(titleElement);
            boxElement.appendChild(priceElement);
            boxElement.appendChild(quantityElement);
            shopContainer.appendChild(boxElement);
// Füge den Produktcontainer dem Hauptcontainer auf der Seite hinzu
            cartContainer.appendChild(shopContainer);
            }
        }
    });
});
