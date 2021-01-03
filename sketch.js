var ball;

function setup(){
    createCanvas(600,600);
    
    ball=createSprite(200,400,30,30);
    ball.shapeColor="red";
}

function draw(){
    background("lightblue");

    if(keyDown("right")){
        changePosition(2,0);
    }
   else if(keyDown("left")){
        changePosition(-2,0);
    }
   else if(keyDown("up")){
        changePosition(0,-2);
    }
   else if(keyDown("down")){
        changePosition(0,2);
    }

    drawSprites();
}

function changePosition(x,y){
    ball.x=ball.x+x;
    ball.y=ball.y+y;
}