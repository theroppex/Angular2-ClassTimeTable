"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Class = (function () {
    function Class(_name) {
        this.name = _name;
        this.color = Class.colors[Math.floor(Math.random() * Class.colors.length)];
    }
    Class.colors = ['yellow', 'blue', 'orange', 'red', 'purple'];
    return Class;
}());
exports.Class = Class;
var ClassComponent = (function () {
    function ClassComponent() {
        this.removeClass = new core_1.EventEmitter();
    }
    ClassComponent.prototype.ngOnInit = function () {
    };
    ClassComponent.prototype.removeMe = function () {
        this.removeClass.emit(this.myClass);
    };
    __decorate([
        core_1.Output()
    ], ClassComponent.prototype, "removeClass");
    ClassComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-class',
            templateUrl: 'class.component.html',
            styleUrls: ['class.component.css'],
            inputs: ['myClass']
        })
    ], ClassComponent);
    return ClassComponent;
}());
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class.component.js.map