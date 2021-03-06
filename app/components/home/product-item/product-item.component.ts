import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { product } from "../../../shared";

@Component({
    selector: "product-item",
    moduleId: module.id,
    templateUrl: "./product-item.component.html",
    styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
    @Input() model: product;
    @Output() onAdd: EventEmitter<object> = new EventEmitter();
    price: String;

    ngOnInit() {
        this.price = '$' + this.model.price.toFixed(2);
    }

    add() {
        this.onAdd.emit({
            id: this.model.productId,
        });
    }

    customize() {
        this.onAdd.emit({
            id: this.model.productId,
            customize: true,
        });
    }
}
