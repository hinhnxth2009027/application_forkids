

var btnPlayMusic = document.querySelector('.play-music')
var media = document.querySelector('.media')
document.addEventListener('DOMContentLoaded',function (){
    var content_img = document.querySelectorAll('.pt-border-dashed')

    var audio_abc = ['','../audio/read_abc/1.mp3','../audio/read_abc/2.mp3','../audio/read_abc/3.mp3','../audio/read_abc/4.mp3','../audio/read_abc/5.mp3','../audio/read_abc/6.mp3','../audio/read_abc/7.mp3','../audio/read_abc/8.mp3','../audio/read_abc/9.mp3','../audio/read_abc/10.mp3','../audio/read_abc/11.mp3','../audio/read_abc/12.mp3','../audio/read_abc/13.mp3','../audio/read_abc/14.mp3','../audio/read_abc/15.mp3','../audio/read_abc/16.mp3','../audio/read_abc/17.mp3','../audio/read_abc/18.mp3','../audio/read_abc/19.mp3','../audio/read_abc/20.mp3','../audio/read_abc/21.mp3','../audio/read_abc/22.mp3','../audio/read_abc/23.mp3','../audio/read_abc/24.mp3','../audio/read_abc/25.mp3','../audio/read_abc/26.mp3']
    for (var i = 1 ; i <= 26 ; i++){
        content_img[i-1].innerHTML+= `<i class="fa fa-volume-up pt-volume btnplay" id="${i}"></i>`
        console.log(i)
    }

    var btnplay = document.querySelectorAll('.btnplay')
    for (let i = 1;i<=btnplay.length;i++){
        btnplay[i-1].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${audio_abc[this.id]}"></audio>`

        }
        btnplay[i].onblur = function () {
            media.innerHTML = ''
        }
    }
})


btnPlayMusic.onclick = function (){
    media.innerHTML = ` <audio controls autoplay><source src="../audio/read_abc/ABC-song.mp3"></audio>`
}

btnPlayMusic.ondblclick = function (){
    media.innerHTML = ``
}




