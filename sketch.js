var instructions, introImg;
function preload(){

introImg = loadImage("intro.png");
}
function setup(){
createCanvas(displayWidth,displayHeight-166);

instructions = createSprite(displayWidth/2,displayHeight/2.1,40,40);
instructions.addImage(introImg);
instructions.scale=0.4;

}
function draw(){
background("pink");
drawSprites();
}
