document.getElementById("btnApeend").addEventListener('click',()=>{
  addRect();
})

function addRect(){
  var div = document.createElement('div');
  var sec = document.getElementById("xyz");
  div.className = 'rectangle';
  sec.appendChild(div);
}