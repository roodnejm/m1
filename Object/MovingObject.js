/**
 * Created by Max on 17/09/2014.
 */
function MovingObject (renderer,faceDirection) {
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('/m1/sprites/sprites64.png');

    /* if(faceDirection == "s") {
        // create a pregnant woman sprites tab 4x4
        var textureTab = [];
        for(i=112;i<=336;i=i+60) {
            for(j=0;j<=256;j=j+89) {
                var textInter = new PIXI.Texture(texture, new PIXI.Rectangle(i, j, 60, 89), new PIXI.Rectangle(32, 32, 32, 32), new PIXI.Rectangle(32, 32, 32, 32));
                textureTab
            }
        }
    }
    else*/ if (faceDirection == "n"){
        // 342 0 62 64 coordinates of the chair facing south
        var textInter = new PIXI.Texture(texture, new PIXI.Rectangle(342, 64, 62, 64), new PIXI.Rectangle(32, 32, 32, 32), new PIXI.Rectangle(32, 32, 32, 32));
    }
    var texture2 = new PIXI.Sprite(textInter);
    texture2.setInteractive(true);
    // center the sprites anchor point
    texture2.anchor.x = 0.5;
    texture2.anchor.y = 0.5;

    // move the sprite t the center of the screen
    texture2.position.x = 50;
    texture2.position.y = 50;

    texture2.mouseover = function(mouseData){
        console.log("MOUSE OVER!");
       texture2 = new PIXI.Texture(texture, new PIXI.Rectangle(60, 60, 60, 89), new PIXI.Rectangle(32, 32, 32, 32), new PIXI.Rectangle(32, 32, 32, 32));
    }

    return texture2;
}
MovingObject.prototype = new Item;