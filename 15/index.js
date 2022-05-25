let menu =  document.querySelector("#menu "); 

//replacechild
let li = document.createElement("li");
li.textContent = "Home"; 

menu.replaceChild(li,menu.lastElementChild )


// remove child

menu.removeChild(menu.lastElementChild)


// clone node

let cloneNode  = menu.cloneNode(true); 
cloneNode.id = "CloneID"

document.body.appendChild(cloneNode)