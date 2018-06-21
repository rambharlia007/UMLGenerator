import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Field } from '../../models/Field';
import { EntityService } from '../../service/entity.service';
import { Select2Module } from 'ng2-select2';

@Component({
    selector: 'app-entity-field',
    templateUrl: './entity-field.component.html',
    styleUrls: ['./entity-field.component.css']
})
export class EntityFieldComponent implements OnInit, OnChanges {

    constructor(private entityService: EntityService) { }

    id: string = "field-accordion-" + Math.floor(Math.random() * 10000);
    fieldOptions: Array<any>;

    ngOnInit() {
    }
    @Input() Fields: Array<Field>;
    @Input() EntityLevelId: any;
    @Output() subscribe: EventEmitter<any> = new EventEmitter();


    changeInEntity() {
        this.subscribe.emit();
    }

    addField() {
        this.Fields.push(new Field(null));
    }

    ngOnChanges() {
        this.fieldOptions = this.entityService.FieldData.filter((data) => { return data.layerId == this.EntityLevelId })
    }

    PrefillCurrentFieldData() {

    }
}
