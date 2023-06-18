var mouseEvent="empty";
var last_postion_x, last_postion_y;
canvas=document.getElementById('my Canvas'); 
ctx=canvas.getContext("2d");
colour="black";
width_of_line=1;
canvas.addEventListerner("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width_of_line=documet.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}canvas.addEventListerner("mousemove",my_mousemove);
function_mousemove(e)
{current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
}