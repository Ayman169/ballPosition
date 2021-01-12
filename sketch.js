var ball;
var database,position;
function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(600,600);
    
    ball=createSprite(200,400,30,30);
    ball.shapeColor="red";

    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("lightblue");

    if(position !== undefined){   
     if(keyDown("right")){
        writePosition(2,0);
    }
   else if(keyDown("left")){
        writePosition(-2,0);
    }
   else if(keyDown("up")){
        writePosition(0,-2);
    }
   else if(keyDown("down")){
        writePosition(0,2);
    }

    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x+x,
        'y': position.y+y
    })
}

function readPosition(data){
    position=data.val();
    console.log(position.x);
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("Error");
}