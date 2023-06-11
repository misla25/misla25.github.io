// /* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  //Game Item Objects
 
  // var gameItem = {

  // }

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
    redrawGameItem(walker);
    redrawGameItem(walker2);
    repositionGameItem();
  }
  
  /* 
  Called in response to events.
  */

function handleKeyDown (event){ 
      if (event.which === KEY.LEFT) {
        walker.speedX = -5;
        console.log("left pressed"); 
      } 
      // else if (event.which === KEY.ENTER) {
      //   walker.speedX = -5;
      //    console.log("enter pressed");
      // }
      else if(event.which ===KEY.UP){
        walker.speedY = 5;
        console.log("up pressed");
      }
      else if(event.which === KEY.RIGHT){
        walker.speedX = 5;
        console.log("right pressed");
        
      }
      else if(event.which === KEY.DOWN){
        walker.speedY = -5;
        console.log("down pressed");
      }
    }
    function handleKeyUp (event){
      if(event.which === KEY.LEFT){
        walker.speedX = 0;
      }
      else if(event.which === KEY.RIGHT){
        walker.speedX = 0;
      }
      else if(event.which === KEY.UP){
        walker.speedY = 0;
      }
      // else if(event.which === KEY.ENTER){
      //   walker.speedX = 0;
      // }
      else if(event.which === KEY.DOWN){
        walker.speedY = 0; 
      }
    } 

//   let walker2 = document.querySelector("#walker2");

  ///WASD
 
  //WASD 2
  function handleKeyS (event){ 
    if (event.which === KEY.A) {
      walker2.speedX = -5;
      console.log("a pressed"); 
    } 
    else if(event.which ===KEY.S){
      walker2.speedY = 5;
      console.log("s pressed");
    }
    else if(event.which === KEY.D){
      walker2.speedX = 5;
      console.log("d pressed");
      
    }
    else if(event.which === KEY.W){
      walker2.speedY = -5;
      console.log("w pressed");
    }
  }
  function handleKeyW (event){
    if(event.which === KEY.A){
      walker2.speedX = 0;
    }
    else if(event.which === KEY.D){
      walker2.speedX = 0;
    }
    else if(event.which === KEY.W){
      walker2.speedY = 0;
    }
    else if(event.which === KEY.S){
      walker2.speedY = 0; 
    }
  } 


  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  walker.x += walker.speedX; // update the position of the box along the x-axis
  walker.y += walker.speedY;
  walker2.x += walker2.speedX; 
  walker2.y += walker2.speedY;
}
function redrawGameItem(){
  $("#walker").css("bottom", walker.y); // draw the box in the new location, positionX pixels away from the "left"
  $("#walker").css("left", walker.x);
  $("#walker2").css("top", walker2.y);
  $("#walker2").css("left", walker2.x);
}

function GameObject(id){
  var obj = {};
  obj.id = id;
  obj.width = $(id).width();
  obj.height = $(id).height();
  obj.x = 0;
  obj.y =  0;
  obj.color = $(id).css("color")
  obj.speedX = 0;
  obj.speedY = 0;
  return obj;
}
var walker = GameObject("#walker");
var walker2 = GameObject("#walker2");

// function update() {
//   /* Your Code to Increase positionX by 10 HERE*/
//   moveBoxTo(positionX, positionY);
//     positionX = positionX + speed; 

//     if (positionX > boardWidth) {
//     speed = speed * -1;
//     }

//     if (positionX < 0) {
//     speed = speed * -1;
//     }

// }


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
$("#board").offset(positionX,positionY);
}
endGame();