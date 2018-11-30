  function changeContent(){
    var r = window.prompt("Input the Row number(0,1,2)", "0"),
        c = window.prompt("Input the Column number(0,1)", "0");
        console.log("row: " + r);
        console.log("col: " + c);
    content = window.prompt("Input the Cell content");  
    var x=document.getElementById('myTable').rows[parseInt(r,10)].cells;
    console.log("X: " + x);
    x[parseInt(c,10)].innerHTML=content;
  }