'use strict';

let testCase  = require('nodeunit').testCase;

let Activation = require("../src/Activation");

module.exports = testCase({
    'Activation - linear': function (test) {
        test.equal(-1, Activation.linear(-1));
        test.equal(-0.5, Activation.linear(-0.5));
        test.equal(0, Activation.linear(0));
        test.equal(0.5, Activation.linear(0.5));
        test.equal(1, Activation.linear(1));
        test.done();
    },
    'Activation - heaviside': function (test) {
        test.equal(-1, Activation.heaviside(-1));
        test.equal(-1, Activation.heaviside(-0.5));
        test.equal(0, Activation.heaviside(0));
        test.equal(1, Activation.heaviside(0.5));
        test.equal(1, Activation.heaviside(1));
        test.done();
    },
    'Activation - signum': function (test) {
        test.equal(0, Activation.signum(-1));
        test.equal(0, Activation.signum(-0.5));
        test.equal(0.5, Activation.signum(0));
        test.equal(1, Activation.signum(0.5));
        test.equal(1, Activation.signum(1));
        test.done();
    },
    'Activation - tanh': function (test) {
        // TODO
        test.done();
    },
    'Activation - arctan': function (test) {
        // TODO
        test.done();
    },
    'Activation - sinusoid': function (test) {
        // TODO
        test.done();
    }
});