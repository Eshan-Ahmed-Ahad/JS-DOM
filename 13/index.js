let app = document.querySelector("#app"); 

let names = ["Eshan", "Ahmed","Ahad"]; 



let DOMScript = names.map((names)=>{
    let li = document.createElement("li"); 
    li.textContent = names;
    return li; 
})
app.append(...DOMScript); 


//prepend
let apps = document.querySelector("#apps"); 
let Lang = ["Typescript", "Python", "JavaScript"]; 

let Details =  Lang.map((languages)=>{
    let li = document.createElement("li"); 
    li.innerHTML = languages; 
    return li; 
})
apps.append(...Details)