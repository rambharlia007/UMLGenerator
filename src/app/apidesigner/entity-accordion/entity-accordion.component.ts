import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Entity } from '../../models/Entity';
import { Select2Module } from 'ng2-select2';
import { EntityService } from '../../service/entity.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/delay';

@Component({
    selector: 'app-entity-accordion',
    templateUrl: './entity-accordion.component.html',
    styleUrls: ['./entity-accordion.component.css']
})
export class EntityAccordionComponent implements OnInit {
    constructor(public entityService: EntityService) { }
    options: Array<any>;
    ngOnInit() {
        this.options = this.entityService.EntityData;
    }

    @Input() index: number;
    @Input() entity: Entity;
    @Input() entityNames: Array<string>;

    @Output() addEntityCallback: EventEmitter<any> = new EventEmitter();
    @Output() cloneEntityCallback: EventEmitter<any> = new EventEmitter();
    @Output() deleteEntityCallback: EventEmitter<any> = new EventEmitter();
    @Output() changeOnEntityData: EventEmitter<any> = new EventEmitter();
    @Output() onClickCollapseHeader: EventEmitter<any> = new EventEmitter();

    changeInEntity() {
        this.changeOnEntityData.emit();
    }

    addEntity() {
        this.addEntityCallback.emit();
    }

    deleteEntity() {
        this.deleteEntityCallback.emit(this.index);
    }

    cloneEntity(data: Entity) {
        this.cloneEntityCallback.emit(data);
    }

    onSelect2Change(data: any) {
        this.entity.HrSystemMapping.Level = data.value
    }

    collaspePanel(data: Entity) {
        this.onClickCollapseHeader.emit(data)
    }

}
