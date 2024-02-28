/*
 * TODO 4: Create a modularized index.js,
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;

  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */

  // INIT CREATEJS //
  const radius = 25;
  const margin = 125;
  //containers
  const cirContainer = new createjs.Container();
  const cyclops = new createjs.Container();
  const mouth = new createjs.Container();
  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("#371F76")
    .drawRect(0, 0, canvas.width, canvas.height);

    const side1 = new createjs.Shape();
    side1.graphics.beginFill("red").drawRect(220,318,20,25);
    const side2 = new createjs.Shape();
    side2.graphics.beginFill("red").drawRect(250,318,20,25);

    const tooth1 = new createjs.Shape();
    const tooth2 = new createjs.Shape();
 
  // CREATE A CIRCLE //
  const circle1 = new createjs.Shape();
  circle1.graphics.beginFill("lightpink").drawCircle(0, 0, radius);

  const circle2 = new createjs.Shape();
  circle2.graphics.beginFill("hotpink").drawCircle(0, 0, radius);

  const circle3 = new createjs.Shape();
  circle3.graphics.beginFill("white").drawCircle(245, 150, 50);
  const circle4 = new createjs.Shape();
  circle4.graphics.beginFill("black").drawCircle(245, 150, 20);
  
  const circleWork = new createjs.Shape();
  circleWork.graphics.beginFill("red").drawCircle(245,330,15);
 
  //x and y
  circle1.x = radius * 2 + margin;
  circle2.x = canvas.width - radius * 2 - margin;
  circle1.y = circle2.y = canvas.height / 2;
  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(background, cirContainer, cyclops, mouth);
  mouth.addChild(side1,side2, circleWork);
  cirContainer.addChild(circle1, circle2);
  cyclops.addChild(circle3, circle4);

//blinking eye?????
var canvas1 = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2, y = canvas.height / 2;
var ballRadius = 10, dx = 2, dy = -2;
var blinkDuration = 60; // Duration in milliseconds
var endBlink = 0;

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }

function draw(timeStamp) {
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    endBlink = timeStamp + blinkDuration; // Hit a wall
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    endBlink = timeStamp + blinkDuration;
    dy = -dy;
  }

  // If endBlink > timeStamp, change the color
  ctx.fillStyle = (endBlink > timeStamp ? "#338" : "#114");
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawBall();

  x += dx;
  y += dy;
  
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);



///


  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick);

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {

 
  mouth.rotation += 0.1;
  
    update(event);
  }
  //variables that track movement
  let eyeSpeed = 1;
  let bounds = 13;
  /*
   * TODO 10: Implement an update Function, after making
   * changes to assets, it must call stage.update();
   */

  function update(event) {
    //TODO: update stage after modifying DisplayObjects
    cirContainer.x += eyeSpeed;
    if (Math.abs(cirContainer.x) > bounds) {
      eyeSpeed *= -1;
    }
    stage.update();
  }
})(window, window.createjs);
