'use strict';

module.exports = {
    linear: function linear(sum) {
        return sum;
    },

    heaviside: function heaviside(sum) {
        if (sum > 0) {
            return 1;
        } else if (sum === 0) {
            return 0;
        } else {
            return -1;
        }
    },

    signum: function signum(sum) {
        if (sum > 0) {
            return 1;
        } else if (sum === 0) {
            return 0.5;
        } else {
            return 0;
        }
    },

    tanh: function tanh(sum) {
        return Math.tanh(sum);
    },

    arctan: function arctan(sum) {
        return Math.arctan(sum);
    },

    sinusoid: function sinusoid(sum) {
        return Math.sin(sum);
    }
};
//# sourceMappingURL=Activation.js.map