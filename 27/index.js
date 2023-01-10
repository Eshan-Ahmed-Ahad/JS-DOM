// window.onscroll = () => {
//   alert("your window is scrolled")
// }

// window.addEventListener("scroll", ()=> {
//     console.log("scrolled down")
// })

let Scroller  = 0;

window.addEventListener("scroll", ()=> {
    let NewScroller = window.scrollYOffset || document.documentElement.scrollTop; 
  if(NewScroller > Scroller){
    console.log("scroll is down")
  }else{
    console.log("scroll is up")
  }
  Scroller = NewScroller; 
})