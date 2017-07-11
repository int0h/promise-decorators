"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var testHelpers_1 = require("../testHelpers");
ava_1.default('tests work at all', function (t) {
    t.is(1, 1);
});
ava_1.default('syncResolver helper works', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = t).is;
                return [4 /*yield*/, testHelpers_1.syncResolver(123)];
            case 1:
                _b.apply(_a, [_c.sent(), 123]);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('fetch helper works', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = t).is;
                return [4 /*yield*/, testHelpers_1.fetch(123)];
            case 1:
                _b.apply(_a, [_c.sent(), 123]);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBZ0JBOztBQWZBLDJCQUF1QjtBQUN2Qiw4Q0FBbUQ7QUFFbkQsYUFBSSxDQUFDLG1CQUFtQixFQUFFLFVBQUEsQ0FBQztJQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQU0sQ0FBQzs7Ozs7Z0JBQ3JDLEtBQUEsQ0FBQSxLQUFBLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQTtnQkFBQyxxQkFBTSwwQkFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFBOztnQkFBNUIsY0FBSyxTQUF1QixFQUFFLEdBQUcsRUFBQyxDQUFBOzs7O0tBQ3JDLENBQUMsQ0FBQztBQUdILGFBQUksQ0FBQyxvQkFBb0IsRUFBRSxVQUFNLENBQUM7Ozs7O2dCQUM5QixLQUFBLENBQUEsS0FBQSxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUE7Z0JBQUMscUJBQU0sbUJBQUssQ0FBQyxHQUFHLENBQUMsRUFBQTs7Z0JBQXJCLGNBQUssU0FBZ0IsRUFBRSxHQUFHLEVBQUMsQ0FBQTs7OztLQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rocm90dGxlfSBmcm9tICcuLi8uLi9kaXN0L2luZGV4JztcbmltcG9ydCB0ZXN0IGZyb20gJ2F2YSc7XG5pbXBvcnQge2ZldGNoLCBzeW5jUmVzb2x2ZXJ9IGZyb20gJy4uL3Rlc3RIZWxwZXJzJztcblxudGVzdCgndGVzdHMgd29yayBhdCBhbGwnLCB0ID0+IHtcbiAgICB0LmlzKDEsIDEpO1xufSlcblxudGVzdCgnc3luY1Jlc29sdmVyIGhlbHBlciB3b3JrcycsIGFzeW5jIHQgPT4ge1xuICAgIHQuaXMoYXdhaXQgc3luY1Jlc29sdmVyKDEyMyksIDEyMylcbn0pO1xuXG5cbnRlc3QoJ2ZldGNoIGhlbHBlciB3b3JrcycsIGFzeW5jIHQgPT4ge1xuICAgIHQuaXMoYXdhaXQgZmV0Y2goMTIzKSwgMTIzKVxufSk7XG4iXX0=