
right_wrist_x=0;
left_wrist_x=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(200,150)
    canvas=createCanvas(450,450);
    canvas.position(750,115);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    text("dhyanam",10,200);
    textSize(20);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("the difference between is ="+difference);


    }

}
function draw(){
    background("#8fcdcf");
    fill("#647475");
    stroke("black");
    text("dhyanam",50,200);
    textSize(difference);

    document.getElementById("square").innerHTML="font will be ="+difference+"px";
}
function modelLoaded(){
    console.log("model loaded successfully");
}