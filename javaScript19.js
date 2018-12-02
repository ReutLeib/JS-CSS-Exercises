window.onload = getSizeWindow; 

function getSizeWindow() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  document.getElementsByTagName("strong")[0].innerHTML = `width: ${w} height: ${h}`;

}