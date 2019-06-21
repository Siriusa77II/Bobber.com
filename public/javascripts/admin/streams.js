//client ID && channel
const channelid = "sirius242"
const clientid = "3z4tzkvc50r32pzgo11cik9squ6lkc"
//console log
console.log('%c SiriusTV', 'font-size:100px;color:#fff;text-shadow:0 3px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('Git: [PRIVATE]');
console.log('Version: 2.0.SrTV-Beta');
console.log('Environement: Developement');
//console.log('Hosted on: SMG-TV');
console.log('Hosted on DESKTOP-4UIRDM6')
//console.log('Infrastructure: Sirius Media Group');
console.log('Infrastructure: Local')
//console.log('Drive: NVME SSD');
//console.log('Balancer: SMG-Balancer01');
console.log('%c Les prochaines erreur viennes de Twitch, merci de ne pas en prendre compte. (Nous sommes de bon developpeur :c)', 'color: red;');
console.log('Streamer Name: ' + channelid);

//Admin panel Stream infos
checkStream();
    setInterval(function(){
        }, 5000);
    function checkStream(){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "https://api.twitch.tv/kraken/streams/" + channelid +"?client_id=" + clientid, true)
        console.log("Opening connetion with TwitchAPI");
        xhr.onreadystatechange = function(channel){
            if(xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText)
                var elm = document.getElementById("info")
                if(data["stream"] === null){
                    //is offline
                    console.log('Streamer offline');
                    $('.online').text('Stream is: offline');
                    $('.name').text('Streamer Name: offline');
                    $('.bitrate').text('Bitrate: offline');
                    $('.viewer').text('Viewers: offline');
                    $('.status').text('Stream name: offline');
                    $('.game').text('Game Name: offline');
                    $('.mature').text('Mature? offline');
                    $('.views').text('Views: offline');
                    $('.followers').text('Followers: offline');
                }else{
                    //is online
                    console.log('Streamer ' + channelid + ' is online');
                    $('.online').text('Stream is: ONLINE');
                    $('.name').text('Streamer Name: ' + data.stream.channel.display_name);
                    $('.average_fps').text('FPS: ' + data.stream.average_fps);
                    $('.viewer').text('Viewers: ' + data.stream.viewers);
                    $('.status').text('Stream name: ' + data.stream.channel.status);
                    $('.game').text('Game Name: ' + data.stream.game);
                    $('.mature').text('Mature? ' + data.stream.channel.mature);
                    $('.views').text('Views: ' + data.stream.channel.views);
                    $('.followers').text('Followers: ' + data.stream.channel.followers);
                }
            }
        }
        xhr.send();
    }(jQuery);
    new Twitch.Embed("twitch-embed", {
        layout: "video",
        autoplay: "true",
        channel: channelid,
    });