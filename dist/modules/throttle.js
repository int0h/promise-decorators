"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asyncTransform_1 = require("./asyncTransform");
/**
 * internal realization of throttle
 *
 * @param fn
 * @param pause
 */
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
/**
 * Very similar to a classical throttle.
 * Throttled function returns promises, which will be resolved (or rejected)
 * not more frequently than once in *pause* time period
 *
 * @param fn - source promise-function
 * @param pause - a minimum pause between promise resolutions (or rejections)
 */
function throttle(fn, pause) {
    return asyncTransform_1.asyncTransform(fn, function (fn) { return throttleFn(fn, pause); });
}
exports.throttle = throttle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90aHJvdHRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFnRDtBQUVoRDs7Ozs7R0FLRztBQUNILG9CQUEyQixFQUFZLEVBQUUsS0FBYTtJQUNyRCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxRQUFlLENBQUM7SUFDcEIsSUFBSSxRQUFhLENBQUM7SUFDbEIsSUFBSSxVQUFlLENBQUM7SUFFcEIsYUFBYSxPQUFZO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxHQUFNLE9BQU8sU0FBSyxJQUFJLEVBQUMsQ0FBQztRQUN6QyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDO1FBQVMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsQ0FBQztnQkFDVixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNkLEdBQUcsZ0JBQUMsUUFBUSxTQUFLLFFBQVEsR0FBRTtnQkFDNUIsQ0FBQztZQUNGLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25CLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxnQkFBQyxJQUFJLFNBQUssSUFBSSxHQUFFO0lBQzNCLENBQUMsQ0FBQTtBQUNGLENBQUM7QUFsQ0QsZ0NBa0NDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILGtCQUE0QixFQUFvQixFQUFFLEtBQWE7SUFDOUQsTUFBTSxDQUFDLCtCQUFjLENBQUMsRUFBRSxFQUFFLFVBQUMsRUFBb0IsSUFBSyxPQUFBLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztBQUM1RSxDQUFDO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jRnVuY3Rpb24sIFJlc29sdmVyLCBSZWplY3Rlcn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHthc3luY1RyYW5zZm9ybX0gZnJvbSAnLi9hc3luY1RyYW5zZm9ybSc7XG5cbi8qKlxuICogaW50ZXJuYWwgcmVhbGl6YXRpb24gb2YgdGhyb3R0bGVcbiAqIFxuICogQHBhcmFtIGZuIFxuICogQHBhcmFtIHBhdXNlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVGbihmbjogRnVuY3Rpb24sIHBhdXNlOiBudW1iZXIpOiBGdW5jdGlvbiB7XG5cdGxldCBsYXN0UnVuVGltZSA9IDA7XG5cdGxldCBsYXN0QXJnczogYW55W107XG5cdGxldCBsYXN0VGhpczogYW55O1xuXHRsZXQgbGFzdFJlc3VsdDogYW55O1xuXG5cdGZ1bmN0aW9uIHJ1bihjb250ZXh0OiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0bGFzdEFyZ3MgPSBudWxsO1xuXHRcdGxhc3RSdW5UaW1lID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCByZXN1bHQgPSBmbi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpO1xuXHRcdGxhc3RSZXN1bHQgPSByZXN1bHQ7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgdGltZVBhc3MgPSBub3cgLSBsYXN0UnVuVGltZTtcblxuXHRcdGlmICghbGFzdEFyZ3MpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmIChsYXN0QXJncykge1xuXHRcdFx0XHRydW4obGFzdFRoaXMsIC4uLmxhc3RBcmdzKTtcblx0XHRcdH1cblx0XHR9LCBwYXVzZSAtIHRpbWVQYXNzKTtcblx0XHR9XG5cblx0XHRpZiAodGltZVBhc3MgPCBwYXVzZSkge1xuXHRcdFx0bGFzdEFyZ3MgPSBhcmdzO1xuXHRcdFx0bGFzdFRoaXMgPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGxhc3RSZXN1bHQ7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBydW4odGhpcywgLi4uYXJncyk7XG5cdH1cbn1cblxuLyoqXG4gKiBWZXJ5IHNpbWlsYXIgdG8gYSBjbGFzc2ljYWwgdGhyb3R0bGUuIFxuICogVGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybnMgcHJvbWlzZXMsIHdoaWNoIHdpbGwgYmUgcmVzb2x2ZWQgKG9yIHJlamVjdGVkKVxuICogbm90IG1vcmUgZnJlcXVlbnRseSB0aGFuIG9uY2UgaW4gKnBhdXNlKiB0aW1lIHBlcmlvZFxuICogXG4gKiBAcGFyYW0gZm4gLSBzb3VyY2UgcHJvbWlzZS1mdW5jdGlvblxuICogQHBhcmFtIHBhdXNlIC0gYSBtaW5pbXVtIHBhdXNlIGJldHdlZW4gcHJvbWlzZSByZXNvbHV0aW9ucyAob3IgcmVqZWN0aW9ucylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlPFQ+KGZuOiBBc3luY0Z1bmN0aW9uPFQ+LCBwYXVzZTogbnVtYmVyKTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdHJldHVybiBhc3luY1RyYW5zZm9ybShmbiwgKGZuOiBBc3luY0Z1bmN0aW9uPFQ+KSA9PiB0aHJvdHRsZUZuKGZuLCBwYXVzZSkpO1xufVxuIl19