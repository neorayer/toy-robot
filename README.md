Toy Robot Simulator
==================

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. Please read REQUIREMENT.md for more detail.

Requirements
------------
* Node (>=0.12.0)
* NPM (>=v2.11.2)
* mocha 

Download & Install
-------
Download zip https://github.com/neorayer/toy-robot/archive/master.zip and unzip it, or just clone repo by git

    git clone https://github.com/neorayer/toy-robot.git
    cd toy-robot
That's it!

Run
----
    npm start

Test
-------
You need [mocha] to do the test. Install mocha with: 

    npm install -g mocha

Then, run test with:

    npm test


Code Description
--------
* To make the code nice and simple , **dependencies** are referenced as less as possible.
* Any **ES6** features have been avoided.
* The **immutable pattern** is used on robot.js. the state of robot object can not be modified, instead, a new robot object will be created and returned while move(), place(), left() and right().
* The most **module export method** is 'Class'. Model constructor function is exported directly, so all model objects are created by 'new'. eg, var robot = new Robot(table).
* The code is developed under **TDD**. [Mocha] is simple and fun, so it be selected as the test framwork.
* The **Node 'assert' module** is quite sufficient for this task, it's unnecessary to involve other complex assertion library like [chai], [should.js] or [expect.js]
* grunt is too heavy to my little robot.

   [mocha]: <https://mochajs.org/>
   [chai]: <http://chaijs.com/>
   [should.js]: <https://github.com/shouldjs/should.js>
   [expect.js]: <https://github.com/LearnBoost/expect.js>
