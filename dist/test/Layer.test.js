'use strict';

var testCase = require('nodeunit').testCase;

var Layer = require("../src/Layer");

module.exports = testCase({
    'Layer - Instantiation one output': function LayerInstantiationOneOutput(test) {
        // Instantiation
        var layer = new Layer(2, 1);

        test.equal(layer.inputs, 2);
        test.equal(layer.outputs, 1);

        test.equal(layer.feedForward([1, 1]).length, 1);

        test.done();
    },
    'Layer - Instantiation 5 outputs': function LayerInstantiation5Outputs(test) {
        // Instantiation
        var layer = new Layer(10, 5);

        test.equal(layer.inputs, 10);
        test.equal(layer.outputs, 5);

        test.equal(layer.feedForward(new Array(10)).length, 5);

        test.done();
    },
    'Layer - Instantiation wrong parameter inputs': function LayerInstantiationWrongParameterInputs(test) {
        // Instantiation
        test.throws(function () {
            new Layer(0, 1);
        });
        test.done();
    },
    'Layer - Instantiation wrong parameter outputs': function LayerInstantiationWrongParameterOutputs(test) {
        // Instantiation
        test.throws(function () {
            new Layer(1, 0);
        });
        test.done();
    },
    'Layer - Instantiation wrong parameter activation': function LayerInstantiationWrongParameterActivation(test) {
        // Instantiation
        test.throws(function () {
            new Layer(2, 1, null);
        });
        test.done();
    },
    'Layer - OR logic gate': function LayerORLogicGate(test) {
        // Instantiation
        var layer = new Layer(2, 1);

        layer.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [1]);
        test.deepEqual(layer.feedForward([1, 0]), [1]);
        test.deepEqual(layer.feedForward([1, 1]), [1]);

        test.done();
    },
    'Layer - AND logic gate': function LayerANDLogicGate(test) {
        // Instantiation
        var layer = new Layer(2, 1);

        layer.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [0]);
        test.deepEqual(layer.feedForward([1, 0]), [0]);
        test.deepEqual(layer.feedForward([1, 1]), [1]);

        test.done();
    },
    'Layer - NOT logic gate': function LayerNOTLogicGate(test) {
        // Instantiation
        var layer = new Layer(1, 1);

        layer.weights = [-2, 1]; // 1 input, 1 bias

        test.deepEqual(layer.feedForward([0]), [1]);
        test.deepEqual(layer.feedForward([1]), [0]);

        test.done();
    },
    'Layer - NOT logic gate for XOR': function LayerNOTLogicGateForXOR(test) {
        // Instantiation
        var layer = new Layer(2, 1);

        layer.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        test.deepEqual(layer.feedForward([0, 0]), [0]);
        test.deepEqual(layer.feedForward([0, 1]), [1]);
        test.deepEqual(layer.feedForward([1, 1]), [0]);

        test.done();
    },
    'Layer - XOR logic gate using 2 layers': function LayerXORLogicGateUsing2Layers(test) {
        // Instantiation
        var and_or = new Layer(2, 2);
        var not = new Layer(2, 1);

        and_or.weights = [0.3, 0.3, -0.5, 0.5, 0.5, -0.5];
        not.weights = [-2, 1, -0.1];

        // Create the XOR function
        var XOR = function XOR(inputs) {

            var result = and_or.feedForward(inputs);

            return not.feedForward(result);
        };

        test.deepEqual(XOR([0, 0]), [0]);
        test.deepEqual(XOR([0, 1]), [1]);
        test.deepEqual(XOR([1, 0]), [1]);
        test.deepEqual(XOR([1, 1]), [0]);

        test.done();
    }
});
//# sourceMappingURL=Layer.test.js.map