'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-mask', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask');
    },
    enumerable: true
};