'use strict';

var testCase = require('nodeunit').testCase;

var Activation = require("../src/Activation");

module.exports = testCase({
    'Activation - heaviside': function ActivationHeaviside(test) {
        test.equal(Activation.heaviside(-1), 0);
        test.equal(Activation.heaviside(-0.5), 0);
        test.equal(Activation.heaviside(0), 1);
        test.equal(Activation.heaviside(0.5), 1);
        test.equal(Activation.heaviside(1), 1);
        test.done();
    }
});
//# sourceMappingURL=Activation.test.js.map