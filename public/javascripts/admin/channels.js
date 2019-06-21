const channelidtwitch = "sirius242"
const clientidtwitch = "3z4tzkvc50r32pzgo11cik9squ6lkc"
$(document).ready(
    function()
    {
checkStream();
    setInterval(function (){
    checkStream();
    }, 50000);
    //<------------MEGA SEPARATION!!!!!!!!!!!!!------------>
    function checkStream(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.twitch.tv/kraken/streams/" + channelidtwitch + "?client_id=" + clientidtwitch, true)
    xhr.onreadystatechange = function(channel) {
        if(xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        var elm  = document.getElementById("info")
        if(data["stream"] === null){
            //is offline
            console.log('hello world')

        }else{
            //is online
        }
    }
}
    xhr.send();
    (jQuery);
}});