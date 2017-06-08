"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_1 = require("../../shared");
var HomeComponent = (function () {
    // @ViewChild("orderDialog") orderDialog: OrderDialogComponent;
    function HomeComponent(routerExtensions, productService) {
        this.routerExtensions = routerExtensions;
        this.productService = productService;
        this.loading = false;
        this.minOrder = "Min order $25";
        this.totalPrice = "$0.00";
        this.cartCount = 0;
        this.openedIndex = -1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.productService.getProductGroups()
            .subscribe(function (data) {
            _this.loading = false;
            _this.productGroup = data;
        }, function (error) {
        });
    };
    HomeComponent.prototype.onOpenGroup = function (index) {
        this.openedIndex = index;
    };
    HomeComponent.prototype.onAdd = function (info) {
        // this.routerExtensions.navigate(["/home/order"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
        styleUrls: ["./home.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        shared_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsdUNBQTREO0FBUzVELElBQWEsYUFBYTtJQVd4QiwrREFBK0Q7SUFFL0QsdUJBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYnhDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsYUFBUSxHQUFXLGVBQWUsQ0FBQztRQUNuQyxlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztJQU9yQixDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTthQUNuQyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUNoQixtREFBbUQ7SUFDckQsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQWU0Qix5QkFBZ0I7UUFDbEIsdUJBQWM7R0FmN0IsYUFBYSxDQW9DekI7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSwgcHJvZHVjdEdyb3VwIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IE9yZGVyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kaWFsb2cvb3JkZXItZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJob21lXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJvZHVjdEdyb3VwOiBwcm9kdWN0R3JvdXBbXTtcbiAgbWluT3JkZXI6IHN0cmluZyA9IFwiTWluIG9yZGVyICQyNVwiO1xuICB0b3RhbFByaWNlOiBzdHJpbmcgPSBcIiQwLjAwXCI7XG4gIGNhcnRDb3VudDogbnVtYmVyID0gMDtcblxuICBvcGVuZWRJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgLy8gQFZpZXdDaGlsZChcIm9yZGVyRGlhbG9nXCIpIG9yZGVyRGlhbG9nOiBPcmRlckRpYWxvZ0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RHcm91cHMoKVxuICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2R1Y3RHcm91cCA9IGRhdGE7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uT3Blbkdyb3VwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLm9wZW5lZEluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBvbkFkZChpbmZvOiBvYmplY3QpIHtcbiAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvb3JkZXJcIl0pO1xuICB9XG4gIFxufVxuIl19