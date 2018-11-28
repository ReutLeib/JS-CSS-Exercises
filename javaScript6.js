
/*index6.html  TABLE WITH CSS*/

var eventDiv = document.getElementsByClassName("col");
var innerTxt, count=0;

function createClickHandler(Text) {
        return ()=> {
          alert(Text);
        };
      };

for (var i = 0; i < eventDiv.length; i++) {
    innerTxt = eventDiv[i].innerText;
    eventDiv[i].addEventListener('click', createClickHandler(innerTxt), false);
}

/*////////////////////////////////////////////////////////////////*/