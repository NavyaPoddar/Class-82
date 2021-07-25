var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var mouse_event= "empty";
var lastxposition,lastyposition;
var color="teal";
var thickness="4.5";
canvas.addEventListener("mousedown",mousedownfunction);
function mousedownfunction(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mouseleave",mouseleavefunction);
function mouseleavefunction(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mouseup",mouseupfunction);
function mouseupfunction(e){
    mouse_event="mouseup";
}
 canvas.addEventListener("mousemove",mousemovefunction);
 function mousemovefunction(e){
      currentxposition=e.clientX-canvas.offsetLeft
      currentyposition=e.clientY-canvas.offsetTop
      if (mouse_event=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=thickness;
     ctx.moveTo(lastxposition,lastyposition);
     ctx.lineTo(currentxposition,currentyposition);
     ctx.stroke();
 }
lastxposition=currentxposition;
lastyposition=currentyposition;
}