/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  function wallCollision(object){
    const BOARD_WIDTH = $("#board").width();
    const BOARD_HEIGHT = $("#board").height();
    const BOARD_X = 0; 
    const BOARD_Y = 0;
  }

// Game Item Objects


  // one-time setup
  startBall();
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);  
   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keyDown", handleKeyDown);   
  $(document).on("keyUp", handleKeyUp);                      // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    redrawGameItem();
  }
  // function repositionGameItem(){
  //   positionX += speedX; // update the position of the box along the x-axis
  //   positionY += speedY;  // draws the box in the new location, positionX pixels away from the "left"
  // }
  
  function redrawGameItem(){
    $("#leftPaddle").css("top", leftPaddle.y); // draw the box in the new location, positionX pixels away from the "left"
    $("#leftPaddle").css("left",leftPaddle.x ); //
    $("#rightPaddle").css("top", rightPaddle.y);
    $("#rightPaddle").css("right", rightPaddle.x); //
  }


 //UP AND DOWN ARROWS
  var KEYCODE = {
  DOWN: 40,
  UP: 38,
}

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      console.log("down pressed"); 
    } 
    else if (event.which === KEY.UP){
      console.log("up pressed"); 
    }
  }
  function handleKeyUp(event){
    if(event.which === KEY.UP){
      console.log("up pressed"); 
    }
    else if(event.which === KEY.DOWN) {
      console.log("down pressed"); 
    } 
  }

//FACTORY FUNCTIONS 
function lPaddle(id,x,y, speedX, speedY, width, height){
  var leftPaddle = {};
  leftPaddle.id = "#leftPaddle";
  leftPaddle.x = parseFloat($("#leftPaddle").css("left"));
  leftPaddle.y = parseFloat($("#leftPaddle").css("top"));
  leftPaddle.speedX = 5; //
  leftPaddle.speedY = 5; //
  leftPaddle.width = $("#leftPaddle").width();
  leftPaddle.height = $("#leftPaddle").height();
  return leftPaddle;
}
function rPaddle(id,x,y, speedX, speedY, width, height){
  var rightPaddle = {};
  rightPaddle.id = "#rightPaddle";
  rightPaddle.x = parseFloat($("#rightPaddle").css("left"));
  rightPaddle.y = parseFloat($("#rightPaddle").css("top"));
  rightPaddle.speedX = 5; //
  rightPaddle.speedY = 5; //
  rightPaddle.width = $("#rightPaddle").width();
  rightPaddle.height = $("#rightPaddle").height();
  return rightPaddle;
}


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function startBall(){
  var ball = {};
  ball.id = "#ball";
  ball.speedX = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball.speedY = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball.x = document.getElementById("center"); //
  ball.y = document.getElementById("center"); //
  return ball;
}
function moveObject(object){
  //
  object.x =$("#leftPaddle").css("left", parseFloat($("#leftPaddle").css("left")))
  object.y = $("#leftPaddle").css("top", parseFloat($("#leftPaddle").css("top")))
  object.x =$("#rightPaddle").css("left", parseFloat($("#rightPaddle").css("left")))
  object.y = $("#rightPaddle").css("top", parseFloat($("#rightPaddle").css("top")))
  object.x =$("#ball").css("left", $("#ball").css("left"))
  object.y = $("#ball").css("top", $("#ball").css("top"))
  return object;
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
