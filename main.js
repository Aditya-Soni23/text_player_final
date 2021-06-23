noseX = 0;
noseY = 0;
difference = 0;
wristleftX = 0;
wristrightX = 0;


function setup(){
    canvas = createCanvas(550,550);
    canvas.position(800,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#fcba03');

document.getElementById("square_side").innerHTML = "Width and height of the text will be = " + difference + "px";

    text("ADI",noseX,noseY);
textSize(difference);
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX + "noseY" + noseY);

        wristleftX = results[0].pose.leftWrist.x;
        wristrightX = results[0].pose.rightWrist.x;
        difference = floor(wristleftX - wristrightX);

        console.log("wristleftX" + wristleftX + "wristrightX" + wristrightX + "difference" + difference);
    }
}