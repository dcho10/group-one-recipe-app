$(document).ready(function(){
    var apiKey = "AIzaSyBaRXW1cQLLhAiCwGrPFD8rB3ia6EUxpSc"

    $("form").submit((any) => {
        any.preventDefault()
        var search = $("#search").val()
        videoSearch(apiKey,search,8)//where total videos displayed is set
    })
})

function videoSearch(apiKey,search,maxResults){
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