$(function(){
 
  
  var searchIngrediant = $("#submit") 
  const ImageContainer = document.querySelector("#image-container")
   
  function searchRecipe(){
    
    var ingrediantInput= [$("#search").val()];
       
    var requestUrl = "https://api.edamam.com/search?q="+ingrediantInput+"&app_id=d9dbbc3a&app_key=481712ca78f733b599d5c987ac7e2d9b&from=0&to=10";
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })

          .then(function (data) {
            ImageContainer.innerHTML = " ";
             
            for(i=0; i<data.hits.length; i++){
             
              
              const recipeImg = [data.hits[i].recipe.image]
              const recipePage = [data.hits[i].recipe.shareAs]
              const recipeLabel = [data.hits[i].recipe.label]
              const recipeType = [data.hits[i].recipe.cuisineType]
              const recipeMealType = [data.hits[i].recipe.mealType]
              
              
              
              for (let i = 0; i < recipeImg.length; i++) {
                       
              const recipeRefs = document.createElement('a');  
              const recipeImages= document.createElement('img')
                          
                        
              recipeImages.src = recipeImg[i];
              recipeRefs.href= recipePage[i];
              recipeRefs.target = "_blank"
              recipeImages.title= recipeLabel[i];
              
                  
              const htmlrecipe =`
              <div class ="recipe-item">
              
              <img src="${recipeImg[i]}">
              <h4 class="title">${recipeLabel[i]}</h4>
             
              
              <div class="flex-container">
              <a class="view-btn" target="_blank" href="${recipePage[i]}">View Recipe</a>
              <div class="tooltip">More information
              <span class="tooltiptext">Cuisine: ${recipeType[i]}, Meal type: ${recipeMealType[i]}</span>
              </div>
              </div>  
              </div>
            `
               
              ImageContainer.insertAdjacentHTML("beforeend", htmlrecipe)
             
             
}           
          }

            
          });

  $("#search").val('')
  
  }
  
      
  searchIngrediant.on("click", searchRecipe);
  


      
})


