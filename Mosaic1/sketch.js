
//Invert of RGB = abs(currentValue - 255)
// (x + y * width) * 4 = R value of indexed pixel



class Dot {

  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = get(this.x, this.y);
  }

  show(){
    fill(this.c);
    noStroke();
    rect(this.x + space, this.y + space, gap, gap);
  }

  move(){
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

} //end Dot class

let img;
let c;

let dots = [];

let gap = 10;

let space = 100;

function preload(){
    img = loadImage('bird.jpg');
}

function setup(){
    createCanvas(img.width + 500, img.height + 500); 
    //background(51);
    //pixelDensity(1);
    image(img, 0, 0);

    for(var y = 0; y < img.height; y += gap){
      
      for(var x = 0; x < img.width; x += gap){
        
        dots.push(new Dot(x, y, get(x, y)));
        
      }
    }


}

var value = false;

function draw(){
    
  background(0);
  for(myDots of dots){
    myDots.show();
    if(value)
      myDots.move();
  }   
 
}

function mousePressed(){
  if(value === true)
    value = false;
  else
    value = true;
}
