/**
 * Created by Max on 17/09/2014.
 * @TODO se charger d'effectuer le rendu d'un moving object dans une collection
 */

/**
 * Constructor MovingObject
 * @param {Object} params definition:
 * {
 *     facingDirection: MovingObject.DIRECTION_{UP|RIGHT|DOWN|LEFT},
 *     stepSize: {Number}
 * }
 */
function MovingObject (params) {
    // Inheritance (super)
    PIXI.Sprite.call(this);

    params = params || {};

    // New properties
    this.facingDirection = params.facingDirection || MovingObject.DIRECTION_DOWN;
    this.stepSize = params.stepSize || 1;
}

// Inheritance
MovingObject.prototype = Object.create(PIXI.Sprite);
MovingObject.prototype.constructor = MovingObject;

MovingObject.prototype.move = function () {
    switch (this.facingDirection) {
        case MovingObject.DIRECTION_UP:
            this.position.y -= this.stepSize;
            break;

        case MovingObject.DIRECTION_RIGHT:
            this.position.x += this.stepSize;
            break;

        case MovingObject.DIRECTION_DOWN:
            this.position.y += this.stepSize;
            break;

        case MovingObject.DIRECTION_LEFT:
            this.position.x -= this.stepSize;
            break;
        default:
            break;
    }
};


MovingObject.DIRECTION_UP = 1;
MovingObject.DIRECTION_RIGHT = 2;
MovingObject.DIRECTION_DOWN = 3;
MovingObject.DIRECTION_LEFT = 4;