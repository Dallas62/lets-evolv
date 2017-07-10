'use strict';

let testCase  = require('nodeunit').testCase;

let Activation = require("../src/Activation");

module.exports = testCase({
    'Activation - heaviside': function (test) {
        test.equal(Activation.heaviside(-1),   0);
        test.equal(Activation.heaviside(-0.5), 0);
        test.equal(Activation.heaviside(0),    1);
        test.equal(Activation.heaviside(0.5),  1);
        test.equal(Activation.heaviside(1),    1);
        test.done();
    }
});