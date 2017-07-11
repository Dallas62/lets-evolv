'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Activation = require("./Activation");
var Perceptron = require("./Perceptron");

var Layer = function () {
    function Layer(nbInputs, nbOutputs) {
        var activation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Activation.heaviside;

        _classCallCheck(this, Layer);

        this._nbInputs = nbInputs;
        this._nbOutputs = nbOutputs;
        this._activation = activation;

        if (this._nbInputs < 1) {
            throw new Error('Too few inputs define for the Layer.');
        }

        if (this._nbOutputs < 1) {
            throw new Error('Too few outputs define for the Layer.');
        }

        if ('function' !== typeof this._activation) {
            throw new Error('This is not an activation function for the Layer.');
        }

        this._perceptrons = [];

        // Generate perceptrons
        for (var i = 0; i < this._nbOutputs; i++) {
            this._perceptrons[i] = new Perceptron(this._nbInputs, this._activation);
        }
    }

    _createClass(Layer, [{
        key: "feedForward",
        value: function feedForward(inputs) {
            if (inputs.length !== this._nbInputs) {
                throw new Error("Too few inputs define for the Layer.");
            }

            var outputs = [];

            for (var i = 0; i < this._nbOutputs; i++) {
                outputs[i] = this._perceptrons[i].feedForward(inputs);
            }

            return outputs;
        }
    }, {
        key: "weights",
        get: function get() {
            var weights = [];

            for (var i = 0; i < this._nbOutputs; i++) {
                weights[i] = this._perceptrons[i].weights;
            }

            return weights;
        },
        set: function set(weights) {
            if (weights.length !== (this._nbInputs + 1) * this._nbOutputs) {
                throw new Error("Too few weights define for the Layer.");
            }

            for (var i = 0; i < this._nbOutputs; i++) {
                this._perceptrons[i].weights = weights.splice(0, this._nbInputs + 1);
            }
        }
    }, {
        key: "inputs",
        get: function get() {
            return this._nbInputs;
        }
    }, {
        key: "outputs",
        get: function get() {
            return this._nbOutputs;
        }
    }]);

    return Layer;
}();

module.exports = Layer;
//# sourceMappingURL=Layer.js.map