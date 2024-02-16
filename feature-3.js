// Add modals, 2API, one library (BootStrap maybe)

var searchButton = document.querySelector(".search-button");

function getApi () {
    var recipeInput = document.getElementById("recipe-input").value;

    var requestUrl = "https://api.edamam.com/search?q=" + recipeInput + "&app_id=6c6b865c&app_key=8912fc1bfbb206e14925f8ef4a300a7c";

    fetch(requestUrl)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);

    });
}

getApi();
searchButton.addEventListener("click", getApi);