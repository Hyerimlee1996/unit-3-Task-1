

var rectX = 300;

var ellipseX = 310;

var y=0;

var speed = 3;

var x=0;

var speed2 = 5;

var rect2 = 0





function setup() {
  createCanvas (400, 700);
  
  
}

function draw() {
  
  background (230,230,222);
  
  //grey box/ rect2
  noStroke ();
  fill(168, 168, 168);
  rect (rect2, 450, 100, 250);
  
  //black line
  noStroke();
  fill (0);
  rect (60, 0, 5,700);
  
  
  
  
  //yellow line1
  fill (230, 198, 76);
  rect (30, 0, 20, 700);
  
  //yellow lien2
  fill (230, 198, 76);
  rect (370, 0, 5, 700);
  
  
 //rectangle behind small shapes
  fill (0);
  rect (290, 90, 40, 530);
  
 //big rectangle in the middle
  fill (0);
  rect (100 ,0, 100, 700);
 
 
 
 //purple rectangle 
  fill (157, 39, 109);
  noStroke();
  rect (150, x, 100, 100);
  
  if (x>height) {
    speed2 = -5;
  } else if (x<0){
    speed2 = 5;
  }
  
  x = x + speed2
  
  
  
  //big circle
  stroke(255);
  strokeWeight(10);
  noFill();
  ellipse(200, y, 100, 100);
  
  if (y> height) {
    speed = -3;
  } else if (y < 0) {
    speed = 3;
  }
  
  y = y + speed;
  
  
  

  
  
  //colour changing small shapes
  if (mouseY>500){
    fill (255,0,200);
    
  } else if (mouseY>400){
    fill (154,146,254);
    
  } else if (mouseY>300){
    fill (157, 218, 255);
    
  } else if (mouseY>200){
    fill(157, 230, 71);
    
  } else if (mouseY>100){
    fill(222, 0, 3);
    
  } else if (mouseY>0){
    fill(255);
  }
  
  
  
  noStroke();
  rect (rectX, 100, 20, 20);
  
  rect (rectX, 200, 20, 20);
  
  rect (rectX, 300, 20, 20);
  
  ellipse (ellipseX, 400, 20, 20);
  
  ellipse (ellipseX, 500, 20, 20);
  
  ellipse (ellipseX, 600, 20, 20);
  
}



//mouseclick
//function draw() {
//  rect (0, 450, 100, 250);
//}

//function mouseclicked (){
  //rectangle (0, 450, 100, 250);
  
  
//}







