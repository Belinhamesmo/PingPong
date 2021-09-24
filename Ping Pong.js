var posX = 300;
var posY = 200;
var veloX = 1;
var veloY = 1;
var fase = 0; //fase):abertura/ fase1:jogo/ fase2:gameover

function setup(){
 createCanvas(800, 800);
 rectMode(CENTER);
}

function draw(){
  if (fase == 0){
    background('black');  
    textSize(50);
    text("Click to start the Pong", 175, 200);
		fill(255);
    if (mouseIsPressed == true){
      fase = 1;
    }
  }
  if (fase ==1){
    
  background('red');
  rect(posX,posY ,20,20);
  posX = posX +veloX;
  posY = posY +veloY;

//colisao baixo
  if(posY > 390){
    veloY = -1;
  }

 //colisão topo
   if (posY <= 10){
     veloY= 1;
   }
  
 //raquete do computador
 rect(570,posY,20,70);
 
 //colisão raquete pc
 if(posX >= 550) {
   veloX = -1;
 }

 //raquete jogador
 rect(30,mouseY,20,70);

 //colisão raquete jogador
 if(posX <= 50){
   if(posY >= mouseY - 35 && posY <= mouseY + 35){
        veloX =1;
      } else{
        posX =300;
        posY =200;
        fase =2;
      }
    }  
  }

  if(fase ==2){
    //game over
    background ('black');
    text("FIM DE JOGO", 170,200);
		fill(255);
    if(mousePressed == true){
      fase =1;
    }

  }
}