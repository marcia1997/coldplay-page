//rest api youtube
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
        
        
//validacion novedades formulario
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


function accion ()
{
    console.log('funciona el boton')
    var ancla = document.getElementsByClassName('nav-enlaces');
    for (var i = 0 ; i < ancla.length; i++)
    {
        ancla[i].classList.toggle('ocultar');
    }

}

