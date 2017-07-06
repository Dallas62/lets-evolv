'use strict';

let Activation = require("./Activation");

class Perceptron {

    constructor(nbInputs, activation = Activation.signum) {
        this._nbInputs = nbInputs;
        this._activation = activation;

        if (this._nbInputs < 1) {
            throw new Error('Too few inputs define for the Perceptron.');
        }

        if ('function' === typeof this._activation) {
            throw new Error('This is not an activation function for the Perceptron.');
        }

        this._weights = [];

        // Generate default weights
        for (let i = 0; i < this._weights.length; i++) {
            this._weights[i] = Math.random() * 2 - 1;
        }
    }

    feedForward(inputs) {
        if (inputs.length !== this._nbInputs) {
            throw new Error("Too few inputs define for the Perceptron.");
        }

        let sum = 0;

        for (let i = 0; i < this._weights.length; i++) {
            sum += inputs[i] * this._weights[i];
        }

        return this._activation(sum);
    }

    get weights() {
        return this._weights;
    }

    set weights(weights) {
        if (weights.length !== this._nbInputs) {
            throw new Error("Too few weights define for the Perceptron.");
        }

        this._weights = weights;
    }

    get inputs() {
        return this._nbInputs;
    }
}

module.exports = Perceptron;
