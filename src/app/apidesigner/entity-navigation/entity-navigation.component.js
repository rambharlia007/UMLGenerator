"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Navigation_1 = require("../shared/Navigation");
var EntityNavigationComponent = /** @class */ (function () {
    function EntityNavigationComponent() {
        this.id = "nav-accordion-" + Math.floor(Math.random() * 10000);
        this.endMultiplicityMapping = [
            {
                name: "1",
                value: "->"
            },
            {
                name: "0..1",
                value: "->"
            },
            {
                name: "0..*",
                value: "+-> 0..*"
            },
            {
                name: "1..*",
                value: "+-> 0..*"
            }
        ];
        this.subscribe = new core_1.EventEmitter();
    }
    EntityNavigationComponent.prototype.ngOnInit = function () {
    };
    EntityNavigationComponent.prototype.changeInEntity = function () {
        this.subscribe.emit();
    };
    EntityNavigationComponent.prototype.addNavigation = function () {
        this.navigations.push(new Navigation_1.Navigation(null));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EntityNavigationComponent.prototype, "navigations", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EntityNavigationComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EntityNavigationComponent.prototype, "entityNames", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EntityNavigationComponent.prototype, "subscribe", void 0);
    EntityNavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-entity-navigation',
            templateUrl: './entity-navigation.component.html',
            styleUrls: ['./entity-navigation.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EntityNavigationComponent);
    return EntityNavigationComponent;
}());
exports.EntityNavigationComponent = EntityNavigationComponent;
//# sourceMappingURL=entity-navigation.component.js.map