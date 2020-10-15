var bullet, wall, thickness;
var speed, weight;
var damage;
var deform;
function setup() {
  createCanvas(1600,400);
  bullet =createSprite(50, 200, 50, 5);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapecolor= color(80,80,80)
  thickness = Math.round(random(22,83));
  speed=random(223,231);
  weight = random(30,52);

  bullet.velocityX= speed;


  
}

function draw() {
  background(0);  
  
  damage = 0.5 * weight* speed*speed/ thickness* thickness*thickness;
  damage = Math.round(damage);
 
  drawSprites();

if(wall.x-bullet.x<(bullet.width+ wall.width)/2){
    bullet.velocityX*=0;
  if (damage>10){
    wall.shapeColor = color(255,0,0);
    bullet.velocityX*=0;
  }
 
  if(damage<10){
    wall.shapeColor = color(0,250,0);
    bullet.velocityX*=0;
  }
}
text("damage: " + damage, 100,50);
}