"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var class_1 = require('../class');
var class_2 = require('../class');
var Day = (function () {
    function Day(_name) {
        this.name = _name;
        this.classes = [];
    }
    Day.prototype.addClass = function (name) {
        if (!name)
            return;
        this.classes.push(new class_1.Class(name));
    };
    Day.prototype.removeClass = function (toBeRemoved) {
        if (!toBeRemoved)
            return;
        var index = this.classes.indexOf(toBeRemoved);
        if (index > -1) {
            this.classes.splice(index, 1);
        }
    };
    return Day;
}());
exports.Day = Day;
var DayComponent = (function () {
    function DayComponent() {
        this.daySelected = new core_1.EventEmitter();
    }
    DayComponent.prototype.selectDay = function () {
        this.daySelected.emit(this.day);
    };
    DayComponent.prototype.addClass = function (name) {
        this.day.addClass(name);
        return false;
    };
    DayComponent.prototype.removeClassFromDay = function (toBeRemoved) {
        this.day.removeClass(toBeRemoved);
        return false;
    };
    DayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output()
    ], DayComponent.prototype, "daySelected");
    DayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-day',
            templateUrl: 'day.component.html',
            styleUrls: ['day.component.css', '../main-style.css'],
            inputs: ['day'],
            directives: [class_2.ClassComponent]
        })
    ], DayComponent);
    return DayComponent;
}());
exports.DayComponent = DayComponent;
//# sourceMappingURL=day.component.js.map