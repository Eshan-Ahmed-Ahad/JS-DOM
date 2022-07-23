let btn = document.querySelector("#Clicked"); 
btn.onclick  = function() {
    alert("This Message From DOM 0 label Handler "); 
}
// This Message From DOM 0 label Handler

let DOMTwo = document.querySelector("#DOMTwo"); 
DOMTwo.addEventListener("click", function(){
    alert("dom 2 label handler");  
})