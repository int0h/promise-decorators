"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function watchPromise(fn, handler) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        handler('pending');
        return fn.apply(this, args).then(function (result) {
            handler('resolved');
            return result;
        }, function (error) {
            handler('rejected');
            throw error;
        });
    };
}
exports.watchPromise = watchPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hQcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvd2F0Y2hQcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsc0JBQWdDLEVBQW9CLEVBQUUsT0FBcUI7SUFDMUUsTUFBTSxDQUFDO1FBQVMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQy9CLFVBQUEsTUFBTTtZQUNMLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQixNQUFNLEtBQUssQ0FBQztRQUNiLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQWRELG9DQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3luY0Z1bmN0aW9ufSBmcm9tICcuLi9pbmRleCc7XG5cbmV4cG9ydCB0eXBlIFByb21pc2VTdGF0ZSA9ICdwZW5kaW5nJyB8ICdyZXNvbHZlZCcgfCAncmVqZWN0ZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhdGNoSGFuZGxlciB7XG5cdChzdGF0ZTogUHJvbWlzZVN0YXRlKTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoUHJvbWlzZTxUPihmbjogQXN5bmNGdW5jdGlvbjxUPiwgaGFuZGxlcjogV2F0Y2hIYW5kbGVyKTogQXN5bmNGdW5jdGlvbjxUPiB7XG5cdHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGhhbmRsZXIoJ3BlbmRpbmcnKTtcblx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncykudGhlbihcblx0XHRcdHJlc3VsdCA9PiB7XG5cdFx0XHRcdGhhbmRsZXIoJ3Jlc29sdmVkJyk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LCBcblx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0aGFuZGxlcigncmVqZWN0ZWQnKTtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcbn1cbiJdfQ==