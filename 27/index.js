
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
