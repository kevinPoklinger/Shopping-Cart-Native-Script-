
import { NgModule } from '@angular/core';

import { ProductItemComponent } from './product-item.component';

@NgModule({
    declarations: [
      ProductItemComponent,
    ],
    exports: [
      ProductItemComponent,
    ],
})

export class ProductItemModule {}
