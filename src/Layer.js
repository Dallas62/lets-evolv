'use strict';

let Activation = require("./Activation");
let Perceptron = require("./Perceptron");

class Layer {

    constructor(nbInputs, nbOutputs, activation = Activation.heaviside) {
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
        for (let i = 0; i < this._nbOutputs; i++) {
            this._perceptrons[i] = new Perceptron(this._nbInputs, this._activation);
        }
    }

    feedForward(inputs) {
        if (false === Array.isArray(inputs) || inputs.length !== this._nbInputs) {
            throw new Error("Too few inputs define for the Layer.");
        }

        let outputs = [];

        for (let i = 0; i < this._nbOutputs; i++) {
            outputs[i] = this._perceptrons[i].feedForward(inputs);
        }

        return outputs;
    }

    get weights() {
        let weights = [];

        for (let i = 0; i < this._nbOutputs; i++) {
            weights = weights.concat(this._perceptrons[i].weights);
        }

        return weights;
    }

    set weights(weights) {
        if (false === Array.isArray(weights) || weights.length !== (this._nbInputs + 1) * this._nbOutputs) {
            throw new Error("Too few weights define for the Layer.");
        }

        // Clone array
        weights = weights.slice();

        for (let i = 0; i < this._nbOutputs; i++) {
            this._perceptrons[i].weights = weights.splice(0, this._nbInputs + 1);
        }
    }

    get inputs() {
        return this._nbInputs;
    }

    get outputs() {
        return this._nbOutputs;
    }
}

module.exports = Layer;
