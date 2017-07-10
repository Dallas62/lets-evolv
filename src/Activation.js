'use strict';

module.exports = {
    heaviside: function(sum) {
        if(sum >= 0) {
            return 1;
        } else {
            return 0;
        }
    }
};
