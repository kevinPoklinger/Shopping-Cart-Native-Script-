import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: "./containers/home/home.module#HomeModule",
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
    ],
})
export class AppRoutingModule { }
