'use strict';

let testCase  = require('nodeunit').testCase;

let Perceptron = require("../src/Perceptron");
let Activation = require("../src/Activation");

module.exports = testCase({
    'Perceptron - Instantiation': function (test) {
        // Instantiation
        let perceptron = new Perceptron(2, Activation.signum);

        test.equal(2, perceptron.inputs);
        test.done();
    },
    'Perceptron - Instantiation wrong parameter activation': function (test) {
        // Instantiation
        test.throws(function() {
            new Perceptron(2, null);
        });

        test.done();
    },
    'Perceptron - Instantiation wrong parameter inputs': function (test) {
        // Instantiation
        test.throws(function() {
            new Perceptron(0, Activation.signum);
        });
        test.done();
    }
});