const hover_msg = "Hover over me to see a secret message!"

document.querySelector(".index_div > p:last-child").innerHTML = hover_msg

document.querySelector(".index_div > p:last-child").addEventListener("mouseover", function(){
    document.querySelector(".index_div > p:last-child").innerHTML = "Hello world! &#127758;";
    document.querySelector(".index_div > p:last-child").style.fontStyle = "normal";
})

document.querySelector(".index_div > p:last-child").addEventListener("mouseout", function(){
    document.querySelector(".index_div > p:last-child").innerHTML = hover_msg;
    document.querySelector(".index_div > p:last-child").style.fontStyle = "italic";
})