"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Transforms a given promise-function with a transform function
 *
 * @param fn - source promise-function
 * @param transform - function which take a function, do some stuff with it and returns a new one
 * e.g. _.throttle (from lodash)
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNUcmFuc2Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9hc3luY1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7R0FNRztBQUNILHdCQUFrQyxFQUFvQixFQUFFLFNBQW1CO0lBQzFFLElBQU0sR0FBRyxHQUFHLFVBQVMsSUFBVyxFQUFFLE9BQW9CLEVBQUUsTUFBbUI7UUFDMUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0lBQ0YsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sQ0FBQztRQUFBLGlCQUlOO1FBSmUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDdEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUM7QUFWRCx3Q0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNGdW5jdGlvbiwgUmVzb2x2ZXIsIFJlamVjdGVyfSBmcm9tICcuLi9pbmRleCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGdpdmVuIHByb21pc2UtZnVuY3Rpb24gd2l0aCBhIHRyYW5zZm9ybSBmdW5jdGlvblxuICogXG4gKiBAcGFyYW0gZm4gLSBzb3VyY2UgcHJvbWlzZS1mdW5jdGlvblxuICogQHBhcmFtIHRyYW5zZm9ybSAtIGZ1bmN0aW9uIHdoaWNoIHRha2UgYSBmdW5jdGlvbiwgZG8gc29tZSBzdHVmZiB3aXRoIGl0IGFuZCByZXR1cm5zIGEgbmV3IG9uZVxuICogZS5nLiBfLnRocm90dGxlIChmcm9tIGxvZGFzaClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jVHJhbnNmb3JtPFQ+KGZuOiBBc3luY0Z1bmN0aW9uPFQ+LCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdGNvbnN0IHRmbiA9IGZ1bmN0aW9uKGFyZ3M6IGFueVtdLCByZXNvbHZlOiBSZXNvbHZlcjxUPiwgcmVqZWN0OiBSZWplY3RlcjxUPikge1xuXHRcdHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdH07XG5cdGNvbnN0IHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtKHRmbik7XG5cdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRyYW5zZm9ybWVkLmNhbGwodGhpcywgYXJncywgcmVzb2x2ZSwgcmVqZWN0KTtcblx0XHR9KTtcblx0fTtcdFxufVxuIl19