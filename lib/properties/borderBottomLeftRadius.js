'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('border-bottom-left-radius', v);
    },
    get: function () {
        return this.getPropertyValue('border-bottom-left-radius');
    },
    enumerable: true
};