(function (window, opspark, racket) {
  /**
   * Creates and returns the space module. Listens for SPAWN
   * events, adding any bodies in the event
   * @param {Object} messenger: The system wide event dispatcher.
   */
  opspark.space = function (messenger) {
    // holds all bodies active in our space //
    const dampeningForce = 0.08,
      active = [];

    messenger.on("SPAWN", onSpawn);
    function onSpawn(event) {
      add(...event.bodies);
    }

    function add(...bodies) {
      active.push(...bodies);
      return this;
    }

    function remove(body) {
      return active.splice(active.indexOf(body), 1)[0];
    }

    return {
      add,
      remove,
      destroy() {
        messenger.off("SPAWN", onSpawn);
      },
      update(event) {
        active.forEach((body) => {
          // ask the body to update its velocity //
          body.update(event);

          // update the body's position based on its new velocity //
          racket.physikz.updatePosition(body);
        });

        // loop backwards over each body in the space: note i > 0 //
        for (let i = active.length - 1; i > 0; i--) {
          // pull out each body one by one //
          const bodyA = active[i];

          // compare all other bodies to bodyA, excluding bodyA: note j > -1 //
          hit: for (let j = i - 1; j > -1; j--) {
            const bodyB = active[j];
            distanceAttributes = getDistanceAttributes(bodyA, bodyB),
            hitResult = doRadiiHitTest(distanceAttributes.distance, bodyA,bodyB);
            if(hitResult.isHit) {
              if((bodyA.type === "projectile" && bodyB.type === "ship") || (bodyA.type === "ship" && bodyB.type === "projectile")){

              }
              else{
                handleCollision(distanceAttributes, hitResult, phyz.lengthImpactProperties(bodyA, bodyB));
              }
            }

            // TODO 1: Calculate hit test components
            //chan ge!!!!!!!
            var distanceX = bodyA.x - bodyB.x;
            var distanceY = bodyA.y - bodyB.y;
            var distance = Math.sqrt(
              distanceX * distanceX + distanceY * distanceY
            );
            var minimunDistance = bodyB.radius + bodyA.radius;

            // TODO 2: Do collision check: how do we know if bodies are colliding?
            if (distance < minimunDistance) {
              console.log("hit!");
              // TODO 3: Calculate springToX and springToY
              var angle = Math.atan2(distanceY, distanceX);
              var springToX = Math.cos(angle) * minimunDistance + bodyA.x;
              var springToY = Math.sin(angle) * minimunDistance + bodyA.y;
              // TODO 4: Calculate acceleration to spring-to point, factor in dampeningForce
              var accelerationOnX = ( bodyB.x - springToX ) * dampeningForce;
              var accelerationOnY = (bodyB.y- springToY ) * dampeningForce;

              // TODO 5: Apply acceleration to bodyB
              bodyB.velocityX += accelerationOnX;
              bodyB.velocityY += accelerationOnY;
              // bodyB = accelerationOnX + bodyB.velocityX + accelerationOnY + bodyB.velocityY;
              // TODO 6: Apply inverse acceleration to bodyA
              bodyA.velocityX -= accelerationOnX;
              bodyA.velocityY -= accelerationOnY;
            }
          }
        }
      },
    };
  };
})(window, window.opspark, window.opspark.racket);
