"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var day_1 = require('../../day');
var day_2 = require('../../day');
var TableComponentComponent = (function () {
    function TableComponentComponent() {
        this.days = [];
        this.days.push(new day_2.Day('Monday'));
        this.days.push(new day_2.Day('Tuesday'));
        this.days.push(new day_2.Day('Wednesday'));
        this.days.push(new day_2.Day('Thursday'));
        this.days.push(new day_2.Day('Friday'));
        this.days.push(new day_2.Day('Saturday'));
        this.selectedDay = this.days[0];
    }
    TableComponentComponent.prototype.ngOnInit = function () {
    };
    TableComponentComponent.prototype.setSelectedDay = function (_day) {
        this.selectedDay = _day;
        console.log("selected " + _day.name);
    };
    TableComponentComponent.prototype.addNewClass = function (input) {
        this.selectedDay.addClass(input.value);
        input.value = '';
    };
    TableComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'time-table',
            templateUrl: 'table-component.component.html',
            styleUrls: ['table-component.component.css'],
            directives: [day_1.DayComponent]
        })
    ], TableComponentComponent);
    return TableComponentComponent;
}());
exports.TableComponentComponent = TableComponentComponent;
//# sourceMappingURL=table-component.component.js.map