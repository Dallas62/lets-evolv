'use strict';

let testCase  = require('nodeunit').testCase;

let Perceptron = require("../src/Perceptron");
let Activation = require("../src/Activation");

module.exports = testCase({
    'Perceptron - Instantiation': function (test) {
        // Instantiation
        let perceptron = new Perceptron(2, Activation.heaviside);

        test.equal(perceptron.inputs, 2);
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
            new Perceptron(0, Activation.heaviside);
        });
        test.done();
    },
    'Perceptron - OR logic gate': function (test) {
        // Instantiation
        let perceptron = new Perceptron(2, Activation.heaviside);

        perceptron.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 1);
        test.equal(perceptron.feedForward([1, 0]), 1);
        test.equal(perceptron.feedForward([1, 1]), 1);

        test.done();
    },
    'Perceptron - AND logic gate': function (test) {
        // Instantiation
        let perceptron = new Perceptron(2, Activation.heaviside);

        perceptron.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 0);
        test.equal(perceptron.feedForward([1, 0]), 0);
        test.equal(perceptron.feedForward([1, 1]), 1);

        test.done();
    },
    'Perceptron - NOT logic gate': function (test) {
        // Instantiation
        let perceptron = new Perceptron(1, Activation.heaviside);

        perceptron.weights = [-2, 1]; // 1 input, 1 bias

        test.equal(perceptron.feedForward([0]), 1);
        test.equal(perceptron.feedForward([1]), 0);

        test.done();
    },
    'Perceptron - NOT logic gate for XOR': function (test) {
        // Instantiation
        let perceptron = new Perceptron(2, Activation.heaviside);

        perceptron.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 1);
        test.equal(perceptron.feedForward([1, 1]), 0);

        test.done();
    },
    'Perceptron - XOR logic gate using 3 perceptrons': function (test) {
        // Instantiation
        let or  = new Perceptron(2, Activation.heaviside);
        let and = new Perceptron(2, Activation.heaviside);
        let not = new Perceptron(2, Activation.heaviside);

        or.weights  = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias
        and.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias
        not.weights = [ -2,   1, -0.1]; // 2 inputs, 1 bias

        // Create the XOR function
        let XOR = function(inputs) {

            let rAND = and.feedForward(inputs);
            let rOR  =  or.feedForward(inputs);

            return not.feedForward([rAND, rOR]);
        };

        test.equal(XOR([0, 0]), 0);
        test.equal(XOR([0, 1]), 1);
        test.equal(XOR([1, 0]), 1);
        test.equal(XOR([1, 1]), 0);

        test.done();
    }
});