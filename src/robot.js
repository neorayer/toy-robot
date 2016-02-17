'use strict'

/* exports type: Class. */

/**
 * Class Robot (Immutable)
 *  
 * @param {Table} table (required) 
 * @param {object} pos  Initial position. eg: {x:2, y:3}
 * @param {string} f    Initial facing. enum: 'NORTH', 'SOUTH', 'EAST', 'WEST'. 
 * @constructor
 */
var Robot = function(table, pos, f) {
    if (!table)
        throw new Error('argument table is required.');
    this.table  = table;
    this.pos    = pos;
    this.f      = f;
}

/**
 * Place robot in perticular position(x,y) and facing 
 * 
 * @param {int|float|string} x  x-coordinate of position, float will be round to int
 * @param {int|float|string} y  y-coordinate of position
 * @param {string} f         f  facing of robot, enum: 'NORTH', 'SOUTH', 'EAST', 'WEST'.
 * @return new robot instance in new place, or self if failed.
 */
Robot.prototype.place = function(x, y, f) {
    var pos = {
        x: parseInt(x),
        y: parseInt(y)
    }

    if (!this.table.isValidPos(pos.x, pos.y)) 
        return this; 

    if (!f) 
        return this;
    f = (f + '').toUpperCase();
    if (['NORTH', 'SOUTH', 'EAST', 'WEST'].indexOf(f) < 0)
        return this; 

    return new Robot(this.table, pos, f);
}

/**
 * Move robot forward to current facing by 'steps'
 *
 * @param {int|string} steps    the units count of moving, default: 1 
 * @return new robot instance in new place, or self if failed.
 */
Robot.prototype.move = function(steps) {
    if (!this.pos) 
        return this;

    steps = parseInt(steps) || 1;
    var newPos = {x: this.pos.x, y: this.pos.y}; // clone pos
    switch (this.f) {
        case 'NORTH': newPos.y += steps; break;
        case 'SOUTH': newPos.y -= steps; break;
        case 'EAST':  newPos.x += steps; break;
        case 'WEST':  newPos.x -= steps; break;
        default: break;
    }

    if (!this.table.isValidPos(newPos.x, newPos.y))
        return this;

    return new Robot(this.table, newPos, this.f);
}

/**
 * robot turn left 
 *
 * @return new robot instance in new facing, or self if root isn't on table.
 */
Robot.prototype.left = function() {
    if (!this.pos) 
         return this;

    var newFacing = this.f;
    switch (this.f) {
        case 'NORTH': newFacing = 'WEST'; break;
        case 'SOUTH': newFacing = 'EAST'; break;
        case 'EAST':  newFacing = 'NORTH'; break;
        case 'WEST':  newFacing = 'SOUTH'; break;
        default: break;
    }
    return new Robot(this.table, this.pos, newFacing);
}

/**
 * robot turn right
 *
 * @return new robot instance in new facing, or self if root isn't on table.
 */
Robot.prototype.right = function() {
     if (!this.pos) 
         return this;

    var newFacing = this.f;
    switch (this.f) {
        case 'NORTH': newFacing = 'EAST'; break;
        case 'SOUTH': newFacing = 'WEST'; break;
        case 'EAST':  newFacing = 'SOUTH'; break;
        case 'WEST':  newFacing = 'NORTH'; break;
        default: break;
    }
    return new Robot(this.table, this.pos, newFacing);
}

/**
 * @return {string} robot position and facing report. eg. '0,1,NORTH'
 */
Robot.prototype.report = function() {
    var s = '';
    s += this.pos ? (this.pos.x + ',' + this.pos.y) : '';
    s += this.f ? ',' + this.f : '';
    return s;
}

module.exports = Robot;