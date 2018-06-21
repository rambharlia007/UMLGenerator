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
var Field_1 = require("../shared/Field");
var entity_service_1 = require("../service/entity.service");
var EntityFieldComponent = /** @class */ (function () {
    function EntityFieldComponent(entityService) {
        this.entityService = entityService;
        this.id = "field-accordion-" + Math.floor(Math.random() * 10000);
        this.subscribe = new core_1.EventEmitter();
    }
    EntityFieldComponent.prototype.ngOnInit = function () {
    };
    EntityFieldComponent.prototype.changeInEntity = function () {
        this.subscribe.emit();
    };
    EntityFieldComponent.prototype.addField = function () {
        this.Fields.push(new Field_1.Field(null));
    };
    EntityFieldComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.fieldOptions = this.entityService.FieldData.filter(function (data) { return data.layerId == _this.EntityLevelId; });
    };
    EntityFieldComponent.prototype.PrefillCurrentFieldData = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EntityFieldComponent.prototype, "Fields", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EntityFieldComponent.prototype, "EntityLevelId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EntityFieldComponent.prototype, "subscribe", void 0);
    EntityFieldComponent = __decorate([
        core_1.Component({
            selector: 'app-entity-field',
            templateUrl: './entity-field.component.html',
            styleUrls: ['./entity-field.component.css']
        }),
        __metadata("design:paramtypes", [entity_service_1.EntityService])
    ], EntityFieldComponent);
    return EntityFieldComponent;
}());
exports.EntityFieldComponent = EntityFieldComponent;
//# sourceMappingURL=entity-field.component.js.map