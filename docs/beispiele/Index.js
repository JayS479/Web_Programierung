document.addEventListener("DOMContentLoaded", function () {
  const searchResults = document.getElementById("resultsContainer"); //Referenzen zu den HTML-Elementen
  const searchInput = document.getElementById("searchbar");
  const searchButton = document.getElementById("search");

  let products = []; // Hier speichern wir alle Produkte, die wir von der API erhalten
  const apiUrl = "https://dummyjson.com/products"; //URL der API, von der die Daten abgerufen werden sollen
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
  // Event-Listener für die Eingabe im Suchfeld
  //              searchInput.addEventListener("input", performSearch);
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
      listItem.setAttribute("data-product-id", product.id); // Produkt-ID als Datenattribut hinzufügen
      listItem.appendChild(productImage); // Füge das Bild zum Listenelement hinzu
      listItem.appendChild(productName); // Füge den Produktnamen zum Listenelement hinzu
      resultList.appendChild(listItem); // Füge das Listenelement zur Ergebnisliste hinzu
    });
    searchResults.appendChild(resultList); // Füge die Ergebnisliste zu den Suchergebnissen hinzu
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.getElementById("toggleMenu");
  const menuLinks = document.querySelector(".menu-links");
  toggleMenuButton.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });
});
