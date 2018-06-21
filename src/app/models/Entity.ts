import { Field } from './Field';
import { Navigation } from './Navigation';

export class Entity {
    RandomNumber: number = Math.floor(Math.random() * 10000);
    Id: string = 'accordion-' + this.RandomNumber;
    Href: string = '#accordion-' + this.RandomNumber;
    Name: string = 'Entity';
    HrSystemMapping: any = { Level: 0 };
    Fields: Array<Field> = [];
    IncomingNavigations: Array<Navigation> = [];
    OutgoingNavigations: Array<Navigation> = [];
    isPanelCollapsed: boolean = false;

    constructor(data: Entity) {
        if (data !== null) {
            var self = this;
            self.Name = data.Name;
            self.HrSystemMapping.Level = data.HrSystemMapping.Level;

            data.Fields.forEach(function (value) {
                self.Fields.push(new Field(value));
            });

            data.IncomingNavigations.forEach(function (value) {
                self.IncomingNavigations.push(new Navigation(value));
            });

            data.OutgoingNavigations.forEach(function (value) {
                self.OutgoingNavigations.push(new Navigation(value));
            });
        }
    }
}