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