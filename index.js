document.body.style.backgroundColor = "green";

let header = document.querySelector("h1");

header.style.color = "black";


// star

let head = "&#9733;"


// tree body

let star = "&#9733";
let audio = document.getElementById("music");

for (let i = 0; i < 20; i++){
    document.getElementById("xtree").innerHTML += star + "<br>";
    star = star + "&#9733";
}

// lighting



function lights(){

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
   
    let redbluegreen = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.getElementById("rgb").innerHTML = `RGB: (${red} , ${green}, ${g=blue})`
    document.getElementById("xtree").style.color = redbluegreen;
    document.getElementById("xhead").style.color = "yellow"
}

function start(){
   go = setInterval(lights, 500);
   audio.play();
}

function stop(){
    clearInterval(go);
    audio.pause();
    document.getElementById("xtree").style.color = "black";
    document.getElementById("xhead").style.color = "black"
}