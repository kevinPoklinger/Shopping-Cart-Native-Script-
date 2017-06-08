
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordingComponent } from './according.component';

@NgModule({
    declarations: [
      AccordingComponent,
    ],
    imports: [
      CommonModule,
    ],
    exports: [
      AccordingComponent,
    ],
})

export class AccordingModule {}
