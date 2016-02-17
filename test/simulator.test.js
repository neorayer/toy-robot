var   assert     = require('assert')
    , Simulator  = require('../src/simulator.js')
    ;

describe('Simulator', function() {
    var simulator;
    var report;

    beforeEach(function() {
        simulator = new Simulator();
    })

    it ('should report empty initially', function() {
        report = simulator.report();
        assert.equal(report, '');
    })

    it ('should report empty with correct initial place', function() {
        report = simulator.exec('Place foo')
                          .report();
        assert.equal(report, '');
    })

    it ('should report 0,0,NORTH', function() {
        report = simulator.exec('PLACE 0, 0, NORTH ')
                          .report();
        assert.equal(report, '0,0,NORTH');
    })

    it ('should report 0,1,NORTH', function() {
        report = simulator.exec('PLACE 0, 0, NORTH ')
                          .exec('MOVE')
                          .report();
        assert.equal(report, '0,1,NORTH');
    })

    it ('should report 0,0,WEST', function() {
        report = simulator.exec('PLACE 0, 0, NORTH ')
                          .exec('LEFT')
                          .report();
        assert.equal(report, '0,0,WEST');
    })

    it ('should report 3,3,NORTH', function() {
        report = simulator.exec('PLACE 1,2,EAST')
                          .exec('MOVE')
                          .exec('MOVE')
                          .exec('LEFT')
                          .exec('MOVE')
                          .report();
        assert.equal(report, '3,3,NORTH');
    })


});