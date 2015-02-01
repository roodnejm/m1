/**
 * Created by Max on 16/09/2014.
 */

var interactive = true;
// 1 create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99,interactive);
// 2 create a renderer instance.
var renderer = PIXI.autoDetectRenderer(384, 512);
// 3 add the renderer view element to the DOM
document.body.appendChild(renderer.view);
requestAnimFrame( animate );

var grid = drawGriddedStage();
//map face x y chair coordinates
var listChair = [
    //first bloc center 64,128,256,320,404
    new Chair("s",64,62),new Chair("s",128,62),
    //
    new Chair("n",64,130),new Chair("n",128,130),
    //second bloc
    new Chair("s",320,64),new Chair("s",256,64),
    new Chair("n",320,130),new Chair("n",256,130),
    //third
    new Chair("s",256,256),new Chair("s",320,256),
    new Chair("n",256,320),new Chair("n",320,320),
    //fourth
    //384-2
    new Chair("s",64,382),new Chair("s",128,382),
    //448+2
    new Chair("n",64,450),new Chair("n",128,450)

];

for(i=0;i<=listChair.length-1;i++){
    stage.addChild(listChair[i]);
}

//stage.addChild(new MovingObject(renderer,'n'));

function animate() {

    requestAnimFrame( animate );
    renderer.render(stage);
}

function drawGriddedStage() {

    //create landscape
    var graphics = new PIXI.Graphics();
 //   graphics.beginFill(0x00FF00);
   var lineStyle = graphics.lineStyle(3,000000,0.3);
    for(i=0;i<=384;i+=64) {
       // graphics.lineTo(32,0);
        graphics.moveTo(i,0);
        graphics.lineTo(i,512);
      //  graphics.moveTo(0,0);
    }
    for(i=0;i<=512;i+=64) {
        graphics.moveTo(0,i);
        graphics.lineTo(384,i);
    }
  //  graphics.endFill();
    // add it the stage so we see it on our screens..
    stage.addChild(graphics);

}

/*function addChair(x, y) {
    // create a texture from an image path
   var texture = PIXI.Texture.fromImage("sprites/sprites.png");
    var area = PIXI.Rectangle (0, 0,32, 32);
 //   var chair = PIXI.Texture( "sprites/sprites.png", area);
    // create a new Sprite using the texture

    var chair = new PIXI.Sprite(texture);

    // center the sprites anchor point
    chair.anchor.x = 0.5;
    chair.anchor.y = 0.5;

    // move the sprite t the center of the screen
    chair.position.x = x;
    chair.position.y = y;

    stage.addChild(chair);
}
*/
var item = new Item(renderer);
