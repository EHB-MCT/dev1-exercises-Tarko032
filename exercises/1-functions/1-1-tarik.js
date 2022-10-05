"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {
    //T
    context.lineWidth = 9;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(300, 100);
    context.lineTo(300, 450);
    context.moveTo(100, 100);
    context.lineTo(850, 100);
    context.stroke();
    //A
    context.linewidth = 7;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(400, 150);
    context.lineTo(350, 450);
    context.moveTo(400, 150);
    context.lineTo(450, 450);
    context.moveTo(375, 300);
    context.lineTo(425, 300);
    context.stroke();
    //R
    


}