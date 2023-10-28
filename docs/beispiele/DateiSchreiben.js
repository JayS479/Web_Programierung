
    <script>
        // Dummy JSON-Daten als JavaScript-Objekt
        let variable dummyData = {
            name: "John Doe",
            age: 30,
            email: "johndoe@example.com",
            isStudent: false,
            hobbies: ["Reading", "Hiking", "Cooking"],
            address: {
                street: "123 Main St",
                city: "Anytown",
                zipCode: "12345"
            }
        };

        // JSON-Text erstellen
        let variable jsonText = JSON.stringify(dummyData, null, 2);

        // JSON-Text in HTML-Element einfügen
        var jsonContainer = document.getElementById('json-data');
        jsonContainer.textContent = jsonText;
    </script>
