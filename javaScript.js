// http://www.htmldog.com/techniques/



/*index1.html*/

// var changeColor = ()=> {
//     console.log("A");
//     var colors = ["blue", "orange", "red", "yellow"];
//     var currentColor = 0;

//     var divTag = document.getElementsByTagName('div');

//     for (var i = 0; i < divTag.length; i++) {
   
        
//         if (divTag[i].tagName == "DIV" || divTag[i].tagName == "div") {
//              if (divTag[i].addEventListener) {
//                 divTag[i].addEventListener('click', callback,false);
//              } 
//              else if (divTag[i].attachEvent) {
//                 divTag[i].attachEvent('on' + 'click',callback);
//              }
//         }
//     }
    
    
//     var prevDiv = null;

//     function callback(e) {
//         e = e || window.event;
//         var target = e.target || e.srcElement;
//         if(prevDiv) {
//             prevDiv.style.backgroundColor = '';        
//         }
//             if(currentColor == 3)
//             currentColor = 0;
//         else
//             currentColor += 1;
//         for (let i = 0; i <divTag.length; i++) {
//             divTag[i].style.backgroundColor = colors[currentColor];
//         }

//         prevDiv = target;
//         e.stopPropagation();
//     }
   
//   };
//   changeColor();
  


/*index2.html*/

// window.onload = addRowHandlers; 

// function addRowHandlers() {
//     var table = document.getElementById("container"),
//     rows = document.getElementsByTagName("ul");
//       console.log("rows.length: " + rows.length);

//     for (i = 0; i < rows.length; i++) {
//       var currentRow = rows[i];
//       console.log("CURR: " + currentRow);
//       var createClickHandler = (row)=> {
//         // console.log("ROW: " + row);
//         return ()=> {
//           var cell = row.getElementsByClassName("col")[0];
//           var id = cell.innerHTML;
//           alert("id:" + id);
//         };
//       };
//       currentRow.onclick = createClickHandler(currentRow);
//     }
//   }

/*////////////////////////////////////////////////////////////////*/
  


/*index1.html*/

// function myFunction() {
//     // var x = document.getElementById("myText").value;
//     // document.getElementById("demo").innerHTML = x;
    
//     var timer = new Timer();
//     $('#chronoExample .startButton').click(function () {
//         timer.start();
//     });
//     $('#chronoExample .pauseButton').click(function () {
//         timer.pause();
//     });
//     $('#chronoExample .stopButton').click(function () {
//         timer.stop();
//     });
//     $('#chronoExample .resetButton').click(function () {
//         timer.reset();
//     });
//     timer.addEventListener('secondsUpdated', function (e) {
//         $('#chronoExample .values').html(timer.getTimeValues().toString());
//     });
//     timer.addEventListener('started', function (e) {
//         $('#chronoExample .values').html(timer.getTimeValues().toString());
//     });
//     timer.addEventListener('reset', function (e) {
//         $('#chronoExample .values').html(timer.getTimeValues().toString());
//     });
// }

/*////////////////////////////////////////////////////////////////*/

/*index3.html*/

// // when the document is loaded, trigger the "documentLoaded" function
// window.addEventListener('DOMContentLoaded', documentLoaded, false);

// var startTime;
// var limite;
// var temporizador;

// function documentLoaded() {
//     "use strict";

//     // listen for mouse clicks on the button
//     document.getElementById("btnStart").addEventListener("click", botaoClicked, false);

//     console.log("Documento carregado");
// }

// // when we click on the button, we save the current time, and the time limit. We then
// // create a timer to execute the "updateTime" function once a second.
// function botaoClicked() {
//     "use strict";

//     startTime = new Date();

//     limite = parseInt(document.getElementById("txtTempo").value);

//     clearInterval(temporizador);
//     temporizador = setInterval(updateTime, 1000);
// }

// function updateTime() {
//     "use strict";

//     // read the current time
//     var currentTime = new Date();

//     // calculate how many seconds passed since the start of the timer
//     var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

//     // convert seconds to minutes and seconds (below 60)
//     var minutos = Math.floor(elapsed / 60);
//     var segundos = Math.floor(elapsed % 60);

//     // pad with zeroes on the left to look better
//     if (minutos < 10) {
//         minutos = "0" + minutos;
//     }
//     if (segundos < 10) {
//         segundos = "0" + segundos;
//     }

//     // show the elapsed time
//     document.getElementById("clock").innerHTML = minutos + ":" + segundos;

//     // check if we are above the time limit and set the color of the timer accordingly
//     if (minutos >= limite) {
//         document.getElementById("clock").className = "red";
//     } else {
//         document.getElementById("clock").className = "blue";
//     }

// }

// /*////////////////////////////////////////////////////////////////*/

