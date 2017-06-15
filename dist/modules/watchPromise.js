"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function watchPromise(fn, handler) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        handler('pending');
        return fn.apply(this, args).then(function (result) {
            handler('resolved');
            return result;
        }, function (error) {
            handler('rejected');
            throw error;
        });
    };
}
exports.watchPromise = watchPromise;
