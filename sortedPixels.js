
let img;
let sorted;

function preload(){
    img = loadImage("forest.jpg");
    
    
}

function setup(){
    createCanvas(img.width * 2, img.height);
    pixelDensity(1);
}

function draw(){
    background(0);

    

    sorted = createImage(img.width, img.height);

    sorted.loadPixels();
    img.loadPixels();
    for(var y = 0; y < sorted.height; y++){
        for(var x = 0; x < sorted.width; x++){
            var index = (x + y * width) * 4;

            sorted.pixels[index + 0] = img.pixels[index + 3];
            sorted.pixels[index + 1] = img.pixels[index + 2];
            sorted.pixels[index + 2] = img.pixels[index + 1];
            sorted.pixels[index + 3] = img.pixels[index + 0];

        }
    }
    sorted.updatePixels();

    image(img, 0, 0);
    image(sorted, width / 2, 0);
    

    noLoop();
}