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
function throttle(fn, pause, options) {
    return asyncTransform_1.asyncTransform(fn, function (fn) { return throttleFn(fn, pause); });
}
exports.throttle = throttle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90aHJvdHRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFnRDtBQUdoRDs7Ozs7R0FLRztBQUNILG9CQUEyQixFQUFZLEVBQUUsS0FBYTtJQUNyRCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxRQUFlLENBQUM7SUFDcEIsSUFBSSxRQUFhLENBQUM7SUFDbEIsSUFBSSxVQUFlLENBQUM7SUFFcEIsYUFBYSxPQUFZO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxHQUFNLE9BQU8sU0FBSyxJQUFJLEVBQUMsQ0FBQztRQUN6QyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDO1FBQVMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsQ0FBQztnQkFDVixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNkLEdBQUcsZ0JBQUMsUUFBUSxTQUFLLFFBQVEsR0FBRTtnQkFDNUIsQ0FBQztZQUNGLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25CLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxnQkFBQyxJQUFJLFNBQUssSUFBSSxHQUFFO0lBQzNCLENBQUMsQ0FBQTtBQUNGLENBQUM7QUFsQ0QsZ0NBa0NDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILGtCQUNDLEVBQW9CLEVBQ3BCLEtBQWMsRUFDZCxPQUEwQjtJQUUxQixNQUFNLENBQUMsK0JBQWMsQ0FBQyxFQUFFLEVBQUUsVUFBQyxFQUFvQixJQUFLLE9BQUEsVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUFORCw0QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNGdW5jdGlvbiwgUmVzb2x2ZXIsIFJlamVjdGVyfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge2FzeW5jVHJhbnNmb3JtfSBmcm9tICcuL2FzeW5jVHJhbnNmb3JtJztcbmltcG9ydCB7VGhyb3R0bGVTZXR0aW5nc30gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBpbnRlcm5hbCByZWFsaXphdGlvbiBvZiB0aHJvdHRsZVxuICogXG4gKiBAcGFyYW0gZm4gXG4gKiBAcGFyYW0gcGF1c2UgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUZuKGZuOiBGdW5jdGlvbiwgcGF1c2U6IG51bWJlcik6IEZ1bmN0aW9uIHtcblx0bGV0IGxhc3RSdW5UaW1lID0gMDtcblx0bGV0IGxhc3RBcmdzOiBhbnlbXTtcblx0bGV0IGxhc3RUaGlzOiBhbnk7XG5cdGxldCBsYXN0UmVzdWx0OiBhbnk7XG5cblx0ZnVuY3Rpb24gcnVuKGNvbnRleHQ6IGFueSwgLi4uYXJnczogYW55W10pIHtcblx0XHRsYXN0QXJncyA9IG51bGw7XG5cdFx0bGFzdFJ1blRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGZuLmNhbGwoY29udGV4dCwgLi4uYXJncyk7XG5cdFx0bGFzdFJlc3VsdCA9IHJlc3VsdDtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCB0aW1lUGFzcyA9IG5vdyAtIGxhc3RSdW5UaW1lO1xuXG5cdFx0aWYgKCFsYXN0QXJncykge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKGxhc3RBcmdzKSB7XG5cdFx0XHRcdHJ1bihsYXN0VGhpcywgLi4ubGFzdEFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0sIHBhdXNlIC0gdGltZVBhc3MpO1xuXHRcdH1cblxuXHRcdGlmICh0aW1lUGFzcyA8IHBhdXNlKSB7XG5cdFx0XHRsYXN0QXJncyA9IGFyZ3M7XG5cdFx0XHRsYXN0VGhpcyA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gbGFzdFJlc3VsdDtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJ1bih0aGlzLCAuLi5hcmdzKTtcblx0fVxufVxuXG4vKipcbiAqIFZlcnkgc2ltaWxhciB0byBhIGNsYXNzaWNhbCB0aHJvdHRsZS4gXG4gKiBUaHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJucyBwcm9taXNlcywgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCAob3IgcmVqZWN0ZWQpXG4gKiBub3QgbW9yZSBmcmVxdWVudGx5IHRoYW4gb25jZSBpbiAqcGF1c2UqIHRpbWUgcGVyaW9kXG4gKiBcbiAqIEBwYXJhbSBmbiAtIHNvdXJjZSBwcm9taXNlLWZ1bmN0aW9uXG4gKiBAcGFyYW0gcGF1c2UgLSBhIG1pbmltdW0gcGF1c2UgYmV0d2VlbiBwcm9taXNlIHJlc29sdXRpb25zIChvciByZWplY3Rpb25zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oXG5cdGZuOiBBc3luY0Z1bmN0aW9uPFQ+LCBcblx0cGF1c2U/OiBudW1iZXIsIFxuXHRvcHRpb25zPzogVGhyb3R0bGVTZXR0aW5nc1xuKTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdHJldHVybiBhc3luY1RyYW5zZm9ybShmbiwgKGZuOiBBc3luY0Z1bmN0aW9uPFQ+KSA9PiB0aHJvdHRsZUZuKGZuLCBwYXVzZSkpO1xufVxuIl19