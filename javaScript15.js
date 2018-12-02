function removecolor(){
  // var selectobject=document.getElementById("colorSelect");
  // for (var i=0; i<selectobject.length; i++){
  // if (selectobject.options[i].value == 'A' )
  //    selectobject.remove(i);
  // }

  // OR:
  var x=document.getElementById("colorSelect");
  console.log(x);
  console.log(x.selectedIndex);
  x.remove(x.selectedIndex);
}