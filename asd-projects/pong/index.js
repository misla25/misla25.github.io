/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  const BOARD_X = 0;
  const BOARD_Y = 0;
  var leftScore = 0;
  var rightScore = 0;
 

  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
  // execute newFrame every 0.0166 seconds (60 Frames per second)
  function wallCollision(object) {
    if (object.x < 0 || object.x + object.width > BOARD_WIDTH) {
      // Collision with left or right wall
      object.speedX = -object.speedX;
    }
    if (object.x > BOARD_WIDTH || object.x < 0) {
      object.x = BOARD_WIDTH;
    }
    if (object.y > BOARD_HEIGHT || object.y < 0) {
      object.y = BOARD_HEIGHT;
    }
    scoreNum();
    if (ball.x < 0) {
      leftScore++;
      $("#playerOneScoreBoard").text(leftScore);
      startBall();
    }
    if (ball.x + ball.width > BOARD_WIDTH) {
      rightScore++;
      $("#playerTwoScoreBoard").text(rightScore);
      startBall();
    }
  }

  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);                      // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function scoreNum() {
    $("#playerOneScoreBoard").text(leftScore);
    $("#playerTwoScoreBoard").text(rightScore);
  }
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    moveObject(leftPaddle);
    moveObject(rightPaddle);
    moveObject(ball);
    wallCollision(leftPaddle);
    wallCollision(rightPaddle);
    wallCollision(ball);
    repositionGameItem(ball);
    repositionGameItem(leftPaddle);
    repositionGameItem(rightPaddle);
  }
  startBall();

  function repositionGameItem(object){
    object.x += object.speedX; // update the position of the box along the x-axis
    object.y += object.speedY;  // draws the box in the new location, positionX pixels away from the "left"
  }
  
  function redrawGameItem() {
    $("#leftPaddle").css("top", leftPaddle.y); // draw the box in the new location, positionX pixels away from the "left"
    $("#leftPaddle").css("left", leftPaddle.x); //
    $("#rightPaddle").css("top", rightPaddle.y);
    $("#rightPaddle").css("right", rightPaddle.x); //
    $("#ball").css("top", ball.y);
    $("#ball").css("left", ball.x);
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
function check(){
  if (doCollide(ball, leftPaddle)) {
    // bounce ball off paddle Left
    ball.speedX = -ball.speedX;
   }

   if(doCollide(ball,rightPaddle)){
    ball.speedX = -ball.speedX;
   }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function doCollide(obj1, obj2){
  
  if (obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y) {
    return true;
  } else {
    return false
  }
}

function moveObject(object) {
    object.y += object.speedY;
    object.x += object.speedX;
    $(object.id).css("left", object.x);
    $(object.id).css("top", object.y);  
  }
  function startBall(){
    var randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedX = randomNum
    ball.speedY = randomNum
    ball.x = BOARD_WIDTH / 2;
    ball.y = BOARD_HEIGHT / 2;
   }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
