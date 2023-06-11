/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  startBall();
  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  function wallCollision(object) {
    const BOARD_WIDTH = $("#board").width();
    const BOARD_HEIGHT = $("#board").height();
    const BOARD_X = 0;
    const BOARD_Y = 0;
    
    //
  //   object.x = object.x + speed; 
  //   //left
  //   if(object.x > BOARD_X){
  //     object.speedX = speed * 1;
  //   }
  //   //top
  //   if(object.y > BOARD_Y){
  //     object.speedY = speed * -1
  //   }
  //   //right
  //   if(object.x + object.width > BOARD_WIDTH){
  //    object.speedX = speed * -1
  //   }
  //   //top
  //   if(object.y + object.height > BOARD_HEIGHT){
  //     object.speedY = speed * 1
  //   }
  // 
}

  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
  // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);                      // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    moveObject(leftPaddle);
    moveObject(rightPaddle);
    wallCollision();
  }
  function repositionGameItem(){
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY;  // draws the box in the new location, positionX pixels away from the "left"
  }

  function redrawGameItem() {
    $("#leftPaddle").css("top", leftPaddle.y); // draw the box in the new location, positionX pixels away from the "left"
    $("#leftPaddle").css("left", leftPaddle.x); //
    $("#rightPaddle").css("top", rightPaddle.y);
    $("#rightPaddle").css("right", rightPaddle.x); //
    $("#ball").css("top",ball.y);
    $("#ball").css("left",ball.x);
    $("#ball").css("top",ball.y);
    $("#ball").css("right",ball.x);

  }

  //UP AND DOWN ARROWS
  var KEY = {
    "DOWN": 40,
    "UP": 38,
    "W": 87,
    "S": 83
  }
 
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      rightPaddle.speedY   = -5;
      console.log("up pressed");
      }
    else if(event.which === KEY.DOWN) {
      rightPaddle.speedY  = 5;
      console.log("down pressed");
    }
      else if (event.which === KEY.W){
      leftPaddle.speedY = -5;
      console.log("up pressed");
      }
      else if(event.which === KEY.S){
      leftPaddle.speedY = 5;
      console.log("down pressed");
    }
  }
  

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      rightPaddle.speedY = 0;
      console.log("up pressed");
    }
    else if (event.which === KEY.DOWN) {
      rightPaddle.speedY = 0;
      console.log("down pressed");
    }
    else if (event.which === KEY.W) {
      leftPaddle.speedY = 0;
      console.log("up pressed");
    }
    else if (event.which === KEY.S) {
      leftPaddle.speedY = 0;
      console.log("down pressed");
    }
  } 



  //FACTORY FUNCTIONS 
  function GameItem(id){
    var object = {};
    object.id = id;
    object.x = parseFloat($(id).css("left"));
    object.y = parseFloat($(id).css("top"));
    object.speedX = 0; //
    object.speedY = 0; //
    object.width = $(id).width();
    object.height = $(id).height();
    return object;
  }

  var leftPaddle = GameItem("#leftPaddle");
  var rightPaddle = GameItem("#rightPaddle");
  var ball = GameItem("#ball");
  var board = GameItem("#board");
  var playerOneScoreBoard = GameItem("#playerOneScoreBoard");
  var playerTwoScoreBoard = GameItem("#playerTwoScoreBoard");

  //SCORING
  
  if (doCollide(ball, paddleLeft)) {
    // bounce ball off paddle Left
    $("#scoreId").text(updatedScore)
   }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function doCollide(obj1,obj2){
  if(obj1.x < obj2.width && obj1.width > obj2.x && obj1.y > obj2.height && obj1.height < obj2.y){
    return true
  } else{
    return false
  }
}
function startBall(){
  //maybe change variable
  var ball = {};
  ball.id = "#ball";
  ball.speedX = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball.speedY = randomNum = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball.x = 700;
  ball.y = 430; //document.getElementById("center"); //
  return ball;
}
function moveObject(object) {
    object.y += object.speedY;
    object.x += object.speedX;
    $(object.id).css("left", object.x);
    $(object.id).css("top", object.y);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  endGame();
}
 
