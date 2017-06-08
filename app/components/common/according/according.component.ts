import { Component, Input, Output, EventEmitter } from "@angular/core";

import { productGroup } from '../../../shared';

@Component({
    selector: "according",
    moduleId: module.id,
    templateUrl: "./according.component.html",
    styleUrls: ["./according.component.css"],
})
export class AccordingComponent {
    @Input() icon: string;
    @Input() label: string;
    @Input() open: boolean;
    @Output() onOpened: EventEmitter<boolean> = new EventEmitter();

    onTap() {
      this.open = !this.open;
      this.onOpened.emit(this.open);
    }
}
