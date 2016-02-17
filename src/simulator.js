'use strict'

/* exports type: Class. */

var Readline = require('readline')
    , Table  = require('./table.js')
    , Robot  = require('./robot.js')
    , Parser = require('./parser.js')
    ;

/**
 * Toy robot simulator Class 
 */
var Simulator = function() {
    var welcome = 'Hello, I\'m toy robot.';

    var table  = new Table(4, 4);
    var robot  = new Robot(table);
    var parser = new Parser();

    var rl = Readline.createInterface({
        input:  process.stdin,
        output: process.stdout
    });

    var report = function() {
        return robot.report();
    }

    var output = function(text) {
        console.log('Output:' + text);
    }

    var exec = function(cmdLine) {
        var cmd = parser.parse(cmdLine);
        switch(cmd.name) {
            case 'PLACE': 
                robot = Robot.prototype.place.apply(robot, cmd.args); 
                break;
            case 'MOVE' : 
                robot = Robot.prototype.move.apply(robot, cmd.args);  
                break;
            case 'LEFT' : 
                robot = robot.left();  
                break;
            case 'RIGHT': 
                robot = robot.right();  
                break;
            case 'REPORT': 
                output(robot.report()); 
                break;
            case 'Q':
            case 'EXIT':
            case 'QUIT': 
                stop(); 
                break;
            default:
                output('unknown command');
                break;
        }
        return this;
    }

    var stop = function() {
        rl.close();
    }

    var start = function() {
        output(welcome);

        rl.on('line', exec);
    }

    //////////////////////////////////////////
    // Expose public attributes and methods

    this.start  = start;
    this.stop   = stop;
    this.exec   = exec;
    this.report = report;
}

module.exports = Simulator;