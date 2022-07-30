let track = document.querySelector("#track"); 


function mouseEvent(e){
    console.log(e.type)
}

track.addEventListener("mousedown", mouseEvent);

track.addEventListener("mouseup", mouseEvent) ;

track.addEventListener("click",mouseEvent);

track.addEventListener("dblclick", mouseEvent);

// track.addEventListener("mouseover", mouseEvent);

// track.addEventListener("mouseout", mouseEvent);

track.addEventListener("mouseenter", mouseEvent);
track.addEventListener("mouseleave", mouseEvent);

track.addEventListener("mousemove", mouseEvent);
