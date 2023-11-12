document.addEventListener("DOMContentLoaded", function () {
//Referenzen zu den HTML-Elementen
  const searchResults = document.getElementById("resultsContainer"); 
  const searchInput = document.getElementById("searchbar");
  const searchButton = document.getElementById("search");

//URL der API, von der die Daten abgerufen werden sollen
  const apiUrl = "https://dummyjson.com/products"; 
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); //Antwort in JSON konvertieren
    })
    .then((data) => {
      products = data.products; // Speichere die Daten in der products-Variable
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
    });

// Funktion zum Ausführen der Suche
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Hole den Suchbegriff und trimme ihn
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(filteredProducts); // Zeige nur gefilterte Produkte an
  }
// Event-Listener für den Suchbutton

  searchButton.addEventListener("click", performSearch);
// Funktion zum Navigieren zur Detailseite
  function navigateToDetailPage(productId) {
    window.location.href = `detail.html?id=${productId}`;
  }
// Event-Listener für das Klicken auf Suchergebnisse
  searchResults.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".search-result"); // Das geklickte Suchergebnis finden
    if (clickedItem) {
      const productId = clickedItem.getAttribute("data-product-id"); // Produkt-ID aus dem Datenattribut lesen
      navigateToDetailPage(productId); // Navigiere zur Detailseite mit der ausgewählten Produkt-ID
    }
  });
//Funktion, um die Ergebnisse der Suche anzuzeigen.
  function displaySearchResults(productsToDisplay) {
    searchResults.innerHTML = "";
    if (!Array.isArray(productsToDisplay) || productsToDisplay.length === 0) {
      searchResults.innerHTML = "Keine Ergebnisse gefunden.";
      return;
    }
    const resultList = document.createElement("ul");
    productsToDisplay.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.classList.add("search-result"); // CSS-Klasse für das Suchergebnis hinzufügen
      // Erstelle ein <img>-Element für das Produktbild
      const productImage = document.createElement("img");
      productImage.src = product.thumbnail; // Bild-URL aus DummyJson
      // Erstelle ein <span>-Element für den Produktnamen
      const productName = document.createElement("span");
      productName.textContent = product.title;
      // Erstelle ein <span>-Element für den Produktnamen
      const productPrice = document.createElement("h2");
      productPrice.textContent = product.price + "€";
      listItem.setAttribute("data-product-id", product.id); // Produkt-ID als Datenattribut hinzufügen
      listItem.appendChild(productImage); // Füge das Bild zum Listenelement hinzu
      listItem.appendChild(productName); // Füge den Produktnamen zum Listenelement hinzu
      listItem.appendChild(productPrice);
      resultList.appendChild(listItem); // Füge das Listenelement zur Ergebnisliste hinzu
    });
    searchResults.appendChild(resultList); // Füge die Ergebnisliste zu den Suchergebnissen hinzu
  }
});
