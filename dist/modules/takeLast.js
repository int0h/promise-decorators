"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFrZUxhc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90YWtlTGFzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUE0QixFQUFvQjtJQUMvQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFZixNQUFNLENBQUM7UUFBQSxpQkFpQk47UUFqQmUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDdEIsSUFBTSxTQUFTLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFFM0IsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN4QixVQUFDLE1BQVc7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakIsQ0FBQztZQUNGLENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1YsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixDQUFDO1lBQ0YsQ0FBQyxDQUNELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUM7QUFyQkQsNEJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3luY0Z1bmN0aW9ufSBmcm9tICcuLi9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGFzdDxUPihmbjogQXN5bmNGdW5jdGlvbjxUPik6IEFzeW5jRnVuY3Rpb248VD4ge1xuXHR2YXIgbGFzdElkID0gMDtcblxuXHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdGNvbnN0IGN1cnJlbnRJZCA9ICsrbGFzdElkO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3MpLnRoZW4oXG5cdFx0XHRcdChyZXN1bHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50SWQgPT09IGxhc3RJZCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgXG5cdFx0XHRcdChlcnJvcjogYW55KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRJZCA9PT0gbGFzdElkKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==