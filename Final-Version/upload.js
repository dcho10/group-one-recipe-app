var ingredientBtn = document.querySelector(".add-ingredient-btn");

function displayIngredient () {
    var ingredientInput = document.getElementById("add-ingredient");
    var ingredientContainer = document.querySelector(".ingredients");
    
    if (!ingredientInput.value) {
        return;
    }
    var ingredients = ingredientContainer.children;

    var ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = ingredientInput.value;

    ingredientContainer.appendChild(ingredientsEl);

    ingredientInput.value = "";
}

ingredientBtn.addEventListener("click", displayIngredient);

var recipeBtn = document.querySelector(".add-recipe-btn");

function displayRecipe () {
    var buildRecipe = document.querySelector(".build-recipe");

    var titleInput = document.querySelector(".recipe-title");
    var ingredientsContainer = document.querySelector(".ingredients");
    var instructionsInput = document.querySelector(".recipe-text");

    var titleEl = document.createElement("h1");
    titleEl.textContent = titleInput.value;

    var ingredientsClone = ingredientsContainer.cloneNode(true);
    ingredientsEl = document.createElement("section");
    ingredientsEl.appendChild(ingredientsClone);

    var instructionsEl = document.createElement("p");
    instructionsEl.textContent = instructionsInput.value;

    buildRecipe.appendChild(titleEl);
    buildRecipe.appendChild(ingredientsContainer);
    buildRecipe.appendChild(instructionsEl);

    titleInput.value = "";
    instructionsInput.value = "";

    var title = document.querySelector(".title-text");
    var ingredientsList = document.querySelector(".ingredients-list");
    var instructionsText = document.querySelector(".instructions-text");
    
    title.classList.add("hide");
    ingredientsList.classList.add("hide");
    instructionsText.classList.add("hide");
    recipeBtn.classList.add("hide")

}

recipeBtn.addEventListener("click", displayRecipe);