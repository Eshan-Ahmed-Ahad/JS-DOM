let menu = document.querySelector("#menu");

menu.insertAdjacentHTML("beforebegin", "<h3>beforebegin </h3>");
menu.insertAdjacentHTML("afterbegin", "<h3>afterbegin </h3>"); 
menu.insertAdjacentHTML("afterend", "<h3> after end </h3>");
menu.insertAdjacentHTML("beforeend", "<h3>beforend</h3>")