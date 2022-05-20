let menu =  document.querySelector("#menu"); 

let li = document.createElement("li");
li.textContent = "Home"; 

menu.insertBefore(li,menu.firstElementChild)