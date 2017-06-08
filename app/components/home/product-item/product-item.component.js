"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../../shared");
var ProductItemComponent = (function () {
    function ProductItemComponent() {
        this.onAdd = new core_1.EventEmitter();
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        this.price = '$' + this.model.price.toFixed(2);
    };
    ProductItemComponent.prototype.add = function () {
        this.onAdd.emit({
            id: this.model.productId,
        });
    };
    ProductItemComponent.prototype.customize = function () {
        this.onAdd.emit({
            id: this.model.productId,
            customize: true,
        });
    };
    return ProductItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shared_1.product)
], ProductItemComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductItemComponent.prototype, "onAdd", void 0);
ProductItemComponent = __decorate([
    core_1.Component({
        selector: "product-item",
        moduleId: module.id,
        templateUrl: "./product-item.component.html",
        styleUrls: ["./product-item.component.css"],
    })
], ProductItemComponent);
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsMENBQTBDO0FBUTFDLElBQWEsb0JBQW9CO0lBTmpDO1FBUWMsVUFBSyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW1CL0QsQ0FBQztJQWhCRyx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxrQ0FBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1NBQzNCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ3hCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFwQlk7SUFBUixZQUFLLEVBQUU7OEJBQVEsZ0JBQU87bURBQUM7QUFDZDtJQUFULGFBQU0sRUFBRTs4QkFBUSxtQkFBWTttREFBOEI7QUFGbEQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztLQUM5QyxDQUFDO0dBQ1csb0JBQW9CLENBcUJoQztBQXJCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInByb2R1Y3QtaXRlbVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBtb2RlbDogcHJvZHVjdDtcbiAgICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHByaWNlOiBTdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmljZSA9ICckJyArIHRoaXMubW9kZWwucHJpY2UudG9GaXhlZCgyKTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIHRoaXMub25BZGQuZW1pdCh7XG4gICAgICAgICAgICBpZDogdGhpcy5tb2RlbC5wcm9kdWN0SWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGN1c3RvbWl6ZSgpIHtcbiAgICAgICAgdGhpcy5vbkFkZC5lbWl0KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLm1vZGVsLnByb2R1Y3RJZCxcbiAgICAgICAgICAgIGN1c3RvbWl6ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19