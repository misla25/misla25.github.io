
(function (window, createjs, opspark, _) {

  // Variable declarations for libraries and the game engine
  const
    draw = opspark.draw, // library for drawing using createJS
    physikz = opspark.racket.physikz, // library for defining physics properties like velocity
    engine = opspark.V6().activateResize(), // game engine for actively rendering + running the game's mechanics
    canvas = engine.getCanvas(), // object for referencing the height / width of the window
    stage = engine.getStage(); // object to hold all visual components

  // load some sounds for the demo - play sounds using: createjs.Sound.play("wall");
  createjs.Sound.on("fileload", handleLoadComplete);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds([{ src: "hit.ogg", id: "hit" }, { src: "wall.ogg", id: "wall" }], "assets/sounds/");

  function handleLoadComplete(event) {
    console.log('sounds loaded');
  }

  engine
    .addTickHandlers(update) // establish the update function as the callback for every timer tick
    .activateTick();

  // Variable declarations for the paddles and the ball which are drawn using createJS (see bower_components/opspark-draw/draw.js)
  const
    paddlePlayer = createPaddle(),
    paddleCPU = createPaddle({ x: canvas.width - 50, y: canvas.height - 100 }),
    ball = draw.circle(20, '#CCC');
    const playerText = draw.textfield("score: 0", "24px Arial", "purple", "center", "middle", canvas.width/2,canvas.height/16);
    let playerScore = 

  // set initial properties for the paddles 
  paddlePlayer.yVelocity = 7;
  paddleCPU.yVelocity = 10;

  // set initial properties for the ball
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.xVelocity = 7;
  ball.yVelocity = 7;

  // add the paddles and the ball to the view
  stage.addChild(paddlePlayer, paddleCPU, ball, playerText);


  document.addEventListener('keyup', onKeyUp);
  document.addEventListener('keydown', onKeyDown);


  var KEY = {
    "DOWN": 40,
    "UP": 38,
    "W": 87,
    "S": 83
  }

  // when an Arrow key is pressed down, set the paddle in motion
 
  function onKeyDown(event) {
    if (event.which === KEY.W) { //'ArrowUp'
      paddlePlayer.yVelocity = -5;
    } else if (event.which === KEY.S) { //'ArrowDown'
      paddlePlayer.yVelocity = 5;
    }
  }

  // when either the Arrow Up or Arrow Down key are released, stop the paddle from moving

  function onKeyUp(event) {
    if (event.which === KEY.W || event.which === KEY.S) {
      paddlePlayer.yVelocity = 0;
    }
  }

  function update(event) {

    boundsCPU = paddleCPU.getBounds(),
      widthCPU = boundsCPU.width,
      heightCPU = boundsCPU.height,
      midCPU = heightCPU / 2,
      boundsPlayer = paddlePlayer.getBounds(),
      widthPlayer = paddlePlayer.width,
      heightPlayer = paddlePlayer.height;

    // Ball movement: the xVelocity and yVelocity is the distance the ball moves per update
    ball.x = ball.x + ball.xVelocity;
    ball.y = ball.y + ball.yVelocity;

    // Player movement //
    paddlePlayer.y += paddlePlayer.yVelocity;
    if (paddlePlayer.y < 0) {
      paddlePlayer.y = 0;
    }
    if (paddlePlayer.y > canvas.height - paddlePlayer.height) {
      paddlePlayer.y = canvas.height - heightPlayer;
    }

    // AI movement: CPU follows ball //
    if ((paddleCPU.y + midCPU) < (ball.y - 14)) {
      paddleCPU.y += paddleCPU.yVelocity;
    } else if ((paddleCPU.y + midCPU) > (ball.y + 14)) {
      paddleCPU.y -= paddleCPU.yVelocity;
    }

    // TODO 1: bounce the ball off the top
    if (ball.y < 0 || ball.y > canvas.height) {
      ball.yVelocity = -ball.yVelocity;
      createjs.Sound.play("wall");
    }

    // TODO 2: bounce the ball off the bottom
    if(ball.x < 0 || ball.x > canvas.width){
      //ball.xVelocity = -ball.xVelocity;
      ball.x = canvas.width/2;
      ball.y = canvas.height/2;
    } else if(ball.x > canvas.width){
      ball.x = canvas.width/2;
      ball.y = canvas.height/2;
      playerScore++;
     playerText.text = "Score : " + playerScore; 
    }

    // TODO 3: bounce the ball off each of the paddles
    //top of ball has to be greater than bottom of paddle
    detectPaddleCollision(paddleCPU);
   detectPaddleCollision(paddlePlayer);
    
   function detectPaddleCollision(paddle) {
      ball.top = ball.y - ball.radius;
      ball.bottom = ball.y + ball.radius;

      ball.left = ball.x - ball.radius;
      ball.right = ball.x + ball.radius;

      paddle.top = paddle.y;
      paddle.bottom = paddle.y + paddle.height;

      paddle.left = paddle.x;
      paddle.right = paddle.x + paddle.width;

      //checks
      const topOverlap = ball.top < paddle.bottom;
      //bottom of ball has to below top of paddle
      const bottomOverlap = ball.bottom > paddle.top;
      //right of ball has to be the right of the left of the paddle 
      const rightOverlap = ball.right > paddle.left;
      //left of the ball has to be the left of the right of the paddle 
      const leftOverlap = ball.left < paddle.right;

      if (topOverlap && bottomOverlap && rightOverlap && leftOverlap) {
        return ball.xVelocity *= -1;
        createjs.Sound.play("hit");
      }
    
    }
  }
  // helper function that wraps the draw.rect function for easy paddle making
  function createPaddle({ width = 20, height = 100, x = 10, y = 10, color = 'purple' } = {}) {
    const paddle = draw.rect(width, height, color);
    paddle.x = x;
    paddle.y = y;
    return paddle;
  }


}(window, window.createjs, window.opspark, window._));
