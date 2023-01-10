<<<<<<< HEAD
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
=======
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { 
   let MyScroller = window.pageYOffset || document.documentElement.scrollTop; 
   if (MyScroller > lastScrollTop){
       // downscroll code
		 alert('down');
   } else {
      // upscroll code
		 alert('up');
   }
   lastScrollTop = MyScroller;
}, false);
>>>>>>> 2878586888573787d4e2d91aa3b30802cbc3f52f
