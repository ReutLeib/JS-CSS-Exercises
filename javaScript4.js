var nav = document.getElementById("access_nav");
var myDiv = document.getElementById("myDIV");
nav.addEventListener('click', ()=>{
    nav.classList.toggle("change");
    if(myDiv.style.display === "none"){
        myDiv.style.display = "block";
    }
    else
        myDiv.style.display = "none";
});