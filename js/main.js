// проверка готовности
$(document).ready(function () {
   console.log('jq is ready');
})


/* HAMBURGER */

$('.hamburger').on('click', function () {
   $('.head__menu').toggle();
})

$('.hamburger').on('click', function () {
   $('.head__menu').hide();
});