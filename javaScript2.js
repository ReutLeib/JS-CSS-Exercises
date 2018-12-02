window.onload = addRowHandlers; 

function addRowHandlers() {
    var table = document.getElementById("tableId");
    var rows = table.getElementsByTagName("tr");

    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];

      var createClickHandler = (row)=> {
        //   console.log(`row: ${row.}`);
        return ()=> {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }


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