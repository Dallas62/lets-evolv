'use strict';

let testCase  = require('nodeunit').testCase;

let Layer = require("../src/Layer");

module.exports = testCase({
    'Layer - Instantiation one output': function (test) {
        // Instantiation
        let layer = new Layer(2, 1);

        let weights = [0.2, 0.3, 0.4];

        layer.weights = weights;

        test.equal(layer.inputs,  2);
        test.equal(layer.outputs, 1);

        test.equal(layer.weights.length, 3);
        test.deepEqual(layer.weights, weights);

        test.equal(layer.feedForward([1, 1]).length, 1);

        test.done();
    },
    'Layer - Instantiation 5 outputs': function (test) {
        // Instantiation
        let layer = new Layer(10, 5);

        let weights = new Array(55).fill(0.25);

        layer.weights = weights;

        test.equal(layer.inputs,  10);
        test.equal(layer.outputs, 5);

        test.equal(layer.weights.length, 55);
        test.deepEqual(layer.weights, weights);

        test.equal(layer.feedForward(new Array(10).fill(1)).length, 5);

        test.done();
    },
    'Layer - Instantiation wrong parameter inputs': function (test) {
        // Instantiation
        test.throws(function() {
            new Layer(0, 1);
        });
        test.done();
    },
    'Layer - Instantiation wrong parameter outputs': function (test) {
        // Instantiation
        test.throws(function() {
            new Layer(1, 0);
        });
        test.done();
    },
    'Layer - Instantiation wrong parameter activation': function (test) {
        // Instantiation
        test.throws(function() {
            new Layer(2, 1, null);
        });
        test.done();
    },
    'Layer - OR logic gate': function (test) {
        // Instantiation
        let layer = new Layer(2, 1);

        layer.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [1]);
        test.deepEqual(layer.feedForward([1, 0]), [1]);
        test.deepEqual(layer.feedForward([1, 1]), [1]);

        test.done();
    },
    'Layer - AND logic gate': function (test) {
        // Instantiation
        let layer = new Layer(2, 1);

        layer.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [0]);
        test.deepEqual(layer.feedForward([1, 0]), [0]);
        test.deepEqual(layer.feedForward([1, 1]), [1]);

        test.done();
    },
    'Layer - NOT logic gate': function (test) {
        // Instantiation
        let layer = new Layer(1, 1);

        layer.weights = [-2, 1]; // 1 input, 1 bias

        test.deepEqual(layer.feedForward([0]), [1]);
        test.deepEqual(layer.feedForward([1]), [0]);

        test.done();
    },
    'Layer - NOT logic gate for XOR': function (test) {
        // Instantiation
        let layer = new Layer(2, 1);

        layer.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [1]);
        test.deepEqual(layer.feedForward([1, 1]), [0]);

        test.done();
    },
    'Layer - XOR logic gate using 2 layers': function (test) {
        // Instantiation
        let and_or  = new Layer(2, 2);
        let not = new Layer(2, 1);

        and_or.weights  = [0.3, 0.3, -0.5, 0.5, 0.5, -0.5];
        not.weights = [ -2, 1, -0.1];

        // Create the XOR function
        let XOR = function(inputs) {

            let result = and_or.feedForward(inputs);

            return not.feedForward(result);
        };

        test.deepEqual(XOR([0, 0]), [0]);
        test.deepEqual(XOR([0, 1]), [1]);
        test.deepEqual(XOR([1, 0]), [1]);
        test.deepEqual(XOR([1, 1]), [0]);

        test.done();
    }
});