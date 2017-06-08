"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var _1 = require("./");
// used to create fake backend
var http_2 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var index_1 = require("./fake-data/index");
var BackendModule = (function () {
    function BackendModule() {
    }
    return BackendModule;
}());
BackendModule = __decorate([
    core_1.NgModule({
        exports: [
            http_1.NativeScriptHttpModule
        ],
        providers: [
            _1.SuburbService,
            _1.ProductService,
            // providers used to create fake backend
            http_2.BaseRequestOptions,
            testing_1.MockBackend,
            index_1.FakeBackendProvider,
        ],
    })
], BackendModule);
exports.BackendModule = BackendModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZW5kLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxrREFBbUU7QUFFbkUsdUJBQW1EO0FBRW5ELDhCQUE4QjtBQUM5QixzQ0FBbUQ7QUFDbkQsaURBQW9EO0FBQ3BELDJDQUF3RDtBQWdCeEQsSUFBYSxhQUFhO0lBQTFCO0lBQTZCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFBOUIsSUFBOEI7QUFBakIsYUFBYTtJQWR6QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCw2QkFBc0I7U0FDdkI7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQkFBYTtZQUNiLGlCQUFjO1lBRWQsd0NBQXdDO1lBQ3hDLHlCQUFrQjtZQUNsQixxQkFBVztZQUNYLDJCQUFtQjtTQUN0QjtLQUNKLENBQUM7R0FDVyxhQUFhLENBQUk7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UsIFN1YnVyYlNlcnZpY2UgfSBmcm9tICcuLyc7XG5cbi8vIHVzZWQgdG8gY3JlYXRlIGZha2UgYmFja2VuZFxuaW1wb3J0IHsgQmFzZVJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5pbXBvcnQgeyBGYWtlQmFja2VuZFByb3ZpZGVyIH0gZnJvbSAnLi9mYWtlLWRhdGEvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdWJ1cmJTZXJ2aWNlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcblxuICAgICAgICAvLyBwcm92aWRlcnMgdXNlZCB0byBjcmVhdGUgZmFrZSBiYWNrZW5kXG4gICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgTW9ja0JhY2tlbmQsXG4gICAgICAgIEZha2VCYWNrZW5kUHJvdmlkZXIsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFja2VuZE1vZHVsZSB7IH1cbiJdfQ==