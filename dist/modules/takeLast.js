"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function takeLast(fn) {
    var lastId = 0;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentId = ++lastId;
        return new Promise(function (resolve, reject) {
            fn.apply(_this, args).then(function (result) {
                if (currentId === lastId) {
                    resolve(result);
                }
            }, function (error) {
                if (currentId === lastId) {
                    reject(error);
                }
            });
        });
    };
}
exports.takeLast = takeLast;
