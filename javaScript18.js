function highlight(){
  var boldWords = document.getElementsByTagName("strong");
  for (var i = boldWords.length - 1; i >= 0; i--) {
    boldWords[i].style.color = "blue";
  }
}

function return_normal(){
var boldWords = document.getElementsByTagName("strong");
  for (var i = boldWords.length - 1; i >= 0; i--) {
    boldWords[i].style.color = "black";
  }
}