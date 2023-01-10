const MyInput = document.querySelector("#MyInput"); 

MyInput.addEventListener("focus", (e)=> {
  e.target.style.backgroundColor = "yellow", 
  e.target.style.color = "red"
})

MyInput.addEventListener("blur", (e)=> {
    e.target.style.backgroundColor = "red", 
    e.target.style.color = "yellow"
  })