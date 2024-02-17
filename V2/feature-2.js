$(document).ready(function(){
    let apiKey = "AIzaSyBaRXW1cQLLhAiCwGrPFD8rB3ia6EUxpSc"

    $("form").submit((e) => {
        e.preventDefault()
        let search = $("#search").val()
        videoSearch(apiKey,search,5)//where total videos displayed is set
    })
})

function videoSearch(apiKey,search,maxResults){
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,(data) => {
        console.log(data)

        let video = ''

        data.items.forEach(item => {
            video = `
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            ` // where i can change the video box template

            $("#videos").append(video)
        });
    })

}