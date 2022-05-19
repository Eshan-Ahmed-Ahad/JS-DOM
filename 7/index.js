let menu = document.querySelector("#menu"); 

function CreateMenu(name){
    let li  = document.createElement("li"); 
    li.textContent = name;
    return li; 

}
menu.appendChild(CreateMenu("Eshan"));
menu.appendChild(CreateMenu("Ahmed"));
menu.appendChild(CreateMenu("Ahad"));