$(function(){
 
  var searchIngrediant = $("#submit") 
 
  function searchRecipe(event){
    event.preventDefault()
      
    var ingrediantInput= [$("#search").val()];
    
    var requestUrl = "https://api.edamam.com/search?q="+ingrediantInput+"&app_id=d9dbbc3a&app_key=481712ca78f733b599d5c987ac7e2d9b&health=vegan";
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })

          .then(function (data) {
            for(i=0; i<data.hits.length; i++){
            const recipeImg = [data.hits[i].recipe.image]

            const containerImg = document.getElementById('image-container');

            for (let i = 0; i < recipeImg.length; i++) {
            const recipeImages= document.createElement('img')
            
            recipeImages.src = recipeImg[i];

            
            containerImg.append(recipeImages)
            
            }

            }

          });

  $("#search").val('')
        }
  

  searchIngrediant.on("click", searchRecipe);


      
})


