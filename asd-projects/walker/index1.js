// /* global $, sessionStorage */

// $($document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
// function runProgram(){
//   ////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////// SETUP /////////////////////////////////////////////
//   ////////////////////////////////////////////////////////////////////////////////

//   // Constant Variables
//   var FRAME_RATE = 60;
//   var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
//   var positionX = 0; // the x-coordinate location for the box
//   var positionY = 0;
//   var speedX = 0; 
//   var speedY = 0;


//   // Game Item Objects
//  var walker2 = {};
//  walker2.id = "#walker2";
//  var walker = {};
//  walker.id = "#walker";

//   // one-time setup
//   var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
//   $(document).on('keydown', handleKeyDown); 
//   $(document).on('keyup', handleKeyUp); 

//                          // change 'eventType' to the type of event you want to handle
//   var KEY = {
//     "ENTER": 13,
//     "LEFT": 37,
//     "RIGHT": 39,
//     "UP": 38,
//     "DOWN": 40,
//     "W": 87,
//     "A": 65,
//     "S": 83,
//     "D": 68
//   }
//   ////////////////////////////////////////////////////////////////////////////////
//   ///////////////////////// CORE LOGIC ///////////////////////////////////////////
//   ////////////////////////////////////////////////////////////////////////////////

//   /* 
//   On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
//   by calling this function and executing the code inside.
//   */
//   function newFrame() {
//     redrawGameItem();
//     repositionGameItem();
//   }
//   /* 
//   Called in response to events.
//   */

//   const velocity = 8;

//   const keydownHandler = event => {
//     "use strict"
//     if (event.keyCode == UP) {
//         walker.y -= velocity;
//     }
//     if (event.keyCode == LEFT) {
//         walker.x -= velocity;
//     }
//     if (event.keyCode === DOWN) {
//         walker.y += velocity;
//     }
//     if (event.keyCode == RIGHT) {
//         walker.x += velocity;
//     }
//     if (event.keyCode == W) {
//         walker2.y -= velocity;
//     }
//     if (event.keyCode == A) {
//         walker2.x -= velocity;
//     }
//     if (event.keyCode === S) {
//         walker2.y += velocity;
//     }
//     if (event.keyCode == D) {
//         walker2.x += velocity;
//     }
// }



// //moving the UFO
// (function() {
// var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
// window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// window.requestAnimationFrame = requestAnimationFrame;
// })();

// //neccessary variables
// var clickX = 10;
// var clickY = 10;

// var keyW = false;
// var keyA = false;
// var keyS = false;
// var keyD = false;

// //main animation function
// function moveWalker2() {
// window.requestAnimationFrame(moveWalker2);
// var canvas = document.getElementById("walker2");

// if (keyD == true) {
// clickX += 1;
// }
// if (keyS == true) {
// clickY += 1;
// }
// if (keyA == true) {
// clickX--;
// }
// if (keyW == true) {
// clickY--;
// }
// }
// window.requestAnimationFrame(moveWalker2);

// // Moved here to get the arrow function to work.
// window.addEventListener("keydown",keydownHandler,false);



//   ////////////////////////////////////////////////////////////////////////////////
//   ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
//   ////////////////////////////////////////////////////////////////////////////////
// // function repositionGameItem(){
// //   positionX += speedX; // update the position of the box along the x-axis
// //   positionY += speedY;
// // }
// // function redrawGameItem(){
// //   $("#walker").css("bottom", positionY); // draw the box in the new location, positionX pixels away from the "left"
// //   $("#walker").css("left", positionX);
// //   $("#walker2").css("top", positionY);
// //   $("#walker2").css("left", positionX);
// // }
  
//   function endGame() {
//     // stop the interval timer
//     clearInterval(interval);

//     // turn off event handlers
//     $(document).off();
//   }
// }