'use strict';

var testCase = require('nodeunit').testCase;

var Activation = require("../src/Activation");

module.exports = testCase({
    'Activation - linear': function ActivationLinear(test) {
        test.equal(-1, Activation.linear(-1));
        test.equal(-0.5, Activation.linear(-0.5));
        test.equal(0, Activation.linear(0));
        test.equal(0.5, Activation.linear(0.5));
        test.equal(1, Activation.linear(1));
        test.done();
    },
    'Activation - heaviside': function ActivationHeaviside(test) {
        test.equal(-1, Activation.heaviside(-1));
        test.equal(-1, Activation.heaviside(-0.5));
        test.equal(0, Activation.heaviside(0));
        test.equal(1, Activation.heaviside(0.5));
        test.equal(1, Activation.heaviside(1));
        test.done();
    },
    'Activation - signum': function ActivationSignum(test) {
        test.equal(0, Activation.signum(-1));
        test.equal(0, Activation.signum(-0.5));
        test.equal(0.5, Activation.signum(0));
        test.equal(1, Activation.signum(0.5));
        test.equal(1, Activation.signum(1));
        test.done();
    },
    'Activation - tanh': function ActivationTanh(test) {
        // TODO
        test.done();
    },
    'Activation - arctan': function ActivationArctan(test) {
        // TODO
        test.done();
    },
    'Activation - sinusoid': function ActivationSinusoid(test) {
        // TODO
        test.done();
    }
});
//# sourceMappingURL=Activation.test.js.map