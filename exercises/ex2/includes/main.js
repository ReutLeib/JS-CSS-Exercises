//
// $(document).ready(function() {
//   $('header').append(
//     '<a href="#" id="logo"></a>'
//   )
// })
var maxSquare = 6;

function getRandomInt(min, max) { /* found at http://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor(){
  var r = getRandomInt(0,255);
  var g = getRandomInt(0,255);
  var b = getRandomInt(0,255);
  return 'rgb('+r+','+g+','+b+')';
}



function createSquareJS() {
  var articleSquare = document.createElement('article');
  articleSquare.className = "squareJS";
  articleSquare.style.backgroundColor = getRandomColor();
  return articleSquare;
}

$(document).ready(function() {
   for (var i = 0; i < maxSquare; i++){
     $('main').append(createSquareJS());
   }

  $('.squareJS').click(function() {
    //  $('main').on("click",".squareJS",function() {
     if($(this).is(':last-child')){
       $('main').prepend(createSquareJS());
     }
     else{
       $(this).toggleClass('star');
     }
   })
}) // end function
