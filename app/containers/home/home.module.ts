import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {
    DetailItemModule,
    DialogModule,
    AccordingModule,
    ProductItemModule,
    RadioGroupModule,
    SectionModule,
} from '../../components';

import { HomeComponent } from './home.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { TestComponent } from './order-dialog/test.component';

const routers = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "order", component: OrderDialogComponent },
        ]
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        OrderDialogComponent,
        TestComponent,
    ],
    imports: [
        DetailItemModule,
        DialogModule,
        AccordingModule,
        ProductItemModule,
        RadioGroupModule,
        SectionModule,

        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routers),
    ],
})

export class HomeModule {}
