var bullet ,wall ;
var speed , weight , thickness ; 
var speed ;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 15);
  wall = createSprite(1500 , 200 , random(22,83) , height/2)

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall.shapeColor = "grey";

}

function draw() {
  background("lightgrey");
   
  if(wall.x-bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255 , 0 , 0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0 , 255 ,0);
    }

  }
  

  drawSprites();
}
