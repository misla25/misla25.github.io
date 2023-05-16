/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  function wallCollision(object) {
    const BOARD_WIDTH = $("#board").width();
    const BOARD_HEIGHT = $("#board").height();
    const BOARD_X = 0;
    const BOARD_Y = 0;
    //if (object.x less than 0) code block console.log bigger than...
    if(object.x > object.left){
  }
  }
  // Game Item Objects


  // one-time setup
  //startBall();
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
    //wallCollision
  }
  // function repositionGameItem(){
  //   positionX += speedX; // update the position of the box along the x-axis
  //   positionY += speedY;  // draws the box in the new location, positionX pixels away from the "left"
  // }

  function redrawGameItem() {
    $("#leftPaddle").css("top", leftPaddle.y); // draw the box in the new location, positionX pixels away from the "left"
    $("#leftPaddle").css("left", leftPaddle.x); //
    $("#rightPaddle").css("top", rightPaddle.y);
    $("#rightPaddle").css("right", rightPaddle.x); //
  }


  //UP AND DOWN ARROWS
  var KEY = {
    DOWN: 40,
    UP: 38,
    W: 87,
    S: 83
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.DOWN) {
        leftPaddle.speedY  = -5;
        console.log("down pressed");
      }
      else if (event.which === KEY.UP) {
        leftPaddle.speedY   += 5;
        console.log("up pressed");
      }
      else if (event.which === KEY.W){
        rightPaddle.speedY += 5;
    }
    else if(event.which === KEY.S){
      rightPaddle.speedY = -5;
  }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      leftPaddle = 0;
      console.log("up pressed");
    }
    else if (event.which === KEY.DOWN) {
      leftPaddle = 0;
      console.log("down pressed");
    }
    else if (event.which === KEY.W) {
      rightPaddle = 0;
      console.log("up pressed");
    }
    else if (event.which === KEY.S) {
      rightPaddle = 0;
      console.log("dowm pressed");
    }
  } 

  //FACTORY FUNCTIONS 
  function GameItem(id){
    var item = {};
    item.id = id;
    item.x = parseFloat($(id).css("left"));
    item.y = parseFloat($(id).css("top"));
    item.speedX = 0; //
    item.speedY = 0; //
    item.width = $(id).width();
    item.height = $(id).height();
    return item;
  }

  var leftPaddle = GameItem("#leftPaddle");
  var rightPaddle = GameItem("#rightPaddle");
  var ball = GameItem("#ball");
  var board = GameItem("#board");
  var playerOneScoreBoard = GameItem("#playerOneScoreBoard");
  var playerTwoScoreBoard = GameItem("#playerTwoScoreBoard");

  //SCORING
  //function doCollide(){

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
  }

