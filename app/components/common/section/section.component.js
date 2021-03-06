"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionComponent = (function () {
    function SectionComponent() {
    }
    return SectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SectionComponent.prototype, "label", void 0);
SectionComponent = __decorate([
    core_1.Component({
        selector: "section",
        moduleId: module.id,
        template: "\n      <StackLayout orientation=\"vertical\">\n        <Label [text]=\"label\"></Label>\n        <ng-content></ng-content>\n      </StackLayout>\n    ",
        styles: ["\n      Label {\n        height: 50;\n        padding-left: 10;\n        background-color: #efefef;\n        border-bottom-color: #d8d8d8;\n        border-bottom-width: 0.5;\n        color: #686868;\n        font-size: 14;\n        font-weight: bold;\n      }\n    "],
    })
], SectionComponent);
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFpRDtBQXdCakQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQURZO0lBQVIsWUFBSyxFQUFFOzsrQ0FBZTtBQURkLGdCQUFnQjtJQXRCNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUpBS1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQywyUUFXUixDQUFDO0tBQ0wsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNlY3Rpb25cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICA8TGFiZWwgW3RleHRdPVwibGFiZWxcIj48L0xhYmVsPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgTGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDhkOGQ4O1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjU7XG4gICAgICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgICAgICBmb250LXNpemU6IDE0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbn1cbiJdfQ==