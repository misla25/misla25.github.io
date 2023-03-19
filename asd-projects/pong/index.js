/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // var positionX = 0; 
  // var positionY = 0;
  // var speedX = 0; 
  // var speedY = 0;

  // Game Item Objects

// function redrawGameItem(){
//   // $("#gameItem").css("bottom", positionY); // positionX pixels away from the "left"
//   // $("#gameItem").css("left", positionX);

// }



  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keyDown', handleKeyDown);   
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
    repositionGameItem();
  }
  function repositionGameItem(){
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY;
  }
  function redrawGameItem(){
    $("#leftPaddle").css("top", positionY); // draw the box in the new location, positionX pixels away from the "left"
    $("#leftPaddle").css("left", positionX);
    $("#rightPaddle").css("top",positionY);
    $("#rightPaddle").css("right",positionX);
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
  }
  function handleKeyUp(event){
    if(event.which === KEY.UP){
      console.log("up pressed"); 
    }
  }

  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
