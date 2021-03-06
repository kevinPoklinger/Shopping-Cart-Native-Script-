
import { Component, Input } from "@angular/core";

@Component({
    selector: "section",
    moduleId: module.id,
    template: `
      <StackLayout orientation="vertical">
        <Label [text]="label"></Label>
        <ng-content></ng-content>
      </StackLayout>
    `,
    styles: [`
      Label {
        height: 50;
        padding-left: 10;
        background-color: #efefef;
        border-bottom-color: #d8d8d8;
        border-bottom-width: 0.5;
        color: #686868;
        font-size: 14;
        font-weight: bold;
      }
    `],
})
export class SectionComponent {
    @Input() label: string;
}
