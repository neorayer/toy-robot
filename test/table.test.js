var   assert = require('assert')
    , Table  = require('../src/table.js')
    ;

describe('Table', function() {
    describe('Table Constructor', function () {
        it('maxX should be 4 when new Table()', function () {
            var table =new Table();
            assert.equal(table.maxX, 4);
        });

         it('maxY should be 4 when new Table()', function () {
            var table =new Table();
            assert.equal(table.maxY, 4);
        });

         it('maxX should be 7 when new Table(7, 8)', function () {
            var table =new Table(7, 8);
            assert.equal(table.maxX, 7);
        });

        it('maxY should be 8 when new Table(7, 8)', function () {
            var table =new Table(7, 8);
            assert.equal(table.maxY, 8);
        });

        it('both maxX and maxY should be 6 when new Table(6)', function () {
            var table =new Table(6);
            assert.equal(table.maxX, 6);
            assert.equal(table.maxY, 6);
        });

        it('maxX should be 0 when new Table(-1, 6)', function () {
            var table =new Table(-1, 6);
            assert.equal(table.maxX, 0);
        });

        it('maxY should be 0 when new Table(6, -1)', function () {
            var table =new Table(6, -1);
            assert.equal(table.maxY, 0);
        });

       it('both maxX and maxY should be 0 when new Table(-1)', function () {
            var table =new Table(-1);
            assert.equal(table.maxX, 0);
            assert.equal(table.maxY, 0);
        });

       it('maxX should be 4 when new Table(4.4, 5.5)', function () {
            var table =new Table(4.4, 5.5);
            assert.equal(table.maxX, 4);
        });

       it('maxY should be 5 when new Table(4.4, 5.5)', function () {
            var table =new Table(4.4, 5.5);
            assert.equal(table.maxY, 5);
       });
    });


    describe('function isValidPos()', function () {
        var table;

        beforeEach(function() {
            table = new Table(4, 4);
        });

        it('should return true when validate (0, 0)', function () {
            assert.ok(table.isValidPos(0, 0));
        });
        
        it('should return true when validate (4, 4)', function () {
            assert.ok(table.isValidPos(4, 4));
        });
        
        it('should return true when validate (0, 4)', function () {
            assert.ok(table.isValidPos(0, 4));
        });

        it('should return true when validate (2.2, 3.3)', function () {
            assert.ok(table.isValidPos(2.2, 3.3));
        });
                    
        it('should return false when validate (0, 5)', function () {
            assert.ok(!table.isValidPos(0, 5));
        });

        it('should return false when validate (5, 0)', function () {
            assert.ok(!table.isValidPos(5, 0));
        });
        
        it('should return false when validate (-1, 3)', function () {
            assert.ok(!table.isValidPos(-1, 3));
        });

        it('should return false when validate (3, -1)', function () {
            assert.ok(!table.isValidPos(3, -1));
        });
        
        it('should return false when validate (99999999999, 3)', function () {
            assert.ok(!table.isValidPos(99999999999, -1));
        });
    
    });

});