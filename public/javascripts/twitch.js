const channelid = "bobberwcc"
const clientid = "3z4tzkvc50r32pzgo11cik9squ6lkc"
//console log
console.log('%c Bobber.Com', 'font-size:100px;color:#fff;text-shadow:0 3px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('Git: https://github.com/Siriusa77II/Bobber.com');
console.log('Version: 2.0.SrTV-Beta');
console.log('Environement: Developement/Beta test');
console.log('Hosted on: SMG-TV');
//console.log('Hosted on DESKTOP-4UIRDM6')
console.log('Infrastructure: Sirius Media Group');
//console.log('Infrastructure: Local')
console.log('Drive: NVME SSD');
console.log('Balancer: SMG-Balancer01');
console.log('%c Next errors come from twitch. (we are good dev. :c)', 'color: red;');
console.log('Streamer Name: ' + channelid);
//START SCRIPT LOL!
$(document).ready(
    function()
    {
checkStream();
    setInterval(function (){
    checkStream();
    }, 5000);
    //<------------MEGA SEPARATION!!!!!!!!!!!!!------------>
    $('.nav').before('<img src="" alt="" class="onoffdot">');
    function checkStream(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.twitch.tv/kraken/streams/" + channelid + "?client_id=" + clientid, true)
    xhr.onreadystatechange = function(channel) {
        if(xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        var elm  = document.getElementById("info")
        if(data["stream"] === null){
            //if Streamer offline
            //Console log offline
            console.log('Updating Streamer ' + channelid);
            console.log('Querying bobberwcc...', data);
            console.log('Streamer offline. No Website hosting.')
            //Show offline in page
            //$('.online-text').before('<img src="" alt="" class="onoffdot">'); // <=== cette ligne... pas bien XD 
            //No little red dot
            $(".fa-circle").attr("style","color:transparent;");
            //consol log no game
            //console.log('Querying bobberwcc - streamer offline - No Game ...', data);
            //
            //Show only a space in page
            //$('.gamename').text(' No Game '); 
            //Show Veiwers
            $('.veiwers').html('<i class="fas fa-users"></i> 0');
            //Show Streamer PP
            //$('.pp').html('<img class="logo" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cb1e2af7ad055c8c-profile_image-70x70.jpeg" width="21px"/>');
        }else{
            //if streamer online
            //console log Streamer online + add game name
            console.log('Updating Streamer ' + channelid);
            console.log('Querying bobberwcc - streamer online Game ' + data.stream.channel.status);
            //Show on page Stream name
            //log Streamer on line in console and add Game name
            console.log('Querying bobberwcc - streamer online Game ' + data.stream.gam);
            //show game in page
                $('.gamename').text(data.stream.game);
            //log Streamer on line in console and add Game name
            console.log('Querying bobberwcc - streamer online Game ' + data.stream.game);
            //Viewers count
                $('.veiwers').html('<i class="fas fa-users"></i> ' + data.stream.viewers);
            //show game in page 
                $('.gamename').text(data.stream.game);
                //$('.online-text').before('<img src="" alt="" class="onoffdot">'); <=== cette ligne... pas bien puisque c'est la mÃªme qu'en haut
                //Add Lil' red dot on navbar                                           // ^^^^^^^^^^^^^^ bah vire la MDR! -Sirius
                $(".fa-circle").attr("style","color:red;");
                $('pp').html('<img src="'+ data.logo +'" width="21px"/>');
        }
    }
    }
    
    xhr.send();
    }
    $('.chat').html('<iframe src="https://www.twitch.tv/embed/'+ channelid +'/chat?darkpopout=" scrolling="no" frameborder="0" width="100%"></iframe>');
    (jQuery);
            //Twitch Player!
            new Twitch.Embed("twitch-embed", {
                layout: "video",
                autoplay: "true",
                channel: channelid,
});

checkStream2();
    setInterval(function(){
    checkStream2();
    }, 50000);

    function checkStream2(){
        var xhr2 = new XMLHttpRequest()
        xhr2.open("GET", "https://api.twitch.tv/kraken/channels/"+channelid+"?client_id=3z4tzkvc50r32pzgo11cik9squ6lkc", true)
        xhr2.onreadystatechange = function(channel) {
            if(xhr2.readyState == 4) {
                var data = JSON.parse(xhr2.responseText)
                var elm = document.getElementById("info")
                console.log("update Streamer channel");
                $('.pp').html('<img src="'+ data.logo +'" width="21px"/>');
                console.log(data.logo)
                $('.gamename').text(data.game); 
                $('.banner').html('<img src"' + data.profile_banner +'" class="img-fluid">')
                console.log(data.profile_banner)
                if(data.name === "bobberwcc"){
                    $('.online-text').text('bobberwcc - ' + data.status);
                   //$('.veiwers').html('<i class="fas fa-users"></i> ' + data.views);
                
                }else{
                    $('.online-text').text('bobberwcc Hosting - ' + data.name +' - '+ data.status);
                    $('.veiwers').html('<i class="fas fa-users"></i> ' + data.views);
                }
            }
        }
        xhr2.send();
    }(jQuery);
});
