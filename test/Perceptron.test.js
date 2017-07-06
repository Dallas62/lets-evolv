'use strict';

var testCase  = require('nodeunit').testCase;

var Perceptron = require("../src/Perceptron");

module.exports = testCase({
    'Test 1 - Instantiation': function (test) {
        // Instantiation
        var perceptron = new Perceptron(2);

        test.equal(2, perceptron.inputs);
        test.done();
    }
});