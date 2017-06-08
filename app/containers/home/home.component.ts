import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { View } from "ui/core/view";

import { ProductService, productGroup } from '../../shared';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  productGroup: productGroup[];
  minOrder: string = "Min order $25";
  totalPrice: string = "$0.00";
  cartCount: number = 0;

  openedIndex: number = -1;

  // @ViewChild("orderDialog") orderDialog: OrderDialogComponent;

  constructor(
    private routerExtensions: RouterExtensions,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.productService.getProductGroups()
      .subscribe( data => {
        this.loading = false;
        this.productGroup = data;
      }, error => {
      });
  }

  onOpenGroup(index: number) {
    this.openedIndex = index;
  }

  onAdd(info: object) {
    // this.routerExtensions.navigate(["/home/order"]);
  }
  
}
