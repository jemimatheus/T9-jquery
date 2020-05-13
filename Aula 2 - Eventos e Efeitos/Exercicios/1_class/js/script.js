//EXERCICIO 1 😍
 /*
  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

  3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo

  4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
  
  5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/

$(document).ready(function(){
    //body pode ser trocado por *
$('body').css('font-family', 'Arial,sans-serif')

 const nickname = 'Jê'
 let favoritos = 'Cada um na sua casa'
const cidade = 'São Paulo'
let favDoMomento = 'Rei Leão'

$('#nickname').text(nickname)
$('#favoritos').text([favoritos,favDoMomento])
$('#cidade').text(cidade)


$('h1')
.addClass('titulo')
.text('Sobre Mim.')

$('li').addClass('list')
$('span').addClass('item-list')

//resolução 1
//$('li').removeClass('wrongClass')

//resolução 2
$('li').eq(0).removeClass('wrongClass')
})