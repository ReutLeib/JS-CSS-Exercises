function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      // console.log("x.elements[i].type: " + x.elements[i].type); // print: text
      console.log(x.elements[i].value);
     }  
   }
}