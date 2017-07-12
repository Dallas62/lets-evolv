'use strict';

var testCase = require('nodeunit').testCase;

var Network = require("../src/Network");

module.exports = testCase({
    'Network - Instantiation one layer': function NetworkInstantiationOneLayer(test) {
        // Instantiation
        var network = new Network([2, 1]);

        var weights = [0.2, 0.3, 0.4];

        network.weights = weights;

        test.equal(network.inputs, 2);
        test.equal(network.outputs, 1);

        test.equal(network.weights.length, 3);
        test.deepEqual(network.weights, weights);

        test.equal(network.feedForward([1, 1]).length, 1);

        test.done();
    },
    'Network - Instantiation of a Network of 4 layers': function NetworkInstantiationOfANetworkOf4Layers(test) {
        // Instantiation
        var network = new Network([3, 5, 3, 3, 2]);

        var weights = new Array(58).fill(0.25);

        network.weights = weights;

        test.equal(network.inputs, 3);
        test.equal(network.layers, 4);
        test.equal(network.outputs, 2);

        test.equal(network.weights.length, 58);
        test.deepEqual(network.weights, weights);

        test.equal(network.feedForward(new Array(3).fill(1)).length, 2);

        test.done();
    },
    'Network - Instantiation wrong parameter layers': function NetworkInstantiationWrongParameterLayers(test) {
        // Instantiation
        test.throws(function () {
            new Network(null);
        });
        test.done();
    },
    'Network - Instantiation wrong parameter size layers': function NetworkInstantiationWrongParameterSizeLayers(test) {
        // Instantiation
        test.throws(function () {
            new Network([1]);
        });
        test.done();
    },
    'Network - Instantiation wrong parameter activation': function NetworkInstantiationWrongParameterActivation(test) {
        // Instantiation
        test.throws(function () {
            new Network([2, 1], null);
        });
        test.done();
    },
    'Network - OR logic gate': function NetworkORLogicGate(test) {
        // Instantiation
        var network = new Network([2, 1]);

        network.weights = [0.5, 0.5, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(network.feedForward([0, 0]), [0]);
        test.deepEqual(network.feedForward([0, 1]), [1]);
        test.deepEqual(network.feedForward([1, 0]), [1]);
        test.deepEqual(network.feedForward([1, 1]), [1]);

        test.done();
    },
    'Network - AND logic gate': function NetworkANDLogicGate(test) {
        // Instantiation
        var network = new Network([2, 1]);

        network.weights = [0.3, 0.3, -0.5]; // 2 inputs, 1 bias

        test.deepEqual(network.feedForward([0, 0]), [0]);
        test.deepEqual(network.feedForward([0, 1]), [0]);
        test.deepEqual(network.feedForward([1, 0]), [0]);
        test.deepEqual(network.feedForward([1, 1]), [1]);

        test.done();
    },
    'Network - NOT logic gate': function NetworkNOTLogicGate(test) {
        // Instantiation
        var network = new Network([1, 1]);

        network.weights = [-2, 1]; // 1 input, 1 bias

        test.deepEqual(network.feedForward([0]), [1]);
        test.deepEqual(network.feedForward([1]), [0]);

        test.done();
    },
    'Network - NOT logic gate for XOR': function NetworkNOTLogicGateForXOR(test) {
        // Instantiation
        var network = new Network([2, 1]);

        network.weights = [-2, 1, -0.1]; // 2 inputs, 1 bias

        test.deepEqual(network.feedForward([0, 0]), [0]);
        test.deepEqual(network.feedForward([0, 1]), [1]);
        test.deepEqual(network.feedForward([1, 1]), [0]);

        test.done();
    },
    'Network - XOR logic gate using a network of 2 layers': function NetworkXORLogicGateUsingANetworkOf2Layers(test) {
        // Instantiation
        var xor = new Network([2, 2, 1]);

        xor.weights = [0.3, 0.3, -0.5, 0.5, 0.5, -0.5, -2, 1, -0.1];

        test.deepEqual(xor.feedForward([0, 0]), [0]);
        test.deepEqual(xor.feedForward([0, 1]), [1]);
        test.deepEqual(xor.feedForward([1, 0]), [1]);
        test.deepEqual(xor.feedForward([1, 1]), [0]);

        test.done();
    }
});
//# sourceMappingURL=Network.test.js.map