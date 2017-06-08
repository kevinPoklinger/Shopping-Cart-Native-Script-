import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
// import { Animation } from "ui/animation";
// import { AnimationCurve } from "ui/enums";
// import { View } from "ui/core/view";
// import { Color } from "color";
// const dateFormat = require('dateformat');

// import { SuburbService, suburb } from '../../../shared';

@Component({
    selector: "order-dialog",
    moduleId: module.id,
    templateUrl: "./order-dialog.component.html",
    styleUrls: ["./order-dialog.component.css"],
})
export class OrderDialogComponent implements OnInit {

    // @ViewChild("mainPage") mainPage: ElementRef;
    // @ViewChild("subPage") subPage: ElementRef;
    
    // title: string;
    // navStack = [];

    // orderTypes = [{ label: "Delivery" }, { label: "Pick up" }];
    // dates = [];
    // times = [
    //     {label: "17:45"}, {label: "18:00"}, 
    // ];

    // selectedSuburb: object;
    // selectedDate: object;
    // selectedTime: object;

    // productId: string;

    constructor(
        // private route: ActivatedRoute,
        // private suburbService: SuburbService
    ) {
        // this.route.params.forEach((params) => { this.productId = params['id'] });
        // console.log(this.productId);
    }

    ngOnInit() {
        // const today = new Date().getTime();
        // for (var i = 0; i < 7; i++) {
        //     const date = new Date(today+i*24*3600*1000);
        //     this.dates.push({
        //         date,
        //         label: dateFormat(date, "ddd dS mmm")
        //     });         
        // }
    }

    // pushNav(pageId: string, title: string) {
    //     this.navStack.push(pageId);
    //     this.title = title;
    //     let mainPage = <View>this.mainPage.nativeElement;
    //     let subPage = <View>this.subPage.nativeElement;
    //     let animations = [{
    //         target: mainPage,
    //         translate: {x: -355, y: 0},
    //         duration: 250,
    //         curve: AnimationCurve.easeInOut,
    //     }, {
    //         target: subPage,
    //         translate: {x: 0, y: 0},
    //         duration: 250,
    //         curve: AnimationCurve.easeInOut,
    //     }];
    //     new Animation(animations, false).play();
    // }

    // popNav() {
    //     let pageId = this.navStack.pop();
    //     if (pageId) {
    //         let mainPage = <View>this.mainPage.nativeElement;
    //         let subPage = <View>this.subPage.nativeElement;
    //         let animations = [{
    //             target: mainPage,
    //             translate: {x: 0, y: 0},
    //             duration: 250,
    //             curve: AnimationCurve.easeInOut,
    //         }, {
    //             target: subPage,
    //             translate: {x: 355, y: 0},
    //             duration: 250,
    //             curve: AnimationCurve.easeInOut,
    //         }];
    //         new Animation(animations, false).play();
    //     }
    // }

    // onSelectedType(item: object) {

    // }

    // showSuburbs() {
    //     this.pushNav("suburbsPage", "Delivery Suburb");
    // }

    // onSelectedSuburb(item: object) {
    //     this.selectedSuburb = item;
    //     this.popNav();
    // }


    // showDates() {
    //     this.pushNav("datePage", "Update Date");
    // }

    // onSelectedDate(item: object) {
    //     this.selectedDate = item;
    //     this.popNav();
    // }

    // showTimes() {
    //     this.pushNav("timePage", "Update Time");
    // }

    // onSelectedTime(item: object) {
    //     this.selectedTime = item;
    //     this.popNav();
    // }

}
