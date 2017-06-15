"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asyncTransform(fn, transform) {
    var tfn = function (args, resolve, reject) {
        return fn.apply(this, args).then(resolve, reject);
    };
    var transformed = transform(tfn);
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            transformed.call(_this, args, resolve, reject);
        });
    };
}
exports.asyncTransform = asyncTransform;
