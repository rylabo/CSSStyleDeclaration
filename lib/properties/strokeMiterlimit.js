'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('stroke-miterlimit', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-miterlimit');
    },
    enumerable: true
};