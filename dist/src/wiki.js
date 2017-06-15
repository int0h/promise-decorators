"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("promise-decorators/src/decorators");
console.log('started');
var text = document.getElementById('text');
var results = document.getElementById('results');
var loader = document.getElementById('loader');
var searchWiki = function (text) { return fetch("https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=" + encodeURIComponent(text) + "&limit=10"); };
var Api = (function () {
    function Api(host) {
        this.host = host;
    }
    Api.prototype.search = function (text) {
        return fetch(this.host + ("?action=opensearch&format=json&origin=*&search=" + encodeURIComponent(text) + "&limit=10"));
    };
    return Api;
}());
__decorate([
    decorators_1.watchPromise(toggleLoader),
    decorators_1.takeLast(),
    decorators_1.throttle(1500)
], Api.prototype, "search", null);
var api = new Api('https://en.wikipedia.org//w/api.php');
function toggleLoader(status) {
    if (status === 'pending') {
        loader.style.display = 'block';
        results.style.display = 'none';
    }
    else {
        loader.style.display = 'none';
        results.style.display = 'block';
    }
    ;
}
text.oninput = function () { return text.value.length > 2 && api.search(text.value)
    .then(function (res) { return res.json(); })
    .then(function (res) {
    results.innerHTML = res[1]
        .map(function (item) { return "<li>" + item + "</li>"; })
        .join('');
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aWtpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0VBQW1HO0FBRW5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXFCLENBQUM7QUFDakUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpELElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBUyxJQUFLLE9BQUEsS0FBSyxDQUFDLHVGQUFxRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBVyxDQUFDLEVBQS9ILENBQStILENBQUM7QUFFbEs7SUFHSSxhQUFhLElBQVk7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUtELG9CQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFHLG9EQUFrRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBVyxDQUFBLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBSEc7SUFIQyx5QkFBWSxDQUFDLFlBQVksQ0FBQztJQUMxQixxQkFBUSxFQUFFO0lBQ1YscUJBQVEsQ0FBQyxJQUFJLENBQUM7aUNBR2Q7QUFHTCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBRTNELHNCQUFzQixNQUFjO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBQUEsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQy9ELElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7S0FDdkIsSUFBSSxDQUFDLFVBQUEsR0FBRztJQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyQixHQUFHLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxTQUFPLElBQUksVUFBTyxFQUFsQixDQUFrQixDQUFDO1NBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsRUFOZSxDQU1mLENBQUMifQ==