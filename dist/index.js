"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function takeLast(fn) {
    var lastId = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentId = ++lastId;
        return new Promise(function (resolve, reject) {
            fn.apply(void 0, args).then(function (result) {
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
function asyncTransform(fn, transform) {
    var tfn = function (args, resolve, reject) { return fn.apply(void 0, args).then(resolve, reject); };
    var transformed = transform(tfn);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            transformed(args, resolve, reject);
        });
    };
}
exports.asyncTransform = asyncTransform;
function watchPromise(fn, handler) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        handler('pending');
        return fn.apply(void 0, args).then(function (result) {
            handler('resolved');
            return result;
        }, function (error) {
            handler('rejected');
            throw error;
        });
    };
}
exports.watchPromise = watchPromise;
