"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("promise-decorators/decorators");
console.log('started');
var text = document.getElementById('text');
var results = document.getElementById('results');
var loader = document.getElementById('loader');
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
    decorators_1.throttle(300)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy93aWtpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNERBQStGO0FBRS9GLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXFCLENBQUM7QUFDakUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpEO0lBR0ksYUFBYSxJQUFZO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFLRCxvQkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRyxvREFBa0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQVcsQ0FBQSxDQUFDLENBQUM7SUFDcEgsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQUhHO0lBSEMseUJBQVksQ0FBQyxZQUFZLENBQUM7SUFDMUIscUJBQVEsRUFBRTtJQUNWLHFCQUFRLENBQUMsR0FBRyxDQUFDO2lDQUdiO0FBR0wsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUUzRCxzQkFBc0IsTUFBYztJQUNoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUMvRCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO0tBQ3ZCLElBQUksQ0FBQyxVQUFBLEdBQUc7SUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckIsR0FBRyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsU0FBTyxJQUFJLFVBQU8sRUFBbEIsQ0FBa0IsQ0FBQztTQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEVBTmUsQ0FNZixDQUFDIn0=