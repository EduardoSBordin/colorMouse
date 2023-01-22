var bodyFunction = document.getElementById("body");
var circle_red = document.getElementById("circle_red");
var circle_green = document.getElementById("circle_green");
var circle_blue = document.getElementById("circle_blue");

circle_red.addEventListener("mouseenter" , red);
circle_green.addEventListener("mouseenter" , green);
circle_blue.addEventListener("mouseenter" , blue);
bodyFunction.addEventListener("mouseout" , bodyF);

function red(){

    bodyFunction.style.background = "rgb(200, 0, 0)";
    bodyFunction.style.transition = "0.5s";

    circle_red.style.color = "rgb(200, 0, 0)";
    circle_red.style.background = "white";
}

function green(){

    bodyFunction.style.background = "rgb(0, 163, 0)";
    bodyFunction.style.transition = "0.5s";

    circle_green.style.color = "rgb(0, 163, 0)";
    circle_green.style.background = "white";
}
function blue(){

    bodyFunction.style.background = "rgb(0, 0, 163)";
    bodyFunction.style.transition = "0.5s";

    circle_blue.style.color = "rgb(0, 0, 163)";
    circle_blue.style.background = "white";
}
function bodyF(){

    bodyFunction.style.background = "white";
    bodyFunction.style.transition = "0.5s";

    circle_red.style.color = "white";
    circle_red.style.background = "rgb(200, 0, 0)";

    circle_green.style.color = "white";
    circle_green.style.background = "rgb(0, 163, 0)";

    circle_blue.style.color = "white";
    circle_blue.style.background = "rgb(0, 0, 163)";

    console.log("Body");
}