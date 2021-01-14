var btnShowMenu = document.querySelector('.navbar-icon')
var menuTop = document.querySelector('.menutop')
btnShowMenu.onclick = function () {
    menuTop.classList.toggle('tran')
    menuTop.classList.toggle('width')
}
