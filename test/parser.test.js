var   assert = require('assert')
    , Parser  = require('../src/parser.js')
    ;

describe('Command Parser', function() {
    var parser = new Parser();

    describe('function parse()', function () {
        it('parse(no arg)', function () {
            var cmd = parser.parse();
            assert.deepEqual(cmd, {name: '', args: []});
        });

        it('parse("")', function () {
            var cmd = parser.parse('');
            assert.deepEqual(cmd, {name: '', args: []});
        });

       it('parse("   ")', function () {
            var cmd = parser.parse('    ');
            assert.deepEqual(cmd, {name: '', args: []});
        });

        it('parse("PLACE")', function () {
            var cmd = parser.parse('PLACE');
            assert.deepEqual(cmd, {name: 'PLACE', args: []});
        });

        it('parse("place")', function () {
            var cmd = parser.parse('place');
            assert.deepEqual(cmd, {name: 'PLACE', args: []});
        });

        it('parse("Place")', function () {
            var cmd = parser.parse('Place');
            assert.deepEqual(cmd, {name: 'PLACE', args: []});
        });

        it('parse("Place 2, 3, n")', function () {
            var cmd = parser.parse('Place 2, 3, n');
            assert.deepEqual(cmd, {name: 'PLACE', args: ['2','3','n']});
        });

        it('parse("place  2,   3,   n")', function () {
            var cmd = parser.parse('place  2,   3,   n');
            assert.deepEqual(cmd, {name: 'PLACE', args: ['2','3','n']});
        });

        it('parse("  place  2,   3,   n")', function () {
            var cmd = parser.parse('  place  2,   3,   n');
            assert.deepEqual(cmd, {name: 'PLACE', args: ['2','3','n']});
        });
 
        it('parse("\tPlace \t2,\t 3,\tn\t") - sperators includes tab and space', function () {
            var cmd = parser.parse('\tPlace \t2,\t 3,\tn\t ');
            assert.deepEqual(cmd, {name: 'PLACE', args: ['2','3','n']});
        });

        it('parse("  left")', function () {
            var cmd = parser.parse('  left');
            assert.deepEqual(cmd, {name: 'LEFT', args: []});
        });
    });
});
