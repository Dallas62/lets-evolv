'use strict';

let Activation = require("./Activation");
let Layer = require("./Layer");

class Network {

    constructor(nbLayers, activation = Activation.heaviside) {
        this._nbLayers = nbLayers;
        this._activation = activation;

        if (false === Array.isArray(this._nbLayers) || this._nbLayers.length < 2) {
            throw new Error('Too few layers define for the Network.');
        }

        if ('function' !== typeof this._activation) {
            throw new Error('This is not an activation function for the Network.');
        }

        this._nbInputs  = this._nbLayers[0];
        this._nbOutputs = this._nbLayers[this._nbLayers.length - 1];
        
        this._layers = [];

        // Generate layers
        for (let i = 1; i < this._nbLayers.length; i++) {
            let nbInputs  = this._nbLayers[i - 1];
            let nbOutputs = this._nbLayers[i];

            this._layers[i - 1] = new Layer(nbInputs, nbOutputs, this._activation);
        }
    }

    feedForward(inputs) {
        if (false === Array.isArray(inputs) || inputs.length !== this._nbInputs) {
            throw new Error("Too few inputs define for the Network.");
        }

        let outputs = inputs;

        for (let i = 0; i < this._nbLayers.length - 1; i++) {
            outputs = this._layers[i].feedForward(outputs);
        }

        return outputs;
    }

    get weights() {
        let weights = [];

        for (let i = 0; i < this._nbLayers.length - 1; i++) {
            weights = weights.concat(this._layers[i].weights);
        }

        return weights;
    }

    set weights(weights) {
        let nbWeights = 0;

        for (let i = 1; i < this._nbLayers.length; i++) {
            let nbInputs = this._nbLayers[i - 1];
            let nbOutputs = this._nbLayers[i];

            nbWeights += (nbInputs + 1) * nbOutputs;
        }

        if (false === Array.isArray(weights) || weights.length !== nbWeights) {
            throw new Error("Too few weights define for the Layer.");
        }

        // Clone array
        weights = weights.slice();

        for (let i = 1; i < this._nbLayers.length; i++) {
            let nbInputs = this._nbLayers[i - 1];
            let nbOutputs = this._nbLayers[i];

            this._layers[i - 1].weights = weights.splice(0, (nbInputs + 1) * nbOutputs);
        }
    }

    get inputs() {
        return this._nbInputs;
    }

    get outputs() {
        return this._nbOutputs;
    }

    get layers() {
        return this._nbLayers.length - 1;
    }
}

module.exports = Network;
