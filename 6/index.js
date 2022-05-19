// let div = document.createElement("div"); 
// div.className = "EshanClass";
// div.id = "EshanID"

// // let text = document.createTextNode("Inner text Into the Div");
// // div.appendChild(text)

// let h1 = document.createElement("h1"); 
// h1.textContent = "Inner h1 tag text";
// div.appendChild(h1)

// document.body.appendChild(div)

let ul =  document.createElement("ul");
ul.id = "menu"; 

let li1 = document.createElement("li"); 
li1.textContent = "Home";
ul.appendChild(li1); 

let li2 = document.createElement("li");
li2.textContent = "About";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Contact";

ul.appendChild(li3)


document.body.appendChild(ul); 


let script = document.createElement("script");

script.src = "hablu.js"; 

document.body.appendChild(script)

