document.addEventListener('DOMContentLoaded', function () {
    var media = document.querySelector('.media')
    var colorAudio = ['','../audio/color/1.mp3','../audio/color/2.mp3','../audio/color/3.mp3','../audio/color/4.mp3','../audio/color/5.mp3','../audio/color/6.mp3','../audio/color/7.mp3','../audio/color/8.mp3','../audio/color/9.mp3','../audio/color/10.mp3','../audio/color/11.mp3','../audio/color/12.mp3']
    var colorText = ['','red','blue','green','yellow','purple','orange','black','pink','cyan','grey','violet','brown']
    var content = document.querySelector('.content>div')
    for (var i = 1; i <= 12; i++) {
        content.innerHTML+=`<div class="col-4 bgcolor${i} i" id="${i}"><h1 class="color${i}">${colorText[i]}</h1><br><i class="fa fa-volume-up color${i}" aria-hidden="true""></i></div>`
    }
    var playaudio = document.querySelectorAll('.i')
    for (var a = 0; a <= playaudio.length; a++) {
        playaudio[a].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${colorAudio[this.id]}"></audio>`
        }
        playaudio[a].onblur = function () {
            media.innerHTML = ''
        }
    }
})

