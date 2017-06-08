import { NgModule } from "@angular/core";

import { BackendModule } from './backend/backend.module';

@NgModule({
    imports: [
      BackendModule,
    ],
})
export class SharedModule { }
