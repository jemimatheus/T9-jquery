$(document).ready(function() {

<<<<<<< HEAD
    //chamando pela tag
    $('h1').css('color', '#f66')
    $('h1').css('font-size', '50px')
    $('h1').hide();
    $('h1').delay('2000'); //2000ms = 2s
    $('h1').fadeIn('slow');
    $('h1').text('Olár menines')
    
    //encadeamento de bloco
    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('5000')
        .fadeIn('slow')
        .text('Surpresa!')
    
    //chamando pela classe
    $('.item1').click(function() {
        $('body').css('background', 'blue')
        $('h1').css('color', "#fff")
    });
    
    
    //obj 
    $('li').css({
        color: 'red', 
        display: 'flex', 
        padding: '20px',
    })
    
    //chamando por ID
    $('#item2').css('color', 'yellow')
    
    $('*').css('margin-left', '100px')
    
    $('h1, #item2, .item1').css('border-bottom', '3px solid blue')
    
    //exemplos css de parentesco
    $('div > p')
    
    })
=======
//chamando pela tag
$('h1').css('color', '#f66')
$('h1').css('font-size', '50px')
$('h1').hide();
$('h1').delay('2000'); //2000ms = 2s
$('h1').fadeIn('slow');
$('h1').text('Olár menines')

//encadeamento de bloco
$('h1')
    .css('color', '#f66')
    .hide()
    .delay('5000')
    .fadeIn('slow')
    .text('Surpresa!')

//chamando pela classe
$('.item1').click(function() {
    $('body').css('background', 'blue')
    $('h1').css('color', "#fff")
});


//obj 
$('li').css({
    color: 'red', 
    display: 'flex', 
    padding: '20px',
})

//chamando por ID
$('#item2').css('color', 'yellow')

$('*').css('margin-left', '200px')

$('h1, #item2, .item1').css('border-bottom', '3px solid blue')

//exemplos css de parentesco
$('div > p')

})

>>>>>>> 6fc8c80860abe25a687c71277522637b9815db01
