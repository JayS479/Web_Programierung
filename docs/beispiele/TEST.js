document.addEventListener("DOMContentLoaded", function () {
    const searchbar = document.getElementById("searchbar");
    const searchButton = document.getElementById("Search");

    let assignedValue; // Hier wird der eingegebene Wert gespeichert
    
    searchButton.addEventListener("click", function () {
        const enteredValue = searchbar.value;
        assignedValue = enteredValue;

        let url = `https://dummyjson.com/users/${assignedValue}/todos`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('resultsContainer');
            
            // Lösche den Container-Inhalt, um vorherige Suchergebnisse zu entfernen
            dataContainer.innerHTML = '';

            if (data.todos) {
                data.todos.forEach(todo => {
                    const todoItem = document.createElement('div');
                    todoItem.textContent = `ID: ${todo.id}, Todo: ${todo.todo}`;
                    dataContainer.appendChild(todoItem);
                });
            } else {
                dataContainer.textContent = 'Keine Todos gefunden.';
            }
        })
        .catch(error => console.error('Fehler beim Abrufen der JSON-Daten: ' + error));
    });
});
