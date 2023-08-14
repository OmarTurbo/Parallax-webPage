let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desertMoon = document.getElementById("desertMoon");
let man = document.getElementById('man');

window.addEventListener("scroll",()=>{
    let value= window.scrollY;

    moon.style.top = value * .6 +"px";
    text.style.top = 90 + value * -0.2 +"%";
    train.style.left = value * 1.5 +"px";

    desertMoon.style.top = 100 +value * .2 + "px";
    man.style.left = value * .55 +"px";
})