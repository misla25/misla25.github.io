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
  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("#371F76")
    .drawRect(0, 0, canvas.width, canvas.height);

  //SMILEY FACE
  const smiley = new createjs.Shape();
  // var 2 = new createjs.Stage("myCanvas");
  // var arc = new createjs.Shape();
  //     arc.graphics.beginFill("teal").arc(100, 100, 50, 0, Math.PI);
  //     arc.x = 100;
  //     arc.y = 100;
  //   stage2.addChild(arc);
  //   stage2.update();
  // CREATE A CIRCLE //
  const circle1 = new createjs.Shape();
  circle1.graphics.beginFill("lightpink").drawCircle(0, 0, radius);

  const circle2 = new createjs.Shape();
  circle2.graphics.beginFill("hotpink").drawCircle(0, 0, radius);

  const circle3 = new createjs.Shape();
  circle3.graphics.beginFill("white").drawCircle(245, 150, 50);
  const circle4 = new createjs.Shape();
  circle3.graphics.beginFill("black").drawCircle(245, 150, 20);
  //x and y
  circle1.x = radius * 2 + margin;
  circle2.x = canvas.width - radius * 2 - margin;
  circle1.y = circle2.y = canvas.height / 2;
  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(background, cirContainer, cyclops);

  cirContainer.addChild(circle1, circle2);
  cyclops.addChild(circle3, circle4);

  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick);

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    //cirContainer.rotation += 3;

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
