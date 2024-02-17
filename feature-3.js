// Add modals, 2API, one library (BootStrap maybe)

var searchButton = document.querySelector(".search-button");
var recipeData;

function getApi () {
    var recipeInput = document.getElementById("recipe-input").value;

    if(!recipeInput) {
        console.error("Enter a recipe");
        return;
    }

    var requestUrl = "https://api.edamam.com/search?q=" + recipeInput + "&app_id=6c6b865c&app_key=8912fc1bfbb206e14925f8ef4a300a7c";

    fetch(requestUrl)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);

        if (data.length === 0) {
            console.error("Error fetching recipe data:");
            return;
        }   
        
        var labels = [];
        for (var i = 0; i < data.hits.length; i++) {
            var label = data.hits[i].recipe.label;
            console.log("Recipe Label:", label);
            labels.push(label);
        }

        displayRecipe(labels)
    });
}

searchButton.addEventListener("click", getApi);

function displayRecipe (labels) {
    document.querySelector(".recipes").innerHTML = labels.join("<br>");
}