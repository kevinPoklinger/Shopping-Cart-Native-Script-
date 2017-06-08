import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { ProductService, SuburbService } from './';

// used to create fake backend
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FakeBackendProvider } from './fake-data/index';

@NgModule({
    exports: [
      NativeScriptHttpModule
    ],
    providers: [
        SuburbService,
        ProductService,

        // providers used to create fake backend
        BaseRequestOptions,
        MockBackend,
        FakeBackendProvider,
    ],
})
export class BackendModule { }
