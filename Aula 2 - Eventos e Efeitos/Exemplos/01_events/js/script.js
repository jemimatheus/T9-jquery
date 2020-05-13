$(document).ready(function() {
    //evento disparado 
    $("h2").click(function() {
        //aquele elemento que 
        //está sendo afetado pelo evento
        $(this).css({
        "background-color":"black",
        "color": "white"
        })
    })
    $("h3").dblclick(function() { ///duplo clique
        alert('fui clicado duas vezes!');
        $(this).hide("slow");
        $(this).show("slow");
    })
    $("#div").mouseenter(function() {  //mouse entrando na div
        alert("Você entrou em um div!")
    })
    $("#div").mouseleave(function(){ //mouse saindo da div
        alert("VOLTAAAAAAAAA!")
    })
    $("input").focus(function() {  //foco no campo do formulario
        $(this).css("background-color", "red")
    })
    $("input").blur(function(){   //muda a cor do foco na saida do formulario
        $(this).css("background-color", "blue")
    })
})
