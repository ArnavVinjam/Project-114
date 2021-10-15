noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/D0wc4s4H/clown.png');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

}

function draw(){

}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
}

