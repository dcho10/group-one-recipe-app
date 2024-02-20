$(document).ready(function(){
    var apiKey = "AIzaSyBaRXW1cQLLhAiCwGrPFD8rB3ia6EUxpSc" // test tomorrow

    $("form").submit((any) => {
        any.preventDefault()
        var search = $("#search").val()
        localStorage.setItem("Recipe Searched",JSON.stringify(search));

        var recipeHistory = JSON.parse(localStorage.getItem("Recipe Searched"));
      
        const recentRecipes = document.createElement('li')
        
        recentRecipes.append(recipeHistory);
        $(".recent-recipes > ul").append(recentRecipes)
        videoSearch(apiKey,search,12)//where total videos displayed is set
    })
})

function videoSearch(apiKey,search,maxResults){
    $("#videos").empty() // used to empty after each search
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,(data) => {
        console.log(data)

        var video = ''

        data.items.forEach(item => {
            video = `
            <iframe width="320" height="215" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            ` // where i can change the video box template

            $("#videos").append(video)
        });
    })

}