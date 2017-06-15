"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asyncTransform_1 = require("./asyncTransform");
function throttleFn(fn, pause) {
    var lastRunTime = 0;
    var lastArgs;
    var lastThis;
    var lastResult;
    function run(context) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        lastArgs = null;
        lastRunTime = Date.now();
        var result = fn.call.apply(fn, [context].concat(args));
        lastResult = result;
        return result;
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        var timePass = now - lastRunTime;
        if (!lastArgs) {
            setTimeout(function () {
                if (lastArgs) {
                    run.apply(void 0, [lastThis].concat(lastArgs));
                }
            }, pause - timePass);
        }
        if (timePass < pause) {
            lastArgs = args;
            lastThis = this;
            return lastResult;
        }
        return run.apply(void 0, [this].concat(args));
    };
}
exports.throttleFn = throttleFn;
function throttle(fn, pause) {
    return asyncTransform_1.asyncTransform(fn, function (fn) { return throttleFn(fn, pause); });
}
exports.throttle = throttle;
