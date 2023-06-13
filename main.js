var $nav = document.querySelector('.topHeader .nav button');
var $topHead = document.querySelector('header .topHeader');



var $menu = document.querySelector('header .menu')

$nav.addEventListener('click', showMenu)



function showMenu() {
    $menu.classList.toggle('active');
    // $topHead.classList.toggle('active');

}

// var $turnOff = document.querySelector('#off');
// var $fan = document.querySelector('#fan p');
// var $lv1 = document.querySelector('#lv1');
// var $lv2 = document.querySelector('#lv2');

// $turnOff.addEventListener('click', Off);
// function Off() {
//     $fan.style.animation = 'rotation 0s infinite linear'
// };
// $lv1.addEventListener('click', function lv1(){
//     $fan.style.animation = 'rotation 2s infinite linear'
// });
// $lv2.addEventListener('click', function lv2(){
//     $fan.style.animation = 'rotation 1s infinite linear'
// });