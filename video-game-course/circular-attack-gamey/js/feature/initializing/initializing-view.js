(function(opspark, createjs, draw, _) {
  const
    button = opspark.factory.component.button,
    layout = opspark.factory.component.layout;
    
  // create a namespace for the initializing view //
  _.set(opspark, 'playa.initializing', 
  /**
   * Creates and returns the initializing view.
   */
  function(game) {
    const
      canvas = game.canvas,
      
      /*
       * asset is the parent Container for this view. Use
       * asset.addChild() to add child components to the view.
       */
      asset = new createjs.Container();
      
    // create view components here //
    const textfield = draw.textfield('INITIALIZING', 'bold 60px Arial', '#FFF');
    
    // add all view components to the view container //
    asset.addChild(textfield);
    
    
    /**
     * Called when the asset is added to the stage.
     * Use render() to config and position components.
     */
    function render() {
      canvas.style.backgroundImage = "url('https://pbs.twimg.com/media/GNk0A0fW4AAs4QO?format=jpg&name=4096x4096');"
      canvas.style.backgroundPosition = "center";
//       var context = canvas.getContext('2d');
// context.fillRect(0,0,50,50);
// canvas.setAttribute('width', '300'); // clears the canvas
// context.fillRect(0,100,50,50);
// canvas.width = canvas.width; // clears the canvas
// context.fillRect(100,0,50,50); // only this square remains 
canvas.style.backgroundRepeat = "no-repeat"; 
      textfield.alpha = 0;
      textfield.x = canvas.width / 2;
      textfield.y = 10;
    }
    
    // called on screen resize //
    function liquify() {
      return createjs.Tween.get(textfield, { loop: false })
          .to({ x: canvas.width / 2 }, 700, createjs.Ease.getPowInOut(4))
    }
    
    // setup a one-time added-to-parent listener //
    asset.on('added', onAdded);
    function onAdded(event) {
      if(game.getDebug()) console.log('initializing view added to stage');
      asset.off('added', onAdded);
      render();
    }

    /*
     * Return the view API: It MUST expose the asset, the render method, and 
     * the liquify method. However, any other child components or API needed 
     * to control this view can be exposed.
     */
    return {
      asset,
      render,
      liquify,
      open() {
        return createjs.Tween.get(textfield, { loop: false })
          .to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(4));
      },
      close() {
        return createjs.Tween.get(textfield, { loop: false })
          .to({ alpha: 0 }, 50, createjs.Ease.getPowInOut(4));
      },
    };
  });
}(window.opspark, window.createjs, window.opspark.draw, window._));
