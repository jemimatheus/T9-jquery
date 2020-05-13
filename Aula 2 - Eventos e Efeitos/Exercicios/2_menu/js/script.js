$(document).ready(function() {

    // $('#botaoAbrir').on('click', function() {
    // $('#menulateral').toggleClass('visible');
    // });
    
   
//1ª resolução

//     $("#botaoAbrir").click(function() {
//         $("#menulateral").css("display", "block");
//         $(".div-botao").css("margin-left", "250px")
//     })
//     $("#botaoFechar").click(function() {
//         $("#menulateral").css("display", "none");
//         $(".div-botao").css("margin-left", "0px")
//     })
// })

//dá pra resolver com hide()/show(), fadein(), fadeOut(), toggle()

$('#botaoAbrir').click(function(){
    $('#menulateral').toggle()
    $(".div-botao").css("margin-left", "250px")
})
$('#botaoFechar').click(function(){
    $('#menulateral').hide()
    $(".div-botao").css("margin-left", "0px")
})
})
