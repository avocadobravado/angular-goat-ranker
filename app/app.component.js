"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Rate the goat of your dreams';
        this.goats = [
            new Goat('Sassy goat :)', 3, 'https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/goats-smart-885.jpg?itok=vyKaFfPY'),
            new Goat('Wheelchair goat', 2, 'http://i.dailymail.co.uk/i/pix/2014/05/22/article-2635754-1E1870DD00000578-376_634x388.jpg'),
            new Goat('Jumpy goat', 1, 'https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/goats-opener.jpg?itok=23NgevSU')
        ];
        this.selectedGoat = this.goats[0];
    }
    AppComponent.prototype.editGoat = function (clickedGoat) {
        this.selectedGoat = clickedGoat;
    };
    AppComponent.prototype.isDone = function (clickedGoat) {
        if (clickedGoat.done === true) {
            console.log("This goat is so cute!");
        }
    };
    AppComponent.prototype.priorityColor = function (currentGoat) {
        if (currentGoat.priority === 3) {
            return "bg-danger";
        }
        else if (currentGoat.priority === 2) {
            return "bg-success";
        }
        else {
            return "bg-info";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n      <div class=\"container\">\n       <h1>Rate a Goat</h1>\n       <h3>{{currentFocus}}</h3>\n       <ul>\n        <li [class]=\"priorityColor(currentGoat)\" (click)=\"isDone(currentGoat)\" *ngFor=\"let currentGoat of goats\">{{currentGoat.description}}\n        <br>\n        <img src='{{currentGoat.image}}' style=\"width: 35%\"/>\n        <button (click)=\"editGoat(currentGoat)\">Rank!</button></li>\n      </ul>\n      <hr>\n      <div>\n       <h3>You selected: {{selectedGoat.description}}</h3>\n      <h3>Edit Goat</h3>\n      <label>Enter Goat Description:</label>\n      <input [(ngModel)]=\"selectedGoat.description\">\n       <label>Enter Cuteness Ranking (1-3):</label>\n       <br>\n       <input type=\"radio\" [(ngModel)]=\"selectedGoat.priority\" [value]=\"1\"> 1 (Cute)<br>\n       <input type=\"radio\" [(ngModel)]=\"selectedGoat.priority\" [value]=\"2\"> 2 (Aww, sweet bb goat!)<br>\n       <input type=\"radio\" [(ngModel)]=\"selectedGoat.priority\" [value]=\"3\" style=\"margin-bottom: 10%\"> 3 (OMG I LOVE THIS BB MORE THAN ANYTHING \uD83D\uDE2D\uD83D\uDC10)\n      </div>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Goat = (function () {
    function Goat(description, priority, image) {
        this.description = description;
        this.priority = priority;
        this.image = image;
        this.done = false;
    }
    return Goat;
}());
exports.Goat = Goat;
//# sourceMappingURL=app.component.js.map