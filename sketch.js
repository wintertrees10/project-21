var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1000,400);
  speed= random(223,321);
  weight = random(30,52);
  bullet= createSprite(50,150,50,50);
  thickness=random(22,83);
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor=color("white");
  bullet.velocityX=speed;
}

function draw() {
  background("blue");  
   
  
if((bullet.x+bullet.width)>= wall.x){ 
  
    bullet.velocityX=0;
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color("red");
  }
  if(damage<10){
    wall.shapeColor=color("green");
  }
}
  drawSprites();
}