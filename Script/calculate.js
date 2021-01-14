
document.addEventListener("DOMContentLoaded",function (){
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    var z = Math.floor((Math.random() * 2) + 1);
    var a
    var b
    if (z===1){
        a='-';
        b=x-y
    }else {
        a='+';
        b=x+y
    }
    document.querySelector(".number1").innerHTML = x;
    document.querySelector(".number1_5").innerHTML = a;
    document.querySelector(".number2").innerHTML = y;
    document.querySelector(".number3").innerHTML = b;

    var btn_reset = document.querySelector('.hight')
    var btn_reset1 = document.querySelector('.low')
    var btn_reset2 = document.querySelector('.hard')

    btn_reset.onclick = function myFunction() {
        var x = Math.floor((Math.random() * 50) + 1);
        var y = Math.floor((Math.random() * 50) + 1);
        var z = Math.floor((Math.random() * 2) + 1);
        var a
        var b
        if (z===1){
            a='-';
            b=x-y
        }else {
            a='+';
            b=x+y
        }
        document.querySelector(".number1").innerHTML = x;
        document.querySelector(".number1_5").innerHTML = a;
        document.querySelector(".number2").innerHTML = y;
        document.querySelector(".number3").innerHTML = b;
    }
    btn_reset1.onclick = function myFunction() {
        var x = Math.floor((Math.random() * 10) + 1);
        var y = Math.floor((Math.random() * 10) + 1);
        var z = Math.floor((Math.random() * 2) + 1);
        var a
        var b
        if (z===1){
            a='-';
            b=x-y
        }else {
            a='+';
            b=x+y
        }
        document.querySelector(".number1").innerHTML = x;
        document.querySelector(".number1_5").innerHTML = a;
        document.querySelector(".number2").innerHTML = y;
        document.querySelector(".number3").innerHTML = b;
    }
    btn_reset2.onclick = function myFunction() {
        var x = Math.floor((Math.random() * 9) + 1);
        var y = Math.floor((Math.random() * 9) + 1);
        var z = Math.floor((Math.random() * 2) + 1);
        var a
        var b
        if (z===1){
            a='x';
            b=x*y
        }else {
            a=':';
            b=x/y
        }
        document.querySelector(".number1").innerHTML = x;
        document.querySelector(".number1_5").innerHTML = a;
        document.querySelector(".number2").innerHTML = y;
        document.querySelector(".number3").innerHTML = b.toFixed(1);
    }
})