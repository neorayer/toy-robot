var   assert = require('assert')
    , Table  = require('../src/table.js')
    , Robot  = require('../src/robot.js')
    ;

describe('Robot', function() {
    var table = new Table(4, 4);

    describe('Constructor', function() {
        it('should throw error when new Robot() without paramenter "table" ', function() {
            assert.throws(function() {
                var robot = new Robot();
            }, function(e) {
                return (e instanceof Error);
            });
        });

        it('robot.table should be set when new Robot(table)', function() {
            var robot = new Robot(table);
            assert.equal(robot.table, table);
        });

        it('robot.pos should be undefined after new Robot(table)', function() {
            var robot = new Robot(table);
            assert.ok(!robot.pos);
        });
    });

    describe('ignore something without initial "place" ', function() {
        var robot;

        beforeEach(function(){
            robot = new Robot(table);
        })

        it ('ignore move()', function() {
            robot = robot.move();
            assert.ok(!robot.pos);
        })

        it ('ignore left()', function() {
            robot = robot.move();
            assert.ok(!robot.pos);
        })

        it ('ignore right()', function() {
            robot = robot.move();
            assert.ok(!robot.pos);
        })
    });

    describe('robot.place() while robot NOT on table', function() {
        var robot;

        beforeEach(function(){
            robot = new Robot(table);
        })

        it ('robot.pos should be undefined when place() without paramenters x, y and f', function() {
            robot = robot.place();
            assert.ok(!robot.pos);
        })

        it ('robot.pos should be undefined when place(null, "NORTH")', function() {
            robot = robot.place(null, 'NORTH');
            assert.ok(!robot.pos);
        })

        it ('robot.pos should be undefined when place(-1, 1, "NORTH")', function() {
            robot = robot.place(-1, 1, 'NORTH');
            assert.ok(!robot.pos);
        })

        it ('robot.pos should be undefined when place(3, 5, "NORTH")', function() {
            robot = robot.place(3, 5, 'NORTH');
            assert.ok(!robot.pos);
        })

        it ('robot.pos should be undefined when place(5, 3, "NORTH")', function() {
            robot = robot.place(5, 3, 'NORTH');
            assert.ok(!robot.pos);
        })

        it ('robot.pos should be {3, 4} when place(3, 4, "NORTH")', function() {
            robot = robot.place(3, 4, 'NORTH');
            assert.deepEqual(robot.pos, {x:3, y:4});
        })

        it ('robot.pos should be {0, 0} when place(0, 0, "NORTH")', function() {
            robot = robot.place(0, 0, 'NORTH');
            assert.deepEqual(robot.pos, {x:0, y:0});
        })

        it ('robot.pos should be {4, 4} when place(4, 4, "NORTH")', function() {
            robot = robot.place(4, 4, 'NORTH');
            assert.deepEqual(robot.pos, {x:4, y:4});
        })

        it ('robot.f should be undefined when place(2, 3)', function() {
            robot = robot.place(3, 3);
            assert.equal(robot.f, undefined);
        })

        it ('robot.f should be undefined when place(2, 3, "UNKNOWN")', function() {
            robot = robot.place(2, 3, 'UNKNOWN');
            assert.equal(robot.f, undefined);
        })

        it ('robot.f should be "NORTH" when place(2, 3, "NORTH")', function() {
            robot = robot.place(2, 3, 'NORTH');
            assert.equal(robot.f, 'NORTH');
        })

         it ('robot.f should be "NORTH" when place(2, 3, "north")', function() {
            robot = robot.place(2, 3, 'north');
            assert.equal(robot.f, 'NORTH');
        })

        it ('robot.f should be "SOUTH" when place(2, 3, "SOUTH")', function() {
            robot = robot.place(2, 3, 'SOUTH');
            assert.equal(robot.f, 'SOUTH');
        })

         it ('robot.f should be "SOUTH" when place(2, 3, "south")', function() {
            robot = robot.place(2, 3, 'south');
            assert.equal(robot.f, 'SOUTH');
        })

        it ('robot.f should be "EAST" when place(2, 3, "EAST")', function() {
            robot = robot.place(2, 3, 'EAST');
            assert.equal(robot.f, 'EAST');
        })

        it ('robot.f should be "EAST" when place(2, 3, "east")', function() {
            robot = robot.place(2, 3, 'east');
            assert.equal(robot.f, 'EAST');
        })

        it ('robot.f should be "WEST" when place(2, 3, "WEST")', function() {
            robot = robot.place(2, 3, 'WEST');
            assert.equal(robot.f, 'WEST');
        })

        it ('robot.f should be "WEST" when place(2, 3, "west")', function() {
            robot = robot.place(2, 3, 'west');
            assert.equal(robot.f, 'WEST');
        })

    });

    describe('robot.place() while robot IS on table', function() {
        var robot;
        var oldPos = {x: 2, y: 3};
        var oldFacing = 'EAST';

        beforeEach(function(){
            robot = new Robot(table);
            robot = robot.place(oldPos.x, oldPos.y, oldFacing);
            assert.deepEqual(robot.pos, oldPos);
            assert.deepEqual(robot.pos. oldFacing);
        })

        it ('robot.pos should be UNCHANGED when place() without paramenters x, y and f', function() {
            robot = robot.place();
            assert.deepEqual(robot.pos, oldPos);
        })
        
        it ('robot.pos should be UNCHANGED when place(null, "NORTH")', function() {
            robot = robot.place(null, 'NORTH');
            assert.deepEqual(robot.pos, oldPos);
        })
        
        it ('robot.pos should be UNCHANGED when place(9, 8, "NORTH")', function() {
            robot = robot.place(null, 'NORTH');
            assert.deepEqual(robot.pos, oldPos);
        })
        
        it ('robot.pos should be UNCHANGED when place(2, 3, "UNKNOWN")', function() {
            robot = robot.place(null, 'NORTH');
            assert.deepEqual(robot.pos, oldPos);
        })
        
        it ('robot.pos should be {2, 3} when place(2, 3, "NORTH")', function() {
            robot = robot.place(2, 3, 'NORTH');
            assert.deepEqual(robot.pos, {x:2 , y: 3});
        })
        
        it ('robot.f should be UNCHANGED when place()', function() {
            robot = robot.place();
            assert.equal(robot.f, oldFacing);
        })
        
        it ('robot.f should be UNCHANGED when place(2, 3)', function() {
            robot = robot.place(2, 3);
            assert.equal(robot.f, oldFacing);
        })
        
        it ('robot.f should be UNCHANGED when place(null)', function() {
            robot = robot.place(2, 3);
            assert.equal(robot.f, oldFacing);
        })
        
        it ('robot.f should be NORTH when place(2, 3, "NORTH")', function() {
            robot = robot.place(2, 3, 'NORTH');
            assert.equal(robot.f, 'NORTH');
        })
        
        it ('robot.f should be NORTH when place(2, 3, "north")', function() {
            robot = robot.place(2, 3, 'north');
            assert.equal(robot.f, 'NORTH');
        })
    });

    describe('turn facing test,', function() {
        var robot;

        beforeEach(function(){
            robot = new Robot(table);
            robot = robot.place(2, 3, 'WEST');
        })

        it ('robot.f should be SOUTH and pos unchanged after left()', function() {
            robot = robot.left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'SOUTH');
        })
        
        it ('robot.f should be EAST and pos unchanged after left() twice', function() {
            robot = robot.left()
                         .left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'EAST');
        })
        
        it ('robot.f should be NORTH and pos unchanged after left() 3 times', function() {
            robot = robot.left()
                         .left()
                         .left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'NORTH');
        })
        
        it ('robot.f should be WEST and pos unchanged after left() 4 times', function() {
            robot = robot.left()
                         .left()
                         .left()
                         .left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'WEST');
        })

        it ('robot.f should be NORTH and pos unchanged after right() ', function() {
            robot = robot.right();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'NORTH');
        })
        
        it ('robot.f should be EAST and pos unchanged after right() twice', function() {
            robot = robot.right()
                         .right();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'EAST');
        })
        
        it ('robot.f should be SOUTH and pos unchanged after right() 3 times', function() {
            robot = robot.right()
                         .right()
                         .right();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'SOUTH');
        })
        
        it ('robot.f should be WEST and pos unchanged after right() 4 times', function() {
            robot = robot.right()
                         .right()
                         .right()
                         .right();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'WEST');
        })
        
        it ('robot.f should be WEST and pos unchanged after left() then right()', function() {
            robot = robot.left()
                         .right();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'WEST');
        })
        
        it ('robot.f should be WEST and pos unchanged after right() then left()', function() {
            robot = robot.right()
                         .left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'WEST');
        })

        it ('robot.f should be WEST and pos unchanged after right() then left()', function() {
            robot = robot.right()
                         .left();
            assert.deepEqual(robot.pos, {x: 2, y: 3});
            assert.equal(robot.f, 'WEST');
        });
        
    });

    describe('robot.move()', function() {
        var robot;

        describe('facing EAST,', function() {
            beforeEach(function(){
                robot = new Robot(table);
                robot = robot.place(2, 3, 'EAST');
            });

            it('should move root foward 1 step on x-coordinate, facing unchanged', function() {
                robot = robot.move();
                assert.equal(robot.f, 'EAST');
                assert.deepEqual(robot.pos, {x:3, y:3});
            });

            it('should move root foward 2 steps on x-coordinate, facing unchanged', function() {
                robot = robot.move().move(); // 2 moves
                assert.equal(robot.f, 'EAST');
                assert.deepEqual(robot.pos, {x:4, y:3});
            });

            it('should move root foward 2 steps on x-coordinate, NOT failing out', function() {
                robot = robot.move().move().move(); // 3 moves
                assert.equal(robot.f, 'EAST');
                assert.deepEqual(robot.pos, {x:4, y:3});
            });

            it('should move root foward 2 steps on x-coordinate, NOT failing out', function() {
                robot = robot.move().move().move().move(); // 4 moves
                assert.equal(robot.f, 'EAST');
                assert.deepEqual(robot.pos, {x:4, y:3});
            });
        });

        describe('facing WEST,', function() {
            beforeEach(function(){
                robot = new Robot(table);
                robot = robot.place(2, 3, 'WEST');
            });

            it('should move root backward 1 step on x-coordinate, facing unchanged', function() {
                robot = robot.move();
                assert.equal(robot.f, 'WEST');
                assert.deepEqual(robot.pos, {x:1, y:3});
            });

            it('should move root backward 2 steps on x-coordinate, facing unchanged', function() {
                robot = robot.move().move(); // 2 moves
                assert.equal(robot.f, 'WEST');
                assert.deepEqual(robot.pos, {x:0, y:3});
            });

            it('should move root backward 2 steps on x-coordinate, NOT falling', function() {
                robot = robot.move().move().move(); // 3 moves
                assert.equal(robot.f, 'WEST');
                assert.deepEqual(robot.pos, {x:0, y:3});
            });

            it('should move root backward 2 steps on x-coordinate, NOT falling', function() {
                robot = robot.move().move().move().move(); // 4 moves
                assert.equal(robot.f, 'WEST');
                assert.deepEqual(robot.pos, {x:0, y:3});
            });
        });

        describe('facing NORTH,', function() {
            beforeEach(function(){
                robot = new Robot(table);
                robot = robot.place(2, 3, 'NORTH');
            });

            it('should move root forward 1 step on y-coordinate, facing unchanged', function() {
                robot = robot.move(); 
                assert.equal(robot.f, 'NORTH');
                assert.deepEqual(robot.pos, {x:2, y:4});
            });

            it('should move root forward 1 step on y-coordinate, NOT falling', function() {
                robot = robot.move().move(); // 2 moves
                assert.equal(robot.f, 'NORTH');
                assert.deepEqual(robot.pos, {x:2, y:4});
            });

            it('should move root forward 1 step on y-coordinate, NOT falling', function() {
                robot = robot.move().move().move(); // 3 moves
                assert.equal(robot.f, 'NORTH');
                assert.deepEqual(robot.pos, {x:2, y:4});
            });
        });

        describe('facing SOUTH,', function() {
            beforeEach(function(){
                robot = new Robot(table);
                robot = robot.place(2, 3, 'SOUTH');
            });

            it('should move root backward 1 step on y-coordinate, facing unchanged', function() {
                robot = robot.move();
                assert.equal(robot.f, 'SOUTH');
                assert.deepEqual(robot.pos, {x:2, y:2});
            });

            it('should move root backward 2 step on y-coordinate, facing unchanged', function() {
                robot = robot.move().move(); // 2 moves
                assert.equal(robot.f, 'SOUTH');
                assert.deepEqual(robot.pos, {x:2, y:1});
            });

            it('should move root backward 3 step on y-coordinate, facing unchanged', function() {
                robot = robot.move().move().move(); // 3 moves
                assert.equal(robot.f, 'SOUTH');
                assert.deepEqual(robot.pos, {x:2, y:0});
            });

            it('should move root backward 3 step on y-coordinate, NOT falling', function() {
                robot = robot.move().move().move(); // 4 moves
                assert.equal(robot.f, 'SOUTH');
                assert.deepEqual(robot.pos, {x:2, y:0});
            });
        });
    });

    describe('robot.report()', function() {
        var robot;
        var report;
        beforeEach(function(){
            robot = new Robot(table);
        });

        it('should be empty', function() {
            report = robot.report();
            assert.equal(report, '');
        });

        it('should be 2,3,WEST', function() {
            report = robot.place(2,3,'WEST').report();
            assert.equal(report, '2,3,WEST');
        });

        it('should be 0,0,NORTH', function() {
            report = robot.place(0,0,'north').report();
            assert.equal(report, '0,0,NORTH');
        });
    });

    describe('COMPLEX operations', function() {
        var robot;
        var report;
        beforeEach(function(){
            robot = new Robot(table);
            robot = robot.place(2, 3, 'SOUTH');
        });

        it('should succeed on example A.', function() {
            report = robot.place(0, 0, 'NORTH')
                          .move()
                          .report();
            assert.equal(report, '0,1,NORTH');
        });
        
        it('should succeed on example B.', function() {
            report = robot.place(0, 0, 'NORTH')
                          .left()
                          .report();
            assert.equal(report, '0,0,WEST');
        });
        
        it('should succeed on example C.', function() {
            report = robot.place(1, 2, 'EAST')
                          .move()
                          .move()
                          .left()
                          .move()
                          .report();
            assert.equal(report, '3,3,NORTH');
        });
        
    });

});