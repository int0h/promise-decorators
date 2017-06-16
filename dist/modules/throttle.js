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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90aHJvdHRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFnRDtBQUVoRCxvQkFBMkIsRUFBWSxFQUFFLEtBQWE7SUFDckQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksUUFBZSxDQUFDO0lBQ3BCLElBQUksUUFBYSxDQUFDO0lBQ2xCLElBQUksVUFBZSxDQUFDO0lBRXBCLGFBQWEsT0FBTztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzVCLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxPQUFQLEVBQUUsR0FBTSxPQUFPLFNBQUssSUFBSSxFQUFDLENBQUM7UUFDekMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQztRQUFTLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ3RCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBRW5DLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixVQUFVLENBQUM7Z0JBQ1YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDZCxHQUFHLGdCQUFDLFFBQVEsU0FBSyxRQUFRLEdBQUU7Z0JBQzVCLENBQUM7WUFDRixDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuQixDQUFDO1FBRUQsTUFBTSxDQUFDLEdBQUcsZ0JBQUMsSUFBSSxTQUFLLElBQUksR0FBRTtJQUMzQixDQUFDLENBQUE7QUFDRixDQUFDO0FBbENELGdDQWtDQztBQUVELGtCQUE0QixFQUFvQixFQUFFLEtBQWE7SUFDOUQsTUFBTSxDQUFDLCtCQUFjLENBQUMsRUFBRSxFQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCw0QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNGdW5jdGlvbiwgUmVzb2x2ZXIsIFJlamVjdGVyfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge2FzeW5jVHJhbnNmb3JtfSBmcm9tICcuL2FzeW5jVHJhbnNmb3JtJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlRm4oZm46IEZ1bmN0aW9uLCBwYXVzZTogbnVtYmVyKTogRnVuY3Rpb24ge1xuXHRsZXQgbGFzdFJ1blRpbWUgPSAwO1xuXHRsZXQgbGFzdEFyZ3M6IGFueVtdO1xuXHRsZXQgbGFzdFRoaXM6IGFueTtcblx0bGV0IGxhc3RSZXN1bHQ6IGFueTtcblxuXHRmdW5jdGlvbiBydW4oY29udGV4dCwgLi4uYXJncykge1xuXHRcdGxhc3RBcmdzID0gbnVsbDtcblx0XHRsYXN0UnVuVGltZSA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gZm4uY2FsbChjb250ZXh0LCAuLi5hcmdzKTtcblx0XHRsYXN0UmVzdWx0ID0gcmVzdWx0O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgdGltZVBhc3MgPSBub3cgLSBsYXN0UnVuVGltZTtcblxuXHRcdGlmICghbGFzdEFyZ3MpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmIChsYXN0QXJncykge1xuXHRcdFx0XHRydW4obGFzdFRoaXMsIC4uLmxhc3RBcmdzKTtcblx0XHRcdH1cblx0XHR9LCBwYXVzZSAtIHRpbWVQYXNzKTtcblx0XHR9XG5cblx0XHRpZiAodGltZVBhc3MgPCBwYXVzZSkge1xuXHRcdFx0bGFzdEFyZ3MgPSBhcmdzO1xuXHRcdFx0bGFzdFRoaXMgPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGxhc3RSZXN1bHQ7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBydW4odGhpcywgLi4uYXJncyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlPFQ+KGZuOiBBc3luY0Z1bmN0aW9uPFQ+LCBwYXVzZTogbnVtYmVyKTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdHJldHVybiBhc3luY1RyYW5zZm9ybShmbiwgZm4gPT4gdGhyb3R0bGVGbihmbiwgcGF1c2UpKTtcbn1cbiJdfQ==