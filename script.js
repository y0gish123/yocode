let div = document.querySelector(".signin");
div.style.display="none";
let header = document.querySelector("header");
let cont = document.querySelector(".main-cont")
let btn = document.querySelector("button");
btn.onclick = () =>{
    div.style.display="";
    header.style.display="none";
    cont.style.display="none";
}
