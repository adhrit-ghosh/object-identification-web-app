img="";

function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(450,100);

}
function draw(){
image(img,0,0,500,500);
fill("red");
text("dog",100,70);
noFill();
stroke("red");
rect(100,70,200,300);
}