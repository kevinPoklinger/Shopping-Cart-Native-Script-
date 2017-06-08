"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DetailItemComponent = (function () {
    function DetailItemComponent() {
        this.color = '#575959';
        this.tap = new core_1.EventEmitter();
    }
    DetailItemComponent.prototype.onClick = function () {
        this.tap.emit(this);
    };
    return DetailItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "color", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DetailItemComponent.prototype, "tap", void 0);
DetailItemComponent = __decorate([
    core_1.Component({
        selector: "detail-item",
        moduleId: module.id,
        template: "\n        <FlexboxLayout (tap)=\"onClick()\">\n            <Label\n                flexGrow=\"1\"\n                [text]=\"label\"\n                [color]=\"color\"></Label>\n            <Image src=\"~/images/arrow_icon.png\" width=\"32\"></Image>\n        </FlexboxLayout>\n    ",
        styles: ["\n        FlexboxLayout {\n            height: 50;\n            padding-left: 10;\n            background-color: #ffffff;\n            border-bottom-color: #d0d0d0;\n            border-bottom-width: 0.5;\n        }\n    "],
    })
], DetailItemComponent);
exports.DetailItemComponent = DetailItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBd0J2RSxJQUFhLG1CQUFtQjtJQXRCaEM7UUF3QmEsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUN6QixRQUFHLEdBQXNDLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSzFFLENBQUM7SUFIRyxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFQWTtJQUFSLFlBQUssRUFBRTs7a0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7a0RBQTJCO0FBQ3pCO0lBQVQsYUFBTSxFQUFFOzhCQUFNLG1CQUFZO2dEQUEyQztBQUg3RCxtQkFBbUI7SUF0Qi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLDJSQVFUO1FBQ0QsTUFBTSxFQUFFLENBQUMsOE5BUVIsQ0FBQztLQUNMLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0I7QUFSWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRldGFpbC1pdGVtXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RmxleGJveExheW91dCAodGFwKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgZmxleEdyb3c9XCIxXCJcbiAgICAgICAgICAgICAgICBbdGV4dF09XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hcnJvd19pY29uLnBuZ1wiIHdpZHRoPVwiMzJcIj48L0ltYWdlPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIEZsZXhib3hMYXlvdXQge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2QwZDBkMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuNTtcbiAgICAgICAgfVxuICAgIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxJdGVtQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnIzU3NTk1OSc7XG4gICAgQE91dHB1dCgpIHRhcDogRXZlbnRFbWl0dGVyPERldGFpbEl0ZW1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy50YXAuZW1pdCh0aGlzKTtcbiAgICB9XG59XG4iXX0=