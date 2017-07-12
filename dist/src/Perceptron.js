'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Activation = require("./Activation");

var Perceptron = function () {
    function Perceptron(nbInputs) {
        var activation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Activation.heaviside;

        _classCallCheck(this, Perceptron);

        this._nbInputs = nbInputs;
        this._activation = activation;
        this._bias = 1;

        if (this._nbInputs < 1) {
            throw new Error('Too few inputs define for the Perceptron.');
        }

        if ('function' !== typeof this._activation) {
            throw new Error('This is not an activation function for the Perceptron.');
        }

        this._weights = [];

        // Generate default weights
        for (var i = 0; i < this._nbInputs; i++) {
            this._weights[i] = Math.random() * 2 - 1;
        }
    }

    _createClass(Perceptron, [{
        key: 'feedForward',
        value: function feedForward(inputs) {
            if (inputs.length !== this._nbInputs) {
                throw new Error("Too few inputs define for the Perceptron.");
            }

            var sum = this._bias * this._weights[this._nbInputs];

            for (var i = 0; i < this._nbInputs; i++) {
                sum += inputs[i] * this._weights[i];
            }

            return this._activation(sum);
        }
    }, {
        key: 'weights',
        get: function get() {
            return this._weights;
        },
        set: function set(weights) {
            if (false === Array.isArray(weights) || weights.length !== this._nbInputs + 1) {
                throw new Error("Too few weights define for the Perceptron.");
            }

            // Clone array
            this._weights = weights.slice();
        }
    }, {
        key: 'inputs',
        get: function get() {
            return this._nbInputs;
        }
    }]);

    return Perceptron;
}();

module.exports = Perceptron;
//# sourceMappingURL=Perceptron.js.map