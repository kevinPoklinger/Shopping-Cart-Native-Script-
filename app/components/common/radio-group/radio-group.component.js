"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this.onSelected = new core_1.EventEmitter();
    }
    RadioGroupComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.onSelected.emit(item);
    };
    return RadioGroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RadioGroupComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioGroupComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RadioGroupComponent.prototype, "onSelected", void 0);
RadioGroupComponent = __decorate([
    core_1.Component({
        selector: "radio-group",
        moduleId: module.id,
        templateUrl: "./radio-group.component.html",
        styleUrls: ["./radio-group.component.css"],
    })
], RadioGroupComponent);
exports.RadioGroupComponent = RadioGroupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBUXZFLElBQWEsbUJBQW1CO0lBTmhDO1FBU1ksZUFBVSxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU1sRSxDQUFDO0lBSkMsc0NBQVEsR0FBUixVQUFTLElBQUk7UUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVJVO0lBQVIsWUFBSyxFQUFFOztrREFBaUI7QUFDaEI7SUFBUixZQUFLLEVBQUU7O3lEQUFzQjtBQUNwQjtJQUFULGFBQU0sRUFBRTs4QkFBYSxtQkFBWTt1REFBOEI7QUFIckQsbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO0dBQ1csbUJBQW1CLENBUy9CO0FBVFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyYWRpby1ncm91cFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9yYWRpby1ncm91cC5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0dyb3VwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IG9iamVjdFtdO1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW06IG9iamVjdDtcbiAgQE91dHB1dCgpIG9uU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG9uU2VsZWN0KGl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5vblNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==