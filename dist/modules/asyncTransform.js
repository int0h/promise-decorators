"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNUcmFuc2Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9hc3luY1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHdCQUFrQyxFQUFvQixFQUFFLFNBQW1CO0lBQzFFLElBQU0sR0FBRyxHQUFHLFVBQVMsSUFBVyxFQUFFLE9BQW9CLEVBQUUsTUFBbUI7UUFDMUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0lBQ0YsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sQ0FBQztRQUFBLGlCQUlOO1FBSmUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDdEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUM7QUFWRCx3Q0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNGdW5jdGlvbiwgUmVzb2x2ZXIsIFJlamVjdGVyfSBmcm9tICcuLi9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY1RyYW5zZm9ybTxUPihmbjogQXN5bmNGdW5jdGlvbjxUPiwgdHJhbnNmb3JtOiBGdW5jdGlvbik6IEFzeW5jRnVuY3Rpb248VD4ge1xuXHRjb25zdCB0Zm4gPSBmdW5jdGlvbihhcmdzOiBhbnlbXSwgcmVzb2x2ZTogUmVzb2x2ZXI8VD4sIHJlamVjdDogUmVqZWN0ZXI8VD4pIHtcblx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXHR9O1xuXHRjb25zdCB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybSh0Zm4pO1xuXHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0cmFuc2Zvcm1lZC5jYWxsKHRoaXMsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCk7XG5cdFx0fSk7XG5cdH07XHRcbn1cbiJdfQ==