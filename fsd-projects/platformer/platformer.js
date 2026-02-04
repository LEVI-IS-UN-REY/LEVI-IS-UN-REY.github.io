$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
createPlatform(500, 650, 200, 20);
createPlatform(500, 650, 20, 100);
createPlatform(800, 555, 200, 20);
createPlatform(1100, 440, 150, 20);
createPlatform(900, 325, 180, 20);
createPlatform(500, 200, 200, 20);
    // TODO 3 - Create Collectables
createCollectable("steve",300,100)
createCollectable("steve",200, 170, .3,)
createCollectable("steve",1300, 170)
    
    // TODO 4 - Create Cannons
createCannon("top", 220, 500);
createCannon("left", 200, 1500);
createCannon("bottom", 1300, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
