'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Activation = require("./Activation");
var Layer = require("./Layer");

var Network = function () {
    function Network(nbLayers) {
        var activation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Activation.heaviside;

        _classCallCheck(this, Network);

        this._nbLayers = nbLayers;
        this._activation = activation;

        if (false === Array.isArray(this._nbLayers) || this._nbLayers.length < 2) {
            throw new Error('Too few layers define for the Network.');
        }

        if ('function' !== typeof this._activation) {
            throw new Error('This is not an activation function for the Network.');
        }

        this._nbInputs = this._nbLayers[0];
        this._nbOutputs = this._nbLayers[this._nbLayers.length - 1];

        this._layers = [];

        // Generate layers
        for (var i = 1; i < this._nbLayers.length; i++) {
            var nbInputs = this._nbLayers[i - 1];
            var nbOutputs = this._nbLayers[i];

            this._layers[i - 1] = new Layer(nbInputs, nbOutputs, this._activation);
        }
    }

    _createClass(Network, [{
        key: "feedForward",
        value: function feedForward(inputs) {
            if (false === Array.isArray(inputs) || inputs.length !== this._nbInputs) {
                throw new Error("Too few inputs define for the Network.");
            }

            var outputs = inputs;

            for (var i = 0; i < this._nbLayers.length - 1; i++) {
                outputs = this._layers[i].feedForward(outputs);
            }

            return outputs;
        }
    }, {
        key: "weights",
        get: function get() {
            var weights = [];

            for (var i = 0; i < this._nbLayers.length - 1; i++) {
                weights = weights.concat(this._layers[i].weights);
            }

            return weights;
        },
        set: function set(weights) {
            var nbWeights = 0;

            for (var i = 1; i < this._nbLayers.length; i++) {
                var nbInputs = this._nbLayers[i - 1];
                var nbOutputs = this._nbLayers[i];

                nbWeights += (nbInputs + 1) * nbOutputs;
            }

            if (false === Array.isArray(weights) || weights.length !== nbWeights) {
                throw new Error("Too few weights define for the Layer.");
            }

            // Clone array
            weights = weights.slice();

            for (var _i = 1; _i < this._nbLayers.length; _i++) {
                var _nbInputs = this._nbLayers[_i - 1];
                var _nbOutputs = this._nbLayers[_i];

                this._layers[_i - 1].weights = weights.splice(0, (_nbInputs + 1) * _nbOutputs);
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
    }, {
        key: "layers",
        get: function get() {
            return this._nbLayers.length - 1;
        }
    }]);

    return Network;
}();

module.exports = Network;
//# sourceMappingURL=Network.js.map