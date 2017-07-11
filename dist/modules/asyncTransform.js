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
        fn.apply(this, args).then(resolve, reject);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNUcmFuc2Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9hc3luY1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7R0FNRztBQUNILHdCQUFrQyxFQUFvQixFQUFFLFNBQW1CO0lBQzFFLElBQU0sR0FBRyxHQUFHLFVBQVMsSUFBVyxFQUFFLE9BQW9CLEVBQUUsTUFBbUI7UUFDMUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7SUFDRixJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDO1FBQUEsaUJBSU47UUFKZSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUN0QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQVZELHdDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3luY0Z1bmN0aW9uLCBSZXNvbHZlciwgUmVqZWN0ZXJ9IGZyb20gJy4uL2luZGV4JztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gcHJvbWlzZS1mdW5jdGlvbiB3aXRoIGEgdHJhbnNmb3JtIGZ1bmN0aW9uXG4gKiBcbiAqIEBwYXJhbSBmbiAtIHNvdXJjZSBwcm9taXNlLWZ1bmN0aW9uXG4gKiBAcGFyYW0gdHJhbnNmb3JtIC0gZnVuY3Rpb24gd2hpY2ggdGFrZSBhIGZ1bmN0aW9uLCBkbyBzb21lIHN0dWZmIHdpdGggaXQgYW5kIHJldHVybnMgYSBuZXcgb25lXG4gKiBlLmcuIF8udGhyb3R0bGUgKGZyb20gbG9kYXNoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNUcmFuc2Zvcm08VD4oZm46IEFzeW5jRnVuY3Rpb248VD4sIHRyYW5zZm9ybTogRnVuY3Rpb24pOiBBc3luY0Z1bmN0aW9uPFQ+IHtcblx0Y29uc3QgdGZuID0gZnVuY3Rpb24oYXJnczogYW55W10sIHJlc29sdmU6IFJlc29sdmVyPFQ+LCByZWplY3Q6IFJlamVjdGVyPFQ+KSB7XG5cdFx0Zm4uYXBwbHkodGhpcywgYXJncykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXHR9O1xuXHRjb25zdCB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybSh0Zm4pO1xuXHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0cmFuc2Zvcm1lZC5jYWxsKHRoaXMsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCk7XG5cdFx0fSk7XG5cdH07XHRcbn1cbiJdfQ==