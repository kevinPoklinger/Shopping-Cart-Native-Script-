"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordingComponent = (function () {
    function AccordingComponent() {
        this.onOpened = new core_1.EventEmitter();
    }
    AccordingComponent.prototype.onTap = function () {
        this.open = !this.open;
        this.onOpened.emit(this.open);
    };
    return AccordingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordingComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordingComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordingComponent.prototype, "open", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AccordingComponent.prototype, "onOpened", void 0);
AccordingComponent = __decorate([
    core_1.Component({
        selector: "according",
        moduleId: module.id,
        templateUrl: "./according.component.html",
        styleUrls: ["./according.component.css"],
    })
], AccordingComponent);
exports.AccordingComponent = AccordingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY29yZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFVdkUsSUFBYSxrQkFBa0I7SUFOL0I7UUFVYyxhQUFRLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTW5FLENBQUM7SUFKRyxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVFk7SUFBUixZQUFLLEVBQUU7O2dEQUFjO0FBQ2I7SUFBUixZQUFLLEVBQUU7O2lEQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7O2dEQUFlO0FBQ2I7SUFBVCxhQUFNLEVBQUU7OEJBQVcsbUJBQVk7b0RBQStCO0FBSnRELGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQVU5QjtBQVZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgcHJvZHVjdEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYWNjb3JkaW5nXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FjY29yZGluZy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hY2NvcmRpbmcuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW5nQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBvcGVuOiBib29sZWFuO1xuICAgIEBPdXRwdXQoKSBvbk9wZW5lZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25UYXAoKSB7XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KHRoaXMub3Blbik7XG4gICAgfVxufVxuIl19