'use strict';

var testCase = require('nodeunit').testCase;

var Perceptron = require("../src/Perceptron");
var Activation = require("../src/Activation");

module.exports = testCase({
    'Perceptron - Instantiation': function PerceptronInstantiation(test) {
        // Instantiation
        var perceptron = new Perceptron(2);

        var weights = [0.2, 0.3, 0.4];

        perceptron.weights = weights;

        test.equal(perceptron.inputs, 2);

        test.equal(perceptron.weights.length, 3);
        test.deepEqual(perceptron.weights, weights);
        test.done();
    },
    'Perceptron - Instantiation wrong parameter inputs': function PerceptronInstantiationWrongParameterInputs(test) {
        // Instantiation
        test.throws(function () {
            new Perceptron(0);
        });
        test.done();
    },
    'Perceptron - Instantiation wrong parameter activation': function PerceptronInstantiationWrongParameterActivation(test) {
        // Instantiation
        test.throws(function () {
            new Perceptron(2, null);
        });

        test.done();
    },
    'Perceptron - OR logic gate': function PerceptronORLogicGate(test) {
        // Instantiation
        var perceptron = new Perceptron(2);

        perceptron.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 1);
        test.equal(perceptron.feedForward([1, 0]), 1);
        test.equal(perceptron.feedForward([1, 1]), 1);

        test.done();
    },
    'Perceptron - AND logic gate': function PerceptronANDLogicGate(test) {
        // Instantiation
        var perceptron = new Perceptron(2);

        perceptron.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 0);
        test.equal(perceptron.feedForward([1, 0]), 0);
        test.equal(perceptron.feedForward([1, 1]), 1);

        test.done();
    },
    'Perceptron - NOT logic gate': function PerceptronNOTLogicGate(test) {
        // Instantiation
        var perceptron = new Perceptron(1);

        perceptron.weights = [-2, 1]; // 1 input, 1 bias

        test.equal(perceptron.feedForward([0]), 1);
        test.equal(perceptron.feedForward([1]), 0);

        test.done();
    },
    'Perceptron - NOT logic gate for XOR': function PerceptronNOTLogicGateForXOR(test) {
        // Instantiation
        var perceptron = new Perceptron(2);

        perceptron.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        test.equal(perceptron.feedForward([0, 0]), 0);
        test.equal(perceptron.feedForward([0, 1]), 1);
        test.equal(perceptron.feedForward([1, 1]), 0);

        test.done();
    },
    'Perceptron - XOR logic gate using 3 perceptrons': function PerceptronXORLogicGateUsing3Perceptrons(test) {
        // Instantiation
        var or = new Perceptron(2);
        var and = new Perceptron(2);
        var not = new Perceptron(2);

        or.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias
        and.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias
        not.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        // Create the XOR function
        var XOR = function XOR(inputs) {

            var rAND = and.feedForward(inputs);
            var rOR = or.feedForward(inputs);

            return not.feedForward([rAND, rOR]);
        };

        test.equal(XOR([0, 0]), 0);
        test.equal(XOR([0, 1]), 1);
        test.equal(XOR([1, 0]), 1);
        test.equal(XOR([1, 1]), 0);

        test.done();
    }
});
//# sourceMappingURL=Perceptron.test.js.map