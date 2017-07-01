"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The transformed function returns a `Promise` which will be resolved (or rejected)
 * only if it's the last. So if after calling no any previous returned promises will be settled.
 *
 * @param fn - source promise-function
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFrZUxhc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90YWtlTGFzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7OztHQUtHO0FBQ0gsa0JBQTRCLEVBQW9CO0lBQy9DLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVmLE1BQU0sQ0FBQztRQUFBLGlCQWlCTjtRQWpCZSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUN0QixJQUFNLFNBQVMsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsTUFBVztnQkFDWCxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQixDQUFDO1lBQ0YsQ0FBQyxFQUNELFVBQUMsS0FBVTtnQkFDVixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNmLENBQUM7WUFDRixDQUFDLENBQ0QsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQXJCRCw0QkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jRnVuY3Rpb259IGZyb20gJy4uL2luZGV4JztcblxuLyoqIFxuICogVGhlIHRyYW5zZm9ybWVkIGZ1bmN0aW9uIHJldHVybnMgYSBgUHJvbWlzZWAgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCAob3IgcmVqZWN0ZWQpXG4gKiBvbmx5IGlmIGl0J3MgdGhlIGxhc3QuIFNvIGlmIGFmdGVyIGNhbGxpbmcgbm8gYW55IHByZXZpb3VzIHJldHVybmVkIHByb21pc2VzIHdpbGwgYmUgc2V0dGxlZC5cbiAqIFxuICogQHBhcmFtIGZuIC0gc291cmNlIHByb21pc2UtZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRha2VMYXN0PFQ+KGZuOiBBc3luY0Z1bmN0aW9uPFQ+KTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdHZhciBsYXN0SWQgPSAwO1xuXG5cdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdFx0Y29uc3QgY3VycmVudElkID0gKytsYXN0SWQ7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Zm4uYXBwbHkodGhpcywgYXJncykudGhlbihcblx0XHRcdFx0KHJlc3VsdDogYW55KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRJZCA9PT0gbGFzdElkKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBcblx0XHRcdFx0KGVycm9yOiBhbnkpID0+IHtcblx0XHRcdFx0XHRpZiAoY3VycmVudElkID09PSBsYXN0SWQpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19