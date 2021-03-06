var canvas= new fabric.Canvas("meriCanvas")
var block_height= 30
var block_width= 30
player_x=10
player_y=10
player_object=""
block_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    })
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
   keypressed= e.keyCode;
   console.log(keypressed)
   if(keypressed==67){
       new_image("cloud.jpg")
   }
   if(keypressed==68){
    new_image("dark_green.png")
}
if(keypressed==71){
    new_image("ground.png")
}
if(keypressed==76){
    new_image("light_green.png")
}
if(keypressed==82){
    new_image("roof.jpg")
}
if(keypressed==84){
    new_image("trunk.jpg")
}
if(keypressed==85){
    new_image("unique.png")
}
if(keypressed==87){
    new_image("wall.jpg")
}
if(keypressed==89){
    new_image("yellow_wall.png")
}
if(e.shiftKey==true && keypressed==80){
    block_height=block_height+10;
    block_width=block_width+10;
    console.log("shift and p pressed together lesss go")
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && keypressed==77){
    block_height=block_height-10;
    block_width=block_width-10;
    console.log("shift and m pressed together lesss go")
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if (keypressed==37){
    left()
    console.log("Left Arrow pressed")
}
if (keypressed==39){
    right()
    console.log("Right Arrow pressed")
}
if (keypressed==38){
    up()
    console.log("Up Arrow pressed")
}
if (keypressed==40){
    down()
    console.log("Down Arrow pressed")
}
}

function left(){
    if (player_x>0){
        player_x=player_x-block_width;
        console.log("When left arrow is pressed, x=" +player_x+ " | y=" +player_y)
        player_update()
        canvas.remove(player_object)
    }
}
function right(){
    if (player_x<1450){
        player_x=player_x+block_width;
        console.log("When right arrow is pressed, x=" +player_x+ " | y=" +player_y)
        player_update()
        canvas.remove(player_object)
    }
}
function down(){
    if (player_y<660){
        player_y=player_y+block_height;
        console.log("When down arrow is pressed, x=" +player_x+ " | y=" +player_y)
        player_update()
        canvas.remove(player_object)
    }
}
function up(){
    if (player_y>0){
        player_y=player_y-block_height;
        console.log("When up arrow is pressed, x=" +player_x+ " | y=" +player_y)
        player_update()
        canvas.remove(player_object)
    }
}