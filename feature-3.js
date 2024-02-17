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
        
        displayRecipe(data)
    });
}

searchButton.addEventListener("click", getApi);

function displayRecipe (data) {
    var recipesContainer = document.querySelector(".recipes");
    
    if (recipesContainer) {
        recipesContainer.innerHTML = "";
                
            for (var i = 0; i < data.hits.length; i++) {
                var label = data.hits[i].recipe.label;
                var image = data.hits[i].recipe.image;
                var shareAs = data.hits[i].recipe.shareAs;
    
                console.log("Recipe Label:", label);
                console.log("Recipe Image:", image);
                console.log("Share As:", shareAs);
    
                var recipeContainer = document.createElement("section");

                var labelHeading = document.createElement("h4");
                labelHeading.textContent = label;

                var imageEl = document.createElement("img");
                imageEl.src = image;

                var shareAsLink = document.createElement("a");
                shareAsLink.href = shareAs;
                
                shareAsLink.appendChild(imageEl);
                shareAsLink.appendChild(labelHeading);
                
                recipesContainer.appendChild(shareAsLink);
                recipesContainer.appendChild(recipeContainer);
        }
    } else {
        console.error("Recipes container not found");
    }
    
}