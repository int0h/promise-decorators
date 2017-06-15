"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Decorators:
function asyncTransform(transform) {
    return function (target, key, descriptor) { return ({
        value: index_1.asyncTransform(descriptor.value, transform)
    }); };
}
exports.asyncTransform = asyncTransform;
function takeLast() {
    return function (target, key, descriptor) { return ({
        value: index_1.takeLast(descriptor.value)
    }); };
}
exports.takeLast = takeLast;
function watchPromise(handler) {
    return function (target, key, descriptor) { return ({
        value: index_1.watchPromise(descriptor.value, handler)
    }); };
}
exports.watchPromise = watchPromise;
