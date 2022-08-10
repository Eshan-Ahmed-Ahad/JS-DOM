
let message = document.querySelector("#message"); 

function  EventName(e) {
    console.log(e.key)
}

message.addEventListener("keypress", EventName);