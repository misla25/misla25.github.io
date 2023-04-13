// /* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var positionX = 0; // the x-coordinate location for the box
  var positionY = 0;
 var speedX = 0; 
  var speedY = 0;

  //Game Item Objects
 var walker2 = {};
 walker2.id = "#walker2";
//  var walker = {};
//  walker.id = "#walker";

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp); 

  $(document).on('keydown', handleKeyS); 
  $(document).on('keyup', handleKeyW); 
                         // change 'eventType' to the type of event you want to handle
  var KEY = {
    "ENTER": 13,
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68
  }
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
    redrawWalker2();
  }
  
  /* 
  Called in response to events.
  */

function handleKeyDown (event){ 
      if (event.which === KEY.LEFT) {
        speedX = -5;
        console.log("left pressed"); 
      } 
      else if (event.which === KEY.ENTER) {
        speedX = -5;
         console.log("enter pressed");
      }
      else if(event.which ===KEY.UP){
        speedY = 5;
        console.log("up pressed");
      }
      else if(event.which === KEY.RIGHT){
        speedX = 5;
        console.log("right pressed");
        
      }
      else if(event.which === KEY.DOWN){
        speedY = -5;
        console.log("down pressed");
      }
    }
    function handleKeyUp (event){
      if(event.which === KEY.LEFT){
        speedX = 0;
      }
      else if(event.which === KEY.RIGHT){
        speedX = 0;
      }
      else if(event.which === KEY.UP){
        speedY = 0;
      }
      else if(event.which === KEY.ENTER){
        speedX = 0;
      }
      else if(event.which === KEY.DOWN){
        speedY = 0; 
      }
    } 

//   let walker2 = document.querySelector("#walker2");

  ///WASD
 
  //WASD 2
  function handleKeyS (event){ 
    if (event.which === KEY.A) {
      speedX = -5;
      console.log("a pressed"); 
    } 
    else if(event.which ===KEY.W){
    speedY = 5;
      console.log("w pressed");
    }
    else if(event.which === KEY.D){
      speedX = 5;
      console.log("d pressed");
      
    }
    else if(event.which === KEY.S){
      speedY = -5;
      console.log("s pressed");
    }
  }
  function handleKeyW (event){
    if(event.which === KEY.A){
      speedX = 0;
    }
    else if(event.which === KEY.D){
      speedX = 0;
    }
    else if(event.which === KEY.W){
      speedY = 0;
    }
    else if(event.which === KEY.S){
      speedY = 0; 
    }
  } 


  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  positionX += speedX; // update the position of the box along the x-axis
  positionY += speedY;
}
function redrawGameItem(){
  $("#walker").css("bottom", positionY); // draw the box in the new location, positionX pixels away from the "left"
  $("#walker").css("left", positionX);
}``
function redrawWalker2(){
    $("#walker2").css("top", positionY);
    $("#walker2").css("left", positionX);
}

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
//  $("#board").offset(positionX,positionY);
}
