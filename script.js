var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
            var playerInfoList = [
               {id: 'video-cancion', height: '100%', width: '100%', videoId: 'KbVKJx9gNAs'}
            ];
            
            //Init player
            function onYouTubeIframeAPIReady() {
                if (typeof playerInfoList === 'undefined') return;
        
                for (var i = 0; i < playerInfoList.length; i++) {
                    var curplayer = createPlayer(playerInfoList[i]);
                    players[i] = curplayer;
                }
            }
        
            var players = new Array();
         
            function createPlayer(playerInfo) {
                return new YT.Player(playerInfo.id, {
                    height: playerInfo.height,
                    width: playerInfo.width,
                    videoId: playerInfo.videoId,
                    events: {'onStateChange': onPlayerStateChange}
                });

            }
        
            function onPlayerStateChange(event) {
                if (get.event.data == YT.PlayerState.PLAYING) {
                    manageVideo(event.target.a.id);
                }
            }
        
            function manageVideo(player_id) {
                $(players).each(function (i) {
                    if(this.a.id == player_id){
                        this.playVideo();
                    }else {
                        this.pauseVideo();
                    }
                });
            }
        
        