let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play2() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
}
function playItem1() {
    var audio3 = document.getElementById("audio3");
    audio3.play();
}
function playItem2() {
    var audio4 = document.getElementById("audio4");
    audio4.play();
}
function playItem3() {
    var audio5 = document.getElementById("audio5");
    audio5.play();
}
function playItem4() {
    var audio6 = document.getElementById("audio6");
    audio6.play();
}
function playItem5() {
    var audio7 = document.getElementById("audio7");
    audio7.play();
}
function playItem6() {
    var audio8 = document.getElementById("audio8");
    audio8.play();
}
function playItem01() {
    var audio9 = document.getElementById("audio9");
    audio9.play();
}
function playItem02() {
    var audio10 = document.getElementById("audio10");
    audio10.play();
}
function playItem03() {
    var audio11 = document.getElementById("audio11");
    audio11.play();
}
function play03() {
    var audio14 = document.getElementById("audio14");
    audio14.play();
}
function play02() {
    var audio13 = document.getElementById("audio13");
    audio13.play();
}
function play01() {
    var audio12 = document.getElementById("audio12");
    audio12.play();
}
