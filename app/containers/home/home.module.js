"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var components_1 = require("../../components");
var home_component_1 = require("./home.component");
var order_dialog_component_1 = require("./order-dialog/order-dialog.component");
var test_component_1 = require("./order-dialog/test.component");
var routers = [
    {
        path: "",
        component: home_component_1.HomeComponent,
        children: [
            { path: "order", component: order_dialog_component_1.OrderDialogComponent },
        ]
    }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            order_dialog_component_1.OrderDialogComponent,
            test_component_1.TestComponent,
        ],
        imports: [
            components_1.DetailItemModule,
            components_1.DialogModule,
            components_1.AccordingModule,
            components_1.ProductItemModule,
            components_1.RadioGroupModule,
            components_1.SectionModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forChild(routers),
        ],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBRXZFLCtDQU8wQjtBQUUxQixtREFBaUQ7QUFDakQsZ0ZBQTZFO0FBQzdFLGdFQUE4RDtBQUU5RCxJQUFNLE9BQU8sR0FBRztJQUNaO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtTQUNyRDtLQUNKO0NBQ0osQ0FBQztBQXNCRixJQUFhLFVBQVU7SUFBdkI7SUFBeUIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFVBQVU7SUFwQnRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDhCQUFhO1lBQ2IsNkNBQW9CO1lBQ3BCLDhCQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNkJBQWdCO1lBQ2hCLHlCQUFZO1lBQ1osNEJBQWU7WUFDZiw4QkFBaUI7WUFDakIsNkJBQWdCO1lBQ2hCLDBCQUFhO1lBRWIsd0NBQWtCO1lBQ2xCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQzdDO0tBQ0osQ0FBQztHQUVXLFVBQVUsQ0FBRztBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1xuICAgIERldGFpbEl0ZW1Nb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlLFxuICAgIEFjY29yZGluZ01vZHVsZSxcbiAgICBQcm9kdWN0SXRlbU1vZHVsZSxcbiAgICBSYWRpb0dyb3VwTW9kdWxlLFxuICAgIFNlY3Rpb25Nb2R1bGUsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGlhbG9nL29yZGVyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGlhbG9nL3Rlc3QuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVycyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJvcmRlclwiLCBjb21wb25lbnQ6IE9yZGVyRGlhbG9nQ29tcG9uZW50IH0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBPcmRlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRGV0YWlsSXRlbU1vZHVsZSxcbiAgICAgICAgRGlhbG9nTW9kdWxlLFxuICAgICAgICBBY2NvcmRpbmdNb2R1bGUsXG4gICAgICAgIFByb2R1Y3RJdGVtTW9kdWxlLFxuICAgICAgICBSYWRpb0dyb3VwTW9kdWxlLFxuICAgICAgICBTZWN0aW9uTW9kdWxlLFxuXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVycyksXG4gICAgXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHt9XG4iXX0=