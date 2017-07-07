'use strict';

var testCase = require('nodeunit').testCase;

var Perceptron = require("../src/Perceptron");
var Activation = require("../src/Activation");

module.exports = testCase({
    'Perceptron - Instantiation': function PerceptronInstantiation(test) {
        // Instantiation
        var perceptron = new Perceptron(2, Activation.signum);

        test.equal(2, perceptron.inputs);
        test.done();
    },
    'Perceptron - Instantiation wrong parameter activation': function PerceptronInstantiationWrongParameterActivation(test) {
        // Instantiation
        test.throws(function () {
            new Perceptron(2, null);
        });

        test.done();
    },
    'Perceptron - Instantiation wrong parameter inputs': function PerceptronInstantiationWrongParameterInputs(test) {
        // Instantiation
        test.throws(function () {
            new Perceptron(0, Activation.signum);
        });
        test.done();
    }
});
//# sourceMappingURL=Perceptron.test.js.map