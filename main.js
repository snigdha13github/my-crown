nosex=0;
nosey=0;
function setup()
{
    c1=createCanvas(600,600);
    c1.center();
    v1=createCapture(VIDEO);
    v1.hide();
    pn=ml5.poseNet(v1,modelLoaded); 
    pn.on("pose",gotPoses);   
}
function modelLoaded()
{
    console.log("posenet has loaded")
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-120;
        nosey=results[0].pose.nose.y-150;
    }
}
function draw()
{
    image(v1,0,0,600,600);
    image(crown,nosex,nosey,200,90);
}
function preload()
{
    crown=loadImage("https://i.postimg.cc/VLQVh56j/crown-1.jpg");
}