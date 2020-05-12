$(document).ready(function() {

$('p').html('<span class="cor">Hello</span>')

$('p').html(`Olá é igual a 
<span class="cor">Hello</span>
<strong>Darkness</strong>
`
);

$('li').addClass("margin")

$('li').removeClass("item1")


$("p").click(function() {
    $(this).toggleClass("destaque")
})


})