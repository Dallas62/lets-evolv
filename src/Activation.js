'use strict';

module.exports = {
    linear: function(sum) {
        return sum;
    },

    heaviside: function(sum) {
        if(sum > 0) {
            return 1;
        } else if(sum === 0) {
            return 0;
        } else {
            return -1;
        }
    },

    signum: function(sum) {
        if(sum > 0) {
            return 1;
        } else if(sum === 0) {
            return 0.5;
        } else {
            return 0;
        }
    },

    tanh: function(sum) {
        return Math.tanh(sum);
    },

    arctan: function(sum) {
        return Math.arctan(sum);
    },

    sinusoid: function(sum) {
        return Math.sin(sum);
    }
};
