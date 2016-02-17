'use strict'

/* exports type: Class */

/**
 * Command parser class
 * @constructor
 */
var Parser = function() {
}

/**
 * Parse a command string to command object 
 * @param {string}    the command line with string format, eg. PLACE 2 3 NORTH
 * @return {object}   command object 
 * format: {
 *          name: string,       // name of command
 *          args: string array, // arguments of command 
 *      }
 */
Parser.prototype.parse = function(line) {
    var ss = (line || '')
            .trim()
            .replace(/,/g, ' ')
            .replace(/\t/g, ' ')
            .split(' ')
            .map(function(word) {
                return word.trim();
            });
    var res = {name: '', args: []};

    if (ss.length > 0) 
        res.name = ss[0].toUpperCase();

    for(var i = 1, len = ss.length; i < len; i++) {
        if (ss[i].length > 0)
            res.args.push(ss[i]);
    }

    return res;
}

module.exports = Parser;
