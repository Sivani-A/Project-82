var color= "Orange";
var line_width=15;
var mouseEvent="";

Canvas=document.getElementById("myCanvas");

ctx=Canvas.getContext("2d");

Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color").value;
line_width=document.getElementById("PenWidth").value;
mouseEvent="mousedown"
}

Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
 current_position_x= e.clientX-Canvas.offsetLeft;
 current_position_y= e.clientY-Canvas.offsetTop;

 if(mouseEvent="mousedown"){
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=line_width;
   ctx.arc(current_position_x,current_position_y,10,0,2*Math.PI);
   ctx.stroke();
 }

}

Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseEvent="mouseup";
}