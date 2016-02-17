'use strict'

/* exports type: Class. */

/**
 * Table Class (Immutable)
 *
 * @param {int|float|string} maxX   the max value of x-coordinate
 * @param {int|float|string} maxY   the max value of y-coordinate
 * @constructor
 */
var Table = function(maxX, maxY) {
    maxX = parseInt(maxX) || 4;
    maxY = parseInt(maxY) || maxX || 4;
    // any number less 0, will be forced to 0.
    this.maxX = maxX < 0 ? 0 : maxX;
    this.maxY = maxY < 0 ? 0 : maxY;
}

/**
 * @return {bool} if (x, y) is a valid position in table
 */
Table.prototype.isValidPos = function(x, y) {
    return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
}

module.exports = Table;