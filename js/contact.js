$(document).ready(function() {
    $("html").on("contextmenu", function(e) {
        return false;
    })
})

// nav bar
$(function() {

    $('.nav__button').click(function() {
        navTransformation();
    });

    $('.nav__menu').click(function() {
        navTransformation();
    });

    function navTransformation() {
        $(".nav__menu").toggleClass('expandNav');
        $('.nav__button').toggleClass('nav__button-hover');
        $('.nav__button').toggleClass('nav_button-animation');
    }

});
//end nav bar

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

// cursor
var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX +
        "px; top: " + e.clientY + "px;";
});
//end cursor