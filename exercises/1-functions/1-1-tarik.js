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
    context.linewidth = 7;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(500, 150);
    context.lineTo(500, 450);
    context.moveTo(500, 150);
    context.lineTo(600, 150);
    context.moveTo(600, 150);
    context.lineTo(600, 250);
    context.moveTo(600, 250);
    context.lineTo(500, 250);
    context.moveTo(500, 250);
    context.lineTo(600, 450);
    context.stroke();
    //I
    context.linewidth = 35;
    context.strokeStyle = "purple";
    context.beginPath();
    context.moveTo(650, 450);
    context.lineTo(650, 150);
    context.stroke();
    //K
    context.linewidth = 10;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(700, 150);
    context.lineTo(700, 600);
    context.moveTo(700, 300);
    context.lineTo(750, 600);
    context.moveTo(700, 300);
    context.lineTo(750, 150);
    context.stroke();

}