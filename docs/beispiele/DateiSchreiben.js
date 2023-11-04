

// HTML-Elemente erstellen und Daten einfügen
const dataContainer = document.getElementById("data-container");

for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        const dataRow = document.createElement("div");
        dataRow.innerHTML = `<strong>${key}:</strong> ${jsonData[key]}`;
        dataContainer.appendChild(dataRow);
    }
}
let userid = 6;
let url = 'https://dummyjson.com/users/' + userid + '/todos';
fetch(url)
.then(res => res.json())
.then(async (data) => {
    await createPost(data);
});


async function createPost(posts){
    posts.todos[0].title 

}




